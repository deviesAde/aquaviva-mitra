"use client";

import Image from "next/image";
import { useState } from "react";

interface ProfitCalculatorProps {
  onOpenModal?: (selectedPackage?: string) => void;
}

export default function ProfitCalculator({ onOpenModal }: ProfitCalculatorProps) {
  const [activeSizeTab, setActiveSizeTab] = useState<"all" | "700" | "250" | "1600">("all");

  // Daily bottle sales volume
  const [dailyBottles700, setDailyBottles700] = useState<number>(36); // 3 pack
  const [dailyBottles250, setDailyBottles250] = useState<number>(48); // 2 pack
  const [dailyBottles1600, setDailyBottles1600] = useState<number>(12); // 2 pack

  // Retail selling prices
  const [retailPrice700, setRetailPrice700] = useState<number>(3000);
  const [retailPrice250, setRetailPrice250] = useState<number>(1500);
  const [retailPrice1600, setRetailPrice1600] = useState<number>(6000);

  // Wholesale cost per bottle
  const cost700 = 1250;
  const cost250 = 500;
  const cost1600 = 4000;

  const profitPerBottle700 = Math.max(0, retailPrice700 - cost700);
  const profitPerBottle250 = Math.max(0, retailPrice250 - cost250);
  const profitPerBottle1600 = Math.max(0, retailPrice1600 - cost1600);

  const show700 = activeSizeTab === "all" || activeSizeTab === "700";
  const show250 = activeSizeTab === "all" || activeSizeTab === "250";
  const show1600 = activeSizeTab === "all" || activeSizeTab === "1600";

  const dailyProfit700 = show700 ? dailyBottles700 * profitPerBottle700 : 0;
  const dailyProfit250 = show250 ? dailyBottles250 * profitPerBottle250 : 0;
  const dailyProfit1600 = show1600 ? dailyBottles1600 * profitPerBottle1600 : 0;

  const dailyProfit = dailyProfit700 + dailyProfit250 + dailyProfit1600;
  const monthlyProfit = dailyProfit * 30;

  // Presets for sales volume
  const presets700 = [
    { label: "12 btl (1 Pack)", value: 12 },
    { label: "24 btl (2 Pack)", value: 24 },
    { label: "36 btl (3 Pack)", value: 36 },
    { label: "60 btl (5 Pack)", value: 60 },
  ];

  const presets250 = [
    { label: "24 btl (1 Pack)", value: 24 },
    { label: "48 btl (2 Pack)", value: 48 },
    { label: "72 btl (3 Pack)", value: 72 },
    { label: "120 btl (5 Pack)", value: 120 },
  ];

  const presets1600 = [
    { label: "6 btl (1 Pack)", value: 6 },
    { label: "12 btl (2 Pack)", value: 12 },
    { label: "18 btl (3 Pack)", value: 18 },
    { label: "30 btl (5 Pack)", value: 30 },
  ];

  const prices700 = [
    { price: 2500, label: "Rp2.500" },
    { price: 3000, label: "Rp3.000" },
    { price: 3500, label: "Rp3.500" },
  ];

  const prices250 = [
    { price: 1000, label: "Rp1.000" },
    { price: 1500, label: "Rp1.500" },
    { price: 2000, label: "Rp2.000" },
  ];

  const prices1600 = [
    { price: 5000, label: "Rp5.000" },
    { price: 6000, label: "Rp6.000" },
    { price: 7000, label: "Rp7.000" },
  ];

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const daysToRecoup1M = dailyProfit > 0 ? Math.ceil(1000000 / dailyProfit) : 0;
  const daysToRecoup2M = dailyProfit > 0 ? Math.ceil(2500000 / dailyProfit) : 0;

  return (
    <section id="kalkulator" className="relative py-16 sm:py-24 bg-white border-b border-[#CCE6FF]/70 overflow-hidden">
      {/* Background Subtle Contour */}
      <div className="absolute inset-0 pointer-events-none opacity-25 select-none overflow-hidden" aria-hidden="true">
        <svg
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[1300px] h-60 text-[#CCE6FF]"
          fill="none"
          viewBox="0 0 1200 200"
        >
          <path
            d="M0 120 C 350 180 550 40 850 110 C 1050 160 1150 70 1200 90 L 1200 200 L 0 200 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#CCE6FF] bg-[#F4FAFF] px-4 py-1.5 shadow-[0_2px_8px_rgba(2,29,59,0.04)]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0762C8]">
              Simulasi Cuan & Margin Keuntungan
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#021D3B] tracking-tight leading-tight">
            Hitung Estimasi Cuan{" "}
            <span className="text-[#FA4616]">Bulanan Toko Anda</span>
          </h2>

          <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Simulasikan potensi laba bersih penjualan air mineral dingin AQUVIVA. Anda dapat memilih ukuran botol, menentukan target penjualan, dan menyesuaikan harga eceran toko Anda.
          </p>
        </div>

        {/* Main Interactive Card */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl bg-white p-6 sm:p-8 lg:p-10 border border-[#CCE6FF] shadow-lg shadow-[#0762C8]/5">
          {/* Size Selector Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-[#CCE6FF]">
            <span className="text-xs font-bold uppercase tracking-wider text-[#021D3B]">
              Filter Ukuran Botol:
            </span>
            <div className="inline-flex rounded-xl bg-[#F0F6FD] p-1 border border-[#CCE6FF] gap-1 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setActiveSizeTab("all")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSizeTab === "all"
                    ? "bg-[#0762C8] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#0762C8] hover:bg-white/60"
                }`}
              >
                Semua Varian
              </button>
              <button
                type="button"
                onClick={() => setActiveSizeTab("700")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSizeTab === "700"
                    ? "bg-[#0762C8] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#0762C8] hover:bg-white/60"
                }`}
              >
                700 ml
              </button>
              <button
                type="button"
                onClick={() => setActiveSizeTab("250")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSizeTab === "250"
                    ? "bg-[#0762C8] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#0762C8] hover:bg-white/60"
                }`}
              >
                250 ml
              </button>
              <button
                type="button"
                onClick={() => setActiveSizeTab("1600")}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeSizeTab === "1600"
                    ? "bg-[#0762C8] text-white shadow-xs"
                    : "text-slate-600 hover:text-[#0762C8] hover:bg-white/60"
                }`}
              >
                1,6 Liter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-6">
            {/* Left Column: Parameter Controls */}
            <div className="lg:col-span-7 space-y-6">
              {/* Product 1: 700ml */}
              {show700 && (
                <div className="rounded-2xl bg-[#F8FBFE] p-5 sm:p-6 border border-[#CCE6FF] transition-all hover:border-[#0762C8]/50 shadow-xs">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-14 shrink-0">
                        <Image
                          src="/Products/aquaviva-700ml.png"
                          alt="AQUVIVA 700 ml"
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 block">
                          12 Botol / Pack
                        </span>
                        <h3 className="font-bold text-[#021D3B] text-base sm:text-lg">
                          <span className="text-[#FA4616]">AQUVIVA</span> 700 ml
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-medium text-slate-500 block">Modal Grosir</span>
                      <span className="inline-block text-xs font-bold text-[#0762C8] bg-white px-2.5 py-1 rounded-md border border-[#CCE6FF]">
                        Rp1.250 / btl
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <label htmlFor="sales-700" className="font-bold text-[#021D3B]">
                        Target Penjualan Harian:
                      </label>
                      <span className="font-extrabold text-[#0762C8] bg-white px-3 py-1 rounded-lg border border-[#CCE6FF]">
                        {dailyBottles700} Botol <span className="text-slate-400 font-normal">({(dailyBottles700 / 12).toFixed(1)} Pack)</span>
                      </span>
                    </div>

                    <input
                      id="sales-700"
                      type="range"
                      min={6}
                      max={120}
                      step={6}
                      value={dailyBottles700}
                      onChange={(e) => setDailyBottles700(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0762C8]"
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {presets700.map((preset) => {
                        const isSelected = dailyBottles700 === preset.value;
                        return (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() => setDailyBottles700(preset.value)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all border text-center ${
                              isSelected
                                ? "bg-[#0762C8] text-white border-[#0762C8] shadow-xs"
                                : "bg-white text-slate-600 border-slate-200 hover:border-[#0762C8]/50"
                            }`}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="custom-retail-700" className="text-xs font-bold text-[#021D3B]">
                          Harga Jual Eceran Toko:
                        </label>
                        <span className="text-[11px] font-bold text-[#08BB2C]">
                          Margin: +Rp {profitPerBottle700.toLocaleString("id-ID")}/btl
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {prices700.map((p) => {
                          const isSelected = retailPrice700 === p.price;
                          return (
                            <button
                              key={p.price}
                              type="button"
                              onClick={() => setRetailPrice700(p.price)}
                              className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? "bg-[#0762C8] text-white border-[#0762C8] shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-[#0762C8]/50"
                              }`}
                            >
                              <span className="block text-xs font-bold">{p.label}</span>
                              <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-blue-100" : "text-[#08BB2C]"}`}>
                                +Rp {(p.price - cost700).toLocaleString("id-ID")}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <div className="relative flex-1">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-bold text-slate-400">
                            Rp
                          </span>
                          <input
                            id="custom-retail-700"
                            type="number"
                            min={0}
                            step={100}
                            value={retailPrice700 || ""}
                            onChange={(e) => setRetailPrice700(Math.max(0, Number(e.target.value)))}
                            placeholder="Ketik harga eceran..."
                            className="w-full rounded-xl border border-[#CCE6FF] bg-white pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-500 shrink-0">/ btl (Custom)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 2: 250ml */}
              {show250 && (
                <div className="rounded-2xl bg-[#F8FBFE] p-5 sm:p-6 border border-[#CCE6FF] transition-all hover:border-[#0762C8]/50 shadow-xs">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-12 shrink-0">
                        <Image
                          src="/Products/aquaviva-250ml.png"
                          alt="AQUVIVA 250 ml"
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 block">
                          24 Botol / Pack
                        </span>
                        <h3 className="font-bold text-[#021D3B] text-base sm:text-lg">
                          <span className="text-[#FA4616]">AQUVIVA</span> 250 ml
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-medium text-slate-500 block">Modal Grosir</span>
                      <span className="inline-block text-xs font-bold text-[#0762C8] bg-white px-2.5 py-1 rounded-md border border-[#CCE6FF]">
                        Rp500 / btl
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <label htmlFor="sales-250" className="font-bold text-[#021D3B]">
                        Target Penjualan Harian:
                      </label>
                      <span className="font-extrabold text-[#0762C8] bg-white px-3 py-1 rounded-lg border border-[#CCE6FF]">
                        {dailyBottles250} Botol <span className="text-slate-400 font-normal">({(dailyBottles250 / 24).toFixed(1)} Pack)</span>
                      </span>
                    </div>

                    <input
                      id="sales-250"
                      type="range"
                      min={12}
                      max={240}
                      step={12}
                      value={dailyBottles250}
                      onChange={(e) => setDailyBottles250(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0762C8]"
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {presets250.map((preset) => {
                        const isSelected = dailyBottles250 === preset.value;
                        return (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() => setDailyBottles250(preset.value)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all border text-center ${
                              isSelected
                                ? "bg-[#0762C8] text-white border-[#0762C8] shadow-xs"
                                : "bg-white text-slate-600 border-slate-200 hover:border-[#0762C8]/50"
                            }`}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="custom-retail-250" className="text-xs font-bold text-[#021D3B]">
                          Harga Jual Eceran Toko:
                        </label>
                        <span className="text-[11px] font-bold text-[#08BB2C]">
                          Margin: +Rp {profitPerBottle250.toLocaleString("id-ID")}/btl
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {prices250.map((p) => {
                          const isSelected = retailPrice250 === p.price;
                          return (
                            <button
                              key={p.price}
                              type="button"
                              onClick={() => setRetailPrice250(p.price)}
                              className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? "bg-[#0762C8] text-white border-[#0762C8] shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-[#0762C8]/50"
                              }`}
                            >
                              <span className="block text-xs font-bold">{p.label}</span>
                              <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-blue-100" : "text-[#08BB2C]"}`}>
                                +Rp {(p.price - cost250).toLocaleString("id-ID")}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <div className="relative flex-1">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-bold text-slate-400">
                            Rp
                          </span>
                          <input
                            id="custom-retail-250"
                            type="number"
                            min={0}
                            step={100}
                            value={retailPrice250 || ""}
                            onChange={(e) => setRetailPrice250(Math.max(0, Number(e.target.value)))}
                            placeholder="Ketik harga eceran..."
                            className="w-full rounded-xl border border-[#CCE6FF] bg-white pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-500 shrink-0">/ btl (Custom)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Product 3: 1,6 Liter */}
              {show1600 && (
                <div className="rounded-2xl bg-[#F8FBFE] p-5 sm:p-6 border border-[#CCE6FF] transition-all hover:border-[#0762C8]/50 shadow-xs">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-9 h-14 shrink-0">
                        <Image
                          src="/Products/aquaviva-1600ml.png"
                          alt="AQUVIVA 1,6 Liter"
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-500 block">
                          6 Botol / Pack
                        </span>
                        <h3 className="font-bold text-[#021D3B] text-base sm:text-lg">
                          <span className="text-[#FA4616]">AQUVIVA</span> 1,6 Liter
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-[11px] font-medium text-slate-500 block">Modal Grosir</span>
                      <span className="inline-block text-xs font-bold text-[#0762C8] bg-white px-2.5 py-1 rounded-md border border-[#CCE6FF]">
                        Rp4.000 / btl
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <label htmlFor="sales-1600" className="font-bold text-[#021D3B]">
                        Target Penjualan Harian:
                      </label>
                      <span className="font-extrabold text-[#0762C8] bg-white px-3 py-1 rounded-lg border border-[#CCE6FF]">
                        {dailyBottles1600} Botol <span className="text-slate-400 font-normal">({(dailyBottles1600 / 6).toFixed(1)} Pack)</span>
                      </span>
                    </div>

                    <input
                      id="sales-1600"
                      type="range"
                      min={6}
                      max={60}
                      step={6}
                      value={dailyBottles1600}
                      onChange={(e) => setDailyBottles1600(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0762C8]"
                    />

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      {presets1600.map((preset) => {
                        const isSelected = dailyBottles1600 === preset.value;
                        return (
                          <button
                            key={preset.value}
                            type="button"
                            onClick={() => setDailyBottles1600(preset.value)}
                            className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all border text-center ${
                              isSelected
                                ? "bg-[#0762C8] text-white border-[#0762C8] shadow-xs"
                                : "bg-white text-slate-600 border-slate-200 hover:border-[#0762C8]/50"
                            }`}
                          >
                            {preset.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-2 space-y-2">
                      <div className="flex items-center justify-between">
                        <label htmlFor="custom-retail-1600" className="text-xs font-bold text-[#021D3B]">
                          Harga Jual Eceran Toko:
                        </label>
                        <span className="text-[11px] font-bold text-[#08BB2C]">
                          Margin: +Rp {profitPerBottle1600.toLocaleString("id-ID")}/btl
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2">
                        {prices1600.map((p) => {
                          const isSelected = retailPrice1600 === p.price;
                          return (
                            <button
                              key={p.price}
                              type="button"
                              onClick={() => setRetailPrice1600(p.price)}
                              className={`py-2 px-2.5 rounded-xl border text-center transition-all ${
                                isSelected
                                  ? "bg-[#0762C8] text-white border-[#0762C8] shadow-xs"
                                  : "bg-white text-slate-700 border-slate-200 hover:border-[#0762C8]/50"
                              }`}
                            >
                              <span className="block text-xs font-bold">{p.label}</span>
                              <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-blue-100" : "text-[#08BB2C]"}`}>
                                +Rp {(p.price - cost1600).toLocaleString("id-ID")}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-2 pt-1">
                        <div className="relative flex-1">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-xs font-bold text-slate-400">
                            Rp
                          </span>
                          <input
                            id="custom-retail-1600"
                            type="number"
                            min={0}
                            step={100}
                            value={retailPrice1600 || ""}
                            onChange={(e) => setRetailPrice1600(Math.max(0, Number(e.target.value)))}
                            placeholder="Ketik harga eceran..."
                            className="w-full rounded-xl border border-[#CCE6FF] bg-white pl-9 pr-3 py-2 text-xs sm:text-sm font-bold text-[#021D3B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0762C8]"
                          />
                        </div>
                        <span className="text-xs font-semibold text-slate-500 shrink-0">/ btl (Custom)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Financial Results Showcase */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#021D3B] p-6 sm:p-8 text-white shadow-xl border border-[#003875] relative overflow-hidden">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#08BB2C]/20 border border-[#08BB2C]/40 px-3.5 py-1 text-xs font-bold text-[#08BB2C]">
                  <span className="w-2 h-2 rounded-full bg-[#08BB2C] animate-pulse" />
                  Estimasi Laba Bersih Toko
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#CCE6FF]">
                    Estimasi Cuan Tambahan Bulanan (30 Hari)
                  </span>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FA4616] tracking-tight">
                    {formatRupiah(monthlyProfit)}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300 pt-1">
                    <span>Atau setara</span>
                    <span className="font-bold text-white bg-white/10 px-2.5 py-0.5 rounded-md border border-white/15">
                      {formatRupiah(dailyProfit)} / hari
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 border border-white/10 space-y-2 text-xs">
                  <span className="text-[11px] font-bold text-[#CCE6FF] uppercase tracking-wider block mb-1">
                    Rincian Penjualan Harian
                  </span>
                  {show700 && (
                    <div className="flex justify-between items-center text-slate-200">
                      <span>700 ml ({dailyBottles700} btl @ {formatRupiah(retailPrice700)})</span>
                      <span className="font-bold text-white">+{formatRupiah(dailyProfit700)}</span>
                    </div>
                  )}
                  {show250 && (
                    <div className="flex justify-between items-center text-slate-200">
                      <span>250 ml ({dailyBottles250} btl @ {formatRupiah(retailPrice250)})</span>
                      <span className="font-bold text-white">+{formatRupiah(dailyProfit250)}</span>
                    </div>
                  )}
                  {show1600 && (
                    <div className="flex justify-between items-center text-slate-200">
                      <span>1,6 L ({dailyBottles1600} btl @ {formatRupiah(retailPrice1600)})</span>
                      <span className="font-bold text-white">+{formatRupiah(dailyProfit1600)}</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-200">Total Profit Bersih Harian:</span>
                    <span className="text-[#08BB2C]">{formatRupiah(dailyProfit)}</span>
                  </div>
                </div>

                {dailyProfit > 0 && (
                  <div className="rounded-xl bg-[#0762C8]/30 border border-[#0762C8]/50 p-4 text-xs text-blue-100 flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-[#CCE6FF] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <span className="font-bold text-white block">Proyeksi Balik Modal Usaha:</span>
                      <p className="text-[11px] text-blue-100/90 mt-0.5 leading-relaxed">
                        Modal Paket Juragan (Rp 2,5 Jt) berpotensi kembali dalam <span className="font-bold text-white">~{daysToRecoup2M} hari</span> penjualan (Paket Pemula ~{daysToRecoup1M} hari).
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-6 border-t border-white/15">
                <button
                  type="button"
                  onClick={() => onOpenModal ? onOpenModal("PAKET JURAGAN AQUVIVA") : document.getElementById("pilihan-paket")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FA4616] hover:bg-[#D83508] active:bg-[#C23007] text-white py-4 px-5 text-sm sm:text-base font-bold shadow-lg shadow-[#FA4616]/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Daftar Kemitraan Sekarang</span>
                  <span>&rarr;</span>
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Penempatan showcase di area depan toko memicu pembelian langsung oleh konsumen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
