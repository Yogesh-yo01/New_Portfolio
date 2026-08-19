import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Yogesh Kumar - React Native Developer",
  description:
    "React Native developer building production-grade Android and iOS applications.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yogeshportfolio.com",
    title: "Yogesh Kumar - React Native Developer",
    description:
      "React Native developer building production-grade Android and iOS applications.",
    siteName: "Yogesh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yogesh Kumar - React Native Developer",
    description:
      "React Native developer building production-grade Android and iOS applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
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
