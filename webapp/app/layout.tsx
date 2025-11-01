import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import Providers from "./providers";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "fund loop",
  description: "decentralized funding through deposits",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.variable} antialiased bg-zinc-200`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
