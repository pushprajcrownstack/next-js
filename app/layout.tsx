import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YC Directory",
  description: "Pitch, Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body
        className="h-full"
      >
        {children}
      </body>
    </html>
  );
}
