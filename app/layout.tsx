import "./globals.css";
import { Barlow, Barlow_Condensed } from "next/font/google";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow-condensed",
});

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
      <body className={`${barlow.variable} ${barlowCondensed.variable} font-sans`}>
        <Navigation />
        <main className='min-h-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
