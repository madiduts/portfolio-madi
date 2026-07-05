---
title: "Sentinel Analytics Pipeline"
description: "A high-performance real-time data ingestion pipeline processing millions of IoT sensor events per second using Kafka and BigQuery."
tags: ["Go", "Apache Kafka", "BigQuery", "Docker"]
year: 2024
status: "completed"
featured: true
order: 1
cover: "/images/projects/sentinel-analytics.webp"
links:
  github: "https://github.com/madiduts/sentinel-analytics"
  canva: "https://canva.com"
---

### Project Overview
Sentinel Analytics is a distributed stream processing system designed to handle large-scale IoT sensor data. It consumes raw logs, validates data structures, performs real-time aggregation, and inserts them into a data warehouse for instant analysis.

### Key Features
- **Large-Scale Ingestion**: Capable of processing up to 50,000 messages per second with sub-100ms latency.
- **Dynamic Schema**: Automatic validation of sensor data types to prevent data pollution at the storage layer.
- **Fault Tolerance**: Automatic dead-letter queue mechanism for messages that fail to decode.

### Technical Architecture
The system uses the **Go** language for memory efficiency and its robust goroutine concurrency model. Data streams are routed through a partitioned **Apache Kafka** cluster for distributed workloads, then processed before being inserted into **Google BigQuery** for advanced visualization needs.
