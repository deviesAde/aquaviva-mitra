import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#F0F8FF] via-[#E8F4FD] to-[#DFEFFD] text-slate-700 py-14 sm:py-16 border-t border-[#CCE6FF] overflow-hidden">
      {/* Background Ambient Mountain Water Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-[radial-gradient(ellipse_at_top,_rgba(204,230,255,0.45)_0%,_transparent_75%)]" />
        <svg
          className="absolute top-0 inset-x-0 w-full h-24 sm:h-32 text-[#CCE6FF]/30 fill-current"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C320,70 560,10 840,45 C1120,80 1300,20 1440,50 L1440,0 L0,0 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center justify-center bg-white rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-xs border border-[#CCE6FF]">
              <div className="relative w-[130px] h-[67px] sm:w-[155px] sm:h-[80px]">
                <Image
                  src="/Logo/aquaviva-logo-trimmed-transparent.png"
                  alt="Logo Kemitraan AQUVIVA"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-600 max-w-md leading-relaxed font-normal">
              <strong><span className="text-[#FA4616]">AQUVIVA</span> Air Mineral Murni Sejuk & Terpercaya</strong> diproses melalui teknologi 7 Tahap Nano Purifikasi: Kemurnian Maksimal pertama di Indonesia. Menjaga kemurnian optimal dan mineral baik seimbang untuk kesehatan keluarga.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0762C8] bg-white px-3.5 py-1.5 rounded-lg border border-[#CCE6FF] shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0762C8]" />
              <span>Jaringan Distribusi Resmi WINGS Food Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#021D3B]">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <a href="#harga-mitra" className="hover:text-[#0762C8] hover:translate-x-0.5 transition-all inline-block">
                  Daftar Harga Khusus Mitra
                </a>
              </li>
              <li>
                <a href="#pilihan-paket" className="hover:text-[#0762C8] hover:translate-x-0.5 transition-all inline-block">
                  Pilihan Paket (Pemula, Juragan, Distributor)
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-[#0762C8] hover:translate-x-0.5 transition-all inline-block">
                  Simulasi Cuan & Margin Toko
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#0762C8] hover:translate-x-0.5 transition-all inline-block">
                  Tanya Jawab Kemitraan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#021D3B]">
              Layanan Resmi Konsumen &amp; Mitra
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pusat informasi, pendaftaran mitra, dan layanan distribusi AQUVIVA:
            </p>
            <div className="rounded-2xl bg-white p-4 sm:p-5 border border-[#CCE6FF] shadow-xs text-xs space-y-3.5">
              {/* WhatsApp Form & Mitra Coordinator */}
              <div>
                <p className="text-slate-500 text-[11px] font-medium">WhatsApp Layanan &amp; Pendaftaran Mitra:</p>
                <a
                  href="https://wa.me/6285143114914"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#08BB2C] text-sm font-bold hover:underline inline-flex items-center gap-1.5 mt-0.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#08BB2C] animate-pulse" />
                  +62 851-4311-4914
                </a>
              </div>

              {/* Office / Distribution Center Address */}
              <div className="pt-2 border-t border-slate-100">
                <p className="text-slate-500 text-[11px] font-medium">Alamat Kantor &amp; Pusat Distribusi:</p>
                <a
                  href="https://maps.google.com/?q=Jl.+Inspeksi+Cakung+Drain+No.2,+RT.1/RW.8,+Cakung+Bar.,+Kec.+Cakung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13910"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#021D3B] text-xs font-medium hover:text-[#0762C8] leading-relaxed mt-1 block group/map"
                >
                  <span className="inline-flex items-start gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#FA4616] shrink-0 mt-0.5 group-hover/map:scale-110 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      Jl. Inspeksi Cakung Drain No.2, RT.1/RW.8, Cakung Bar., Kec. Cakung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13910, Indonesia
                    </span>
                  </span>
                </a>
              </div>

              {/* General Care */}
              <div className="pt-2.5 border-t border-slate-100 flex flex-col gap-1.5 text-[11px] text-slate-500">
                <div className="flex items-center justify-between">
                  <span>Customer Care Wings:</span>
                  <a
                    href="https://wa.me/6281181261082"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-700 hover:text-[#08BB2C]"
                  >
                    +62 811-8126-1082
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Telepon Kantor:</span>
                  <span className="font-semibold text-slate-700">+62 21-5095-7907</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-[#CCE6FF] pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Program Kemitraan AQUVIVA by WINGS Food. Hak Cipta Dilindungi.</p>
          <p className="text-slate-400">Syarat dan ketentuan kemitraan berlaku sesuai program distribusi setempat.</p>
        </div>
      </div>
    </footer>
  );
}
