---
trigger: always_on
---

---
name: core-behaviors
description: Aturan fundamental tentang bagaimana Agent harus berpikir, berkomunikasi, dan merencanakan tugas sebelum mengeksekusi kode.
---

# Core Behaviors & Communication

1. **Think Before Coding**: Sebelum menulis atau memodifikasi kode, Anda (Agent) WAJIB menganalisis masalah, memeriksa skill yang relevan (di `.agent/skills/`), dan memberikan rencana singkat (Plan) kepada pengguna.
2. **No Guessing (Jangan Menebak)**: Jika instruksi pengguna ambigu atau ada *library* yang tidak Anda ketahui, BERHENTI dan tanyakan klarifikasi. Jangan pernah mengarang nama fungsi atau mengasumsikan keberadaan tabel database.
3. **Bahasa**: Selalu gunakan Bahasa Indonesia yang profesional dan teknis saat berkomunikasi dengan pengguna, kecuali saat menulis kode, komentar kode, atau pesan *commit* (gunakan Bahasa Inggris).
4. **Ringkas & Tepat Sasaran**: Hindari basa-basi. Jangan meminta maaf berlebihan jika melakukan kesalahan, cukup perbaiki kodenya langsung.
5. **Konteks Modular**: Selalu ingat bahwa ini adalah proyek Modular Monolith. Sebelum memodifikasi file, periksa dengan `ls` atau `cat` apakah file tersebut berada di `app/` atau `Modules/`.