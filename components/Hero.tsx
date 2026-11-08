"use client";

import Image from "next/image";

interface HeroProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-5rem)] flex items-center border-b border-[#CCE6FF]/50">
      {/* Background Atmosphere: Dominant White on Left, Seamless Soft Sky-Blue on Right */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Soft Linear Sky Gradient moving towards the Right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-[#E8F4FD]" />

        {/* Ambient Sky and Mountain Fresh Mist Glows */}
        <div className="absolute top-1/2 -translate-y-1/2 right-[2%] w-[60%] h-[90%] bg-[radial-gradient(ellipse_at_65%_50%,_rgba(196,224,247,0.55)_0%,_rgba(232,244,253,0.3)_45%,_transparent_75%)]" />
        <div className="absolute top-8 right-1/4 w-[40%] h-[45%] bg-[radial-gradient(circle,_rgba(204,230,255,0.4)_0%,_transparent_65%)]" />
        <div className="absolute bottom-6 right-[12%] w-[42%] h-[35%] bg-[radial-gradient(circle,_rgba(250,70,22,0.035)_0%,_transparent_60%)]" />

        {/* Delicate Aquviva Mountain Wave Topography lines */}
        <svg
          className="absolute -right-8 top-12 w-[720px] h-[480px] text-[#0762C8]/[0.035] stroke-current fill-none pointer-events-none"
          viewBox="0 0 700 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,220 C 120,170 210,270 350,200 C 490,130 570,250 700,190"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 0,260 C 140,210 230,310 370,240 C 510,170 590,290 700,230"
            strokeWidth="1.5"
          />
          <path
            d="M 0,300 C 160,250 250,350 390,280 C 530,210 610,330 700,270"
            strokeWidth="1"
          />
        </svg>

        {/* Crisp Pure White Transition on Left Text Area */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-white via-white/95 to-transparent z-10" />

        {/* Soft bottom edge connecting smoothly to next section */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Main Headline, Description, CTA Buttons, Supporting Info */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Official Wings Food Partnership Trust Lockup */}
            <div className="inline-flex items-center gap-2.5 rounded-lg border border-[#CCE6FF] bg-white px-3.5 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
              <span className="font-alan-sans text-xs font-bold uppercase tracking-wider text-[#021D3B]">
                Program Kemitraan Resmi
              </span>
              <span className="h-3.5 w-px bg-[#CCE6FF]" aria-hidden="true" />
              <span className="font-alan-sans text-xs font-black tracking-wide text-[#FA4616]">
                WINGS FOOD
              </span>
            </div>

            {/* Main Headline with dual brand colors */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] sm:leading-[1.15]">
              <span className="text-[#021D3B] block font-alan-sans font-bold">
                Mulai Peluang Bisnis
              </span>
              <span className="text-[#FA4616] block mt-1 sm:mt-2">
                <span className="font-alan-sans font-bold">Bersama </span>
                <span className="font-sans font-black">AQUVIVA</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#484848] leading-relaxed max-w-xl font-normal font-alan-sans">
              Jadikan <span className="font-sans font-bold">AQUVIVA</span> bagian dari peluang usaha Anda. Hadirkan air mineral berkualitas
              dengan kesegaran alami bagi pelanggan, sekaligus kembangkan bisnis melalui program
              kemitraan resmi dengan berbagai keuntungan menarik.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => onOpenModal()}
                className="font-alan-sans inline-flex items-center justify-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-[#FA4616]/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] focus-visible:ring-offset-2"
              >
                Daftar Jadi Mitra
              </button>
              <a
                href="#keunggulan"
                className="font-alan-sans inline-flex items-center justify-center rounded-xl border border-[#CCE6FF] bg-white hover:bg-[#F4FAFF] hover:border-[#0762C8]/50 px-7 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-[#0762C8] shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
              >
                Lihat Keuntungan
              </a>
            </div>

            {/* Supporting Information Under CTA Buttons */}
            <div className="pt-2 sm:pt-3 border-t border-[#CCE6FF]/50 max-w-xl">
              <div className="font-alan-sans flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-semibold text-[#5F6368]">
                <span className="inline-flex items-center gap-1.5 text-[#021D3B]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF7EE] text-[#08BB2C]">
                    ✓
                  </span>
                  Program kemitraan resmi
                </span>
                <span className="text-[#CCE6FF] hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-[#021D3B]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF7EE] text-[#08BB2C]">
                    ✓
                  </span>
                  Harga khusus mitra
                </span>
                <span className="text-[#CCE6FF] hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-[#021D3B]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF7EE] text-[#08BB2C]">
                    ✓
                  </span>
                  Dukungan promosi
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: AQUVIVA Branded Display Rack Visual with Seamless Integration */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end lg:translate-x-6 xl:translate-x-12 2xl:translate-x-16">
            {/* Visual Wrapper without cards, boxes, or hard borders */}
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none flex items-center justify-center lg:justify-end">
              {/* Soft Ambient Radial Light Behind the Rack */}
              <div
                className="absolute inset-0 bg-radial from-[#C4E0F7]/45 via-[#E6F1FB]/20 to-transparent rounded-full filter blur-2xl -z-10 pointer-events-none scale-110 translate-x-4"
                aria-hidden="true"
              />

              {/* The Official AQUVIVA Display Rack Image - Significantly Enlarged & Shifted to the Right */}
              <div className="relative w-full h-[520px] sm:h-[600px] md:h-[640px] lg:h-[660px] xl:h-[740px] 2xl:h-[800px] flex items-center justify-center lg:justify-end">
                <Image
                  src="/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG"
                  alt="Rak Display Resmi Kemitraan AQUVIVA Air Mineral Murni Alami Wings Food"
                  fill
                  priority
                  unoptimized
                  className="object-contain object-center lg:object-right select-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
