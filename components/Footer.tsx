import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
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
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              <strong>AQUVIVA: Air Mineral Murni Alami</strong> diproses melalui teknologi 7 Tahap Nano
              Purifikasi. Program kemitraan resmi membuka peluang usaha bagi pemilik warung, kios,
              dan agen di seluruh Indonesia.
            </p>
            <div className="text-xs text-slate-500">
              Produk Berkualitas dari Jaringan Distribusi Wings Food.
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
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

          {/* Contact Support */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Informasi Kemitraan
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Konsultasi langsung dengan tim kemitraan untuk pengecekan rute distribusi toko Anda:
            </p>
            <div className="rounded-xl bg-slate-900 p-3.5 border border-slate-800 text-xs space-y-1.5">
              <p className="font-semibold text-white">Hotline WhatsApp Kemitraan:</p>
              <p className="font-mono text-emerald-400 text-sm">0812-3456-7890</p>
              <p className="text-slate-400 text-[11px]">Senin - Sabtu: 08.00 - 17.00 WIB</p>
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
