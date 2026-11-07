"use client";

import { useState } from "react";

export default function ProfitCalculator() {
  // Estimated daily bottle sales
  const [dailyBottles700, setDailyBottles700] = useState<number>(36); // 3 pack 700ml
  const [dailyBottles250, setDailyBottles250] = useState<number>(48); // 2 pack 250ml
  const [retailPrice700, setRetailPrice700] = useState<number>(3000);
  const [retailPrice250, setRetailPrice250] = useState<number>(1500);

  // Unit costs based on wholesale prices:
  // 700ml: Rp 15.000 / 12 = Rp 1.250
  // 250ml: Rp 12.000 / 24 = Rp 500
  const cost700 = 1250;
  const cost250 = 500;

  const profitPerBottle700 = Math.max(0, retailPrice700 - cost700);
  const profitPerBottle250 = Math.max(0, retailPrice250 - cost250);

  const dailyProfit = dailyBottles700 * profitPerBottle700 + dailyBottles250 * profitPerBottle250;
  const monthlyProfit = dailyProfit * 30;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="kalkulator" className="py-16 sm:py-24 bg-[#F4FAFF] border-b border-[#CCE6FF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#08BB2C] bg-emerald-50 px-3.5 py-1 rounded-full border border-[#08BB2C]/30">
            Simulasi Keuntungan Usaha
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#021D3B] tracking-tight">
            HITUNG ESTIMASI CUAN BULANAN ANDA
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
            Gunakan simulasi interaktif di bawah ini untuk menghitung estimasi margin keuntungan
            penjualan air mineral dingin AQUVIVA di toko Anda.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white p-6 sm:p-10 border border-[#CCE6FF] shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Input Controls */}
            <div className="space-y-6">
              {/* Product 1: 700ml */}
              <div className="rounded-2xl bg-[#F4FAFF] p-5 border border-[#CCE6FF]">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#021D3B] text-sm sm:text-base">AQUVIVA 700 ml (Best Seller)</h3>
                  <span className="text-xs font-bold text-[#0762C8] bg-white px-2.5 py-0.5 rounded-md border border-[#CCE6FF]">
                    Modal: Rp 1.250/btl
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#021D3B] mb-1">
                      <label htmlFor="sales-700">Target penjualan harian:</label>
                      <span className="font-bold text-[#0762C8]">{dailyBottles700} botol / hari</span>
                    </div>
                    <input
                      id="sales-700"
                      type="range"
                      min={6}
                      max={200}
                      step={6}
                      value={dailyBottles700}
                      onChange={(e) => setDailyBottles700(Number(e.target.value))}
                      className="w-full accent-[#0762C8]"
                    />
                  </div>

                  <div>
                    <label htmlFor="retail-700" className="block text-xs font-bold text-[#021D3B] mb-1">
                      Harga jual eceran toko Anda:
                    </label>
                    <select
                      id="retail-700"
                      value={retailPrice700}
                      onChange={(e) => setRetailPrice700(Number(e.target.value))}
                      className="w-full rounded-xl border border-[#CCE6FF] bg-white px-3 py-2 text-sm font-semibold text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                    >
                      <option value={2500}>Rp 2.500 (Untung Rp 1.250 / btl)</option>
                      <option value={3000}>Rp 3.000 (Untung Rp 1.750 / btl - Standar Dingin)</option>
                      <option value={3500}>Rp 3.500 (Untung Rp 2.250 / btl)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Product 2: 250ml */}
              <div className="rounded-2xl bg-[#F4FAFF] p-5 border border-[#CCE6FF]">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-[#021D3B] text-sm sm:text-base">AQUVIVA 250 ml (Praktis)</h3>
                  <span className="text-xs font-bold text-[#FA4616] bg-white px-2.5 py-0.5 rounded-md border border-[#FA4616]/30">
                    Modal: Rp 500/btl
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-medium text-[#021D3B] mb-1">
                      <label htmlFor="sales-250">Target penjualan harian:</label>
                      <span className="font-bold text-[#FA4616]">{dailyBottles250} botol / hari</span>
                    </div>
                    <input
                      id="sales-250"
                      type="range"
                      min={12}
                      max={300}
                      step={12}
                      value={dailyBottles250}
                      onChange={(e) => setDailyBottles250(Number(e.target.value))}
                      className="w-full accent-[#FA4616]"
                    />
                  </div>

                  <div>
                    <label htmlFor="retail-250" className="block text-xs font-bold text-[#021D3B] mb-1">
                      Harga jual eceran toko Anda:
                    </label>
                    <select
                      id="retail-250"
                      value={retailPrice250}
                      onChange={(e) => setRetailPrice250(Number(e.target.value))}
                      className="w-full rounded-xl border border-[#CCE6FF] bg-white px-3 py-2 text-sm font-semibold text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                    >
                      <option value={1000}>Rp 1.000 (Untung Rp 500 / btl)</option>
                      <option value={1500}>Rp 1.500 (Untung Rp 1.000 / btl - Standar)</option>
                      <option value={2000}>Rp 2.000 (Untung Rp 1.500 / btl)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Card with #021D3B and #FA4616 */}
            <div className="rounded-3xl bg-[#021D3B] p-6 sm:p-8 text-white h-full flex flex-col justify-between shadow-lg border border-[#002d5c]">
              <div>
                <span className="rounded-full bg-[#08BB2C]/20 px-3 py-1 text-xs font-bold text-[#08BB2C] border border-[#08BB2C]/40">
                  Hasil Simulasi Margin
                </span>
                <p className="mt-4 text-xs font-bold text-[#CCE6FF] uppercase tracking-wider">
                  Estimasi Keuntungan Kotor Harian
                </p>
                <p className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {formatRupiah(dailyProfit)}
                  <span className="text-xs font-normal text-slate-300"> / hari</span>
                </p>

                <div className="my-6 border-t border-white/15 pt-6">
                  <p className="text-xs font-bold text-[#FA4616] uppercase tracking-wider">
                    Estimasi Cuan Tambahan Bulanan (30 Hari)
                  </p>
                  <p className="text-3xl sm:text-4xl font-black text-[#FA4616] mt-1">
                    {formatRupiah(monthlyProfit)}
                  </p>
                  <p className="text-xs text-[#CCE6FF] mt-2 leading-relaxed">
                    * Perhitungan berdasarkan penjualan {dailyBottles700} btl (700ml) dan {dailyBottles250} btl (250ml) per hari.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 text-xs text-blue-100 border border-white/10">
                Pajang produk dingin di showcase depan toko untuk menaikkan perputaran hingga 2x lipat!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
