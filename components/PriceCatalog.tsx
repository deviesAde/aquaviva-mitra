"use client";

import Image from "next/image";
import { useState } from "react";
import PackageDetailModal, { PartnershipPackage } from "./PackageDetailModal";

interface PriceCatalogProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function PriceCatalog({ onOpenModal }: PriceCatalogProps) {
  // Currently selected package id for interactive selection state
  const [selectedPackageId, setSelectedPackageId] = useState<string>("paket-juragan");
  // Package opened in detail modal
  const [activePackageDetail, setActivePackageDetail] = useState<PartnershipPackage | null>(null);

  const packages: PartnershipPackage[] = [
    {
      id: "paket-pemula",
      code: "01",
      name: "01 | PAKET PEMULA",
      modalPackageName: "PAKET PEMULA AQUVIVA",
      price: "Rp1.000.000",
      tagline: "Pilihan Tepat untuk Memulai dan Mengembangkan Usaha Anda!",
      image: "/Poster/paket-1-juta.png",
      shortSummary: "Pilihan awal bagi Anda yang ingin merintis usaha penjualan air mineral dengan skala kecil.",
      cardHighlights: [
        "Showcase Pendingin: 1 pintu dengan 4 rak",
        "AQUVIVA 700 ml: 100 pack",
        "AQUVIVA 250 ml: 100 pack",
        "Kaos AQUVIVA & Banner Nama Toko",
      ],
      description: "Pilihan awal bagi Anda yang ingin merintis usaha penjualan air mineral dengan skala kecil. Paket ini sudah dilengkapi unit showcase pendingin siap pakai dan pasokan air mineral murni alami berkualitas.",
      recommendedFor: "Warung baru, kios teras rumah, kantin sekolah, dan usaha rumahan.",
      facilities: [
        { label: "Showcase Pendingin", detail: "1 pintu dengan 4 rak." },
        { label: "AQUVIVA 700 ml", detail: "100 pack." },
        { label: "AQUVIVA 250 ml", detail: "100 pack." },
        { label: "Kaos AQUVIVA", detail: "Perlengkapan pendukung usaha." },
        { label: "Banner Nama Toko", detail: "Desain khusus dengan nama toko Mitra dan identitas AQUVIVA." },
      ],
      commercialTerms: [
        "Fasilitas showcase pendingin dan seluruh perlengkapan operasional menjadi hak milik toko mitra sepenuhnya.",
        "Keuntungan penjualan 100% menjadi milik mitra tanpa potongan royalti maupun bagi hasil.",
        "Unit showcase dan pasokan produk awal diantar langsung oleh armada resmi WINGS Food ke lokasi toko.",
        "Pemesanan ulang stok selanjutnya dapat dilakukan langsung melalui sales kanvaser resmi WINGS Food.",
      ],
    },
    {
      id: "paket-juragan",
      code: "02",
      name: "02 | PAKET JURAGAN",
      modalPackageName: "PAKET JURAGAN AQUVIVA",
      price: "Rp2.500.000",
      tagline: "Pilihan Tepat untuk Memperluas Jangkauan dan Mengembangkan Usaha Anda!",
      image: "/Poster/paket-2-juta.png",
      shortSummary: "Pilihan bagi pelaku usaha yang ingin memperluas persediaan produk dan jangkauan penjualan.",
      cardHighlights: [
        "Showcase Pendingin: 1 pintu dengan 5 rak",
        "AQUVIVA 700 ml: 300 pack",
        "AQUVIVA 250 ml: 300 pack",
        "Kaos AQUVIVA & Banner Nama Toko",
      ],
      description: "Pilihan bagi pelaku usaha yang ingin memperluas persediaan produk dan jangkauan penjualan. Paket ini dilengkapi showcase pendingin kapasitas lebih besar serta pasokan stok air mineral yang lebih melimpah.",
      recommendedFor: "Toko kelontong aktif, minimarket lingkungan, warung makan ramai, dan kedai kopi.",
      facilities: [
        { label: "Showcase Pendingin", detail: "1 pintu dengan 5 rak." },
        { label: "AQUVIVA 700 ml", detail: "300 pack." },
        { label: "AQUVIVA 250 ml", detail: "300 pack." },
        { label: "Kaos AQUVIVA", detail: "Perlengkapan pendukung usaha." },
        { label: "Banner Nama Toko", detail: "Desain khusus dengan nama toko Mitra dan identitas AQUVIVA." },
      ],
      commercialTerms: [
        "Fasilitas showcase 5 rak dan perlengkapan operasional menjadi hak milik toko mitra sepenuhnya.",
        "Keuntungan penjualan 100% menjadi milik mitra tanpa potongan royalti maupun biaya waralaba.",
        "Unit showcase dan stok 600 pack produk diantar langsung oleh armada resmi WINGS Food ke toko.",
        "Kemudahan pemesanan ulang rutin dengan harga grosir resmi langsung ke kanvaser WINGS Food.",
      ],
    },
    {
      id: "paket-distributor",
      code: "03",
      name: "03 | PAKET DISTRIBUTOR",
      modalPackageName: "PAKET DISTRIBUTOR AQUVIVA",
      price: "Rp5.000.000",
      tagline: "Solusi Usaha Skala Besar untuk Memperluas Distribusi dan Memaksimalkan Peluang Penjualan!",
      image: "/Poster/paket-5-juta.png",
      shortSummary: "Pilihan bagi pelaku usaha yang membutuhkan pengadaan produk dalam skala lebih besar.",
      cardHighlights: [
        "Showcase Pendingin: 2 pintu dengan 5 rak",
        "AQUVIVA 700 ml: 700 pack & 250 ml: 700 pack",
        "AQUVIVA 1,6 Liter: 300 pack",
        "Kaos AQUVIVA & Banner Nama Toko",
      ],
      description: "Pilihan bagi pelaku usaha yang membutuhkan pengadaan produk dalam skala lebih besar. Solusi skala pangkalan dengan Showcase Jumbo 2 Pintu, varian lengkap hingga 1,6 Liter, dan total stok 1.700 pack siap menyuplai toko sekitar.",
      recommendedFor: "Agen pangkalan grosir sembako, distributor air minum, toko kelontong besar di jalur utama.",
      facilities: [
        { label: "Showcase Pendingin", detail: "2 pintu dengan 5 rak." },
        { label: "AQUVIVA 700 ml", detail: "700 pack." },
        { label: "AQUVIVA 250 ml", detail: "700 pack." },
        { label: "AQUVIVA 1,6 Liter", detail: "300 pack." },
        { label: "Kaos AQUVIVA", detail: "Perlengkapan pendukung usaha." },
        { label: "Banner Nama Toko", detail: "Desain khusus dengan nama toko Mitra dan identitas AQUVIVA." },
      ],
      commercialTerms: [
        "Showcase Jumbo 2 Pintu dan seluruh perlengkapan menjadi aset milik mitra pangkalan sepenuhnya.",
        "Kapasitas stok total 1.700 pack siap menyuplai toko sembako, warung sekitar, dan konsumen langsung.",
        "Margin keuntungan penuh milik pangkalan/distributor tanpa biaya royalti.",
        "Pengiriman armada truk logistik resmi WINGS Food langsung ke lokasi gudang/toko.",
      ],
    },
  ];


