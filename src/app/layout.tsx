import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" 
});

export const metadata: Metadata = {
  title: "Algoritt - Modern Software Solutions",
  description: "Empowering businesses with cutting-edge software solutions and digital transformation services.",
  keywords: "software development, digital transformation, web development, mobile apps, cloud solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.variable} ${jakarta.variable} font-sans bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
