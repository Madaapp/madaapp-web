import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex bg-slate-400 flex-col items-center"
        )}
      >
        <main className="w-full  h-screen  max-w-screen-md">
          <div className="bg-slate-200 h-full flex flex-col relative items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
