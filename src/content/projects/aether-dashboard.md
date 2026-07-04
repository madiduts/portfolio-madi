---
title: "Aether Network Monitor"
description: "Dashboard pemantauan kesehatan jaringan real-time berbasis WebSockets dengan visualisasi grafik interaktif."
tags: ["TypeScript", "Astro", "Tailwind CSS", "WebSockets"]
year: 2024
status: "ongoing"
featured: false
order: 3
cover: "/images/projects/aether-dashboard.webp"
links:
  live: "https://aether.example.com"
---

### Ringkasan Proyek
Aether adalah antarmuka visualisasi performa tinggi untuk memantau status server dan throughput jaringan secara langsung. Dirancang untuk tim infrastruktur (*SRE*), dashboard ini menampilkan telemetri instan tanpa perlu memuat ulang halaman (*zero-refresh layout*).

### Fitur Utama
- **Real-time Streaming**: Saluran koneksi duplex penuh berbasis WebSocket untuk telemetri instan.
- **Canvas Rendering**: Rendering grafik menggunakan HTML5 Canvas untuk meminimalkan beban CPU pada browser.
- **Alert System**: Notifikasi audio dan visual instan saat metrik tertentu melebihi ambang batas kritis.

### Arsitektur Teknis
Menggunakan **Astro** untuk menghasilkan kerangka halaman statis berkecepatan tinggi, dikombinasikan dengan arsitektur pulau (*Island Architecture*) untuk bagian interaktif chart. Gaya visual disesuaikan dengan **Tailwind CSS** dengan konfigurasi warna dark-theme yang nyaman untuk pemantauan jangka panjang di layar monitor.
