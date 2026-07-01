import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://growmoreadvisory.com"),

  title: {
    default: "Grow More Advisory | Chartered Accountants & Business Advisory",
    template: "%s | Grow More Advisory",
  },

  description:
    "Grow More Advisory provides GST Registration, Income Tax Filing, ROC Compliance, Accounting, Startup Advisory and Business Consulting services across India.",

  keywords: [
    "Grow More Advisory",
    "Chartered Accountant",
    "CA Firm",
    "GST Registration",
    "GST Filing",
    "Income Tax",
    "Income Tax Return",
    "ROC Compliance",
    "Accounting",
    "Bookkeeping",
    "Business Advisory",
    "Startup Advisory",
    "Company Registration",
    "LLP Registration",
    "MSME Registration",
    "Financial Consulting",
  ],

  authors: [
    {
      name: "Grow More Advisory",
    },
  ],

  creator: "Grow More Advisory",

  publisher: "Grow More Advisory",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://growmoreadvisory.com",
  },

  openGraph: {
    title: "Grow More Advisory | Chartered Accountants & Business Advisory",

    description:
      "Professional GST, Income Tax, ROC Compliance, Accounting and Business Advisory Services across India.",

    url: "https://growmoreadvisory.com",

    siteName: "Grow More Advisory",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grow More Advisory",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Grow More Advisory",

    description:
      "Professional GST, Income Tax, ROC Compliance, Accounting and Business Advisory Services.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Finance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {children}
      </body>
      
      <GoogleAnalytics gaId="G-2FSKL8WH11" />
    </html>
  );
}