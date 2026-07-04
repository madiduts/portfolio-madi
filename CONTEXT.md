# AI Context: Portfolio Website — Mahdi Imantaka Sutejo

> Dokumen ini adalah **sumber kebenaran tunggal** untuk AI yang bekerja di proyek ini.
> Baca seluruh dokumen ini sebelum menulis satu baris kode pun.

---

## 1. Identitas Proyek

| Atribut | Detail |
|---|---|
| **Nama Proyek** | Single-Page Portfolio Website V4 |
| **Pemilik** | Mahdi Imantaka Sutejo |
| **Status** | Agile / Iterative Development |
| **Tujuan Utama** | Etalase profesional yang menampilkan rekam jejak dengan estetika tech-sophisticated |

---

## 2. Tech Stack — TIDAK BOLEH DIGANTI

```
Framework   : Astro (latest stable)
Styling     : Tailwind CSS v3+
Konten      : Markdown + Astro Content Collections
Bahasa      : TypeScript (strict mode)
Deployment  : CI/CD otomatis (Vercel / Netlify — TBD)
```

**Larangan keras:**
- ❌ Jangan pakai React/Vue/Svelte sebagai framework utama
- ❌ Jangan pakai CSS framework selain Tailwind
- ❌ Jangan pakai CMS eksternal (Contentful, Sanity, dll.)
- ❌ Jangan hardcode konten di dalam komponen `.astro`

---

## 3. Arsitektur & Struktur Folder

```
portfolio-mahdi/
├── public/
│   ├── fonts/                    # Self-hosted font files (.woff2)
│   ├── images/
│   │   ├── projects/             # Thumbnail & screenshot per proyek
│   │   └── og/                   # Open Graph preview images
│   └── favicon.svg
│
├── src/
│   ├── components/
│   │   ├── ui/                   # Atom components: Button, Badge, Tag, dll.
│   │   ├── sections/             # Section-level: Hero, Projects, About, Contact
│   │   └── layout/               # Navbar, Footer, dll.
│   │
│   ├── content/
│   │   └── projects/             # Satu file .md per proyek (source of truth)
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # Layout utama dengan SEO + OG meta
│   │
│   ├── pages/
│   │   └── index.astro           # Single page — semua section di sini
│   │
│   ├── styles/
│   │   └── global.css            # Tailwind directives + custom CSS vars
│   │
│   └── lib/
│       └── utils.ts              # Helper functions (slug, date format, dll.)
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── CONTEXT.md                    # ← FILE INI
└── package.json
```

---

## 4. Design System & Tema Visual

**Tema:** Tech-Sophisticated — bukan developer blog biasa, bukan dark hacker aesthetic klise.
Target feel: *precision tool*, bukan dekorasi.

### Prinsip Visual (sudah ditetapkan, tidak perlu ditawarkan alternatif)
- **Dark-first** color scheme
- **Tipografi**: satu display face yang berkarakter + satu body face yang bersih
- **Spacing**: generous whitespace — jangan cramped
- **Animasi**: purposeful, bukan dekoratif — scroll-triggered reveal, subtle hover states
- **Warna**: detail akan ditentukan iteratif, tapi palet harus berdasar pada dark background dengan 1-2 accent color yang spesifik

### Yang Belum Dikunci (akan didiskusikan per iterasi)
- Hex values spesifik untuk palet warna
- Pilihan font family spesifik
- Jumlah dan urutan section
- Konten aktual (bio, project descriptions, copy)

---

## 5. Content Collections — Skema Proyek

Setiap proyek disimpan sebagai file `.md` di `src/content/projects/`.

### Frontmatter Schema (wajib diikuti)

```yaml
---
title: "Nama Proyek"
description: "Deskripsi singkat satu kalimat (max 160 karakter)"
tags: ["tag1", "tag2"]          # Teknologi / kategori
year: 2024                       # Tahun pengerjaan
status: "completed"              # completed | ongoing | archived
featured: true                   # Muncul di section utama?
order: 1                         # Urutan tampil (ascending)
cover: "/images/projects/nama-proyek.webp"
links:
  live: "https://..."            # Optional
  github: "https://..."          # Optional
  case_study: "https://..."      # Optional
---

Isi konten detail proyek di sini (dipakai jika ada halaman detail).
```

---

## 6. SEO & Metadata Requirements

**Setiap halaman WAJIB punya:**

```html
<!-- Basic SEO -->
<title>{pageTitle} | Mahdi Imantaka Sutejo</title>
<meta name="description" content="{description}" />

<!-- Open Graph -->
<meta property="og:title" content="{pageTitle}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="/images/og/default.png" />
<meta property="og:type" content="website" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
```

---

## 7. Performance Requirements

- **Lighthouse Score Target:** ≥ 95 semua kategori
- Gambar wajib pakai format `.webp`, dengan `width` dan `height` eksplisit
- Font wajib di-self-host (tidak boleh Google Fonts CDN langsung)
- Tidak boleh ada render-blocking resource
- Gunakan Astro's built-in image optimization (`<Image />` dari `astro:assets`)

---

## 8. Analytics

- Platform: **Umami** atau **Plausible** (privacy-first, lightweight)
- Embed via script tag di `BaseLayout.astro`
- Tidak perlu cookie banner (karena tidak tracking PII)

---

## 9. Cara Kerja Iterasi (Instruksi untuk AI)

1. **Jangan buat keputusan desain visual secara unilateral.** Kalau ada yang belum dikunci (warna, font, copy), tanya dulu atau kasih opsi.
2. **Selalu kerja dari content collections.** Jangan hardcode data proyek di komponen.
3. **Komponen baru = diskusi dulu.** Sebelum bikin komponen baru, konfirmasi tujuan dan letaknya.
4. **Konsistensi naming:** komponen di `PascalCase.astro`, utility di `camelCase.ts`, section ID di `kebab-case`.
5. **Satu PR = satu concern.** Jangan campur perubahan desain dengan perubahan konten.

---

## 10. Kalimat Pembuka untuk AI di Setiap Sesi Baru

> "Ini proyek portfolio Mahdi. Baca `CONTEXT.md` dulu. Stack-nya Astro + Tailwind. Konten dikelola via Markdown Content Collections. Kita kerja iteratif — tanya dulu sebelum buat keputusan yang belum dikunci di dokumen ini."
