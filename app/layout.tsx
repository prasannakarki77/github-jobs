import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://github-jobs-prasannakarki77.vercel.app/"),
  title: "GitHub Jobs: Find your future jobs",
  description: "Search various tech jobs on listed on GitHub Jobs",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className} min-h-screen bg-background font-sans>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClientOnly>
            <Navbar currentUser={currentUser} />
            <Toaster />
          </ClientOnly>
          <main className=" m-6  md:my-8 md:container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
