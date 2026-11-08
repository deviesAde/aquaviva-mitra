"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

interface HeroProps {
  onOpenModal: (selectedPackage?: string) => void;
}

interface HeroProduct {
  id: string;
  name: string;
  badge: string;
  image: string;
  alt: string;
  desc: string;
  targetPackage: string;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const products: HeroProduct[] = [
    {
      id: "showcase-1",
      name: "Showcase 1 Pintu",
      badge: "Paket Pemula & Juragan",
      image: "/Component/showcase-1-pintu-trans.png",
      alt: "Showcase Pendingin 1 Pintu Resmi Kemitraan AQUVIVA Polytron",
      desc: "Unit pendingin 1 pintu 4–5 rak hemat listrik untuk toko dan kios.",
      targetPackage: "PAKET JURAGAN AQUVIVA",
    },
    {
      id: "showcase-2",
      name: "Showcase 2 Pintu",
      badge: "Paket Distributor",
      image: "/Component/showcase-2-pintu-trans.png",
      alt: "Showcase Pendingin Jumbo 2 Pintu Resmi Kemitraan AQUVIVA",
      desc: "Kapasitas jumbo 2 pintu 5 rak untuk pangkalan dan distributor grosir.",
      targetPackage: "PAKET DISTRIBUTOR AQUVIVA",
    },
    {
      id: "rak-display",
      name: "Rak Display Toko",
      badge: "Sarana Display Resmi",
      image: "/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG",
      alt: "Rak Display Resmi Kemitraan AQUVIVA Air Mineral Murni Alami Wings Food",
      desc: "Gondola display eksklusif AQUVIVA untuk penataan botol siap jualan.",
      targetPackage: "PAKET PEMULA AQUVIVA",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const activeProduct = products[activeIndex];

  // Touch and Mouse Drag tracking
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);
  const mouseStartX = useRef<number>(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  const handleSelectProduct = (index: number) => {
    setActiveIndex(index);
    // Restart auto-slideshow timer after manual interaction
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 5000);
  };

  // Auto-Slideshow effect with 4-second interval
  useEffect(() => {
    if (isPaused) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Page visibility listener: stop slideshow when tab is hidden to save performance
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Swipe / Drag Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = mouseStartX.current - e.clientX;
    if (diff > 45) {
      nextSlide();
    } else if (diff < -45) {
      prevSlide();
    }
    mouseStartX.current = 0;
  };

  return (
    <section className="relative overflow-hidden bg-white min-h-[calc(100vh-5rem)] flex items-center border-b border-[#CCE6FF]/50 font-alan-sans">
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
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-white via-white/95 to-transparent z-10" />

        {/* Soft bottom edge connecting smoothly to next section */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Main Headline, Description, CTA Buttons, Supporting Info */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Official Wings Food Partnership Trust Lockup & Nano Purification Tagline */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2.5 rounded-lg border border-[#CCE6FF] bg-white px-3.5 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#021D3B]">
                  Program Kemitraan Resmi
                </span>
                <span className="h-3.5 w-px bg-[#CCE6FF]" aria-hidden="true" />
                <span className="text-xs font-black tracking-wide text-[#FA4616]">
                  WINGS FOOD
                </span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-lg border border-[#CCE6FF] bg-[#F0F7FF] px-3.5 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
                <span className="flex h-2 w-2 rounded-full bg-[#0762C8] animate-pulse" />
                <span className="text-xs font-bold text-[#0762C8]">
                  7 Tahap Nano Purifikasi:
                </span>
                <span className="text-xs font-medium text-[#021D3B]">
                  Kemurnian Maksimal, Mineral Baik Terjaga
                </span>
              </div>
            </div>

            {/* Main Headline with dual brand colors */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] sm:leading-[1.15]">
              <span className="text-[#021D3B] block font-bold">
                Mulai Peluang Bisnis
              </span>
              <span className="text-[#FA4616] block mt-1 sm:mt-2">
                <span className="font-bold">Bersama </span>
                <span className="font-sans font-black">AQUVIVA</span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#484848] leading-relaxed max-w-xl font-normal">
              Jadikan <span className="font-sans font-bold text-[#FA4616]">AQUVIVA</span> bagian dari peluang usaha Anda. Hadirkan air mineral berkualitas
              dengan kesegaran alami bagi pelanggan melalui teknologi <span className="font-semibold text-[#0762C8]">7 Tahap Nano Purifikasi</span>, sekaligus kembangkan bisnis melalui program
              kemitraan resmi dengan berbagai fasilitas showcase dan display pendukung siap jualan.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1 sm:pt-2">
              <button
                type="button"
                onClick={() => onOpenModal(activeProduct.targetPackage)}
                className="inline-flex items-center justify-center rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg shadow-[#FA4616]/25 transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] focus-visible:ring-offset-2 cursor-pointer"
              >
                Daftar Jadi Mitra
              </button>
              <a
                href="#pilihan-paket"
                className="inline-flex items-center justify-center rounded-xl border border-[#CCE6FF] bg-white hover:bg-[#F4FAFF] hover:border-[#0762C8]/50 px-7 py-3.5 sm:py-4 text-base sm:text-lg font-bold text-[#0762C8] shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] cursor-pointer"
              >
                Lihat Paket Usaha
              </a>
            </div>

            {/* Supporting Information Under CTA Buttons */}
            <div className="pt-2 sm:pt-3 border-t border-[#CCE6FF]/50 max-w-xl">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm font-semibold text-[#5F6368]">
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
                  Showcase resmi &amp; bergaransi
                </span>
                <span className="text-[#CCE6FF] hidden sm:inline">•</span>
                <span className="inline-flex items-center gap-1.5 text-[#021D3B]">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EBF7EE] text-[#08BB2C]">
                    ✓
                  </span>
                  Dukungan promosi toko
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimalist Auto-Slideshow Showcase Gallery */}
          <div
            className="lg:col-span-6 xl:col-span-6 relative w-full flex flex-col items-center lg:items-end select-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Visual Container */}
            <div className="relative w-full max-w-lg lg:max-w-none flex flex-col items-center lg:items-end">
              {/* Soft Ambient Radial Light Behind the Visuals */}
              <div
                className="absolute inset-0 bg-radial from-[#C4E0F7]/45 via-[#E6F1FB]/20 to-transparent rounded-full filter blur-2xl -z-10 pointer-events-none scale-110 translate-x-4"
                aria-hidden="true"
              />

              {/* Main Feature Display (Auto-Slideshow with Cross-Fade & Swipe) */}
              <div
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] lg:h-[500px] xl:h-[540px] flex items-center justify-center lg:justify-end cursor-grab active:cursor-grabbing"
              >
                {products.map((p, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <div
                      key={p.id}
                      className={`absolute inset-0 flex items-center justify-center lg:justify-end transition-all duration-500 ease-in-out ${
                        isActive
                          ? "opacity-100 scale-100 z-10 pointer-events-auto"
                          : "opacity-0 scale-[0.98] z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt={p.alt}
                        fill
                        priority={idx === 0}
                        unoptimized
                        className="object-contain object-center lg:object-right select-none drop-shadow-xl"
                        draggable={false}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Minimalist Information Directly Below the Main Image (No Box, No Card, No Border) */}
              <div className="mt-4 sm:mt-5 text-center w-full max-w-md lg:max-w-lg min-h-[52px] transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-bold text-[#021D3B] tracking-tight">
                  {activeProduct.name}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                  {activeProduct.desc.includes("AQUVIVA") ? (
                    activeProduct.desc.split("AQUVIVA").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="font-bold text-[#FA4616]">AQUVIVA</span>}
                      </span>
                    ))
                  ) : (
                    activeProduct.desc
                  )}
                </p>
              </div>

              {/* Sleek Minimalist Slide Indicators (No boxes, no cards) */}
              <div className="mt-4 flex items-center justify-center gap-2 z-20">
                {products.map((p, idx) => {
                  const isSelected = idx === activeIndex;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectProduct(idx)}
                      aria-label={`Tampilkan ${p.name}`}
                      className={`transition-all duration-300 cursor-pointer rounded-full ${
                        isSelected
                          ? "w-7 h-2 bg-[#0762C8]"
                          : "w-2 h-2 bg-[#CCE6FF] hover:bg-[#0762C8]/50"
                      }`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
