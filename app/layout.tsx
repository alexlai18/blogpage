import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { FullNav } from "@/components/navigation/FullNav";
import { ThemeProvider } from "@/components/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alexander Lai's Blog",
  description: "I'm making this because I'm bored",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
          <div className="h-screen">
            <FullNav />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
