import Navbar from "@/components/Navbar";
import { dbConnect } from "@/dbConnect/mongo";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana Food",
  description:
    "Choose from thousands of recipes - Appropriately integrate technically sound value with scalable info mediaries negotiate sustainable strategic theme areas",
  openGraph: {
    url: "https://khana-kazana.com",
    siteName: "Khana Khazana",
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
      </body>
    </html>
  );
}
