export const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const formattedBase = base.endsWith("/") ? base : `${base}/`;
  const formattedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${formattedBase}${formattedPath}`;
};
