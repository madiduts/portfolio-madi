---
title: "Nexus Edge Gateway"
description: "An ultra-low latency API Gateway featuring distributed rate-limiting and Redis-based caching."
tags: ["Rust", "Redis", "gRPC", "Kubernetes"]
year: 2023
status: "completed"
featured: true
order: 2
cover: "/images/projects/nexus-gateway.webp"
links:
  github: "https://github.com/madiduts/nexus-gateway"
  canva: "https://canva.com"
---

### Project Overview
Nexus Edge Gateway was built to solve the overhead problem in internal API routing within microservice environments. By using Rust, this gateway minimizes memory consumption and delivers maximum throughput without garbage collection.

### Key Features
- **Fast Routing**: Average routing time below 2 milliseconds using an optimized static router.
- **Distributed Rate-Limiting**: Uses a decentralized token bucket algorithm powered by a Redis cluster.
- **Edge Security**: Asynchronous JWT token validation directly at the main entrance gate before distributing requests downstream.

### Technical Architecture
Built a **Rust**-based router using the tokio library for non-blocking concurrency. The internal communication protocol is powered by **gRPC** for efficient binary data transfer and strict schema type definitions between microservices.
