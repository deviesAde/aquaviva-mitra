"use client";

import Image from "next/image";

interface HeroProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-aquaviva-hero pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#CCE6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#ECF5FF] px-3.5 py-1 text-xs sm:text-sm font-semibold text-[#0762C8] border border-[#CCE6FF]">
              <span className="h-2 w-2 rounded-full bg-[#FA4616] animate-pulse" aria-hidden="true" />
              Program Resmi Kemitraan Air Mineral Wings Food
            </div>

            <h1 className="text-3xl font-black tracking-tight text-[#021D3B] sm:text-5xl lg:text-5xl leading-tight">
              SEGARNYA AQUVIVA,{" "}
              <span className="text-[#0762C8] block mt-1">
                PELUANGNYA UNTUK USAHAMU!
              </span>
            </h1>

            <div className="rounded-2xl border-l-4 border-[#FA4616] bg-white p-5 shadow-xs border border-slate-100">
              <p className="text-lg font-bold text-[#FA4616] sm:text-xl">
                AQUVIVA: Murni Alami, Mineral Baik Terjaga.
              </p>
              <p className="mt-1 text-sm sm:text-base text-[#484848] leading-relaxed">
                Air mineral pilihan yang diproses melalui teknologi{" "}
                <strong className="text-[#021D3B]">7 Tahap Nano Purifikasi</strong>, menjaga
                kemurnian air dan mineral baik dalam setiap tegukan.
              </p>
            </div>

            <p className="text-base text-[#5F6368] leading-relaxed max-w-2xl">
              Hadirkan AQUVIVA, air mineral dengan kesegaran alami yang cocok menemani berbagai
              aktivitas sehari-hari pelanggan Anda. Tersedia dalam beragam ukuran praktis dengan
              harga modal grosir langsung untuk memutar roda bisnis toko dan agen Anda.
            </p>

            {/* Quick Benefits Bullet Points with Official Aquaviva Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 border border-[#CCE6FF] shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0762C8] text-white font-bold text-sm">
                  1
                </div>
                <div className="text-xs font-bold text-[#021D3B]">
                  Showcase Pendingin Resmi Polytron
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 border border-[#CCE6FF] shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FA4616] text-white font-bold text-sm">
                  2
                </div>
                <div className="text-xs font-bold text-[#021D3B]">
                  Harga Grosir Spesial Mitra Terdaftar
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl bg-white p-3.5 border border-[#CCE6FF] shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#08BB2C] text-white font-bold text-sm">
                  3
                </div>
                <div className="text-xs font-bold text-[#021D3B]">
                  Spanduk Nama Toko &amp; Kaos Resmi
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => onOpenModal()}
                className="inline-flex items-center justify-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] px-7 py-3.5 text-base font-bold text-white shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] focus-visible:ring-offset-2"
              >
                Daftar Jadi Mitra Sekarang
              </button>
              <a
                href="#pilihan-paket"
                className="inline-flex items-center justify-center rounded-xl border border-[#CCE6FF] bg-white hover:bg-[#F4FAFF] px-6 py-3.5 text-base font-bold text-[#0762C8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
              >
                Pelajari Paket Kemitraan
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Product Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-gradient-to-tr from-[#CCE6FF]/40 via-white to-[#ECF5FF] p-6 border border-[#CCE6FF] shadow-xl">
              {/* Product Showcase Visual */}
              <div className="relative h-80 sm:h-96 w-full flex items-center justify-center">
                <Image
                  src="/Component/BFFC194C-6B17-4F8E-B5CB-D539BC1989FB.PNG"
                  alt="Unit Showcase Pendingin AQUVIVA dengan stok air mineral"
                  width={340}
                  height={420}
                  className="object-contain max-h-full drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating Highlight Card */}
              <div className="mt-4 rounded-2xl bg-white p-4 shadow-md border border-[#CCE6FF] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-14 shrink-0 rounded-lg overflow-hidden bg-[#F4FAFF] border border-[#CCE6FF]/60">
                    <Image
                      src="/Component/75E0C70D-D60F-4613-AA9F-35D3D0ECBB77.PNG"
                      alt="Paket Botol AQUVIVA 250ml"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#5F6368] uppercase tracking-wide">
                      Modal Mulai Dari
                    </p>
                    <p className="text-lg font-black text-[#021D3B]">
                      Rp 1.000.000
                    </p>
                  </div>
                </div>
                <span className="rounded-lg bg-[#E6F1FB] px-3 py-1.5 text-xs font-bold text-[#0762C8] border border-[#CCE6FF]">
                  Termasuk Showcase
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
