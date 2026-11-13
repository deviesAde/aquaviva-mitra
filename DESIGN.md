# Panduan Desain & Color Palette Resmi AQUVIVA

Dokumen ini merangkum spesifikasi desain sistem, aset, dan standar visual brand resmi AQUVIVA.

---

## 1. Core Color Palette (Hex & OKLCH Extraction)

Sistem warna resmi AQUVIVA dibangun atas kontras antara energi dinamis (*Sun Orange*) dan kemurnian air pegunungan (*Alpine Blue & Ice Mist*):

| Kategori | Nama Warna | Hex Code | OKLCH / CSS Var | Karakter & Penggunaan |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Brand** | Aquaviva Signature Orange | `#FA4616` | `oklch(63% 0.22 41)` / `--primary` | Warna logo teks AQUVIVA, tombol CTA utama, highlight harga, dan elemen konversi. |
| **Secondary Brand** | Aquaviva Alpine Blue | `#0762C8` | `--color-blue-600` | Siluet gunung pada logo, badge keunggulan, link navigasi, dan aksen fitur. |
| **Deep Contrast** | Oceanic Dark Blue | `#021D3B` | `oklch(23.01% 0.067 253.15)` / `--dark-blue` | Warna teks utama, header tebal, navbar top-bar, dan footer resmi. |
| **Ice Background** | Pure Ice Mist | `#F4FAFF` | `--light-blue` | Background seksi produk, latar kartu, dan container bertingkat. |
| **Ice Gradient Tint** | Alpine Sky Light | `#ECF5FF` / `#E6F1FB` | Gradien sekunder | Background transisi hero dan container 7 Tahap Nano Purifikasi. |
| **Border & Divider** | Crystal Blue Border | `#CCE6FF` | `linear-gradient` | Garis tepi kartu, pemisah tabel harga, dan pembatas konten. |
| **Neutral White** | Crisp Pure White | `#FFFFFF` | `--color-white` | Kartu putih bersih, tombol sekunder, dan ruang bernafas visual. |
| **Text Muted** | Slate Secondary | `#5F6368` / `#484848` | `--label` / `--dark-gray` | Keterangan unit, syarat ketentuan, dan sub-label. |
| **WhatsApp Accent** | Care Green | `#08BB2C` / `#00A822` | `--success` | Tombol dan badge hotline WhatsApp resmi Wings Food. |

---

## 2. Gradien Resmi (Official Brand Gradients)
Identitas visual AQUVIVA menggunakan gradien lembut dengan sudut diagonal dinamis:
1. **Hero & Section Surface:** `linear-gradient(249.73deg, #F4FAFF, #FFFFFF 27.12%, #F4FAFF 54.11%)`
2. **Product Card Backdrop:** `linear-gradient(214.39deg, #ECF5FF, #FFFFFF 52.89%, #ECF5FF)`
3. **Accent Card Glow:** `linear-gradient(120deg, #E6F1FB, #C4E0F7 50%, #E6F1FB)`
4. **Header Line Border:** `linear-gradient(90deg, #FFFFFF, #CCE6FF 102.22%)`

---

## 3. Tipografi & Radius Komponen
- **Font Primer:** `var(--font-alan-sans)` / Modern geometric sans-serif (Clean, readable, ramah untuk pedagang toko & UMKM).
- **Font Aksen:** `Yellowtail` (Cursive script untuk aksen kesegaran alami).
- **Border Radius:**
  - Standard Card: `--radius: 0.625rem` (10px) hingga 16px (1rem).
  - Pill Badges: `rounded-full` untuk label status.
  - Button Radius: `0.75rem` (12px) untuk kenyamanan tap target mobile.

---

## 4. Nilai Dial Antislop
- **ENERGY: 2 (Balanced)** — Fresh, energetic commercial FMCG brand.
- **RHYTHM: 2 (Balanced)** — Komposisi mengalir terstruktur.
- **MOTION: 1 (Calm)** — Transisi fungsional halus dengan `prefers-reduced-motion` compliance.
