import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#021D3B] text-slate-300 py-12 border-t border-[#002d5c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="relative h-14 w-48">
              <Image
                src="/Logo/0F87EAE0-8919-4878-ABDE-654696C43401.PNG"
                alt="Logo Kemitraan AQUVIVA"
                fill
                className="object-contain object-left invert brightness-0"
              />
            </div>
            <p className="text-sm text-[#CCE6FF] max-w-md leading-relaxed">
              <strong>AQUVIVA: Air Mineral Murni Sejuk &amp; Terpercaya</strong> diproses melalui
              teknologi 7 Tahap Nano Purifikasi pertama di Indonesia. Menjaga kemurnian air dan mineral
              baik seimbang untuk kesehatan keluarga.
            </p>
            <div className="text-xs text-slate-400">
              Produk Resmi Berkualitas dari Jaringan Distribusi Wings Food Indonesia.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-[#CCE6FF]">
              <li>
                <a href="#keunggulan" className="hover:text-white transition-colors">
                  7 Tahap Nano Purifikasi
                </a>
              </li>
              <li>
                <a href="#harga-mitra" className="hover:text-white transition-colors">
                  Daftar Harga Khusus Mitra
                </a>
              </li>
              <li>
                <a href="#pilihan-paket" className="hover:text-white transition-colors">
                  Pilihan Paket (Pemula, Juragan, Distributor)
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white transition-colors">
                  Simulasi Cuan &amp; Margin
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Pertanyaan Sering Ditanyakan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support from aquviva.co.id */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Resmi Konsumen &amp; Mitra
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pusat informasi dan layanan resmi Wings Peduli Kemitraan AQUVIVA:
            </p>
            <div className="rounded-2xl bg-[#001429] p-4 border border-[#003366] text-xs space-y-2">
              <div>
                <p className="text-slate-400 text-[11px]">WhatsApp Care (Wings):</p>
                <a
                  href="https://wa.me/6281181261082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#08BB2C] text-sm font-bold hover:underline"
                >
                  +62 811-8126-1082
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-[11px]">Telepon Kantor:</p>
                <p className="font-mono text-white text-xs">+62 21-5095-7907</p>
              </div>
              <div className="pt-1 border-t border-slate-800">
                <a
                  href="https://aquviva.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FA4616] hover:underline font-bold"
                >
                  Kunjungi Website Resmi: aquviva.co.id &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; 2026 Kemitraan AQUVIVA. Hak cipta dilindungi.</p>
          <p>Syarat dan ketentuan kemitraan berlaku sesuai program distribusi setempat.</p>
        </div>
      </div>
    </footer>
  );
}
