import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kemitraan AQUVIVA | Segarnya Aquviva, Peluangnya untuk Usahamu!",
  description:
    "Program kemitraan resmi air mineral AQUVIVA: Murni Alami dengan 7 Tahap Nano Purifikasi. Fasilitas lengkap showcase pendingin, stok produk, spanduk toko, dan harga khusus mitra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full scroll-smooth antialiased">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
