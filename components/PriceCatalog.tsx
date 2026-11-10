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
      image: "/Poster/pake 2 1 of 1.png",
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


function highlightAquviva(text: string) {
  if (!text || !text.includes("AQUVIVA")) return text;
  return text.split("AQUVIVA").map((part, i, arr) => (
    <span key={i}>
      {part}
      {i < arr.length - 1 && <span className="font-bold text-[#FA4616]">AQUVIVA</span>}
    </span>
  ));
}

  const handleCardClick = (pkg: PartnershipPackage) => {
    setSelectedPackageId(pkg.id);
  };

  const handleSelectAndRegister = (pkg: PartnershipPackage) => {
    setSelectedPackageId(pkg.id);
    onOpenModal(pkg.modalPackageName);
  };

  return (
    <section id="pilihan-paket" className="relative py-16 sm:py-24 scroll-mt-20 bg-white border-b border-[#CCE6FF] font-alan-sans overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0762C8] bg-white px-3.5 py-1 rounded-full border border-[#CCE6FF] shadow-2xs">
            Pilihan Paket Usaha
          </span>
          <h2 className="text-[1.375rem] leading-snug sm:text-4xl font-bold text-[#021D3B] tracking-tight text-balance">
            <span className="block sm:inline">GABUNG KEMITRAAN</span>{" "}
            <span className="block sm:inline whitespace-nowrap text-[#FA4616] font-bold">
              AQUVIVA - WINGS Food
            </span>
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#FA4616]">
            Hadirkan Kesegaran, Kembangkan Peluang Usaha Anda
          </p>
          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Bagi Anda yang ingin mengembangkan usaha penjualan air mineral, setiap paket kemitraan resmi sudah langsung dilengkapi sarana display pendingin serta fasilitas inventaris operasional resmi siap jualan.
          </p>
        </div>

        {/* Perlengkapan Resmi Kemitraan: Official Graphic + Penjelasan Detail Gambar */}
        <div className="mt-8 sm:mt-10 max-w-5xl mx-auto">
          {/* Main Visual: image.png */}
          <div className="relative w-full aspect-[2172/724] overflow-hidden">
            <Image
              src="/Component/image.png"
              alt="Perlengkapan Resmi Kemitraan AQUVIVA: Baju Kaos, Banner Nama Toko, dan Troli Lipat"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-contain"
            />
          </div>

          {/* Penjelasan Detail 3 Perlengkapan Resmi Sesuai Gambar */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* 1. Baju Kaos */}
            <div className="rounded-2xl bg-[#F8FBFE] border border-[#CCE6FF] p-5 sm:p-6 hover:bg-white hover:border-[#0762C8]/40 transition-all shadow-2xs hover:shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-[#021D3B]">
                Baju Kaos Kemitraan
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kaos seragam operasional bahan katun sejuk dan rapi untuk pemilik toko serta staf penjualan, memperkuat identitas resmi mitra terpercaya di mata pelanggan.
              </p>
            </div>

            {/* 2. Banner Nama Toko */}
            <div className="rounded-2xl bg-[#F8FBFE] border border-[#CCE6FF] p-5 sm:p-6 hover:bg-white hover:border-[#0762C8]/40 transition-all shadow-2xs hover:shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-[#021D3B]">
                Banner Spanduk Toko
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Spanduk bahan tebal anti-luntur dicetak khusus mencantumkan nama toko usaha Anda berdampingan dengan identitas resmi <span className="font-bold text-[#FA4616]">AQUVIVA</span> Air Mineral Murni Alami.
              </p>
            </div>

            {/* 3. Troli Lipat */}
            <div className="rounded-2xl bg-[#F8FBFE] border border-[#CCE6FF] p-5 sm:p-6 hover:bg-white hover:border-[#0762C8]/40 transition-all shadow-2xs hover:shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-[#021D3B]">
                Troli Lipat Logistik
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Alat angkut lipat berdaya beban hingga 150 kg dengan rangka baja kokoh untuk mempermudah mobilisasi, pemindahan, dan penataan dus air mineral di toko tanpa menguras tenaga.
              </p>
            </div>
          </div>

          {/* 3 Komitmen Kepemilikan & Dukungan */}
          <div className="mt-6 pt-6 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#021D3B]">100% Hak Milik Mitra</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Tidak ada sistem sewa atau bagi hasil. Seluruh unit &amp; perlengkapan menjadi aset toko Anda.
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#021D3B]">Pengiriman Armada Resmi</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Unit showcase dan seluruh stok diantar aman langsung oleh armada logistik resmi WINGS Food.
              </p>
            </div>

            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#021D3B]">Dukungan Servis Resmi</h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                Unit showcase bergaransi resmi dengan teknisi siap siaga menjaga kelancaran usaha mitra.
              </p>
            </div>
          </div>
        </div>

        {/* Pilihan Paket Pengadaan Produk */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#CCE6FF]/80">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3 sm:space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-[#0762C8]">
              PILIHAN PAKET INVESTASI <span className="text-[#FA4616]">AQUVIVA</span>
            </p>
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#021D3B] tracking-tight leading-tight">
              Pilihan Skala Paket{" "}
              <span className="text-[#FA4616]">Pengadaan Produk</span>
            </h3>
            <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Tentukan paket yang sesuai dengan modal dan kapasitas penjualan toko Anda. Seluruh paket sudah termasuk sarana display pendingin serta fasilitas perlengkapan resmi di atas.
            </p>
          </div>

          {/* Interactive Clickable Package Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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
                        <span className="inline-flex items-center rounded-full bg-[#ECF5FF] border border-[#0762C8] px-3 py-0.5 text-xs font-semibold text-[#0762C8] shadow-xs">
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
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0762C8] mt-1.5 shrink-0" />
                            <span className="leading-snug">{highlightAquviva(highlight)}</span>
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
        </div>


        {/* Disclaimer / Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-normal text-slate-500 italic">
            * Seluruh fasilitas, produk, dan perlengkapan sesuai dengan ketentuan resmi Program Kemitraan <span className="font-bold text-[#FA4616]">AQUVIVA</span> by Wings Food.
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
