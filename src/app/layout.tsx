// src/app/layout.tsx
import type { Metadata } from "next";
import Header from "@/shared/layout/Header";
import { Footer } from "@/shared/layout/Footer";
import "./globals.scss";

export const metadata: Metadata = {
  title: "RoxyNomad | Portfolio",
  description: "Personal Portfolio and Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}