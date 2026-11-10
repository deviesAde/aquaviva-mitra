import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#021D3B] text-slate-300 py-14 border-t border-[#002d5c]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-block bg-white rounded-2xl p-3 shadow-md">
              <div className="relative h-12 w-44">
                <Image
                  src="/Logo/0F87EAE0-8919-4878-ABDE-654696C43401.PNG"
                  alt="Logo Kemitraan AQUVIVA"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-[#CCE6FF] max-w-md leading-relaxed font-normal">
              <strong><span className="text-[#FA4616]">AQUVIVA</span> Air Mineral Murni Sejuk & Terpercaya</strong> diproses melalui teknologi 7 Tahap Nano Purifikasi: Kemurnian Maksimal pertama di Indonesia. Menjaga kemurnian optimal dan mineral baik seimbang untuk kesehatan keluarga.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/15">
              <span>Jaringan Distribusi Resmi WINGS Food Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-sm text-[#CCE6FF]">
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
                  Simulasi Cuan & Margin Toko
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Tanya Jawab Kemitraan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Layanan Resmi Konsumen & Mitra
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pusat informasi dan layanan resmi Wings Peduli Kemitraan AQUVIVA:
            </p>
            <div className="rounded-2xl bg-[#001730] p-4 border border-[#003875] text-xs space-y-3">
              <div>
                <p className="text-slate-400 text-[11px] font-medium">WhatsApp Customer Care (Wings):</p>
                <a
                  href="https://wa.me/6281181261082"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#08BB2C] text-sm font-bold hover:underline inline-flex items-center gap-1.5 mt-0.5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#08BB2C]" />
                  +62 811-8126-1082
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-[11px] font-medium">Telepon Kantor Resmi:</p>
                <p className="font-mono text-white text-xs mt-0.5">+62 21-5095-7907</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <a
                  href="https://aquviva.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#FA4616] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Kunjungi Website Resmi: aquviva.co.id</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>&copy; 2026 Program Kemitraan AQUVIVA by WINGS Food. Hak Cipta Dilindungi.</p>
          <p className="text-slate-500">Syarat dan ketentuan kemitraan berlaku sesuai program distribusi setempat.</p>
        </div>
      </div>
    </footer>
  );
}
