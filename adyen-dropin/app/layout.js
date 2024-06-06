import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-gray-200`}>
        <Toaster richColors position="bottom-left" />
        <Navbar/>
        <div className = 'p-9'>
        {children}
        </div>
      </body>
    </html>
  );
}
