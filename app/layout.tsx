import type { Metadata } from "next";
import { Alan_Sans } from "next/font/google";
import "./globals.css";

const alanSans = Alan_Sans({
  subsets: ["latin"],
  variable: "--font-alan-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kemitraan AQUVIVA | Segarnya Aquviva, Peluangnya untuk Usahamu!",
  description:
    "Program kemitraan resmi air mineral AQUVIVA: Murni Alami dengan 7 Tahap Nano Purifikasi. Fasilitas lengkap showcase pendingin, stok produk, spanduk toko, dan harga khusus mitra.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`h-full scroll-smooth antialiased ${alanSans.variable}`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
