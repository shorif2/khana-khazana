import Navbar from "@/components/Navbar";
import { dbConnect } from "@/dbConnect/mongo";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana Food",
  description: "Most Famous food in Bangladesh",
  openGraph: {
    url: "https://khana-kazana.com",
    siteName: "Khana Khazana Food",
    images: [
      {
        url: "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg",
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
