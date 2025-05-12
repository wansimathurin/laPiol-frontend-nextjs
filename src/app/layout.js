import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import { ThemeProvider } from "@/components/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "La Piol | Discover Your Perfect Home",
  description: "Find the best real estate deals with La Piol. Browse homes, apartments, and commercial properties for rent and sale.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "La Piol | Discover Your Perfect Property",
    description: "Find the best real estate deals with La Piol...",
    url: "https://la-piol.vercel.app/",
    siteName: "La Piol",
    images: [
      {
        url: "https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large",
        width: 1200,
        height: 630,
        alt: "La Piol - Modern Property Listings",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Piol | Discover Your Perfect Home",
    description: "Find the best real estate deals with La Piol...",
    images: ["https://a0.muscache.com/im/pictures/bced1392-9538-41df-92d9-f058a7188b0f.jpg?aki_policy=x_large"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
         <NavbarComponent />
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
