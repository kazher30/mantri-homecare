
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      {/* Kolom Kiri: Logo & Deskripsi */}
      <div>
        <div className="flex items-center mb-4">
          {/* Ganti dengan logo kamu kalau ada src */}
          <div className="flex items-center mb-6">
    <a href="#hero" className="flex items-center">
      <img 
        src="/logobulatMHC.png"  // atau /logo.svg kalau SVG
        alt="Mantri Home Care Logo - Spesialis Rawat Luka & Sunat Modern Kediri"
        className="h-16 w-auto mr-2"  // ukuran logo di footer, sesuaikan kalau perlu
      />
    </a>
  </div>
          <h3 className="text-2xl font-bold">MANTRI HOME CARE</h3>
        </div>
        <p className="text-gray-300">
          Membawa kenyamanan rumah ke dalam layanan kesehatan medis profesional. Fokus kami adalah kesehatan dan pemulihan pasien secara menyeluruh dengan sentuhan personal.
        </p>

        {/* Ikon Sosmed (sesuaikan link kalau ada) */}
        <div className="flex space-x-4 mt-8">
  {/* Instagram */}
  <a href="https://www.instagram.com/herman_abd_azis" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-full w-10 h-10 flex items-center justify-center hover:opacity-90 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z"/>
    </svg>
  </a>

  {/* Facebook */}
  <a href="https://www.facebook.com/mboh.raweruh.12" target="_blank" rel="noopener noreferrer" className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-700 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.648c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.925-1.956 1.874v2.255h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"/>
    </svg>
  </a>

  {/* TikTok */}
  <a href="https://www.tiktok.com/@mantri_home_care" target="_blank" rel="noopener noreferrer" className="bg-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-800 transition">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.58 6.79c-1.57-1.13-2.44-2.7-2.44-4.35v-1.44h-3.25v12.14c0 1.77-1.44 3.21-3.21 3.21s-3.21-1.44-3.21-3.21 1.44-3.21 3.21-3.21h.21v-3.78c-3.93.35-7.07 3.59-7.07 7.57 0 4.18 3.39 7.57 7.57 7.57s7.57-3.39 7.57-7.57v-6.58c1.38 1.01 3.06 1.6 4.88 1.6v-3.78c-1.15 0-2.21-.38-3.07-1.02z"/>
    </svg>
  </a>

  {/* Blogger */}
<a href="https://mantrihomecare.blogspot.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
  <img 
        src="/Blogger-Logo-2016-present.png"  // atau /logo.svg kalau SVG
        alt="Blog Mantri Home Care Logo - Spesialis Rawat Luka & Sunat Modern Kediri"
        className="h-10 w-auto mr-2"  // ukuran logo di footer, sesuaikan kalau perlu
  />
</a>
</div>
      </div>

      {/* Kolom Tengah: Tautan Cepat + Lokasi (digabung) */}
      <div>
        <h4 className="font-bold text-xl mb-6">Tautan Cepat</h4>
        <ul className="space-y-4">
  <li><a href="#hero" className="hover:text-gray-300 transition-colors">Beranda</a></li>
  <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Layanan Kami</a></li>
  <li><a href="#tips-kesehatan" className="hover:text-gray-300 transition-colors">Tips Kesehatan</a></li>
  <li>
  <a 
    href="https://forms.gle/AHfTtxtUEkqvTrG36" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-gray-300 transition-colors flex items-center space-x-2"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
    <span>Daftar / Antri Layanan</span>
  </a>
  </li>
  <li className="mt-6 pt-4 border-t border-blue-800">
    <p className="font-semibold mb-2">Lokasi Praktek & Ulasan</p>
    <a 
      href="https://maps.app.goo.gl/MPo7bKF3iLcrQC8r8" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block hover:text-gray-300 transition-colors"
    >
      Buka Google Maps (Ulasan & Direction)
    </a>
  </li>
</ul>
      </div>

      {/* Kolom Kanan: Layanan Utama - fix scroll ke section layanan */}
      <div>
        <h4 className="font-bold text-xl mb-6">Layanan Utama</h4>
        <ul className="space-y-4">
          <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Khitan Anak & Dewasa</a></li>
          <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Perawatan Luka Diabetes</a></li>
          <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Luka Pasca Operasi</a></li>
          <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Home Visit Medis</a></li>
        </ul>
      </div>
    </div>

    {/* Baris Bawah: Copyright & Kebijakan */}
    <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <p>&copy; 2025 Mantri Home Care. All rights reserved.</p>
      <div className="space-x-6 mt-4 md:mt-0">
        <a href="/kebijakan-privasi" className="hover:text-gray-300 transition-colors">Kebijakan Privasi</a>
        <a href="/syarat-ketentuan" className="hover:text-gray-300 transition-colors">Syarat & Ketentuan</a>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;
