"use client";

import { useState } from "react";

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
      a: "Mitra resmi yang telah memiliki nomor ID kemitraan berhak mendapatkan harga grosir khusus mitra (Rp 12.000/pack untuk 250ml, Rp 15.000/pack untuk 700ml, dan Rp 24.000/pack untuk 1,6L). Pemesanan ulang dapat dilakukan rutin melalui petugas kanvaser Wings Food setempat atau via kontak WhatsApp kemitraan.",
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
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/90 px-3.5 py-1 rounded-full border border-blue-200">
            Pusat Informasi Mitra
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            PERTANYAAN SEPUTAR KEMITRAAN AQUVIVA
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Berikut jawaban lengkap seputar proses pendaftaran, operasional, dan pengiriman paket kemitraan.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left text-sm sm:text-base font-bold text-slate-900 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white border border-slate-300 text-slate-700 transition-transform ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-700" : ""
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
                    className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

