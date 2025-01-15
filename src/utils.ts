import { format } from "date-fns";

export const DATE_FORMATS = {
  SHORT: "MMM yyyy",
  LONG: "MMM dd, yyyy",
} as const;

export const formatDate = ({
  date,
  format: formatKey,
}: {
  date: string | null;
  format: keyof typeof DATE_FORMATS;
}) => {
  if (!date) return null;
  return format(new Date(date), DATE_FORMATS[formatKey]);
};

export const launchExternalUrl = (url: string | null) => {
  if (!url) return;
  window.open(url, "_blank");
};
