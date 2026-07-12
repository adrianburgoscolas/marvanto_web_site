const rawBase = import.meta.env.BASE_URL;
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

/** Prepends the configured base path to internal URLs. */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) {
    return path;
  }

  if (path === "#" || path.startsWith("#")) {
    return path;
  }

  const hashIndex = path.indexOf("#");
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : "";
  const pathWithoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  if (pathWithoutHash === "" || pathWithoutHash === "/") {
    if (hash) {
      return base === "/" ? `/${hash}` : `${base.replace(/\/$/, "")}/${hash}`;
    }
    return base === "/" ? "/" : base;
  }

  const normalized = pathWithoutHash.startsWith("/")
    ? pathWithoutHash.slice(1)
    : pathWithoutHash;

  return `${base}${normalized}${hash}`;
}

/** Strips the base path from a URL pathname for route comparisons. */
export function stripBase(pathname: string): string {
  if (base === "/") {
    return pathname;
  }

  const basePath = base.replace(/\/$/, "");
  if (pathname.startsWith(basePath)) {
    const rest = pathname.slice(basePath.length);
    return rest || "/";
  }

  return pathname;
}
