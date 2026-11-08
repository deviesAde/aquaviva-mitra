"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface PackageFacilityItem {
  label: string;
  detail: string;
}

export interface PackageSpecRow {
  label: string;
  detail: string;
  qty: string;
  isIncluded: boolean;
}

export interface PartnershipPackage {
  id: string;
  code: string;
  name: string;
  modalPackageName: string;
  price: string;
  tagline: string;
  image: string;
  shortSummary: string;
  cardHighlights: string[];
  description: string;
  recommendedFor: string;
  facilities: PackageFacilityItem[];
  specs?: PackageSpecRow[];
  commercialTerms: string[];
}

interface PackageDetailModalProps {
  pkg: PartnershipPackage | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (pkgName: string) => void;
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

export default function PackageDetailModal({
  pkg,
  isOpen,
  onClose,
  onSelectPackage,
}: PackageDetailModalProps) {
  const [zoomPoster, setZoomPoster] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        if (zoomPoster) {
          setZoomPoster(false);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, zoomPoster, onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setZoomPoster(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !pkg) return null;

  const handleChoose = () => {
    onClose();
    onSelectPackage(pkg.modalPackageName);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-950/70 backdrop-blur-xs overflow-y-auto font-alan-sans"
      onClick={onClose}
    >
      {/* Modal Dialog Container */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-slate-200 transition-all flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-package-title"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-7 py-3.5">
          <div className="flex items-center gap-3">
            <span className="text-xs font-normal text-slate-500 uppercase tracking-wider">
              Detail Resmi Paket Usaha
            </span>
            <span className="text-slate-300">/</span>
            <span className="text-xs font-semibold text-[#0762C8]">
              {pkg.name}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] cursor-pointer"
            aria-label="Tutup detail paket"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-7">
          {/* Top Section: Full Uncropped Poster + Essential Info */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Left: Full Poster Preview (Uncropped) */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div
                onClick={() => setZoomPoster(true)}
                className="group relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-slate-200 shadow-xs cursor-zoom-in transition-all hover:border-[#0762C8]"
                title="Klik untuk melihat poster penuh"
              >
                <Image
                  src={pkg.image}
                  alt={`Poster Resmi ${pkg.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 380px"
                  className="object-contain p-1.5 transition-transform duration-200 group-hover:scale-[1.02]"
                  priority
                />
                <div className="absolute bottom-2.5 right-2.5 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-normal text-white flex items-center gap-1.5 backdrop-blur-xs opacity-90 group-hover:opacity-100 transition-opacity">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                  Perbesar Gambar
                </div>
              </div>
              <p className="mt-2 text-center text-xs font-normal text-slate-500">
                Poster Resmi Kemitraan <span className="font-sans font-bold text-[#FA4616]">AQUVIVA</span> by Wings Food
              </p>
            </div>

            {/* Right: Package Overview & Investment Details */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
                  PILIHAN PAKET USAHA
                </span>
                <h3 id="modal-package-title" className="text-2xl sm:text-3xl font-bold text-[#021D3B] tracking-tight mt-0.5">
                  {pkg.name}
                </h3>
                <p className="text-sm font-normal text-slate-600 italic mt-0.5">
                  &ldquo;{pkg.tagline}&rdquo;
                </p>
              </div>

              {/* Price Callout */}
              <div className="rounded-xl bg-[#F4FAFF] p-4 border border-[#CCE6FF]">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <span className="text-xs font-normal text-slate-600 uppercase tracking-wider">
                    Biaya Paket Investasi
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold text-[#FA4616]">
                    {pkg.price}
                  </span>
                </div>
                <p className="mt-1.5 text-xs font-normal text-slate-500 border-t border-[#CCE6FF]/70 pt-1.5">
                  Investasi satu kali, tanpa royalti bulanan. Seluruh unit showcase pendingin dan perlengkapan menjadi aset toko Anda.
                </p>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider">
                  Deskripsi Paket
                </span>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Store Recommendation */}
              <div className="rounded-lg bg-slate-50 p-3 border border-slate-200">
                <span className="text-xs font-semibold text-slate-700 block">
                  Kapasitas Usaha yang Direkomendasikan:
                </span>
                <p className="text-xs font-normal text-slate-600 mt-0.5 leading-relaxed">
                  {pkg.recommendedFor}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section: Fasilitas dan Produk Paket */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div>
              <h4 className="text-base font-bold text-[#021D3B] tracking-tight">
                Fasilitas dan Produk Paket
              </h4>
              <p className="text-xs font-normal text-slate-500">
                Rincian barang fisik yang diterima mitra saat bergabung pada {pkg.name}:
              </p>
            </div>

            {/* Structured Clean List matching user's exact specification */}
            <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
              <ul className="divide-y divide-slate-100">
                {pkg.facilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 sm:px-4 hover:bg-[#F4FAFF]/60 transition-colors text-xs sm:text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-[#08BB2C] mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="leading-snug">
                      <span className="font-bold text-[#021D3B]">{highlightAquviva(item.label)}:</span>{" "}
                      <span className="font-normal text-slate-700">{highlightAquviva(item.detail)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Practical Partnership Terms */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-2">
            <span className="text-xs font-semibold text-slate-800 uppercase tracking-wider block">
              Ketentuan &amp; Alur Kemitraan Resmi
            </span>
            <ul className="space-y-1.5 text-xs font-normal text-slate-600 leading-relaxed">
              {pkg.commercialTerms.map((term, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#0762C8] font-bold shrink-0">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="sticky bottom-0 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200 bg-white px-5 sm:px-7 py-3.5">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 py-2.5 px-4 text-xs sm:text-sm font-normal transition-colors cursor-pointer"
          >
            &larr; Kembali ke Daftar Paket
          </button>

          <button
            type="button"
            onClick={handleChoose}
            className="w-full sm:w-auto rounded-lg bg-[#FA4616] hover:bg-[#D83508] text-white py-2.5 px-6 text-xs sm:text-sm font-medium shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] cursor-pointer flex items-center justify-center gap-2"
          >
            <span>Pilih {pkg.name} ({pkg.price})</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Poster Zoom Lightbox Modal */}
      {zoomPoster && (
        <div
          onClick={() => setZoomPoster(false)}
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xs cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[95vh] max-w-4xl w-full bg-white rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col items-center"
          >
            <button
              type="button"
              onClick={() => setZoomPoster(false)}
              className="absolute top-3 right-3 z-10 rounded-full bg-slate-900/80 text-white p-2 hover:bg-slate-900 transition-colors cursor-pointer"
              aria-label="Tutup perbesaran"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full aspect-square max-h-[82vh]">
              <Image
                src={pkg.image}
                alt={`Poster Penuh ${pkg.name}`}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mt-2 text-xs font-normal text-slate-500 text-center">
              Poster Resmi {pkg.name} — Program Kemitraan <span className="font-bold text-[#FA4616]">AQUVIVA</span> by Wings Food
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
