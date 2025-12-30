
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
          <div className="bg-white text-blue-900 rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold mr-3">+</div>
          <h3 className="text-2xl font-bold">MANTRI HOME CARE</h3>
        </div>
        <p className="text-gray-300">
          Membawa kenyamanan rumah ke dalam layanan kesehatan medis profesional. Fokus kami adalah kesehatan dan pemulihan pasien secara menyeluruh dengan sentuhan personal.
        </p>

        {/* Ikon Sosmed (sesuaikan link kalau ada) */}
        <div className="flex space-x-4 mt-8">
          <a href="#" className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600">Fa</a>
          <a href="#" className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600">In</a>
          <a href="#" className="bg-blue-700 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600">Yo</a>
        </div>
      </div>

      {/* Kolom Tengah: Tautan Cepat + Lokasi (digabung) */}
      <div>
        <h4 className="font-bold text-xl mb-6">Tautan Cepat</h4>
        <ul className="space-y-4">
  <li><a href="#hero" className="hover:text-gray-300 transition-colors">Beranda</a></li>
  <li><a href="#layanan" className="hover:text-gray-300 transition-colors">Layanan Kami</a></li>
  <li><a href="#tips-kesehatan" className="hover:text-gray-300 transition-colors">Tips Kesehatan</a></li>
  <li className="mt-6 pt-4 border-t border-blue-800">
    <p className="font-semibold mb-2">Lokasi Praktek</p>
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
