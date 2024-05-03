import Navbar from "@/components/Navbar";
import { dbConnect } from "@/dbConnect/mongo";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana",
  description: "Most Famous food in Bangladesh. Thousands of recipes.",
  openGraph: {
    url: "https://khana-kazana.vercel.app/",
    siteName: "Khana Khazana",
    images: [
      {
        url: "https://source.unsplash.com/random/800x600?recipe",
      },
    ],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
