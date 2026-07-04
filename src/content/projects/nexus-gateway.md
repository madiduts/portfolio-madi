---
title: "Nexus Edge Gateway"
description: "API Gateway dengan latensi ultra-rendah, dilengkapi dengan rate-limiting terdistribusi dan caching berbasis Redis."
tags: ["Rust", "Redis", "gRPC", "Kubernetes"]
year: 2023
status: "completed"
featured: true
order: 2
cover: "/images/projects/nexus-gateway.webp"
links:
  github: "https://github.com/madiduts/nexus-gateway"
---

### Ringkasan Proyek
Nexus Edge Gateway dibangun untuk memecahkan masalah kelebihan beban (*overhead*) pada perutean API internal di lingkungan mikroservis. Dengan menggunakan Rust, gateway ini meminimalkan penggunaan memori dan memberikan *throughput* maksimum tanpa garbage collection.

### Fitur Utama
- **Routing Cepat**: Waktu perutean rata-rata di bawah 2 milidetik menggunakan perute statis teroptimasi.
- **Rate-Limiting Terdistribusi**: Menggunakan algoritma *token bucket* terdesentralisasi yang didukung oleh Redis cluster.
- **Edge Security**: Validasi token JWT secara asinkron langsung di gerbang masuk utama sebelum mendistribusikan request ke downstream.

### Arsitektur Teknis
Membangun router berbasis **Rust** menggunakan pustaka tokio untuk konkurensi non-blocking. Protokol komunikasi internal didukung oleh **gRPC** untuk efisiensi transfer data biner dan definisi tipe skema yang ketat antara mikroservis.
