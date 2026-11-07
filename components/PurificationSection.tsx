import Image from "next/image";

export default function PurificationSection() {
  const steps = [
    {
      step: "01",
      title: "Penyaringan Multi-Layer",
      desc: "Menyaring partikel makro awal dari mata air alami dengan ketelitian tinggi.",
    },
    {
      step: "02",
      title: "Filtrasi Karbon Aktif",
      desc: "Mengeliminasi aroma dan rasa asing, menghasilkan kejernihan kristal alami.",
    },
    {
      step: "03",
      title: "Mikro Filtrasi Presisi",
      desc: "Menyaring mikro partikel sedimen tanpa mengurangi kandungan mineral baik.",
    },
    {
      step: "04",
      title: "Teknologi Nano Purifikasi",
      desc: "Inti purifikasi berskala nano untuk memastikan kemurnian optimal di setiap tetes.",
    },
    {
      step: "05",
      title: "Proteksi Mineral Esensial",
      desc: "Formula penjaga mineral alami seimbang untuk kesegaran tubuh dan kesehatan.",
    },
    {
      step: "06",
      title: "Sterilisasi UV & Ozon",
      desc: "Sterilisasi higienis berstandar pangan nasional tanpa penambahan zat kimiawi.",
    },
    {
      step: "07",
      title: "Pengemasan Higienis Tertutup",
      desc: "Proses botoling otomatis tanpa kontak tangan langsung demi menjaga kesegaran higienis.",
    },
  ];

  return (
    <section id="keunggulan" className="py-16 sm:py-24 bg-white border-b border-[#CCE6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual of Gondola & Bottle Display */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl bg-aquaviva-card p-6 border border-[#CCE6FF] shadow-md">
              <div className="relative h-96 w-full flex items-center justify-center">
                <Image
                  src="/Component/3D4E3669-4A6B-4E93-B2ED-E6BEF210887B.PNG"
                  alt="Display Rak Gondola AQUVIVA Air Mineral Murni Alami"
                  width={340}
                  height={440}
                  className="object-contain max-h-full drop-shadow-xl"
                />
              </div>
              <div className="mt-4 rounded-2xl bg-[#021D3B] p-4 text-white text-center">
                <p className="text-xs uppercase tracking-wider font-bold text-[#CCE6FF]">
                  Standar Mutu Wings Food
                </p>
                <p className="text-sm sm:text-base font-bold mt-0.5 text-white">
                  pH Seimbang (7–8), BPA Free &amp; Segar Alami
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Stages Explanation */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8] bg-[#ECF5FF] px-3.5 py-1 rounded-full border border-[#CCE6FF]">
                Teknologi Pengolahan Modern Pertama di Indonesia
              </span>
              <h2 className="mt-3 text-2xl sm:text-4xl font-black text-[#021D3B] leading-tight">
                7 Tahap Nano Purifikasi: Kemurnian Maksimal, Mineral Baik Terjaga
              </h2>
              <p className="mt-3 text-base text-[#5F6368] leading-relaxed">
                AQUVIVA tidak hanya menyajikan air mineral murni, namun memastikan kandungan mineral
                esensial alami yang dibutuhkan tubuh tetap terjaga secara seimbang. Keunggulan mutu
                ini menjadi alasan utama konsumen setia memilih AQUVIVA.
              </p>
            </div>

            {/* Steps list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-[#CCE6FF] bg-[#F4FAFF] p-4 hover:bg-white hover:border-[#0762C8] hover:shadow-xs transition-all"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0762C8] text-xs font-black text-white">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-[#021D3B]">{item.title}</h3>
                      <p className="mt-1 text-xs text-[#5F6368] leading-relaxed">{item.desc}</p>
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
