import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Violeta",
  description: "PWA de Inventario y Ventas",
  manifest: "/manifest.json",
  themeColor: "#5b21b6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-neutral-950 text-neutral-900">
        {children}
      </body>
    </html>
  );
}
