export const launchExternalUrl = (url: string | null) => {
  if (!url) return;
  window.open(url, "_blank");
};
