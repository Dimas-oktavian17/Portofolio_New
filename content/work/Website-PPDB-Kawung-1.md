---
title: "Website PPDB Kawung 1"
description: "Pengembangan landing page untuk Penerimaan Peserta Didik Baru (PPDB) SMK Kawung 1 Surabaya, dibangun dengan JavaScript murni dan fokus pada animasi serta fitur dasar web."
---

# Website PPDB Kawung 1: Landing Page

---

**Website PPDB Kawung 1** adalah sebuah *landing page* sederhana yang saya rancang untuk Penerimaan Peserta Didik Baru (PPDB) SMK Kawung 1 Surabaya. Tujuan utamanya adalah menyediakan informasi bagi calon siswa yang tertarik melanjutkan pendidikan di sekolah ini.

Proyek ini menjadi langkah awal saya dalam dunia pemrograman *frontend*, dan seluruhnya dikembangkan menggunakan **JavaScript murni** tanpa bergantung pada *framework* apa pun.

## Fitur Utama

Antarmuka yang ramah pengguna ini diperkaya dengan beberapa fitur dasar dan sentuhan animasi:

* **Mode Gelap (Dark Mode):** Kami mengimplementasikan transisi mode gelap yang mulus menggunakan Tailwind CSS, meningkatkan kenyamanan visual bagi pengguna.
* **Carousel:** Pengalaman *carousel* yang responsif didukung oleh pustaka `Swiper.js`, memungkinkan tampilan informasi penting secara dinamis.

Silakan jelajahi website ini secara langsung untuk melihat semua kemampuannya!

---

## Perjalanan Saya: Tantangan & Pembelajaran Utama

Proyek ini merupakan gerbang penting yang memperkenalkan saya pada dasar-dasar pengembangan *frontend*.

### Tantangan yang Dihadapi

Salah satu tantangan utama saya adalah mengelola dua *state* yang berbeda pada JavaScript murni, terutama saat membangun fitur *tabs*. Pada saat itu, saya merasa sangat sulit mengimplementasikannya tanpa bantuan *framework*. Saya kemudian menemukan solusi menggunakan **Array Destructuring** untuk menukar nilai variabel. Ini menjadi momen pencerahan dalam pemecahan masalah. Contoh sederhananya seperti ini:

```javascript
let a = 1;
let b = 3;

[a, b] = [b, a]; // Setelah ini, a bernilai 3 dan b bernilai 1
```
### Apa yang Saya Pelajari

Proyek ini memberikan wawasan penting mengenai praktik pengembangan web:

* **Deployment:** Saya mendapatkan pengalaman langsung dalam melakukan deployment website menggunakan metode tradisional melalui cPanel. Meskipun masih dasar dan belum melibatkan CI/CD (Continuous Integration/Continuous Deployment), ini merupakan langkah penting dalam memahami proses peluncuran aplikasi web.
* **Array Destructuring:** Saya belajar bagaimana menerapkan Array Destructuring secara efektif untuk membuat fitur seperti tabs yang dinamis, menunjukkan kekuatan JavaScript murni dalam menangani logika kompleks.

Pengalaman-pengalaman ini secara signifikan memperkuat keterampilan pengembangan frontend saya, khususnya dalam membangun aplikasi web dasar dan memahami siklus deployment.

---

**Live Demo**: [Demo](https://psb.smkkawung1sby.sch.id/) 👁️

---
Note: website sudah tidak terhosting