  const handleCardClick = (pkg: PartnershipPackage) => {
    setSelectedPackageId(pkg.id);
  };

  const handleSelectAndRegister = (pkg: PartnershipPackage) => {
    setSelectedPackageId(pkg.id);
    onOpenModal(pkg.modalPackageName);
  };

  return (
    <section id="pilihan-paket" className="relative py-16 sm:py-24 scroll-mt-20 bg-[#F4FAFF] border-b border-[#CCE6FF] font-alan-sans overflow-hidden">
      {/* Decorative High-Clarity Background Image with Thick Top/Bottom Blends & Subtle Lateral Edges */}
      <div className="absolute top-0 inset-x-0 h-[600px] sm:h-[660px] lg:h-[700px] pointer-events-none overflow-hidden select-none">
        <div className="relative w-full h-full max-w-[1600px] mx-auto">
          {/* Main Background Image - High Clarity & Natural Visibility */}
          <Image
            src="/Component/kemitraan.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[18%_center] sm:object-[22%_center] opacity-95 filter saturate-[1.15] contrast-[1.04]"
          />

          {/* 1. Gradasi Bagian Atas Tebal: Linear-gradient tebal dari #F4FAFF memudar halus agar menyambung sempurna dengan section sebelumnya */}
          <div className="absolute inset-x-0 top-0 h-40 sm:h-52 lg:h-60 bg-gradient-to-b from-[#F4FAFF] via-[#F4FAFF]/80 via-35% to-transparent" />

          {/* 2. Gradasi Sisi Kiri (Sedikit Saja): Soft edge tipis di pinggir kiri agar gambar tetap luas & jelas */}
          <div className="absolute inset-y-0 left-0 w-6 sm:w-12 lg:w-16 bg-gradient-to-r from-[#F4FAFF] via-[#F4FAFF]/40 to-transparent" />

          {/* 3. Gradasi Sisi Kanan (Sedikit Saja): Soft edge tipis di pinggir kanan simetris */}
          <div className="absolute inset-y-0 right-0 w-6 sm:w-12 lg:w-16 bg-gradient-to-l from-[#F4FAFF] via-[#F4FAFF]/40 to-transparent" />

          {/* 4. Gradasi Bagian Bawah Tebal: Linear-gradient tebal yang memudar halus menuju background section sebelum kartu paket */}
          <div className="absolute inset-x-0 bottom-0 h-52 sm:h-72 lg:h-80 bg-gradient-to-t from-[#F4FAFF] via-[#F4FAFF]/90 via-40% to-transparent" />

          {/* 5. Gradasi Bagian Tengah & Kanan: Menutupi teks poster bawaan gambar agar headline tetap tajam & mudah dibaca */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_78%_85%_at_62%_42%,rgba(244,250,255,1)_0%,rgba(244,250,255,0.98)_52%,rgba(244,250,255,0.75)_68%,rgba(244,250,255,0)_90%)]" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0762C8] bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full border border-[#CCE6FF] shadow-2xs">
            Pilihan Paket Usaha
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[#021D3B] tracking-tight">
            GABUNG KEMITRAAN <br className="hidden sm:inline" />
            <span className="font-sans font-black text-[#FA4616]">AQUVIVA</span>
            <span className="text-slate-400 font-normal mx-1.5">-</span>
            <span className="text-[#E5242A] font-bold">WINGS Food</span>
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#FA4616]">
            Hadirkan Kesegaran, Kembangkan Peluang Usaha Anda
          </p>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bagi Anda yang ingin mengembangkan usaha penjualan air mineral, tersedia beberapa pilihan paket pengadaan produk yang dapat disesuaikan dengan kebutuhan dan skala usaha.
          </p>
        </div>

        {/* Interactive Clickable Package Cards Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => handleCardClick(pkg)}
                className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-white border-2 border-[#0762C8] ring-4 ring-[#0762C8]/15 shadow-xl scale-[1.01]"
                    : "bg-white border border-[#CCE6FF] shadow-xs hover:border-[#0762C8]/50 hover:shadow-md"
                }`}
              >
                <div className="flex flex-col">
                  {/* Top Interactive Selection Bar */}
                  <div className="flex items-center justify-between gap-2 pb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {pkg.code} | PAKET USAHA
                    </span>

                    {/* Active Selection Indicator */}
                    {isSelected ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECF5FF] border border-[#0762C8] px-3 py-0.5 text-xs font-semibold text-[#0762C8] shadow-xs">
                        <svg className="w-3.5 h-3.5 text-[#08BB2C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Paket Terpilih
                      </span>
                    ) : (
                      <span className="text-xs font-normal text-slate-400 group-hover:text-[#0762C8] transition-colors flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full border border-slate-300 group-hover:border-[#0762C8]" />
                        Klik untuk Memilih
                      </span>
                    )}
                  </div>

