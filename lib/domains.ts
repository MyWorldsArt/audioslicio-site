import { headers } from "next/headers";

export const MAIN_DOMAIN = "myworldsart.world";
export const AUTOSLICIO_DOMAIN = "autoslicio.myworldsart.world";

export function getHostname() {
  const host = headers().get("host") ?? "";
  return host.split(":")[0].toLowerCase();
}

export function isAutoslicioHost(hostname: string) {
  return (
    hostname === AUTOSLICIO_DOMAIN ||
    hostname === "autoslicio.localhost" ||
    hostname === "autoslicio.local"
  );
}

export function getBaseUrl(hostname: string) {
  if (isAutoslicioHost(hostname)) {
    return `https://${AUTOSLICIO_DOMAIN}`;
  }

  return `https://${MAIN_DOMAIN}`;
}
