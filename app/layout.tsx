import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm-plex-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.prabutama.my.id";

export const metadata: Metadata = {
  title: "Danur Isa Prabutama | Portfolio",
  description: "Portfolio of Danur Isa Prabutama, focused on backend systems, DevOps workflows, infrastructure, and technical product development.",
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.variable}>{children}</body>
    </html>
  );
}