                  {/* Poster Thumbnail (Aspect-Square + Object-Contain, 100% Uncropped) */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(pkg);
                      setActivePackageDetail(pkg);
                    }}
                    className={`relative my-4 aspect-square w-full rounded-2xl overflow-hidden bg-white border p-2 cursor-pointer transition-all ${
                      isSelected
                        ? "border-[#0762C8]/50 shadow-xs"
                        : "border-slate-200 group-hover:border-[#0762C8]/40"
                    }`}
                    title={`Klik untuk melihat detail lengkap ${pkg.name}`}
                  >
                    <Image
                      src={pkg.image}
                      alt={`Poster Resmi ${pkg.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
                      className="object-contain p-1 transition-transform duration-200 group-hover:scale-[1.02]"
                      priority
                    />
                    <div className="absolute bottom-3 right-3 rounded-md bg-slate-900/80 px-2.5 py-1 text-[11px] font-normal text-white flex items-center gap-1.5 backdrop-blur-xs opacity-90 group-hover:opacity-100 transition-opacity">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Lihat Detail
                    </div>
                  </div>

                  {/* Package Name & Price */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#021D3B] tracking-tight">
                      {pkg.name}
                    </h3>
                    <div className="mt-2 flex items-baseline justify-between rounded-xl bg-[#F4FAFF] px-3.5 py-2.5 border border-[#CCE6FF]">
                      <span className="text-xs font-normal text-slate-500 uppercase">
                        Biaya Investasi:
                      </span>
                      <span
                        className={`text-xl font-bold ${
                          isSelected ? "text-[#FA4616]" : "text-[#0762C8]"
                        }`}
                      >
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Description (Exact text from user) */}
                  <p className="mt-3 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed min-h-[48px]">
                    {pkg.shortSummary}
                  </p>

                  {/* Max 3-4 Key Highlights (Alan Sans Regular) */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-semibold text-slate-700 block">
                      Fasilitas Utama:
                    </span>
                    <ul className="space-y-2">
                      {pkg.cardHighlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-normal text-slate-700">
                          <svg
                            className="h-4 w-4 shrink-0 text-[#08BB2C] mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          <span className="leading-snug">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                  {/* Button 1: Lihat Detail Paket */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(pkg);
                      setActivePackageDetail(pkg);
                    }}
                    className="w-full rounded-xl py-2.5 px-4 text-xs sm:text-sm font-medium border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Lihat Detail Paket</span>
                    <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Button 2: Pilih / Lanjut Daftar */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectAndRegister(pkg);
                    }}
                    className={`w-full rounded-xl py-2.5 px-4 text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                      isSelected
                        ? "bg-[#FA4616] hover:bg-[#D83508] text-white shadow-sm"
                        : "bg-[#0762C8] hover:bg-[#004EA8] text-white"
                    }`}
                  >
                    <span>{isSelected ? "Pilih & Lanjut Daftar" : "Pilih Paket Ini"}</span>
                    <span className="font-normal opacity-90">({pkg.price})</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        {/* Supporting Merchandise Highlight */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-7 border border-[#CCE6FF] shadow-xs">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h4 className="text-base font-semibold text-[#021D3B]">
              Perlengkapan Pendukung Kemitraan Resmi{" "}
              <span className="font-sans font-bold text-[#0762C8]">AQUVIVA</span>
            </h4>
            <p className="text-xs font-normal text-slate-500 mt-1">
              Seluruh paket sudah termasuk sarana display pendingin, branding toko, dan perlengkapan operasional siap jualan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F4FAFF] border border-[#CCE6FF]">
              <div className="relative h-14 w-14 shrink-0 rounded-lg bg-white p-1 border border-[#CCE6FF]">
                <Image
                  src="/Component/7EEE37C3-1D1A-4E8F-B970-ABA5446EC896.PNG"
                  alt="Kaos Resmi Mitra AQUVIVA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-[#021D3B]">Baju Kaos Resmi</h5>
                <p className="text-xs font-normal text-slate-500 mt-0.5">
                  Seragam operasional eksklusif untuk staf dan pemilik toko.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F4FAFF] border border-[#CCE6FF]">
              <div className="relative h-14 w-14 shrink-0 rounded-lg bg-white p-1 border border-[#CCE6FF]">
                <Image
                  src="/Logo/0F87EAE0-8919-4878-ABDE-654696C43401.PNG"
                  alt="Banner Nama Toko Mitra AQUVIVA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-[#021D3B]">Banner Nama Toko</h5>
                <p className="text-xs font-normal text-slate-500 mt-0.5">
                  Spanduk nama toko Anda dengan identitas resmi AQUVIVA.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#F4FAFF] border border-[#CCE6FF]">
              <div className="relative h-14 w-14 shrink-0 rounded-lg bg-white p-1 border border-[#CCE6FF]">
                <Image
                  src="/Component/BEE0113A-61DB-4D20-8452-93C2297CDCD0.PNG"
                  alt="Troli Operasional AQUVIVA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h5 className="text-xs font-semibold text-[#021D3B]">Troli Lipat Logistik</h5>
                <p className="text-xs font-normal text-slate-500 mt-0.5">
                  Memudahkan mobilisasi dan bongkar muat dus air mineral.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer / Note */}
        <div className="mt-8 text-center">
          <p className="text-xs font-normal text-slate-500 italic">
            * Seluruh fasilitas, produk, dan perlengkapan sesuai dengan ketentuan resmi Program Kemitraan AQUVIVA by Wings Food.
          </p>
        </div>
      </div>

      {/* Professional Package Detail Modal */}
      <PackageDetailModal
        pkg={activePackageDetail}
        isOpen={activePackageDetail !== null}
        onClose={() => setActivePackageDetail(null)}
        onSelectPackage={(pkgName) => onOpenModal(pkgName)}
      />
    </section>
  );
}
