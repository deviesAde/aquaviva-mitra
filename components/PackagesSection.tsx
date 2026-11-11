import Image from "next/image";

interface PackagesSectionProps {
  onOpenModal: (selectedPackage?: string) => void;
}

export default function PackagesSection({ onOpenModal }: PackagesSectionProps) {
  const packages = [
    {
      id: "pemula",
      name: "PAKET PEMULA AQUVIVA",
      badge: "Mulai Usaha Praktis",
      price: "Rp 1.000.000",
      tagline: "Pilihan Tepat untuk Memulai dan Mengembangkan Usaha Anda!",
      image: "/Component/BFFC194C-6B17-4F8E-B5CB-D539BC1989FB.PNG",
      imageAlt: "Showcase Pendingin 1 Pintu 4 Rak Paket Pemula AQUVIVA",
      featured: false,
      benefits: [
        "Showcase Pendingin: 1 pintu dengan 4 rak",
        "AQUVIVA 700 ml: 100 pack",
        "AQUVIVA 250 ml: 100 pack",
        "Kaos AQUVIVA: Perlengkapan pendukung usaha",
        "Banner Nama Toko: Desain khusus dengan nama toko Mitra dan identitas AQUVIVA",
      ],
      targetDesc: "Cocok untuk warung baru, kios teras rumah, atau kantin.",
    },
    {
      id: "juragan",
      name: "PAKET JURAGAN AQUVIVA",
      badge: "",
      price: "Rp 2.000.000",
      tagline: "Pilihan Tepat untuk Memperluas Jangkauan dan Mengembangkan Usaha Anda!",
      image: "/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG",
      imageAlt: "Showcase Pendingin 1 Pintu 5 Rak & Display Paket Juragan AQUVIVA",
      featured: true,
      benefits: [
        "Showcase Pendingin: 1 pintu dengan 5 rak",
        "AQUVIVA 700 ml: 300 pack",
        "AQUVIVA 250 ml: 300 pack",
        "Kaos AQUVIVA: Perlengkapan pendukung usaha",
        "Banner Nama Toko: Desain khusus dengan nama toko Mitra dan identitas AQUVIVA",
      ],
      targetDesc: "Kapasitas ideal untuk toko kelontong aktif dan warung makan.",
    },
    {
      id: "distributor",
      name: "PAKET DISTRIBUTOR AQUVIVA",
      badge: "Kapasitas Usaha Jumbo",
      price: "Rp 5.000.000",
      tagline: "Solusi Usaha Skala Besar untuk Memperluas Distribusi dan Memaksimalkan Peluang Penjualan!",
      image: "/Component/BBCE2376-BD2C-4E67-9556-CA5509574DAB.PNG",
      imageAlt: "Showcase Pendingin 2 Pintu 5 Rak Paket Distributor AQUVIVA",
      featured: false,
      benefits: [
        "Showcase Pendingin: 2 pintu dengan 5 rak",
        "AQUVIVA 700 ml: 700 pack",
        "AQUVIVA 250 ml: 700 pack",
        "AQUVIVA 1,6 Liter: 300 pack",
        "Kaos AQUVIVA: Perlengkapan pendukung usaha",
        "Banner Nama Toko: Desain khusus dengan nama toko Mitra dan identitas AQUVIVA",
      ],
      targetDesc: "Solusi pangkalan agen grosir, toko sembako besar, dan distributor.",
    },
  ];

  return (
    <section id="pilihan-paket" className="py-16 sm:py-24 bg-white border-b border-[#CCE6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8] bg-[#ECF5FF] px-3.5 py-1 rounded-full border border-[#CCE6FF]">
            Investasi Kemitraan Resmi
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#021D3B] tracking-tight">
            PILIHAN PAKET KEMITRAAN AQUVIVA
          </h2>
          <p className="text-base text-[#5F6368] leading-relaxed">
            Pilih paket yang sesuai dengan kapasitas toko dan target perputaran usaha Anda. Setiap
            paket sudah dilengkapi fasilitas display pendingin dan materi promosi siap pakai.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative flex flex-col justify-between rounded-3xl p-7 transition-all ${
                pkg.featured
                  ? "bg-gradient-to-b from-[#021D3B] via-[#002d5c] to-[#021D3B] text-white shadow-2xl ring-4 ring-[#FA4616]/70"
                  : "bg-[#F4FAFF] border border-[#CCE6FF] text-[#021D3B] hover:shadow-lg"
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 min-h-[26px]">
                  {pkg.badge ? (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                        pkg.featured
                          ? "bg-[#FA4616] text-white"
                          : "bg-[#ECF5FF] text-[#0762C8] border border-[#CCE6FF]"
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  ) : (
                    <span />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      pkg.featured ? "text-[#CCE6FF]" : "text-[#5F6368]"
                    }`}
                  >
                    Fasilitas Lengkap
                  </span>
                </div>

                {/* Package Name */}
                <h3
                  className={`mt-4 text-xl sm:text-2xl font-black ${
                    pkg.featured ? "text-white" : "text-[#021D3B]"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-1 text-xs sm:text-sm font-medium leading-relaxed ${
                    pkg.featured ? "text-blue-100" : "text-[#5F6368]"
                  }`}
                >
                  {pkg.tagline}
                </p>

                {/* Package Visual */}
                <div className="relative my-6 h-56 w-full flex items-center justify-center rounded-2xl bg-white/10 p-2">
                  <Image
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    width={220}
                    height={220}
                    className="object-contain max-h-full drop-shadow-xl"
                  />
                </div>

                {/* Price Display */}
                <div
                  className={`rounded-2xl p-4 text-center border ${
                    pkg.featured
                      ? "bg-white/10 border-white/20"
                      : "bg-white border-[#CCE6FF] shadow-xs"
                  }`}
                >
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      pkg.featured ? "text-[#CCE6FF]" : "text-[#5F6368]"
                    }`}
                  >
                    Biaya Paket Investasi
                  </p>
                  <p
                    className={`text-2xl sm:text-3xl font-normal mt-0.5 ${
                      pkg.featured ? "text-[#FA4616]" : "text-[#0762C8]"
                    }`}
                  >
                    {pkg.price}
                  </p>
                </div>

                {/* Facilities List */}
                <div className="mt-6 space-y-3">
                  <p
                    className={`text-xs font-bold uppercase tracking-wider ${
                      pkg.featured ? "text-[#CCE6FF]" : "text-[#5F6368]"
                    }`}
                  >
                    Fasilitas &amp; Produk Paket:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <svg
                          className={`h-5 w-5 shrink-0 ${
                            pkg.featured ? "text-[#FA4616]" : "text-[#08BB2C]"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span
                          className={`leading-relaxed ${
                            pkg.featured ? "text-slate-100" : "text-[#021D3B]"
                          }`}
                        >
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-slate-200/20">
                <p
                  className={`text-xs mb-3 text-center italic ${
                    pkg.featured ? "text-[#CCE6FF]" : "text-[#5F6368]"
                  }`}
                >
                  {pkg.targetDesc}
                </p>
                <button
                  type="button"
                  onClick={() => onOpenModal(pkg.name)}
                  className={`w-full rounded-xl py-3.5 px-5 text-sm sm:text-base font-extrabold transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    pkg.featured
                      ? "bg-[#FA4616] hover:bg-[#D83508] text-white focus-visible:ring-[#FA4616]"
                      : "bg-[#0762C8] hover:bg-[#004EA8] text-white focus-visible:ring-[#0762C8]"
                  }`}
                >
                  Pilih {pkg.name.replace("AQUVIVA", "").trim()}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Merchandise & Collateral Showcase Row */}
        <div className="mt-14 rounded-3xl bg-[#F4FAFF] p-6 sm:p-8 border border-[#CCE6FF]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-2xl bg-white p-2 border border-[#CCE6FF]">
                <Image
                  src="/Component/7EEE37C3-1D1A-4E8F-B970-ABA5446EC896.PNG"
                  alt="Kaos Resmi Mitra AQUVIVA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#021D3B]">Kaos Resmi Mitra</h4>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  Seragam operasional eksklusif untuk staf dan pemilik toko.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-2xl bg-white p-2 border border-[#CCE6FF]">
                <Image
                  src="/Component/BEE0113A-61DB-4D20-8452-93C2297CDCD0.PNG"
                  alt="Troli Operasional AQUVIVA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#021D3B]">Troli Logistik Mitra</h4>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  Kemudahan mobilitas bongkar muat karton air ke rak pajang.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 rounded-2xl bg-white p-2 border border-[#CCE6FF]">
                <Image
                  src="/Logo/0F87EAE0-8919-4878-ABDE-654696C43401.PNG"
                  alt="Banner Nama Toko Mitra AQUVIVA"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#021D3B]">Banner Nama Toko</h4>
                <p className="text-xs text-[#5F6368] mt-0.5">
                  Cetak spanduk nama toko Anda dengan branding resmi AQUVIVA.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
