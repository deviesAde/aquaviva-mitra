"use client";

import Image from "next/image";
import { useState } from "react";

interface MitraProduct {
  id: string;
  code: string;
  name: string;
  sizeLabel: string;
  bottlesPerPack: string;
  price: string;
  exactDesc: string;
  image: string;
  bottleHeightClassDesktop: string;
  bottleHeightClassMobile: string;
  waMessage: string;
}

export default function MitraSpecialPricing() {
  // Default active card is AQUVIVA 700 ml as requested
  const [activeId, setActiveId] = useState<string>("700ml");

  const products: MitraProduct[] = [
    {
      id: "250ml",
      code: "01",
      name: "AQUVIVA 250 ml",
      sizeLabel: "250 ml",
      bottlesPerPack: "Isi 24 Botol / Pack",
      price: "Rp12.000",
      exactDesc: "250 ml — Isi 24 Botol | Rp12.000/Pack",
      image: "/Products/aquaviva-250ml.png",
      bottleHeightClassDesktop: "h-[230px]",
      bottleHeightClassMobile: "h-[190px]",
      waMessage:
        "Halo, saya ingin bertanya mengenai harga khusus mitra AQUVIVA 250 ml isi 24 botol per pack dengan harga Rp12.000.",
    },
    {
      id: "700ml",
      code: "02",
      name: "AQUVIVA 700 ml",
      sizeLabel: "700 ml",
      bottlesPerPack: "Isi 12 Botol / Pack",
      price: "Rp15.000",
      exactDesc: "700 ml — Isi 12 Botol | Rp15.000/Pack",
      image: "/Products/aquaviva-700ml.png",
      bottleHeightClassDesktop: "h-[310px]",
      bottleHeightClassMobile: "h-[250px]",
      waMessage:
        "Halo, saya ingin bertanya mengenai harga khusus mitra AQUVIVA 700 ml isi 12 botol per pack dengan harga Rp15.000.",
    },
    {
      id: "1600ml",
      code: "03",
      name: "AQUVIVA 1,6 Liter",
      sizeLabel: "1,6 Liter",
      bottlesPerPack: "Isi 6 Botol / Pack",
      price: "Rp24.000",
      exactDesc: "1,6 Liter — Isi 6 Botol | Rp24.000/Pack",
      image: "/Products/aquaviva-1600ml.png",
      bottleHeightClassDesktop: "h-[320px]",
      bottleHeightClassMobile: "h-[260px]",
      waMessage:
        "Halo, saya ingin bertanya mengenai harga khusus mitra AQUVIVA 1,6 Liter isi 6 botol per pack dengan harga Rp24.000.",
    },
  ];

  return (
    <section
      id="harga-mitra"
      className="relative py-16 sm:py-24 bg-[#FAFCFF] border-b border-[#CCE6FF] font-alan-sans overflow-hidden"
    >
      {/* Background Subtle Contour Wave Decoration from Brand Identity */}
      <div className="absolute inset-0 pointer-events-none opacity-30 overflow-hidden">
        <svg
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1400px] h-64 text-[#CCE6FF]"
          fill="none"
          viewBox="0 0 1200 200"
        >
          <path
            d="M0 100 C 300 160 500 40 800 100 C 1000 150 1150 70 1200 90 L 1200 200 L 0 200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 1. Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0762C8]">
            HARGA KHUSUS MITRA AQUVIVA
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#021D3B] tracking-tight leading-tight">
            Harga Spesial untuk{" "}
            <span className="text-[#FA4616]">Mendukung Usaha Anda!</span>
          </h2>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dapatkan pilihan produk{" "}
            <span className="font-sans font-black text-[#0762C8]">AQUVIVA</span>{" "}
            dalam berbagai ukuran dengan penawaran harga khusus bagi mitra yang telah terdaftar.
          </p>
        </div>

        {/* 2 & 3. DESKTOP: Horizontal Expanding Cards (Smooth Flex Transition) */}
        <div className="mt-12 hidden lg:flex items-stretch gap-5 h-[500px] w-full">
          {products.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-2xl overflow-hidden transition-[flex,box-shadow,border-color] duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] flex ${
                  isActive
                    ? "flex-[2.8] bg-white border-2 border-[#0762C8] shadow-[0_16px_40px_rgba(7,98,200,0.14)] cursor-default"
                    : "flex-1 bg-white border border-slate-200 hover:border-[#0762C8]/60 shadow-xs hover:shadow-md cursor-pointer group"
                }`}
              >
                {/* ACTIVE CARD LAYOUT (Expanded: 2-Column Visual + Information) */}
                {isActive ? (
                  <div className="w-full h-full flex flex-row animate-fadeIn">
                    {/* Area Visual (Left ~44% Width) */}
                    <div className="w-[44%] relative bg-gradient-to-b from-[#F2F8FE] via-[#EBF3FB] to-[#DFECF7] p-6 flex flex-col justify-between items-center border-r border-[#CCE6FF]/70 overflow-hidden">
                      {/* Brand Mountain Contour Lines in Background */}
                      <svg
                        className="absolute inset-0 w-full h-full text-[#CCE6FF]/40 pointer-events-none"
                        viewBox="0 0 300 400"
                        fill="none"
                      >
                        <path
                          d="M -20 180 Q 75 140 150 180 T 320 180"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M -20 220 Q 80 180 160 220 T 320 220"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M -20 260 Q 75 220 150 260 T 320 260"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>

                      {/* Header in Visual Area */}
                      <div className="w-full flex items-center justify-between z-10 text-xs">
                        {/* AQUVIVA Mountain Logo Silhouette */}
                        <div className="flex items-center gap-1.5">
                          <svg
                            viewBox="0 0 60 16"
                            fill="none"
                            className="w-10 h-3 text-[#0762C8]"
                          >
                            <path
                              d="M2 13 C 10 13, 15 7, 22 9 C 26 10, 29 2, 36 2 C 43 2, 46 10, 51 9 C 55 8, 58 13, 60 13"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="font-bold text-[#0762C8] tracking-wider text-[11px]">
                            VARIAN {item.code}
                          </span>
                        </div>
                        <span className="font-semibold text-slate-600 bg-white/95 px-2.5 py-0.5 rounded-md border border-[#CCE6FF] text-[11px] shadow-2xs">
                          {item.sizeLabel}
                        </span>
                      </div>

                      {/* Studio Bottle Stage with Grounded Contact Shadow */}
                      <div className="relative my-auto flex flex-col items-center justify-center z-10 py-1">
                        <div className={`relative w-48 ${item.bottleHeightClassDesktop}`}>
                          <Image
                            src={item.image}
                            alt={`Produk ${item.name}`}
                            fill
                            sizes="360px"
                            className="object-contain object-bottom"
                            priority
                          />
                        </div>
                        {/* Realistic Contact Shadow touching bottom of the bottle */}
                        <div className="w-32 h-2.5 bg-slate-900/15 rounded-full blur-[3px] -mt-1.5" />
                      </div>

                      {/* Footer Badge in Visual Area */}
                      <div className="w-full text-center z-10">
                        <span className="inline-block px-3 py-1 rounded-md bg-white/90 border border-[#CCE6FF] text-[11px] font-medium text-slate-600">
                          Kemasan Resmi WINGS Food
                        </span>
                      </div>
                    </div>

                    {/* Area Informasi (Right ~56% Width) */}
                    <div className="w-[56%] p-8 lg:p-10 flex flex-col justify-between bg-white animate-slideUp">
                      <div className="space-y-5">
                        {/* Subheading & Title */}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-widest text-[#0762C8]">
                              PRODUK KHUSUS MITRA
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-semibold text-slate-500">
                              {item.bottlesPerPack}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#021D3B] tracking-tight mt-1">
                            {item.name}
                          </h3>
                        </div>

                        {/* Price Callout (Paling Menonjol) */}
                        <div className="rounded-2xl bg-[#F4FAFF] border border-[#CCE6FF] p-5">
                          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">
                            Harga Khusus Mitra
                          </span>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-4xl lg:text-5xl font-black text-[#FA4616] tracking-tight">
                              {item.price}
                            </span>
                            <span className="text-base font-semibold text-slate-600">
                              / Pack
                            </span>
                          </div>
                        </div>

                        {/* Exact Description Box */}
                        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                            Deskripsi Produk
                          </span>
                          <p className="text-sm sm:text-base font-bold text-[#021D3B]">
                            {item.exactDesc}
                          </p>
                        </div>
                      </div>

                      {/* WhatsApp Business Action Button */}
                      <div className="pt-6 border-t border-slate-100">
                        <a
                          href={`https://wa.me/6281181261082?text=${encodeURIComponent(item.waMessage)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-[#08BB2C] hover:bg-[#079924] text-white text-sm font-bold shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-0.5"
                        >
                          {/* WhatsApp Official SVG Icon */}
                          <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                          </svg>
                          <span>Tanya Harga &amp; Pemesanan</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* INACTIVE COMPACT CARD (Minimal, Clean Product Display) */
                  <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center">
                    {/* Header */}
                    <div className="w-full flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">
                        {item.code}
                      </span>
                      <span className="text-xs font-bold text-[#0762C8] bg-[#F0F6FD] px-2.5 py-0.5 rounded border border-[#CCE6FF]">
                        {item.sizeLabel}
                      </span>
                    </div>

                    {/* Bottle Visual Stage */}
                    <div className="relative my-auto w-full flex flex-col items-center justify-center py-2">
                      <div className="relative w-36 h-[220px]">
                        <Image
                          src={item.image}
                          alt={`Produk ${item.name}`}
                          fill
                          sizes="200px"
                          className="object-contain object-bottom transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="w-24 h-2 bg-slate-900/10 rounded-full blur-[2px] -mt-1" />
                    </div>

                    {/* Information Footer */}
                    <div className="w-full pt-4 border-t border-slate-100 space-y-1">
                      <h4 className="text-base font-bold text-[#021D3B] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.bottlesPerPack}
                      </p>
                      <p className="text-lg font-extrabold text-[#0762C8] group-hover:text-[#FA4616] transition-colors pt-1">
                        {item.price}
                        <span className="text-xs font-normal text-slate-500 ml-1">
                          /Pack
                        </span>
                      </p>
                      <span className="text-xs font-semibold text-[#0762C8] pt-1 block group-hover:underline">
                        Pilih Varian &rarr;
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 10. MOBILE & TABLET: Vertical Interactive Accordion Cards */}
        <div className="mt-8 flex lg:hidden flex-col gap-3.5">
          {products.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden bg-white border ${
                  isActive
                    ? "border-2 border-[#0762C8] shadow-md ring-2 ring-[#0762C8]/10"
                    : "border-slate-200 hover:border-[#0762C8]/50 shadow-2xs"
                }`}
              >
                {/* Header Row (Always visible & clickable to toggle) */}
                <button
                  type="button"
                  onClick={() => setActiveId(isActive ? "" : item.id)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-14 shrink-0 rounded-lg bg-[#F2F8FE] p-1 border border-[#CCE6FF]/80 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={`Produk ${item.name}`}
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-bold text-[#0762C8] uppercase">
                          {item.code} • {item.sizeLabel}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-semibold bg-[#ECF5FF] text-[#0762C8] px-2 py-0.5 rounded-full border border-[#CCE6FF]">
                            Dipilih
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-bold text-[#021D3B]">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {item.bottlesPerPack}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <span className="text-base font-black text-[#FA4616] block">
                        {item.price}
                      </span>
                      <span className="text-[11px] text-slate-400 font-normal">
                        /Pack
                      </span>
                    </div>
                    {/* Expand/Collapse Chevron */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 transition-transform duration-300 ${
                        isActive ? "rotate-180 bg-[#0762C8] text-white" : ""
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* Expanded Content for Mobile Accordion */}
                {isActive && (
                  <div className="px-4 pb-5 pt-2 border-t border-slate-100 space-y-4 animate-fadeIn">
                    {/* Visual Bottle Studio */}
                    <div className="bg-gradient-to-b from-[#F2F8FE] to-[#DFECF7] rounded-xl p-4 flex flex-col items-center justify-center border border-[#CCE6FF]/80">
                      <div className="relative my-auto flex flex-col items-center justify-center">
                        <div className={`relative w-44 ${item.bottleHeightClassMobile}`}>
                          <Image
                            src={item.image}
                            alt={`Produk ${item.name}`}
                            fill
                            sizes="280px"
                            className="object-contain object-bottom"
                          />
                        </div>
                        <div className="w-28 h-2.5 bg-slate-900/15 rounded-full blur-[3px] -mt-1.5" />
                      </div>
                      <span className="text-[10px] font-medium text-slate-500 mt-2">
                        Kemasan Resmi WINGS Food
                      </span>
                    </div>

                    {/* Exact Description Box */}
                    <div className="rounded-xl bg-[#F4FAFF] border border-[#CCE6FF] p-3.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                        Deskripsi Produk
                      </span>
                      <p className="text-sm font-bold text-[#021D3B] leading-snug">
                        {item.exactDesc}
                      </p>
                    </div>

                    {/* WhatsApp Action Button */}
                    <a
                      href={`https://wa.me/6281181261082?text=${encodeURIComponent(item.waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl bg-[#08BB2C] hover:bg-[#079924] text-white text-sm font-bold shadow-sm transition-colors cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                      <span>Tanya Harga &amp; Pemesanan</span>
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 11. Catatan Harga */}
        <p className="mt-10 text-center text-xs font-normal text-slate-500">
          Harga berlaku sesuai ketentuan program dan dapat berubah sewaktu-waktu.
        </p>
      </div>
    </section>
  );
}
