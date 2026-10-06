import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuvsol AI Canvas | Intelligence in Motion",
  description:
    "Explore Nuvsol's AI-native product portfolio, product case studies, and expert-led approach in a new horizontal experience.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='7' fill='%231764db'/%3E%3Cpath d='M8 24V8h4l8 12V8h4v16h-4L12 12v12' fill='white'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="canvas-theme">{children}</body>
    </html>
  );
}
