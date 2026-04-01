import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Desafio Jovem de Manaus | Prevenção e Recuperação",
  description: "Organização da Sociedade Civil desde 1981. Trabalhos voltados à prevenção, recuperação e reinserção social de jovens e adultos dependentes químicos em Manaus.",
  keywords: "desafio jovem, Manaus, dependência química, recuperação, tratamento, ONG, Amazônia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased flex flex-col min-h-screen overflow-x-hidden`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
