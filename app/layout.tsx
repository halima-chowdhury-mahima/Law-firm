import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Chowdhury Law Chamber | Advocates & Legal Consultants",

  description:
    "Chowdhury Law Chamber provides professional legal services for individuals, businesses and organisations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}