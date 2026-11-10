"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MitraSpecialPricing from "@/components/MitraSpecialPricing";
import PriceCatalog from "@/components/PriceCatalog";
import ProfitCalculator from "@/components/ProfitCalculator";
import PartnershipFaq from "@/components/PartnershipFaq";
import RegistrationModal from "@/components/RegistrationModal";
import Footer from "@/components/Footer";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("PAKET JURAGAN AQUVIVA");

  const handleOpenModal = (pkgName?: string) => {
    if (pkgName) {
      setSelectedPackage(pkgName);
    }
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white selection:bg-[#FA4616] selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: Peluang Bisnis Kemitraan & Showcase Preview */}
        <Hero onOpenModal={handleOpenModal} />

        {/* 3. Harga Grosir Khusus Mitra AQUVIVA (250ml, 700ml, 1,6L) */}
        <MitraSpecialPricing />

        {/* 5. Pilihan Skala Paket Usaha (Pemula, Juragan, Distributor) */}
        <PriceCatalog onOpenModal={handleOpenModal} />

        {/* 6. Kalkulator Simulasi Cuan & Margin Keuntungan Toko */}
        <ProfitCalculator onOpenModal={handleOpenModal} />

        {/* 7. Pusat Informasi & Tanya Jawab Kemitraan */}
        <PartnershipFaq />
      </main>

      {/* 8. Footer Resmi WINGS Food */}
      <Footer />

      {/* 9. Interactive Registration & Ordering Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultPackage={selectedPackage}
      />
    </div>
  );
}
