"use client";

import Image from "next/image";

interface HeroProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/90 px-3.5 py-1 text-xs sm:text-sm font-semibold text-blue-900 border border-blue-200/60">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" aria-hidden="true" />
              Program Resmi Kemitraan Air Mineral Wings Food
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-5xl leading-tight">
              SEGARNYA AQUVIVA,{" "}
              <span className="text-blue-700 block mt-1">
                PELUANGNYA UNTUK USAHAMU!
              </span>
            </h1>

            <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50/60 p-4">
              <p className="text-lg font-bold text-orange-950 sm:text-xl">
                AQUVIVA: Murni Alami, Mineral Baik Terjaga.
              </p>
              <p className="mt-1 text-sm sm:text-base text-slate-700 leading-relaxed">
                Air mineral pilihan yang diproses melalui teknologi{" "}
                <strong className="text-slate-900">7 Tahap Nano Purifikasi</strong>, menjaga
                kemurnian air dan mineral baik dalam setiap tegukan.
              </p>
            </div>

            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              Hadirkan AQUVIVA, air mineral dengan kesegaran alami yang cocok menemani berbagai
              aktivitas sehari-hari pelanggan Anda. Tersedia dalam beragam ukuran praktis dengan
              harga modal grosir langsung untuk memutar roda bisnis toko dan agen Anda.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-3 border border-slate-200 shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white font-bold text-sm">
                  1
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  Fasilitas Showcase Pendingin Resmi
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-3 border border-slate-200 shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-orange-600 text-white font-bold text-sm">
                  2
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  Harga Grosir Spesial Mitra Terdaftar
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-lg bg-white p-3 border border-slate-200 shadow-xs">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white font-bold text-sm">
                  3
                </div>
                <div className="text-xs font-semibold text-slate-800">
                  Banner Toko Custom &amp; Kaos Resmi
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={() => onOpenModal()}
                className="inline-flex items-center justify-center rounded-xl bg-orange-600 hover:bg-orange-700 active:bg-orange-800 px-7 py-3.5 text-base font-bold text-white shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              >
                Daftar Jadi Mitra Sekarang
              </button>
              <a
                href="#pilihan-paket"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3.5 text-base font-semibold text-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Pelajari Paket Kemitraan
              </a>
            </div>
          </div>

          {/* Right Column: Authentic Product Visuals */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-tr from-blue-600/10 via-sky-50 to-orange-500/10 p-6 border border-blue-100 shadow-xl">
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
              <div className="mt-4 rounded-xl bg-white p-4 shadow-md border border-slate-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-14 shrink-0 rounded-lg overflow-hidden bg-slate-50 border border-slate-100">
                    <Image
                      src="/Component/75E0C70D-D60F-4613-AA9F-35D3D0ECBB77.PNG"
                      alt="Paket Botol AQUVIVA 250ml"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                      Modal Mulai Dari
                    </p>
                    <p className="text-lg font-black text-slate-950">
                      Rp 1.000.000
                    </p>
                  </div>
                </div>
                <span className="rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 border border-emerald-200">
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

