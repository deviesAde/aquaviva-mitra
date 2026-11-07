import Image from "next/image";

interface PriceCatalogProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function PriceCatalog({ onOpenModal }: PriceCatalogProps) {
  const products = [
    {
      size: "250 ml",
      packInfo: "Isi 24 Botol",
      price: "Rp 12.000",
      unitPrice: "Rp 500 / botol",
      suggestedRetail: "Rp 1.500 - Rp 2.000",
      desc: "Ukuran ringkas hemat, sangat cepat berputar di warung makan, katering, hajatan, dan kantin sekolah.",
      image: "/Component/75E0C70D-D60F-4613-AA9F-35D3D0ECBB77.PNG",
      tag: "Paling Cepat Laku",
    },
    {
      size: "700 ml",
      packInfo: "Isi 12 Botol",
      price: "Rp 15.000",
      unitPrice: "Rp 1.250 / botol",
      suggestedRetail: "Rp 3.000 - Rp 3.500",
      desc: "Pilihan utama hidrasi harian metode 3-2-1. Sangat pas dipajang di showcase dingin depan toko Anda.",
      image: "/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG",
      tag: "Best Seller Dingin",
      popular: true,
    },
    {
      size: "1,6 Liter",
      packInfo: "Isi 6 Botol",
      price: "Rp 24.000",
      unitPrice: "Rp 4.000 / botol",
      suggestedRetail: "Rp 6.000 - Rp 7.000",
      desc: "Volume besar ekonomis untuk kebutuhan keluarga, meja makan rumah, dan konsumsi perjalanan jauh.",
      image: "/Component/E6F9F2A9-C673-42D1-8CB8-527A50053959.PNG",
      tag: "Favorit Keluarga",
    },
  ];

  return (
    <section id="harga-mitra" className="py-16 sm:py-24 bg-[#F4FAFF] border-b border-[#CCE6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#FA4616] bg-orange-50 px-3.5 py-1 rounded-full border border-[#FA4616]/30">
            Daftar Produk &amp; Harga Grosir
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#021D3B] tracking-tight">
            HARGA KHUSUS MITRA AQUVIVA
          </h2>
          <p className="text-base sm:text-lg font-bold text-[#0762C8]">
            Harga Spesial untuk Mendukung Usaha Anda!
          </p>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            Dapatkan pilihan produk AQUVIVA dalam berbagai ukuran dengan penawaran harga khusus
            bagi mitra yang telah terdaftar. Modal rendah dengan margin keuntungan maksimal untuk
            setiap botol yang terjual.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.size}
              className={`relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 border shadow-sm transition-all hover:shadow-lg ${
                p.popular ? "border-[#0762C8] ring-2 ring-[#0762C8]/30" : "border-[#CCE6FF]"
              }`}
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`rounded-lg px-3 py-1 text-xs font-bold ${
                      p.popular
                        ? "bg-[#0762C8] text-white"
                        : "bg-[#ECF5FF] text-[#0762C8] border border-[#CCE6FF]"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <span className="text-xs font-semibold text-[#5F6368]">{p.packInfo}</span>
                </div>

                {/* Product Image */}
                <div className="relative my-6 h-48 w-full flex items-center justify-center">
                  <Image
                    src={p.image}
                    alt={`Produk AQUVIVA ukuran ${p.size}`}
                    width={220}
                    height={190}
                    className="object-contain max-h-full drop-shadow-md"
                  />
                </div>

                {/* Title and Specs */}
                <h3 className="text-xl font-black text-[#021D3B]">AQUVIVA {p.size}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  {p.desc}
                </p>

                {/* Pricing Box */}
                <div className="mt-5 rounded-2xl bg-[#F4FAFF] p-4 border border-[#CCE6FF]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-bold text-[#021D3B]">Harga Khusus Mitra:</span>
                    <span className="text-xl font-black text-[#0762C8]">{p.price}</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-xs text-[#5F6368] border-t border-[#CCE6FF] pt-2">
                    <span>Estimasi modal per botol:</span>
                    <span className="font-bold text-[#021D3B]">{p.unitPrice}</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-[#08BB2C]">
                    <span className="font-medium">Saran harga jual toko:</span>
                    <span className="font-bold">{p.suggestedRetail}</span>
                  </div>
                </div>
              </div>

              {/* Order Button with #FA4616 */}
              <div className="mt-6 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenModal()}
                  className="w-full rounded-xl bg-[#021D3B] hover:bg-[#FA4616] text-white py-3 px-4 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                >
                  Pesan Stok Ukuran Ini
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <div className="mt-8 text-center">
          <p className="text-xs sm:text-sm text-[#5F6368] italic">
            * Harga berlaku sesuai ketentuan program dan dapat berubah sewaktu-waktu.
          </p>
        </div>
      </div>
    </section>
  );
}
