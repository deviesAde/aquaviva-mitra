"use client";

import Image from "next/image";
import { useState } from "react";
import PackageDetailModal, { PartnershipPackage } from "./PackageDetailModal";

interface PriceCatalogProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function PriceCatalog({ onOpenModal }: PriceCatalogProps) {
  const [selectedPackageId, setSelectedPackageId] = useState<string>("paket-juragan");
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
      shortSummary: "Pilihan awal bagi Anda yang ingin merintis usaha penjualan air mineral dengan skala modal terjangkau.",
      cardHighlights: [
        "Showcase Pendingin: 1 pintu dengan 4 rak",
        "AQUVIVA 700 ml: 100 pack",
        "AQUVIVA 250 ml: 100 pack",
        "Kaos AQUVIVA & Banner Nama Toko",
      ],
      description: "Pilihan awal bagi Anda yang ingin merintis usaha penjualan air mineral dengan skala kecil. Paket ini sudah dilengkapi unit showcase pendingin siap pakai dan pasokan air mineral murni alami berkualitas.",
      recommendedFor: "Warung baru, kios teras rumah, kantin sekolah, dan usaha rumahan.",
      facilities: [
        { label: "Showcase Pendingin", detail: "1 pintu dengan 4 rak siap pakai." },
        { label: "AQUVIVA 700 ml", detail: "100 pack pasokan produk awal." },
        { label: "AQUVIVA 250 ml", detail: "100 pack pasokan produk awal." },
        { label: "Kaos AQUVIVA", detail: "Perlengkapan operasional usaha." },
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
      shortSummary: "Pilihan ideal bagi pelaku usaha yang ingin stok lebih banyak dan kapasitas showcase lebih tinggi.",
      cardHighlights: [
        "Showcase Pendingin: 1 pintu dengan 5 rak",
        "AQUVIVA 700 ml: 300 pack",
        "AQUVIVA 250 ml: 300 pack",
        "Kaos AQUVIVA & Banner Nama Toko",
      ],
      description: "Pilihan bagi pelaku usaha yang ingin memperluas persediaan produk dan jangkauan penjualan. Paket ini dilengkapi showcase pendingin kapasitas lebih besar serta pasokan stok air mineral yang lebih melimpah.",
      recommendedFor: "Toko kelontong aktif, minimarket lingkungan, warung makan ramai, dan kedai kopi.",
      facilities: [
        { label: "Showcase Pendingin", detail: "1 pintu dengan 5 rak kapasitas besar." },
        { label: "AQUVIVA 700 ml", detail: "300 pack pasokan produk awal." },
        { label: "AQUVIVA 250 ml", detail: "300 pack pasokan produk awal." },
        { label: "Kaos AQUVIVA", detail: "Perlengkapan operasional usaha." },
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
      shortSummary: "Solusi skala besar dengan Showcase Jumbo 2 Pintu dan total stok 1.700 pack siap menyuplai toko sekitar.",
      cardHighlights: [
        "Showcase Pendingin: 2 pintu dengan 5 rak",
        "AQUVIVA 700 ml: 700 pack & 250 ml: 700 pack",
        "AQUVIVA 1,6 Liter: 300 pack",
        "Kaos AQUVIVA & Banner Nama Toko",
      ],
      description: "Pilihan bagi pelaku usaha yang membutuhkan pengadaan produk dalam skala lebih besar. Solusi skala pangkalan dengan Showcase Jumbo 2 Pintu, varian lengkap hingga 1,6 Liter, dan total stok 1.700 pack siap menyuplai toko sekitar.",
      recommendedFor: "Agen pangkalan grosir sembako, distributor air minum, toko kelontong besar di jalur utama.",
      facilities: [
        { label: "Showcase Pendingin", detail: "2 pintu dengan 5 rak kapasitas jumbo." },
        { label: "AQUVIVA 700 ml", detail: "700 pack pasokan produk." },
        { label: "AQUVIVA 250 ml", detail: "700 pack pasokan produk." },
        { label: "AQUVIVA 1,6 Liter", detail: "300 pack pasokan produk jumbo." },
        { label: "Kaos AQUVIVA", detail: "Perlengkapan operasional usaha." },
        { label: "Banner Nama Toko", detail: "Desain khusus dengan nama toko Mitra dan identitas AQUVIVA." },
      ],
      commercialTerms: [
        "Showcase Jumbo 2 Pintu dan seluruh perlengkapan menjadi aset milik mitra pangkalan sepenuhnya.",
        "Kapasitas stok total 1.700 pack siap menyuplai toko sembako, warung sekitar, dan konsumen langsung.",
        "Margin keuntungan penuh milik pangkalan atau distributor tanpa biaya royalti.",
        "Pengiriman armada truk logistik resmi WINGS Food langsung ke lokasi gudang atau toko.",
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
    <section id="pilihan-paket" className="relative py-16 sm:py-24 scroll-mt-20 bg-gradient-to-b from-white via-[#F5FAFF] to-[#F0F8FF] border-b border-[#CCE6FF]/40 overflow-hidden">
      {/* Background Soft Blue Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_center,_rgba(204,230,255,0.3)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE6FF] bg-white px-4 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
              Pilihan Paket Usaha Resmi
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#021D3B] tracking-tight leading-tight">
            Gabung Kemitraan{" "}
            <span className="text-[#FA4616]">AQUVIVA & WINGS Food</span>
          </h2>

          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Setiap paket kemitraan sudah dilengkapi sarana display pendingin bergaransi resmi, pasokan stok produk awal, seragam operasional, dan spanduk nama toko Anda.
          </p>
        </div>

        {/* Perlengkapan Resmi Kemitraan Graphic & Details */}
        <div className="mt-12 max-w-5xl mx-auto">
          {/* Main Visual Poster */}
          <div className="relative w-full aspect-[2172/724] rounded-3xl overflow-hidden bg-white border border-[#CCE6FF] shadow-sm p-2 sm:p-4">
            <Image
              src="/Component/image.png"
              alt="Perlengkapan Resmi Kemitraan AQUVIVA: Baju Kaos, Banner Nama Toko, dan Troli Lipat"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-contain"
            />
          </div>

          {/* 3 Perlengkapan Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="rounded-2xl bg-white border border-[#CCE6FF] p-5 sm:p-6 shadow-xs hover:border-[#0762C8]/50 transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8] bg-[#F4FAFF] px-2.5 py-1 rounded-md border border-[#CCE6FF]/60 inline-block mb-2">
                Fasilitas 01
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#021D3B]">
                Baju Kaos Kemitraan
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Kaos seragam operasional bahan katun sejuk dan rapi untuk pemilik toko serta tim penjualan, memperkuat citra profesional toko mitra.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#CCE6FF] p-5 sm:p-6 shadow-xs hover:border-[#0762C8]/50 transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8] bg-[#F4FAFF] px-2.5 py-1 rounded-md border border-[#CCE6FF]/60 inline-block mb-2">
                Fasilitas 02
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#021D3B]">
                Banner Spanduk Toko
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Spanduk bahan tebal dicetak khusus mencantumkan nama toko usaha Anda berdampingan dengan identitas resmi <span className="font-bold text-[#FA4616]">AQUVIVA</span>.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#CCE6FF] p-5 sm:p-6 shadow-xs hover:border-[#0762C8]/50 transition-all">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8] bg-[#F4FAFF] px-2.5 py-1 rounded-md border border-[#CCE6FF]/60 inline-block mb-2">
                Fasilitas 03
              </span>
              <h3 className="text-base sm:text-lg font-bold text-[#021D3B]">
                Troli Lipat Logistik
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Troli baja kuat berdaya angkut hingga 150 kg untuk mempermudah pemindahan dus air mineral di toko tanpa menguras tenaga fisik.
              </p>
            </div>
          </div>

          {/* 3 Key Commercial Terms */}
          <div className="mt-6 pt-6 border-t border-[#CCE6FF]/80 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
            <div className="flex items-start gap-2.5">
              <div className="h-6 w-6 rounded-full bg-[#ECF5FF] text-[#0762C8] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                ✓
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#021D3B]">100% Hak Milik Mitra</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Tidak ada sistem sewa atau bagi hasil. Seluruh unit showcase dan perlengkapan menjadi aset toko Anda.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="h-6 w-6 rounded-full bg-[#ECF5FF] text-[#0762C8] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                ✓
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#021D3B]">Pengiriman Armada Resmi</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Unit showcase dan seluruh pasokan produk diantar langsung oleh armada distribusi resmi WINGS Food.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="h-6 w-6 rounded-full bg-[#ECF5FF] text-[#0762C8] flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                ✓
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#021D3B]">Dukungan Garansi Resmi</h4>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  Unit showcase bergaransi resmi Polytron dengan layanan teknisi siap siaga menjaga kelancaran usaha mitra.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilihan 3 Paket Cards */}
        <div className="mt-16 pt-10 border-t border-[#CCE6FF]/80">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#021D3B] tracking-tight">
              Pilihan Skala Paket Pengadaan Produk
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Pilih paket yang sesuai dengan modal dan kapasitas toko Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {packages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              const isJuragan = pkg.id === "paket-juragan";

              return (
                <div
                  key={pkg.id}
                  onClick={() => handleCardClick(pkg)}
                  className={`group relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-2 border-[#0762C8] ring-4 ring-[#0762C8]/15 shadow-xl scale-[1.01]"
                      : isJuragan
                      ? "bg-white border-2 border-[#0762C8]/60 shadow-md hover:border-[#0762C8]"
                      : "bg-white border border-[#CCE6FF] shadow-xs hover:border-[#0762C8]/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col">
                    {/* Top Bar Indicator */}
                    <div className="flex items-center justify-between gap-2 pb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {pkg.code} | PAKET USAHA
                      </span>

                      {isSelected ? (
                        <span className="inline-flex items-center rounded-full bg-[#ECF5FF] border border-[#0762C8] px-3 py-0.5 text-xs font-bold text-[#0762C8] shadow-xs">
                          Paket Terpilih
                        </span>
                      ) : (
                        <span className="text-xs font-normal text-slate-400 group-hover:text-[#0762C8] transition-colors flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full border border-slate-300 group-hover:border-[#0762C8]" />
                          Pilih Paket
                        </span>
                      )}
                    </div>

                    {/* Poster Thumbnail */}
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
                      <div className="absolute bottom-3 right-3 rounded-lg bg-slate-900/80 px-2.5 py-1 text-[11px] font-semibold text-white flex items-center gap-1.5 backdrop-blur-xs opacity-90 group-hover:opacity-100 transition-opacity">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        Lihat Detail Poster
                      </div>
                    </div>

                    {/* Package Name & Price */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#021D3B] tracking-tight">
                        {pkg.name}
                      </h3>
                      <div className="mt-2.5 flex items-baseline justify-between rounded-xl bg-[#F4FAFF] px-4 py-3 border border-[#CCE6FF]">
                        <span className="text-xs font-bold text-slate-500 uppercase">
                          Biaya Investasi:
                        </span>
                        <span
                          className={`text-xl sm:text-2xl font-normal ${
                            isSelected ? "text-[#FA4616]" : "text-[#0762C8]"
                          }`}
                        >
                          {pkg.price}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm font-normal text-slate-600 leading-relaxed min-h-[44px]">
                      {pkg.shortSummary}
                    </p>

                    {/* Key Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-xs font-bold text-[#021D3B] block">
                        Fasilitas Utama Paket:
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
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(pkg);
                        setActivePackageDetail(pkg);
                      }}
                      className="w-full rounded-xl py-3 px-4 text-xs sm:text-sm font-bold border border-[#CCE6FF] hover:bg-[#F4FAFF] text-[#0762C8] transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Lihat Rincian Fasilitas</span>
                      <svg className="w-4 h-4 text-[#0762C8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectAndRegister(pkg);
                      }}
                      className={`w-full rounded-xl py-3.5 px-4 text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isSelected
                          ? "bg-[#FA4616] hover:bg-[#D83508] text-white shadow-md shadow-[#FA4616]/25"
                          : "bg-[#0762C8] hover:bg-[#004EA8] text-white shadow-xs"
                      }`}
                    >
                      <span>{isSelected ? "Pilih & Lanjut Daftar" : "Pilih Paket Ini"}</span>
                      <span className="font-normal opacity-90">({pkg.price})</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs font-normal text-slate-500">
            Seluruh fasilitas, produk, dan perlengkapan sesuai dengan ketentuan resmi Program Kemitraan <span className="font-bold text-[#FA4616]">AQUVIVA</span> by Wings Food.
          </p>
        </div>
      </div>

      {/* Package Detail Modal */}
      <PackageDetailModal
        pkg={activePackageDetail}
        isOpen={activePackageDetail !== null}
        onClose={() => setActivePackageDetail(null)}
        onSelectPackage={(pkgName) => onOpenModal(pkgName)}
      />
    </section>
  );
}
