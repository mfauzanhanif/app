import React, { useState } from 'react';
import {
  ChevronDown, Menu, X, Shield, MapPin, Phone, Mail,
  ArrowRight, Users, BookOpen, Award, CheckCircle,
  Facebook, Instagram, Youtube
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Data Dummy untuk Mapping (Bisa diganti dengan props dari Laravel/Inertia nantinya)
  const stats = [
    { label: 'Santri Aktif', value: '1.200+' },
    { label: 'Tenaga Pendidik', value: '150+' },
    { label: 'Alumni Tersebar', value: '5.000+' },
    { label: 'Tahun Berdiri', value: '1990' }, // Sesuaikan dengan tahun berdiri YDTP
  ];

  const programs = [
    {
      title: 'Kajian Kitab Kuning (Turats)',
      desc: 'Pengajian sorogan dan bandongan kitab-kitab salaf (Tafsir, Hadits, Fiqih, Alat) dengan sanad keilmuan Ahlussunnah wal Jama\'ah.',
      icon: <BookOpen className="text-green-600" size={32} />
    },
    {
      title: 'Madrasah Diniyah Takmiliyah',
      desc: 'Sistem pendidikan klasikal berjenjang (I\'dadiyah, Ula, Wustho, Ulya) untuk memperdalam pemahaman ilmu agama santri secara terstruktur.',
      icon: <Award className="text-green-600" size={32} />
    },
    {
      title: 'Tahfidzul Qur\'an',
      desc: 'Program bimbingan menghafal Al-Qur\'an dan perbaikan tahsin bacaan di bawah bimbingan langsung para asatidz/huffadz.',
      icon: <Users className="text-green-600" size={32} />
    },
    {
      title: 'Integrasi Pendidikan Formal',
      desc: 'Santri dapat sekaligus menempuh pendidikan formal di MISDT, SMP Plus, atau MAS Nusantara yang berada di dalam satu kompleks Yayasan.',
      icon: <Shield className="text-green-600" size={32} />
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 flex flex-col">
      {/* Navbar Section */}
      <nav className="bg-white px-4 md:px-8 py-3 shadow-sm relative z-50 sticky top-0">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-12 md:w-12 md:h-14 bg-green-100 flex items-center justify-center rounded-b-xl border-t-4 border-green-600">
                <Shield className="text-green-600" size={24} />
            </div>

            <div className="flex flex-col">
              <span className="text-green-600 font-serif text-lg md:text-2xl font-bold mb-1 leading-none" dir="rtl">
                معهد دار التوحيد
              </span>
              <h1 className="font-bold text-gray-900 text-[10px] md:text-sm leading-none tracking-wide">
                Pondok Pesantren Dar Al-Tauhid
              </h1>
              <p className="text-[8px] md:text-xs text-gray-800 font-bold tracking-widest mt-1 hidden md:block">
                ARJAWINANGUN - CIREBON
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <a href="#" className="text-green-600 hover:text-green-800 transition">Beranda</a>

            <div className="relative group cursor-pointer flex items-center gap-1 hover:text-green-600 transition py-4">
              Program Pendidikan <ChevronDown size={16} className="text-gray-400 group-hover:text-green-600" />
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-lg border-t-2 border-green-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 flex flex-col">
                  <a href="#" className="px-4 py-3 hover:bg-green-50 text-gray-600 hover:text-green-700 border-b border-gray-50 last:border-0">Madrasah Diniyah</a>
                  <a href="#" className="px-4 py-3 hover:bg-green-50 text-gray-600 hover:text-green-700 border-b border-gray-50 last:border-0">Kajian Kitab Salaf</a>
                  <a href="#" className="px-4 py-3 hover:bg-green-50 text-gray-600 hover:text-green-700">Tahfidzul Qur'an</a>
                </div>
              </div>
            </div>

            <a href="#tentang" className="hover:text-green-600 transition">Tentang Kami</a>
            <a href="#" className="hover:text-green-600 transition">Berita</a>
            <a href="#" className="hover:text-green-600 transition">Alumni</a>

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition shadow-md">
              Portal Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-600 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4">
            <a href="#" className="text-green-600 font-semibold border-b pb-2">Beranda</a>
            <div className="font-semibold text-gray-700 border-b pb-2">
              <span className="mb-2 block">Program Pendidikan</span>
              <div className="flex flex-col gap-2 pl-4 text-sm font-normal text-gray-600">
                <a href="#">Madrasah Diniyah</a>
                <a href="#">Kajian Kitab Salaf</a>
                <a href="#">Tahfidzul Qur'an</a>
              </div>
            </div>
            <a href="#tentang" className="text-gray-700 font-semibold border-b pb-2">Tentang Kami</a>
            <a href="#" className="text-gray-700 font-semibold border-b pb-2">Berita</a>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold w-full mt-2">
              Portal Login
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section (Replicated from Reference) */}
      <header className="relative w-full min-h-[500px] md:min-h-[600px] bg-gradient-to-r from-[#11432b] to-[#26a048] overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex flex-col md:flex-row items-center relative z-10">

          {/* Right Side (Text) - Changed order for mobile to appear first */}
          <div className="w-full md:w-1/2 py-12 md:py-24 flex flex-col justify-center text-white order-1 md:order-2 md:pl-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
              Selamat Datang di <br className="hidden md:block"/>
              Pondok Pesantren <br className="hidden md:block"/>
              Dar al Tauhid
            </h2>
            <p className="text-lg md:text-2xl mb-8 font-light text-green-50">
              Berilmu, Beradab, Berdampak
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-6 md:px-8 py-3 rounded-full border-2 border-green-400 text-green-50 hover:bg-green-400 hover:text-green-950 transition-all font-semibold shadow-sm flex items-center gap-2">
                Info Pendaftaran <ArrowRight size={18} />
              </button>
              <button className="px-6 md:px-8 py-3 rounded-full bg-[#0d3320] hover:bg-[#082215] text-white transition-all font-semibold shadow-lg">
                Unduh Brosur
              </button>
            </div>
          </div>

          {/* Left Side (Image) */}
          <div className="w-full md:w-1/2 h-full flex justify-center items-end pt-8 md:pt-0 order-2 md:order-1">
            <div className="relative w-full max-w-lg h-[350px] md:h-[550px] mt-auto">
               <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Santri Pondok Pesantren Dar Al Tauhid"
                className="absolute bottom-0 w-full h-full object-cover rounded-t-[3rem] md:rounded-t-[5rem] shadow-2xl border-4 border-white/10"
                style={{ clipPath: 'polygon(0 10%, 100% 0, 100% 100%, 0% 100%)' }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-white py-8 border-b border-gray-100 relative z-20 -mt-6 mx-4 md:mx-8 rounded-xl shadow-lg md:mt-0 md:mx-0 md:rounded-none md:shadow-none">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-bold text-green-600 mb-1">{stat.value}</span>
                <span className="text-xs md:text-sm text-gray-500 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tentang Kami Section */}
      <section id="tentang" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg">
              {/* Placeholder Video/Foto Udara Pondok */}
              <img src="https://images.unsplash.com/photo-1584553421349-355dfae2afba?auto=format&fit=crop&q=80&w=1000" alt="Gedung Pondok" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-green-600 hover:scale-110 transition-transform shadow-xl">
                  <span className="ml-1">▶</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-green-600 font-semibold tracking-wider text-sm mb-2 uppercase">Tentang Pesantren</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Mencetak Generasi Mutafaqqih Fiddin di Era Digital
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pondok Pesantren Dar Al Tauhid (PPDT) berkomitmen menyelenggarakan pendidikan kepesantrenan yang otentik. Kami membekali santri dengan penguasaan turats (kitab kuning) yang kuat—khususnya dalam bidang Tafsir, Hadits, Fiqih, dan Filologi—sekaligus memadukannya dengan kecakapan modern agar santri siap terjun ke masyarakat.
            </p>
            <ul className="space-y-3 mb-8">
              {['Sanad keilmuan yang jelas (Ahlussunnah wal Jama\'ah)', 'Pembiasaan akhlakul karimah & ubudiyah harian', 'Fasilitas asrama terintegrasi sekolah formal'].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <button className="text-green-600 font-semibold border-b-2 border-green-600 pb-1 hover:text-green-800 hover:border-green-800 transition">
              Baca Sejarah Pesantren &rarr;
            </button>
          </div>
        </div>
      </section>

      {/* Program Pendidikan / Unit Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-green-600 font-semibold tracking-wider text-sm mb-2 uppercase">Program Unggulan</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Kurikulum & Kegiatan Pesantren</h2>
            <p className="text-gray-600">Menyelenggarakan sistem pendidikan salaf yang adaptif, membina keilmuan dan adab santri secara komprehensif selama 24 jam.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((prog, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-green-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {prog.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{prog.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {prog.desc}
                </p>
                <a href="#" className="inline-flex items-center text-green-600 font-semibold text-sm hover:text-green-800">
                  Pelajari Lebih Lanjut <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Mari Bergabung Bersama Kami</h2>
          <p className="text-green-100 text-lg mb-8">
            Penerimaan Santri dan Peserta Didik Baru Tahun Ajaran telah dibuka. Segera daftarkan putra-putri Anda.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition shadow-lg">
              Daftar Sekarang
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition">
              Hubungi Panitia
            </button>
          </div>
        </div>
      </section>

      {/* Expanded Footer */}
      <footer className="bg-[#0a2618] text-green-50 pt-16 pb-8 text-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Kolom 1: Profil */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                    <Shield className="text-[#0a2618]" size={20} />
                </div>
                <span className="font-bold text-white text-lg leading-tight">
                  Pondok Pesantren<br/>Dar Al Tauhid
                </span>
              </div>
              <p className="text-green-200/80 mb-6 leading-relaxed">
                Lembaga pendidikan salafiyah yang konsisten mencetak santri berilmu amaliyah, beramal ilmiyah, dan berakhlakul karimah.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 transition"><Facebook size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 transition"><Instagram size={16} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center hover:bg-green-500 transition"><Youtube size={16} /></a>
              </div>
            </div>

            {/* Kolom 2: Kontak */}
            <div>
                <h3 className="font-bold text-white text-lg mb-6 border-b border-green-800 pb-2 inline-block">Hubungi Kami</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-green-200/80">
                      <MapPin size={18} className="shrink-0 mt-1 text-green-400" />
                      <span>Jl. KH. A. Syathori, RT/RW 02/06, Desa Arjawinangun, Kec. Arjawinangun, Kab. Cirebon, Jawa Barat - 45162</span>
                  </li>
                  <li className="flex items-center gap-3 text-green-200/80">
                      <Phone size={18} className="text-green-400" />
                      <span>(0231) 1234567</span>
                  </li>
                  <li className="flex items-center gap-3 text-green-200/80">
                      <Mail size={18} className="text-green-400" />
                      <span>info@daraltauhid.id</span>
                  </li>
                </ul>
            </div>

            {/* Kolom 3: Tautan Cepat */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6 border-b border-green-800 pb-2 inline-block">Tautan Cepat</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-green-200/80 hover:text-white transition flex items-center gap-2"><ArrowRight size={14}/> Portal Pendaftaran (PSB)</a></li>
                <li><a href="#" className="text-green-200/80 hover:text-white transition flex items-center gap-2"><ArrowRight size={14}/> Sistem Akademik PPDT</a></li>
                <li><a href="#" className="text-green-200/80 hover:text-white transition flex items-center gap-2"><ArrowRight size={14}/> E-Learning MISDT</a></li>
                <li><a href="#" className="text-green-200/80 hover:text-white transition flex items-center gap-2"><ArrowRight size={14}/> Karir & Lowongan Guru</a></li>
              </ul>
            </div>

            {/* Kolom 4: Jam Operasional */}
            <div>
              <h3 className="font-bold text-white text-lg mb-6 border-b border-green-800 pb-2 inline-block">Jam Layanan Kantor</h3>
              <ul className="space-y-2 text-green-200/80">
                <li className="flex justify-between border-b border-green-900 pb-2"><span>Senin - Kamis</span> <span>08.00 - 15.00</span></li>
                <li className="flex justify-between border-b border-green-900 pb-2"><span>Jumat</span> <span>Libur / Tutup</span></li>
                <li className="flex justify-between border-b border-green-900 pb-2"><span>Sabtu - Minggu</span> <span>08.00 - 14.00</span></li>
              </ul>
            </div>

        </div>

        {/* Copyright */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 border-t border-green-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-400/60">
          <p>&copy; {new Date().getFullYear()} Pondok Pesantren Dar Al Tauhid. Hak Cipta Dilindungi.</p>
          <p>Didesain & Dikembangkan oleh <span className="text-green-300">Tim IT PPDT (Super App Team)</span></p>
        </div>
      </footer>
    </div>
  );
}
