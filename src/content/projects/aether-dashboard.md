---
title: "Aether Network Monitor"
description: "A real-time network health monitoring dashboard based on WebSockets with interactive chart visualizations."
tags: ["TypeScript", "Astro", "Tailwind CSS", "WebSockets"]
year: 2024
status: "ongoing"
featured: false
order: 3
cover: "/images/projects/aether-dashboard.webp"
links:
  live: "https://aether.example.com"
  canva: "https://canva.com"
---

### Project Overview
Aether is a high-performance visualization interface for real-time monitoring of server status and network throughput. Designed for infrastructure (*SRE*) teams, this dashboard displays instant telemetry without requiring page reloads (*zero-refresh layout*).

### Key Features
- **Real-time Streaming**: Full-duplex connection channel based on WebSockets for instant telemetry.
- **Canvas Rendering**: Chart rendering using HTML5 Canvas to minimize CPU load on the browser.
- **Alert System**: Instant audio and visual notifications when specific metrics exceed critical thresholds.

### Technical Architecture
Uses **Astro** to generate a high-speed static page framework, combined with Island Architecture for the interactive chart sections. The visual style is customized with **Tailwind CSS** using a dark-theme color configuration suitable for long-term monitoring on display screens.
