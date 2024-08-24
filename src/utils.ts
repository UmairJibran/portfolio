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

export const dataPoster = async (url: string | undefined, data: Object) => {
  if (!url) return null;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } catch (e: unknown) {
    console.error(e);
    return null;
  }
};
