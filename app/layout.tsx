import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Inevitable Spot Asset Review",
  description: "Asset review platform for video and image assets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark-900 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
