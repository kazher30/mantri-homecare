
import React from 'react';

const Footer: React.FC = () => {
return (
  <footer className="bg-blue-900 text-white py-12">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">  {/* UBAH jadi 4 kolom */}
        {/* Kolom 1: Logo & Deskripsi */}
        <div>
          <div className="flex items-center mb-6">
            <a href="#hero" className="flex items-center">
              <img 
                src="/logobulatMHC.png"
                alt="Mantri Home Care Logo - Spesialis Rawat Luka & Sunat Modern Kediri"
                className="h-16 w-auto mr-2"
              />
            </a>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Membawa kenyamanan rumah ke dalam layanan kesehatan medis profesional. Fokus kami adalah kesehatan dan pemulihan pasien secara menyeluruh dengan sentuhan personal.
          </p>

          {/* Sosmed */}
          <div className="flex space-x-4 mt-8">
            {/* Instagram, Facebook, TikTok, Blogger kamu tetap */}
          </div>
        </div>

        {/* Kolom 2: Tautan Cepat + Lokasi + Form */}
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

        {/* Kolom 3: Layanan Utama */}
        <div>
          <h4 className="font-bold text-xl mb-6">Layanan Utama</h4>
          <ul className="space-y-4">
            <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Khitan Anak & Dewasa</a></li>
            <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Perawatan Luka Diabetes</a></li>
            <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Luka Pasca Operasi</a></li>
            <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Home Visit Medis</a></li>
          </ul>
        </div>

        {/* KOLOM BARU 4: Layanan Lain (Link Google Maps baru) */}
        <div>
          <h4 className="font-bold text-xl mb-6">Layanan Lain</h4>
          <ul className="space-y-4">
            <li>
              <a 
                href="https://maps.app.goo.gl/iUZ3vuuSrtJXeJs8A" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Lokasi Layanan Lain</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
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
