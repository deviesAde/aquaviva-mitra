"use client";

import { useEffect, useState, useRef } from "react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPackage?: string;
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

  // Sync defaultPackage when modal opens
  useEffect(() => {
    if (defaultPackage) {
      setFormData((prev) => ({ ...prev, selectedPkg: defaultPackage }));
    }
  }, [defaultPackage]);

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
    if (!formData.storeName.trim()) newErrors.storeName = "Nama toko / usaha wajib diisi";
    if (!formData.phone.trim() || formData.phone.length < 9)
      newErrors.phone = "Nomor WhatsApp aktif wajib diisi minimal 9 digit";
    if (!formData.city.trim()) newErrors.city = "Kota / Kabupaten lokasi usaha wajib diisi";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    // Simulate validation and processing
    setTimeout(() => {
      setStatus("success");
    }, 600);
  };

  const handleSendToWhatsApp = () => {
    const textMessage = encodeURIComponent(
      `Halo Tim Kemitraan AQUVIVA,\n\nSaya ingin mendaftar program kemitraan resmi:\n- Nama: ${formData.fullName}\n- Nama Toko: ${formData.storeName}\n- No. WhatsApp: ${formData.phone}\n- Lokasi: ${formData.city}\n- Pilihan Paket: ${formData.selectedPkg}\n- Catatan: ${formData.notes || "-"}\n\nMohon informasi langkah selanjutnya. Terima kasih!`
    );
    // WhatsApp Care (Wings Food official contact format)
    window.open(`https://wa.me/6281181261082?text=${textMessage}`, "_blank");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#021D3B]/80 backdrop-blur-xs animate-in fade-in"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-[#CCE6FF] overflow-hidden"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#F4FAFF] text-[#021D3B] hover:bg-[#CCE6FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
          aria-label="Tutup form pendaftaran"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="py-6 text-center space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#08BB2C]">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-black text-[#021D3B]">
              Pendaftaran Berhasil Dicatat!
            </h3>
            <p className="text-sm text-[#5F6368] leading-relaxed">
              Terima kasih, <strong>{formData.fullName}</strong>. Data pengajuan kemitraan untuk toko{" "}
              <strong>{formData.storeName}</strong> dengan pilihan <strong>{formData.selectedPkg}</strong>{" "}
              telah siap diverifikasi oleh koordinator wilayah.
            </p>
            <div className="pt-2 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#08BB2C] hover:bg-[#069C24] text-white py-3.5 px-5 font-bold shadow-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#08BB2C]"
              >
                <span>Lanjut Chat Tim Kemitraan via WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  onClose();
                }}
                className="w-full rounded-xl border border-[#CCE6FF] py-2.5 px-4 text-sm font-bold text-[#021D3B] hover:bg-[#F4FAFF] transition-colors"
              >
                Selesai &amp; Tutup
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FA4616] bg-orange-50 px-2.5 py-1 rounded-md border border-[#FA4616]/30">
                Formulir Resmi
              </span>
              <h3 id="modal-title" className="mt-2 text-xl font-black text-[#021D3B]">
                Pendaftaran Kemitraan <span className="text-[#FA4616]">AQUVIVA</span>
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-[#5F6368]">
                Isi data di bawah ini untuk diverifikasi oleh tim logistik dan kanvaser wilayah Anda.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-[#021D3B] mb-1">
                  Nama Lengkap Pemilik Usaha <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Contoh: Bpk. Hendra Gunawan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full rounded-xl border px-3.5 py-2.5 text-sm font-medium text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                    errors.fullName ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F4FAFF]"
                  }`}
                />
                {errors.fullName && <p className="mt-1 text-xs text-red-600 font-medium">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="storeName" className="block text-xs font-bold text-[#021D3B] mb-1">
                    Nama Toko / Kios <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="storeName"
                    type="text"
                    placeholder="Contoh: Toko Berkah Jaya"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-sm font-medium text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                      errors.storeName ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F4FAFF]"
                    }`}
                  />
                  {errors.storeName && (
                    <p className="mt-1 text-xs text-red-600 font-medium">{errors.storeName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-[#021D3B] mb-1">
                    Nomor WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-sm font-medium text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                      errors.phone ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F4FAFF]"
                    }`}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-600 font-medium">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="city" className="block text-xs font-bold text-[#021D3B] mb-1">
                    Kota / Kabupaten <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    placeholder="Contoh: Surabaya, Sidoarjo, dll."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full rounded-xl border px-3.5 py-2.5 text-sm font-medium text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8] ${
                      errors.city ? "border-red-500 bg-red-50/50" : "border-[#CCE6FF] bg-[#F4FAFF]"
                    }`}
                  />
                  {errors.city && <p className="mt-1 text-xs text-red-600 font-medium">{errors.city}</p>}
                </div>

                <div>
                  <label htmlFor="selectedPkg" className="block text-xs font-bold text-[#021D3B] mb-1">
                    Pilihan Paket Kemitraan
                  </label>
                  <select
                    id="selectedPkg"
                    value={formData.selectedPkg}
                    onChange={(e) => setFormData({ ...formData, selectedPkg: e.target.value })}
                    className="w-full rounded-xl border border-[#CCE6FF] bg-[#F4FAFF] px-3 py-2.5 text-sm font-bold text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                  >
                    <option value="PAKET PEMULA AQUVIVA">01 | Paket Pemula (Rp 1.000.000)</option>
                    <option value="PAKET JURAGAN AQUVIVA">02 | Paket Juragan (Rp 2.500.000)</option>
                    <option value="PAKET DISTRIBUTOR AQUVIVA">03 | Paket Distributor (Rp 5.000.000)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" className="block text-xs font-bold text-[#021D3B] mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="Contoh: Lokasi dekat area kampus/sekolah..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-xl border border-[#CCE6FF] bg-[#F4FAFF] px-3.5 py-2 text-sm font-medium text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] text-white py-3.5 px-4 font-bold shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FA4616] disabled:opacity-50"
                >
                  {status === "loading" ? "Memproses Data..." : "Kirim Pengajuan Kemitraan"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
