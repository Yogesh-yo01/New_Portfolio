import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yogesh - Senior React Native Developer",
  description:
    "Senior React Native Mobile Application Developer specializing in building beautiful, performant, and scalable mobile applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yogeshportfolio.com",
    title: "Yogesh - Senior React Native Developer",
    description:
      "Senior React Native Mobile Application Developer specializing in building beautiful, performant, and scalable mobile applications.",
    siteName: "Yogesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh - Senior React Native Developer",
    description:
      "Senior React Native Mobile Application Developer specializing in building beautiful, performant, and scalable mobile applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
