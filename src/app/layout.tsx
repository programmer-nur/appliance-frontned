import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Providers from "./lib/Providers";
import { Toaster } from "@/components/ui/toaster"

const archivo = Archivo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.className} bg-[#fffff7]`}>
        <Providers>
        {children}
        <Toaster />
        </Providers>
        </body>
    </html>
  );
}
