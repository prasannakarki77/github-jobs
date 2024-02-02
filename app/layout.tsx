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
// openGraph: {
//   title: "InternSathi 1.0 Coming Soon - Join Waitlist Now",
//   description:
//     "Become a part of the InternSathi community by signing up for our Private Beta. Gain access to our groundbreaking platform and start exploring internships like never before.",
//   url: "https://internsathi.com",
//   type: "website",
//   siteName: "InternSathi 1.0 Coming Soon - Join Waitlist Now",
//   locale: "en_US",
//   images: [
//     {
//       url: "https://internsathi.com/internsathi-og.png",
//       width: 1200,
//       height: 630,
//       alt: "InternSathi 1.0 Logo",
//     },
//   ],
// },
// twitter: {
//   card: "summary",
//   site: "@InternSathi",
//   images: [
//     {
//       url: "https://internsathi.com/internsathi-og.png",
//       width: 1200,
//       height: 630,
//       alt: "InternSathi 1.0 Logo",
//     },
//   ],
//   title: "InternSathi 1.0 Coming Soon - Join Waitlist Now",
//   description:
//     "Become a part of the InternSathi community by signing up for our Private Beta. Gain access to our groundbreaking platform and start exploring internships like never before.",
// },
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
