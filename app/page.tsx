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
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Harga Khusus Mitra AQUVIVA (Horizontal Expanding Cards) */}
        <MitraSpecialPricing />

        {/* Gabung Kemitraan AQUVIVA & Pilihan Paket Usaha */}
        <PriceCatalog onOpenModal={handleOpenModal} />

        {/* Kalkulator Cuan & Simulasi Margin */}
        <ProfitCalculator onOpenModal={handleOpenModal} />

        {/* Tanya Jawab Kemitraan */}
        <PartnershipFaq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Registration & Order Modal Dialog */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultPackage={selectedPackage}
      />
    </div>
  );
}
