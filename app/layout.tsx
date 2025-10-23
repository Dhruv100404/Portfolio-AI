import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Dhruv Thakkar | AI Engineer & LLM Specialist",
    template: "%s | Dhruv Thakkar"
  },
  description: "Dhruv Thakkar - AI/ML Engineer specializing in Large Language Models, RAG Systems, and Machine Learning. Expert in building next-generation AI solutions.",
  keywords: [
    "Dhruv Thakkar",
    "Dhruv AI",
    "AI Engineer",
    "LLM Specialist",
    "Machine Learning Engineer",
    "AI Systems Developer",
    "RAG Systems",
    "Large Language Models",
    "AI Development",
    "Artificial Intelligence Expert"
  ],
  creator: "Dhruv Thakkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhruvthakkar.com",
    title: "Dhruv Thakkar | AI Engineer & LLM Specialist",
    description: "Dhruv Thakkar - AI/ML Engineer specializing in Large Language Models, RAG Systems, and Machine Learning. Expert in building next-generation AI solutions.",
    siteName: "Dhruv Thakkar - AI Engineer Portfolio",
    images: [
      {
        url: '/Dhruv_Thakkar.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhruv Thakkar - AI Engineer'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
