import "./globals.css";
import { Inter } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AVON Heerlen - Atletiekvereniging",
  description:
    "Officiële website van AVON Heerlen, de atletiekvereniging in Heerlen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='nl'>
      <body className={inter.className}>
        <Navigation />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
