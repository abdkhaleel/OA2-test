import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from 'next/font/google';

// Initialize the Inter font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'OA2 - Innovative Software Solutions',
  description: 'Empowering businesses with cutting-edge software solutions',
  icons:{
    icon: "images/logo.jpeg",
    shortcut: "images/logo.jpeg",
    apple: "images/logo.jpeg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-blue-50 to-white text-gray-900 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
