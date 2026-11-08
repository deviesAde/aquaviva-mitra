"use client";

import Image from "next/image";
import { useState } from "react";

interface NavbarProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Harga Mitra", href: "#harga-mitra" },
    { label: "Pilihan Paket", href: "#pilihan-paket" },
    { label: "Kalkulator Cuan", href: "#kalkulator" },
    { label: "Tanya Jawab", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#CCE6FF] bg-white/95 backdrop-blur-md shadow-xs">

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

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#021D3B] hover:text-[#0762C8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] rounded px-1.5 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Action with #FA4616 */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={() => onOpenModal()}
            className="inline-flex items-center justify-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] focus-visible:ring-offset-2"
          >
            Daftar Kemitraan
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2.5 text-[#021D3B] hover:bg-[#F4FAFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-b border-[#CCE6FF] bg-white px-4 pt-3 pb-6 md:hidden shadow-lg animate-in fade-in"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-semibold text-[#021D3B] hover:bg-[#F4FAFF] hover:text-[#0762C8] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenModal();
                }}
                className="w-full text-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] px-4 py-3 text-base font-bold text-white shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616]"
              >
                Daftar Kemitraan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
