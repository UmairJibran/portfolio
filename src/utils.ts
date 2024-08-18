import dayjs from "dayjs";

export const DATE_FORMATS = {
  SHORT: "MMM YYYY",
  LONG: "MMM DD, YYYY",
};

export const formatDate = ({
  date,
  format,
}: {
  date: string | null;
  format: keyof typeof DATE_FORMATS;
}) => {
  if (!date) return null;
  return dayjs(date).format(DATE_FORMATS[format]);
};

export const launchExternalUrl = (url: string | null) => {
  if (!url) return;
  window.open(url, "_blank");
};

export const swrFetcher = (url: string) => fetch(url).then((r) => r.json());
