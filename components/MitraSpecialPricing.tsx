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
  pricePerBottle: string;
  exactDesc: string;
  image: string;
  bottleHeightClassDesktop: string;
  bottleHeightClassMobile: string;
}

function highlightAquviva(text: string) {
  if (!text || !text.includes("AQUVIVA")) return text;
  return text.split("AQUVIVA").map((part, i, arr) => (
    <span key={i}>
      {part}
      {i < arr.length - 1 && <span className="font-bold text-[#FA4616]">AQUVIVA</span>}
    </span>
  ));
}

export default function MitraSpecialPricing() {
  const [activeId, setActiveId] = useState<string>("700ml");

  const products: MitraProduct[] = [
    {
      id: "250ml",
      code: "01",
      name: "AQUVIVA 250 ml",
      sizeLabel: "250 ml",
      bottlesPerPack: "Isi 24 Botol / Pack",
      price: "Rp12.000",
      pricePerBottle: "Rp500 / botol",
      exactDesc: "250 ml | Isi 24 Botol | Rp12.000/Pack",
      image: "/Products/aquaviva-250ml.png",
      bottleHeightClassDesktop: "h-[240px]",
      bottleHeightClassMobile: "h-[190px]",
    },
    {
      id: "700ml",
      code: "02",
      name: "AQUVIVA 700 ml",
      sizeLabel: "700 ml",
      bottlesPerPack: "Isi 12 Botol / Pack",
      price: "Rp15.000",
      pricePerBottle: "Rp1.250 / botol",
      exactDesc: "700 ml | Isi 12 Botol | Rp15.000/Pack",
      image: "/Products/aquaviva-700ml.png",
      bottleHeightClassDesktop: "h-[310px]",
      bottleHeightClassMobile: "h-[250px]",
    },
    {
      id: "1600ml",
      code: "03",
      name: "AQUVIVA 1,6 Liter",
      sizeLabel: "1,6 Liter",
      bottlesPerPack: "Isi 6 Botol / Pack",
      price: "Rp24.000",
      pricePerBottle: "Rp4.000 / botol",
      exactDesc: "1,6 Liter | Isi 6 Botol | Rp24.000/Pack",
      image: "/Products/aquaviva-1600ml.png",
      bottleHeightClassDesktop: "h-[320px]",
      bottleHeightClassMobile: "h-[260px]",
    },
  ];

  return (
    <section
      id="harga-mitra"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#F0F8FF] via-[#F8FBFE] to-white overflow-hidden border-b border-[#CCE6FF]/40"
    >
      {/* Background Seamless Full-Width Soft Blue Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        {/* Soft Sky Ambient Radial Glow */}
        <div className="absolute -top-10 inset-x-0 h-80 bg-[radial-gradient(ellipse_at_top,_rgba(204,230,255,0.45)_0%,_transparent_75%)]" />

        {/* Full-width Continuous Organic Soft Wave Layer 1 */}
        <svg
          className="absolute top-2 inset-x-0 w-full h-32 sm:h-44 text-[#CCE6FF]/25 fill-current"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C340,95 580,15 860,55 C1140,95 1320,25 1440,60 L1440,0 L0,0 Z" />
        </svg>

        {/* Full-width Continuous Organic Soft Wave Layer 2 */}
        <svg
          className="absolute top-8 inset-x-0 w-full h-28 sm:h-36 text-[#E2F0FD]/40 fill-current"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,25 C280,60 540,10 800,38 C1060,68 1280,18 1440,42 L1440,0 L0,0 Z" />
        </svg>

        {/* Soft bottom blend to pure white for seamless transition to next section */}
        <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE6FF] bg-[#F4FAFF] px-4 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
              Harga Khusus Mitra Terdaftar
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#021D3B] tracking-tight leading-tight">
            Penawaran Spesial untuk{" "}
            <span className="text-[#FA4616]">Maksimalisasi Cuan</span>
          </h2>

          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Dapatkan pasokan produk <span className="font-bold text-[#FA4616]">AQUVIVA</span> dalam berbagai ukuran dengan harga grosir resmi dari WINGS Food, siap memberikan margin keuntungan terbaik untuk toko Anda.
          </p>
        </div>

        {/* DESKTOP: Horizontal Expanding Cards */}
        <div className="mt-12 hidden lg:flex items-stretch gap-5 h-[500px] w-full">
          {products.map((item) => {
            const isActive = activeId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                className={`relative rounded-3xl overflow-hidden transition-[flex,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex ${
                  isActive
                    ? "flex-[2.8] bg-white border-2 border-[#0762C8] shadow-[0_16px_40px_rgba(7,98,200,0.12)] cursor-default"
                    : "flex-1 bg-white border border-[#CCE6FF] hover:border-[#0762C8]/60 shadow-xs hover:shadow-md cursor-pointer group"
                }`}
              >
                {/* ACTIVE CARD LAYOUT (Expanded: 2-Column Visual + Information) */}
                {isActive ? (
                  <div className="w-full h-full flex flex-row animate-fadeIn">
                    {/* Visual Area (Left ~44% Width) */}
                    <div className="w-[44%] relative bg-gradient-to-b from-[#F2F8FE] via-[#EBF3FB] to-[#DFECF7] p-6 flex flex-col justify-between items-center border-r border-[#CCE6FF]/70 overflow-hidden">
                      {/* Top Meta in Visual Area */}
                      <div className="w-full flex items-center justify-between z-10 text-xs">
                        <span className="font-extrabold text-[#0762C8] tracking-wider text-[11px] bg-white/90 px-2.5 py-1 rounded-lg border border-[#CCE6FF]">
                          VARIAN {item.code}
                        </span>
                        <span className="font-bold text-[#021D3B] bg-white px-2.5 py-1 rounded-lg border border-[#CCE6FF] text-[11px] shadow-xs">
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
                        <div className="w-32 h-2.5 bg-slate-900/15 rounded-full blur-[3px] -mt-1.5" />
                      </div>

                      {/* Footer Badge in Visual Area */}
                      <div className="w-full text-center z-10">
                        <span className="inline-block px-3 py-1 rounded-lg bg-white/95 border border-[#CCE6FF] text-[11px] font-semibold text-[#021D3B]">
                          Distribusi Resmi WINGS Food
                        </span>
                      </div>
                    </div>

                    {/* Information Area (Right ~56% Width) */}
                    <div className="w-[56%] p-8 lg:p-10 flex flex-col justify-center bg-white animate-slideUp">
                      <div className="space-y-5">
                        {/* Subheading & Title */}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
                              Produk Khusus Mitra
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-xs font-semibold text-slate-500">
                              {item.bottlesPerPack}
                            </span>
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-extrabold text-[#021D3B] tracking-tight mt-1">
                            {highlightAquviva(item.name)}
                          </h3>
                        </div>

                        {/* Price Callout */}
                        <div className="rounded-2xl bg-[#F4FAFF] border border-[#CCE6FF] p-5">
                          <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8] block">
                            Harga Kulakan Khusus Mitra
                          </span>
                          <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-4xl lg:text-5xl font-normal text-[#FA4616] tracking-tight">
                              {item.price}
                            </span>
                            <span className="text-base font-semibold text-slate-600">
                              / Pack
                            </span>
                          </div>
                          <p className="text-xs font-semibold text-slate-500 mt-1">
                            Setara {item.pricePerBottle} modal pokok
                          </p>
                        </div>

                        {/* Description Box */}
                        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                            Deskripsi Produk
                          </span>
                          <p className="text-sm sm:text-base font-bold text-[#021D3B]">
                            {item.exactDesc}
                          </p>
                        </div>

                        {/* Trust Signals */}
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <svg className="w-4 h-4 text-[#0762C8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>Pasokan stok terjamin langsung dari jaringan resmi logistik WINGS Food</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* INACTIVE COMPACT CARD */
                  <div className="w-full h-full p-6 flex flex-col justify-between items-center text-center">
                    <div className="w-full flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400">
                        {item.code}
                      </span>
                      <span className="text-xs font-bold text-[#0762C8] bg-[#F0F6FD] px-2.5 py-0.5 rounded-lg border border-[#CCE6FF]">
                        {item.sizeLabel}
                      </span>
                    </div>

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

                    <div className="w-full pt-4 border-t border-slate-100 space-y-1">
                      <h4 className="text-base font-bold text-[#021D3B] truncate">
                        {highlightAquviva(item.name)}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium">
                        {item.bottlesPerPack}
                      </p>
                      <p className="text-lg font-normal text-[#0762C8] group-hover:text-[#FA4616] transition-colors pt-1">
                        {item.price}
                        <span className="text-xs font-normal text-slate-500 ml-1">
                          /Pack
                        </span>
                      </p>
                      <span className="text-xs font-bold text-[#0762C8] pt-1 block group-hover:underline">
                        Lihat Detail Varian
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* MOBILE & TABLET: Vertical Interactive Accordion Cards */}
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
                <button
                  type="button"
                  onClick={() => setActiveId(isActive ? "" : item.id)}
                  className="w-full p-4 flex items-center justify-between gap-3 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-14 shrink-0 rounded-xl bg-[#F2F8FE] p-1 border border-[#CCE6FF]/80 flex items-center justify-center">
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
                        {highlightAquviva(item.name)}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {item.bottlesPerPack}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="text-right">
                      <span className="text-base font-normal text-[#FA4616] block">
                        {item.price}
                      </span>
                      <span className="text-[11px] text-slate-400 font-normal">
                        /Pack
                      </span>
                    </div>
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

                {isActive && (
                  <div className="px-4 pb-5 pt-2 border-t border-slate-100 space-y-4 animate-fadeIn">
                    <div className="bg-gradient-to-b from-[#F2F8FE] to-[#DFECF7] rounded-2xl p-4 flex flex-col items-center justify-center border border-[#CCE6FF]/80">
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

                    <div className="rounded-xl bg-[#F4FAFF] border border-[#CCE6FF] p-3.5">
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                        Deskripsi Produk
                      </span>
                      <p className="text-sm font-bold text-[#021D3B] leading-snug">
                        {item.exactDesc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-xs font-normal text-slate-500">
          Harga grosir khusus berlaku bagi mitra yang telah terverifikasi dalam jaringan kemitraan resmi.
        </p>
      </div>
    </section>
  );
}
