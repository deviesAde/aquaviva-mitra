"use client";

import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  const navLinks = [
    { label: "Harga Mitra", href: "#harga-mitra" },
    { label: "Pilihan Paket", href: "#pilihan-paket" },
    { label: "Kalkulator Cuan", href: "#kalkulator" },
    { label: "Tanya Jawab", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#CCE6FF] transition-all">
      {/* Top Bar Announcement: Credibility and Fraud Prevention from aquviva.co.id */}
      {bannerVisible && (
        <div className="bg-[#0762C8] text-white px-4 py-2 text-xs sm:text-sm font-medium transition-all">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 text-white font-bold text-xs" aria-hidden="true">
                !
              </span>
              <p className="truncate text-xs sm:text-[13px]">
                <strong className="font-semibold text-white">Program Kemitraan Resmi WINGS Food:</strong>{" "}
                <span className="text-white/90">Waspada penipuan. Pendaftaran dan verifikasi resmi tidak dipungut biaya perantara.</span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setBannerVisible(false)}
              className="text-white/80 hover:text-white shrink-0 p-1 rounded hover:bg-white/10 transition-colors"
              aria-label="Tutup pengumuman"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
          aria-label="Kemitraan AQUVIVA Beranda"
        >
          <div className="relative h-14 w-44 sm:h-16 sm:w-52">
            <Image
              src="/Logo/0F87EAE0-8919-4878-ABDE-654696C43401.PNG"
              alt="Logo Kemitraan AQUVIVA: Air Mineral Murni Alami"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#021D3B] hover:text-[#0762C8] transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] rounded"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/6285143114914?text=Halo%20Tim%20Kemitraan%20AQUVIVA,%20saya%20tertarik%20untuk%20bergabung%20menjadi%20mitra%20usaha."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-1.5 rounded-xl border border-[#CCE6FF] bg-white hover:bg-[#F4FAFF] px-4 py-2.5 text-sm font-bold text-[#0762C8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
          >
            <span className="h-2 w-2 rounded-full bg-[#08BB2C]" aria-hidden="true" />
            WhatsApp Hotline
          </a>
          <button
            type="button"
            onClick={() => onOpenModal()}
            className="inline-flex items-center justify-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] px-5 py-2.5 text-sm font-bold text-white shadow-sm shadow-[#FA4616]/20 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] focus-visible:ring-offset-2"
          >
            Daftar Kemitraan
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-[#021D3B] hover:bg-[#F4FAFF] border border-[#CCE6FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-[#CCE6FF] bg-white px-5 pt-3 pb-6 lg:hidden shadow-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-[#021D3B] hover:bg-[#F4FAFF] hover:text-[#0762C8] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-[#CCE6FF]/60">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full text-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] px-4 py-3.5 text-base font-bold text-white shadow-md shadow-[#FA4616]/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616]"
              >
                Daftar Kemitraan Sekarang
              </button>
              <a
                href="https://wa.me/6285143114914?text=Halo%20Tim%20Kemitraan%20AQUVIVA,%20saya%20tertarik%20untuk%20bergabung%20menjadi%20mitra%20usaha."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-[#CCE6FF] bg-[#F4FAFF] px-4 py-3 text-sm font-bold text-[#0762C8]"
              >
                <span className="h-2 w-2 rounded-full bg-[#08BB2C]" aria-hidden="true" />
                Hubungi via WhatsApp (+62 851-4311-4914)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
