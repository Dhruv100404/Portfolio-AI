import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "tailwindcss/tailwind.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dhruv Thakkar - AI Engineer",
  description: "Portfolio of Dhruv Thakkar - AI Engineer & Innovator",
  icons: {
    icon: { 
      url: '/Dhruv_Thakkar.jpg',
      type: 'image/jpeg'
    },
    shortcut: { 
      url: '/Dhruv_Thakkar.jpg',
      type: 'image/jpeg'
    },
    apple: {
      url: '/Dhruv_Thakkar.jpg',
      type: 'image/jpeg'
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
