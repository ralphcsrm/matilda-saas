import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Matilda — Your Personal Chief-of-Staff",
  description: "Quirky, intuitive, excellent. She holds everything so your mind can rest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
