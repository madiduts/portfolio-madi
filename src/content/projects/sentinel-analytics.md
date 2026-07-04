---
title: "Sentinel Analytics Pipeline"
description: "Pipeline ingesti data real-time berkinerja tinggi untuk memproses jutaan sensor IoT per detik menggunakan Kafka dan BigQuery."
tags: ["Go", "Apache Kafka", "BigQuery", "Docker"]
year: 2024
status: "completed"
featured: true
order: 1
cover: "/images/projects/sentinel-analytics.webp"
links:
  github: "https://github.com/madiduts/sentinel-analytics"
---

### Ringkasan Proyek
Sentinel Analytics adalah sistem pemrosesan aliran data (*stream processing*) terdistribusi yang dirancang untuk menangani data sensor IoT dalam skala besar. Sistem ini mengonsumsi log mentah, memvalidasi struktur data, melakukan agregasi waktu nyata, dan memasukkannya ke dalam gudang data untuk analisis instan.

### Fitur Utama
- **Ingesti Skala Besar**: Mampu memproses hingga 50.000 pesan per detik dengan latensi di bawah 100ms.
- **Skema Dinamis**: Validasi otomatis tipe data sensor untuk mencegah polusi data di tingkat penyimpanan.
- **Fault Tolerance**: Mekanisme antrean surat mati (*dead-letter queue*) otomatis untuk pesan yang gagal didekode.

### Arsitektur Teknis
Sistem ini menggunakan bahasa **Go** karena efisiensi memori dan model konkurensi goroutine-nya yang tangguh. Aliran data diarahkan melalui cluster **Apache Kafka** yang dipartisi untuk beban kerja terdistribusi, kemudian diproses sebelum dimasukkan ke dalam **Google BigQuery** untuk kebutuhan visualisasi tingkat lanjut.
