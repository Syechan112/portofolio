# Personal Portfolio — Syechan Mochsin Althubaiti

Website portofolio interaktif dan modern yang dibangun untuk menampilkan profil, proyek, keahlian teknis (*tech stack*), sertifikasi, dan layanan profesional dari **Syechan Mochsin Althubaiti** (Junior Full-Stack Developer).

Didesain dengan antarmuka yang elegan, responsif, dan dinamis menggunakan **React 19**, **Tailwind CSS**, dan **Framer Motion**, serta dilengkapi dengan fitur *dark/light mode* yang halus.

---

## 🌟 Fitur Utama

- 🌓 **Dual Theme Mode (Dark & Light Mode)**: Transisi tema yang mulus dengan persistensi preferensi tema di `localStorage`.
- ⚡ **Animasi & Interaksi Modern**: Animasi *reveal*, transisi halaman, dan *custom cursor* interaktif menggunakan Framer Motion.
- 📱 **Fully Responsive Layout**: Tampilan optimal di semua ukuran layar mulai dari ponsel, tablet, hingga layar desktop lebar.
- 📂 **Showcase Proyek Lengkap**: Galeri proyek terfilter berdasarkan kategori (*Web, Frontend, Backend*) dengan tautan ke repositori GitHub dan demo langsung.
- 🚀 **Optimasi SEO & Performa**: Dilengkapi *dynamic meta tags*, Open Graph, dan Canonical URL menggunakan `react-helmet-async` serta optimasi *lazy loading* komponen (`React.lazy` & `Suspense`).
- 🧭 **Navigasi Mulus**: Dukungan *client-side routing* dan sinkronisasi *smooth scrolling* anchor antar-bagian halaman.

---

## 🛠️ Tech Stack

### Core & Frameworks
- **Framework**: [React 19](https://react.dev/)
- **Build Tool & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **SEO & Head Management**: [React Helmet Async](https://github.com/staylor/react-helmet-async)

### Styling & UI
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Motion & Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Class Utilities**: `clsx`, `tailwind-merge`

### Code Quality
- **Linter**: [Oxlint](https://oxc.rs/)

---

## 📁 Struktur Proyek

```text
my-react-app/
├── public/                 # File statis (favicon, gambar, assets publik)
├── src/
│   ├── assets/             # Asset gambar dan icon lokal
│   ├── components/         # Komponen UI modular
│   │   ├── About.jsx       # Bagian profil, edukasi, & sertifikasi
│   │   ├── CTASection.jsx  # Call-to-action & kontak form/links
│   │   ├── CustomCursor.jsx# Kursor interaktif kustom
│   │   ├── Experience.jsx  # Riwayat pengalaman kerja/proyek
│   │   ├── Footer.jsx      # Bagian footer & hak cipta
│   │   ├── Hero.jsx        # Bagian utama banner intro/headline
│   │   ├── Navbar.jsx      # Navigasi & tombol toggle tema
│   │   ├── Portfolio.jsx   # Galeri proyek interaktif
│   │   ├── Services.jsx    # Layanan keahlian yang ditawarkan
│   │   ├── Testimonials.jsx# Ulasan & testimoni
│   │   ├── TickerBanner.jsx# Ticker animasi kata kunci keahlian
│   │   └── WhyHireMe.jsx   # Nilai tambah & keunggulan
│   ├── data/
│   │   └── portfolioData.js# Sumber data terpusat (profil, proyek, sertifikat)
│   ├── App.jsx             # Router utama, logika tema, & layout
│   ├── App.css             # Style aplikasi pendukung
│   ├── index.css           # Konfigurasi Tailwind & base styling
│   └── main.jsx            # Entry point React
├── index.html              # Template HTML utama dengan meta SEO
├── package.json            # Daftar dependensi dan scripts
├── tailwind.config.js      # Konfigurasi kustom tema Tailwind
└── vite.config.js          # Konfigurasi build Vite
```

---

## 🚀 Panduan Memulai

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru).

### Instalasi & Menjalankan Aplikasi

1. **Clone Repositori:**
   ```bash
   git clone https://github.com/Syechan112/portofolio.git
   cd my-react-app
   ```

2. **Instal Dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan (Dev):**
   ```bash
   npm run dev
   ```
   Buka browser di alamat yang tertera di terminal (biasanya `http://localhost:5173`).

---

## 📜 Skrip yang Tersedia

| Perintah | Deskripsi |
| :--- | :--- |
| `npm run dev` | Menjalankan *development server* dengan fitur hot-module replacement (HMR). |
| `npm run build` | Melakukan kompilasi dan *bundle* kode untuk lingkungan produksi di folder `dist/`. |
| `npm run preview` | Menjalankan *local server* untuk menguji hasil build produksi secara lokal. |
| `npm run lint` | Menjalankan pengecekan kualitas dan sintaks kode menggunakan `oxlint`. |

---

## 📬 Kontak & Media Sosial

- **Pengembang**: Syechan Mochsin Althubaiti
- **Peran**: Junior Full-Stack Developer
- **GitHub**: [github.com/Syechan112](https://github.com/Syechan112)
- **Lokasi**: Jakarta, Indonesia / Remote Worldwide
