"use client";

import { useState } from "react";

function highlightAquviva(text: string) {
  if (!text || !text.includes("AQUVIVA")) return text;
  return text.split("AQUVIVA").map((part, i, arr) => (
    <span key={i}>
      {part}
      {i < arr.length - 1 && <span className="font-bold text-[#FA4616]">AQUVIVA</span>}
    </span>
  ));
}

export default function PartnershipFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Apa saja persyaratan untuk bergabung menjadi Mitra AQUVIVA?",
      a: "Syarat utama sangat mudah: memiliki lokasi usaha fisik aktif (seperti toko kelontong, warung makan, agen sembako, kantin, kios, atau pangkalan distribusi) yang memiliki daya listrik stabil untuk operasional showcase pendingin, serta bersedia memajang produk AQUVIVA di area depan toko.",
    },
    {
      q: "Bagaimana proses pengiriman showcase dan stok produk perdana?",
      a: "Setelah pendaftaran dan verifikasi lokasi selesai, unit showcase pendingin beserta stok produk air mineral, seragam kaos, dan materi promosi akan diantar langsung oleh armada distribusi resmi ke alamat toko Anda tanpa biaya pengiriman tambahan di area jangkauan rute distribusi.",
    },
    {
      q: "Bagaimana cara melakukan repeat order (pemesanan ulang) selanjutnya?",
      a: "Mitra resmi yang telah memiliki nomor ID kemitraan berhak mendapatkan harga grosir khusus mitra (Rp12.000/pack untuk 250ml, Rp15.000/pack untuk 700ml, dan Rp24.000/pack untuk 1,6L). Pemesanan ulang dapat dilakukan rutin melalui petugas kanvaser Wings Food setempat atau via kontak WhatsApp kemitraan.",
    },
    {
      q: "Apakah desain dan cetak banner nama toko benar-benar gratis?",
      a: "Benar. Banner promosi akan dicetak khusus dengan mencantumkan nama toko/usaha Anda berdampingan dengan identitas resmi Kemitraan AQUVIVA untuk meningkatkan daya tarik dan visibilitas toko di mata konsumen sekitar.",
    },
    {
      q: "Bagaimana layanan garansi dan perawatan untuk unit showcase pendingin?",
      a: "Seluruh unit showcase pendingin Polytron yang disertakan dalam paket kemitraan berstatus resmi dan bergaransi. Apabila terjadi kendala teknis pendinginan, tim teknisi servis resmi siap membantu pengecekan dan perbaikan.",
    },
  ];

  return (
    <section id="faq" className="relative py-16 sm:py-24 bg-gradient-to-b from-white via-[#F5FAFF] to-[#F0F8FF] border-b border-[#CCE6FF]/40 overflow-hidden">
      {/* Background Soft Ambient Mist */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-[radial-gradient(ellipse_at_center,_rgba(204,230,255,0.3)_0%,_transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE6FF] bg-white px-4 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
              Pusat Informasi & Tanya Jawab
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#021D3B] tracking-tight">
            Tanya Jawab Kemitraan <span className="text-[#FA4616]">AQUVIVA</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5F6368] max-w-2xl mx-auto">
            Jawaban lengkap seputar persyaratan, sistem kepemilikan unit, pengiriman, dan pemesanan ulang grosir.
          </p>
        </div>

        {/* Accordions */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#CCE6FF] bg-white overflow-hidden shadow-xs hover:border-[#0762C8]/50 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left text-sm sm:text-base font-bold text-[#021D3B] hover:text-[#0762C8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="pr-2">{highlightAquviva(faq.q)}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "rotate-180 bg-[#0762C8] border-[#0762C8] text-white"
                        : "bg-[#F4FAFF] border-[#CCE6FF] text-[#021D3B]"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${index}`}
                    className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-sm text-[#484848] leading-relaxed border-t border-[#CCE6FF]/60 bg-[#FAFCFF] animate-fadeIn"
                  >
                    {highlightAquviva(faq.a)}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Help Box */}
        <div className="mt-10 rounded-2xl bg-white border border-[#CCE6FF] p-6 text-center space-y-3 shadow-xs">
          <p className="text-xs sm:text-sm text-[#5F6368]">
            Masih ada pertanyaan lain seputar sistem kemitraan atau rute pengiriman ke area toko Anda?
          </p>
          <a
            href="https://wa.me/6281181261082?text=Halo%20Tim%20Kemitraan%20AQUVIVA,%20saya%20ingin%20berkonsultasi%20seputar%20syarat%20dan%20rute%20pengiriman%20kemitraan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#08BB2C] hover:bg-[#079E25] text-white font-bold text-xs sm:text-sm px-5 py-3 shadow-sm transition-all"
          >
            <span>Hubungi WhatsApp Care Wings (+62 811-8126-1082)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
