import type { Metadata } from "next";
import { Grotesk, Mono } from "@/libs/font";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://byanrkh.my.id"),
  title: {
    default: "Abyan Raditya",
    template: "%s - Abyan Raditya",
  },
  description:
    "FrontEnd Developer working on solo projects, currently based in Bekasi, Indonesia.",
  keywords: [
    "byanrkh",
    "nextjs",
    "abyan raditya khazarani",
    "abyan raditya",
    "byandisokin",
  ],
  openGraph: {
    siteName: "byanrkh.my.id",
    title: "Abyan Raditya",
    description:
      "FrontEnd Developer working on solo projects, currently based in Bekasi, Indonesia.",
    images: [
      "https://media.discordapp.net/attachments/1310990889065123883/1324049418474749953/Untitled_8.png?ex=6776bc9d&is=67756b1d&hm=5dc0e70688eecc7add808c723df77e427c9ce3833933f95a85f2183aa5fa66ef&=&format=webp&quality=lossless",
    ],
    locale: "en-ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abyan Raditya",
    description:
      "FrontEnd Developer working on solo projects, currently based in Bekasi, Indonesia.",
    images: [
      "https://media.discordapp.net/attachments/1310990889065123883/1324049418474749953/Untitled_8.png?ex=6776bc9d&is=67756b1d&hm=5dc0e70688eecc7add808c723df77e427c9ce3833933f95a85f2183aa5fa66ef&=&format=webp&quality=lossless",
    ],
    creator: "@byanrkh",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Grotesk.className} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
