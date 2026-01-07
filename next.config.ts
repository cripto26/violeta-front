import type { NextConfig } from "next";
import nextPWA from "next-pwa";

const baseConfig: NextConfig = {
  reactStrictMode: true,
};

const withPWA = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    // Imágenes
    {
      urlPattern: ({ request }: any) => request.destination === "image",
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 * 30 },
      },
    },
    // Catálogo / Lecturas (SWR)
    {
      urlPattern: ({ url }: any) =>
        url.pathname.startsWith("/api/catalogo") ||
        url.pathname.startsWith("/api/productos"),
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "catalogo",
        expiration: { maxEntries: 200, maxAgeSeconds: 60 * 60 * 24 },
      },
    },
    // Ventas (NetworkFirst)
    {
      urlPattern: ({ url }: any) => url.pathname.startsWith("/api/ventas"),
      handler: "NetworkFirst",
      options: {
        cacheName: "ventas",
        networkTimeoutSeconds: 3,
        expiration: { maxEntries: 50, maxAgeSeconds: 60 * 60 },
      },
    },
    // Navegación (HTML)
    {
      urlPattern: ({ request }: any) => request.mode === "navigate",
      handler: "NetworkFirst",
      options: {
        cacheName: "pages",
        networkTimeoutSeconds: 3,
      },
    },
  ],
});

export default withPWA(baseConfig);
