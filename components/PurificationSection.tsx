import Image from "next/image";

export default function PurificationSection() {
  const steps = [
    {
      step: "01",
      title: "Penyaringan Multi-Layer",
      desc: "Menyaring partikel makro awal dari sumber mata air alami pegunungan dengan ketelitian tinggi.",
      isCore: false,
    },
    {
      step: "02",
      title: "Filtrasi Karbon Aktif",
      desc: "Mengeliminasi aroma dan rasa asing untuk menghasilkan kejernihan kristal alami.",
      isCore: false,
    },
    {
      step: "03",
      title: "Mikro Filtrasi Presisi",
      desc: "Menyaring mikro partikel sedimen tanpa mengurangi kandungan mineral baik yang diperlukan tubuh.",
      isCore: false,
    },
    {
      step: "04",
      title: "Teknologi Nano Purifikasi",
      desc: "Inti purifikasi berskala nano untuk memastikan kemurnian optimal di setiap tetes air.",
      isCore: true,
    },
    {
      step: "05",
      title: "Proteksi Mineral Alami",
      desc: "Mempertahankan komposisi mineral alami seimbang untuk kesegaran dan metabolisme tubuh.",
      isCore: false,
    },
    {
      step: "06",
      title: "Sterilisasi UV & Ozon",
      desc: "Sterilisasi higienis berstandar pangan internasional tanpa penambahan zat kimiawi buatan.",
      isCore: false,
    },
    {
      step: "07",
      title: "Pengemasan Higienis Otomatis",
      desc: "Proses pembotolan tertutup tanpa kontak tangan langsung untuk menjamin mutu tetap higienis.",
      isCore: false,
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-[#F8FBFE] border-b border-[#CCE6FF]/70 relative overflow-hidden">
      {/* Decorative Wave Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-[1400px] h-72 text-[#E2F0FD]"
          fill="currentColor"
          viewBox="0 0 1200 200"
        >
          <path d="M0 100 C 300 160 500 40 800 100 C 1000 150 1150 70 1200 90 L 1200 200 L 0 200 Z" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE6FF] bg-white px-4 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
            <span className="flex h-2 w-2 rounded-full bg-[#0762C8] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
              Keunggulan Mutu Pertama di Indonesia
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#021D3B] tracking-tight leading-tight">
            7 Tahap Nano Purifikasi:{" "}
            <span className="text-[#FA4616]">Kemurnian Maksimal</span>
          </h2>

          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed max-w-2xl mx-auto">
            AQUVIVA tidak hanya menyajikan air mineral murni, namun memastikan kandungan mineral alami esensial tetap terjaga seimbang. Kualitas rasa yang sejuk dan segar menjadikan AQUVIVA pilihan utama konsumen.
          </p>
        </div>

        {/* Content Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Visual Highlight Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl bg-white p-7 border border-[#CCE6FF] shadow-lg shadow-[#0762C8]/5 flex flex-col justify-between">
              {/* Product Visual Container */}
              <div className="relative h-80 sm:h-96 w-full flex items-center justify-center bg-gradient-to-b from-[#F4FAFF] to-white rounded-2xl overflow-hidden p-4">
                <Image
                  src="/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG"
                  alt="Display Rak Gondola Resmi AQUVIVA Air Mineral Murni Alami"
                  width={340}
                  height={440}
                  className="object-contain max-h-full drop-shadow-xl"
                  unoptimized
                />
              </div>

              {/* Quality Standards Lockup */}
              <div className="mt-5 rounded-2xl bg-[#021D3B] p-5 text-white">
                <div className="flex items-center justify-between text-xs font-bold text-[#CCE6FF] uppercase tracking-wider border-b border-white/10 pb-2 mb-2">
                  <span>Standar Mutu WINGS Food</span>
                  <span className="text-[#FA4616]">BPA FREE</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs pt-1">
                  <div>
                    <p className="text-white/60">pH Alami:</p>
                    <p className="font-bold text-white text-sm">7,2 - 7,8 Seimbang</p>
                  </div>
                  <div>
                    <p className="text-white/60">Kemurnian:</p>
                    <p className="font-bold text-[#CCE6FF] text-sm">Nano Purifikasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Stages Process List */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-3.5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className={`rounded-2xl p-4 transition-all duration-200 border ${
                    item.isCore
                      ? "bg-[#F0F7FF] border-[#0762C8] shadow-md shadow-[#0762C8]/10 sm:col-span-2"
                      : "bg-white border-[#CCE6FF] hover:border-[#0762C8]/60 hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-colors ${
                        item.isCore
                          ? "bg-[#FA4616] text-white shadow-xs"
                          : "bg-[#0762C8] text-white"
                      }`}
                    >
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-[#021D3B]">
                          {item.title}
                        </h3>
                        {item.isCore && (
                          <span className="text-[10px] font-extrabold uppercase bg-[#FA4616] text-white px-2 py-0.5 rounded-full">
                            Inti Teknologi
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-[#5F6368] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
