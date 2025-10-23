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
    default: "Dhruv Thakkar | RAG Systems & Agentic AI Expert - Dhruv AI",
    template: "%s | Dhruv Thakkar AI"
  },
  description: "Dhruv Thakkar (Dhruv AI) - Expert in RAG Systems & Agentic AI. Leading AI Engineer specializing in Retrieval-Augmented Generation, AI Agents, and Large Language Models. Transform your business with Dhruv Thakkar RAG and Agentic AI expertise.",
  keywords: [
    "Dhruv Thakkar",
    "Dhruv AI", 
    "Dhruv Thakkar AI",
    "Dhruv Thakkar RAG",
    "Dhruv RAG",
    "Dhruv Thakkar Agentic AI",
    "Dhruv Agentic AI",
    "AI Engineer Dhruv Thakkar",
    "Machine Learning Dhruv Thakkar",
    "RAG Systems Dhruv Thakkar",
    "Agentic AI Dhruv Thakkar",
    "AI Expert Dhruv Thakkar",
    "LLM Specialist Dhruv Thakkar",
    "Artificial Intelligence Dhruv Thakkar",
    "AI Consultant Dhruv Thakkar",
    "Deep Learning Engineer",
    "RAG Systems Expert",
    "Agentic AI Systems",
    "Large Language Models",
    "Retrieval Augmented Generation",
    "AI Agents Development",
    "Multi-Agent Systems",
    "AI Development",
    "Machine Learning Engineer",
    "AI Systems Developer",
    "Neural Networks Expert",
    "NLP Engineer",
    "Computer Vision",
    "AI Research",
    "MLOps Engineer"
  ],
  creator: "Dhruv Thakkar",
  authors: [{ name: "Dhruv Thakkar", url: "https://dhruvthakkar.vercel.app" }],
  publisher: "Dhruv Thakkar AI",
  applicationName: "Dhruv Thakkar AI Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Artificial Intelligence",
  classification: "AI Engineering Portfolio",
  alternates: {
    canonical: "https://dhruvthakkar.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dhruvthakkar.vercel.app",
    title: "Dhruv Thakkar | RAG Systems & Agentic AI Expert - Dhruv AI",
    description: "Dhruv Thakkar (Dhruv AI) - Premier RAG Systems & Agentic AI Expert. Specializing in Retrieval-Augmented Generation, AI Agents, Large Language Models, and advanced Machine Learning solutions.",
    siteName: "Dhruv Thakkar AI - Expert AI Engineer Portfolio",
    images: [
      {
        url: '/Dhruv_Thakkar.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhruv Thakkar - AI Engineer and Machine Learning Expert'
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruv Thakkar | RAG Systems & Agentic AI Expert - Dhruv AI",
    description: "Dhruv Thakkar (Dhruv AI) - Premier RAG Systems & Agentic AI Expert specializing in Retrieval-Augmented Generation and AI Agents.",
    images: ['/Dhruv_Thakkar.jpg'],
    creator: "@DhruvThakkarAI"
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
      <head>
        <link rel="canonical" href="https://dhruvthakkar.vercel.app" />
        <meta name="author" content="Dhruv Thakkar" />
        <meta name="theme-color" content="#0a0118" />
        <meta name="msapplication-TileColor" content="#0a0118" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dhruv Thakkar",
              "alternateName": "Dhruv AI",
              "jobTitle": "RAG Systems & Agentic AI Expert",
              "description": "Leading RAG Systems & Agentic AI Expert specializing in Retrieval-Augmented Generation, AI Agents, Large Language Models, and Machine Learning solutions",
              "url": "https://dhruvthakkar.vercel.app",
              "image": "https://dhruvthakkar.vercel.app/Dhruv_Thakkar.jpg",
              "sameAs": [
                "https://linkedin.com/in/dhruv-thakkar-ai",
                "https://github.com/dhruv-thakkar-ai"
              ],
              "knowsAbout": [
                "RAG Systems",
                "Agentic AI",
                "Retrieval-Augmented Generation",
                "AI Agents",
                "Multi-Agent Systems",
                "Artificial Intelligence",
                "Machine Learning",
                "Large Language Models",
                "Deep Learning",
                "Natural Language Processing",
                "Computer Vision",
                "MLOps",
                "AI Orchestration",
                "Intelligent Agents"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "RAG Systems & Agentic AI Expert",
                "occupationLocation": {
                  "@type": "Place",
                  "name": "Global"
                }
              }
            })
          }}
        />
        
        {/* Structured Data for Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Dhruv Thakkar RAG & Agentic AI Services",
              "description": "Expert RAG Systems and Agentic AI consulting services by Dhruv Thakkar - specializing in Retrieval-Augmented Generation and AI Agents",
              "provider": {
                "@type": "Person",
                "name": "Dhruv Thakkar"
              },
              "serviceType": "RAG Systems & Agentic AI Consulting",
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "RAG & Agentic AI Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "RAG Systems Development"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Agentic AI Implementation"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Agents Development"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Multi-Agent Systems"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Large Language Model Development"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
