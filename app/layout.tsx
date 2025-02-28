import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";
import "./globals.css";
import UpButton from "./upButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocChat",
  description: "Introducing docChat where your PDF documents come to life in the form of engaging conversations! 🎉",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className= "min-h-screen h-screen overflow-hidden flex flex-col"> 
        {children}
        <UpButton />


        {/* 
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">Welcome to <span className="text-purple-800">Doc</span>Chat</h1>

            
            <p className="text-2xl pt-5 text-gray-700 mb-8">Your PDF documents come to life in the form of engaging conversations!</p>
            <Button className="bg-black text-white px-6 py-3 rounded-lg text-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-opacity-50">
              Get Started
            </Button>
          </div>
         */}

        


        </body>
      </html>
    </ClerkProvider>
  );
}
