"use client";

import { useEffect, useState, useRef } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
}

interface PackageOption {
  id: string;
  code: string;
  name: string;
  price: string;
  badge?: string;
  highlight: string;
}

export default function RegistrationModal({
  isOpen,
  onClose,
  defaultPackage,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    storeName: "",
    phone: "",
    city: "",
    selectedPkg: defaultPackage || "PAKET JURAGAN AQUVIVA",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const modalRef = useRef<HTMLDivElement>(null);

  const packages: PackageOption[] = [
    {
      id: "PAKET PEMULA AQUVIVA",
      code: "01",
      name: "Paket Pemula",
      price: "Rp1.000.000",
      highlight: "Rak Display + 600 Pack Produk",
    },
    {
      id: "PAKET JURAGAN AQUVIVA",
      code: "02",
      name: "Paket Juragan",
      price: "Rp2.500.000",
      highlight: "Showcase 1 Pintu 5 Rak + 600 Pack",
    },
    {
      id: "PAKET DISTRIBUTOR AQUVIVA",
      code: "03",
      name: "Paket Distributor",
      price: "Rp5.000.000",
      highlight: "Showcase Jumbo 2 Pintu + 1.700 Pack",
    },
  ];

  // Sync defaultPackage & reset status when modal opens/closes
  useEffect(() => {
    if (defaultPackage) {
      setFormData((prev) => ({ ...prev, selectedPkg: defaultPackage }));
    }
    if (!isOpen) {
      setStatus("idle");
    }
  }, [defaultPackage, isOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Nama lengkap wajib diisi";
    if (!formData.storeName.trim()) newErrors.storeName = "Nama toko / kios usaha wajib diisi";
    if (!formData.phone.trim() || formData.phone.length < 9)
      newErrors.phone = "Nomor WhatsApp aktif wajib diisi (minimal 9 digit)";
    if (!formData.city.trim()) newErrors.city = "Kota atau Kabupaten lokasi toko wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate validation and smooth transition
    setTimeout(() => {
      setStatus("success");
    }, 500);
  };

  const handleSendToWhatsApp = () => {
    const textMessage = encodeURIComponent(
      `Halo Tim Kemitraan AQUVIVA,\n\nSaya ingin mendaftar program kemitraan resmi:\n- Nama Pemilik: ${formData.fullName}\n- Nama Toko: ${formData.storeName}\n- No. WhatsApp: ${formData.phone}\n- Lokasi Toko: ${formData.city}\n- Pilihan Paket: ${formData.selectedPkg}\n- Catatan Tambahan: ${formData.notes || "-"}\n\nMohon informasi langkah verifikasi dan jadwal pengiriman selanjutnya. Terima kasih!`
    );
    window.open(`https://wa.me/6281181261082?text=${textMessage}`, "_blank");
  };

  const selectedPkgObj = packages.find((p) => p.id === formData.selectedPkg) || packages[1];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#021D3B]/80 backdrop-blur-xs animate-fadeIn overflow-y-auto"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-2xl rounded-3xl bg-white shadow-2xl border border-[#CCE6FF] overflow-hidden my-auto max-h-[94vh] flex flex-col font-alan-sans"
      >
        {/* Modal Decorative Top Bar */}
        <div className="relative bg-gradient-to-r from-[#F4FAFF] via-[#EBF4FD] to-[#F4FAFF] px-6 py-5 border-b border-[#CCE6FF]/80 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0762C8] text-white shadow-xs">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0762C8] block">
                PROGRAM KEMITRAAN RESMI WINGS FOOD
              </span>
              <h2 id="modal-title" className="text-lg sm:text-xl font-extrabold text-[#021D3B]">
                Formulir Pendaftaran Mitra <span className="text-[#FA4616]">AQUVIVA</span>
              </h2>
            </div>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              onClose();
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-500 hover:text-[#021D3B] hover:bg-slate-100 border border-[#CCE6FF] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
            aria-label="Tutup form pendaftaran"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1">
          {status === "success" ? (
            <div className="py-4 text-center space-y-5 animate-fadeIn">
              {/* Success Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#08BB2C] ring-8 ring-emerald-50">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#021D3B]">
                  Pendaftaran Berhasil Dicatat!
                </h3>
                <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                  Data pengajuan kemitraan Anda telah siap diverifikasi oleh koordinator logistik resmi WINGS Food.
                </p>
              </div>

              {/* Receipt / Registration Ticket Card */}
              <div className="max-w-md mx-auto rounded-2xl bg-[#F8FBFE] border border-[#CCE6FF] p-4 text-left text-xs space-y-2.5">
                <div className="flex justify-between items-center pb-2 border-b border-[#CCE6FF]">
                  <span className="font-bold text-[#0762C8]">RINGKASAN PENGAJUAN</span>
                  <span className="bg-[#ECF5FF] text-[#0762C8] px-2 py-0.5 rounded font-semibold text-[11px]">
                    Siap Verifikasi
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Pemilik:</span>
                  <span className="font-bold text-[#021D3B]">{formData.fullName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Nama Toko:</span>
                  <span className="font-bold text-[#021D3B]">{formData.storeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">No. WhatsApp:</span>
                  <span className="font-bold text-[#021D3B]">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Lokasi Usaha:</span>
                  <span className="font-bold text-[#021D3B]">{formData.city}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#CCE6FF]">
                  <span className="text-slate-500">Paket Dipilih:</span>
                  <span className="font-normal text-[#FA4616] text-sm">
                    {selectedPkgObj.name} ({selectedPkgObj.price})
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col gap-3 max-w-md mx-auto">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#08BB2C] hover:bg-[#079924] text-white py-3.5 px-5 text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Lanjut Konfirmasi ke WhatsApp Koordinator</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    onClose();
                  }}
                  className="w-full rounded-xl border border-slate-200 py-2.5 px-4 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Selesai &amp; Tutup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* 1. Visual Package Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#021D3B] mb-2">
                  1. Pilih Paket Kemitraan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {packages.map((pkg) => {
                    const isSelected = formData.selectedPkg === pkg.id;
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => setFormData({ ...formData, selectedPkg: pkg.id })}
                        className={`rounded-2xl p-3.5 border transition-all cursor-pointer relative ${
                          isSelected
                            ? "bg-[#F4FAFF] border-2 border-[#0762C8] shadow-xs ring-2 ring-[#0762C8]/10"
                            : "bg-white border-slate-200 hover:border-[#0762C8]/50"
                        }`}
                      >
                        {pkg.badge && (
                          <span className="absolute -top-2.5 right-3 bg-[#FA4616] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-xs">
                            {pkg.badge}
                          </span>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-extrabold text-[#0762C8]">
                            {pkg.code}
                          </span>
                          {isSelected && (
                            <span className="w-4 h-4 rounded-full bg-[#0762C8] text-white flex items-center justify-center text-[10px]">
                              ✓
                            </span>
                          )}
                        </div>
                        <h4 className="font-extrabold text-[#021D3B] text-sm mt-1">
                          {pkg.name}
                        </h4>
                        <p className="text-sm font-normal text-[#FA4616] mt-0.5">
                          {pkg.price}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                          {pkg.highlight}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 2. Form Inputs Grid */}
              <div className="space-y-3.5 pt-1">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#021D3B]">
                  2. Data Pemilik &amp; Lokasi Toko:
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-bold text-[#021D3B] mb-1">
                      Nama Lengkap Pemilik <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Nama lengkap sesuai KTP"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full rounded-xl border pl-9 pr-3.5 py-2.5 text-sm font-medium text-[#021D3B] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                          errors.fullName ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F8FBFE]"
                        }`}
                      />
                    </div>
                    {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
                  </div>

                  {/* Phone / WhatsApp */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#021D3B] mb-1">
                      Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="Contoh: 08123456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full rounded-xl border pl-9 pr-3.5 py-2.5 text-sm font-medium text-[#021D3B] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                          errors.phone ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F8FBFE]"
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Store Name */}
                  <div>
                    <label htmlFor="storeName" className="block text-xs font-bold text-[#021D3B] mb-1">
                      Nama Toko / Kios / Warung <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <input
                        id="storeName"
                        type="text"
                        placeholder="Contoh: Toko Berkah Abadi"
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        className={`w-full rounded-xl border pl-9 pr-3.5 py-2.5 text-sm font-medium text-[#021D3B] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                          errors.storeName ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F8FBFE]"
                        }`}
                      />
                    </div>
                    {errors.storeName && (
                      <p className="mt-1 text-xs text-red-600 font-medium">{errors.storeName}</p>
                    )}
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-xs font-bold text-[#021D3B] mb-1">
                      Kota / Kabupaten Lokasi Toko <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <input
                        id="city"
                        type="text"
                        placeholder="Contoh: Surabaya, Sidoarjo, Malang"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className={`w-full rounded-xl border pl-9 pr-3.5 py-2.5 text-sm font-medium text-[#021D3B] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                          errors.city ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F8FBFE]"
                        }`}
                      />
                    </div>
                    {errors.city && <p className="mt-1 text-xs text-red-600 font-medium">{errors.city}</p>}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-[#021D3B] mb-1">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    placeholder="Contoh: Patokan dekat masjid / pinggir jalan utama..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-[#CCE6FF] bg-[#F8FBFE] px-3.5 py-2 text-sm font-medium text-[#021D3B] placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] text-white py-3.5 px-5 text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Menyimpan Pengajuan...</span>
                    </>
                  ) : (
                    <>
                      <span>Kirim Pengajuan Kemitraan</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Data Anda aman dan diteruskan langsung ke tim kanvaser logistik resmi WINGS Food.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
