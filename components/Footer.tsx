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
              Layanan Resmi Konsumen & Mitra
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pusat informasi dan layanan resmi Wings Peduli Kemitraan AQUVIVA:
            </p>
            <div className="rounded-2xl bg-white p-4 sm:p-5 border border-[#CCE6FF] shadow-xs text-xs space-y-3">
              <div>
                <p className="text-slate-500 text-[11px] font-medium">WhatsApp Customer Care (Wings):</p>
                <a
                  href="https://wa.me/6281181261082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#08BB2C] text-sm font-normal hover:underline inline-flex items-center gap-1.5 mt-0.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#08BB2C] animate-pulse" />
                  +62 811-8126-1082
                </a>
              </div>
              <div>
                <p className="text-slate-500 text-[11px] font-medium">Telepon Kantor Resmi:</p>
                <p className="text-[#021D3B] text-xs font-normal mt-0.5">+62 21-5095-7907</p>
              </div>
              <div className="pt-2.5 border-t border-slate-100">
                <a
                  href="https://aquviva.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FA4616] hover:underline font-bold inline-flex items-center gap-1 group"
                >
                  <span>Kunjungi Website Resmi: aquviva.co.id</span>
                  <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">&rarr;</span>
                </a>
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
