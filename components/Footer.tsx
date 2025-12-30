
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight uppercase">Mantri Home Care</span>
            </div>
            <p className="text-blue-100/70 text-lg leading-relaxed max-w-md">
              Membawa kenyamanan rumah ke dalam layanan kesehatan medis profesional. Fokus kami adalah kesehatan dan pemulihan pasien secara menyeluruh dengan sentuhan personal.
            </p>
            <div className="flex space-x-5">
              {['facebook', 'instagram', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all">
                  <span className="capitalize text-xs font-bold">{social.substring(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h6 className="text-lg font-bold">Tautan Cepat</h6>
            <ul className="space-y-4 text-blue-100/60 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Layanan Kami</a></li>
              <li><a href="#tips-kesehatan" className="hover:text-white transition-colors">Tips Kesehatan</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="text-lg font-bold">Layanan Utama</h6>
            <ul className="space-y-4 text-blue-100/60 font-medium">
              <li><a href="#" className="hover:text-white transition-colors">Khitan Anak & Dewasa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Perawatan Luka Diabetes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luka Pasca Operasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home Visit Medis</a></li>
              <li><a href="#lokasi-maps" className="hover:text-white transition-colors">Lokasi Praktek</a></li>
<li>
  <a 
    href="https://maps.app.goo.gl/MPo7bKF3iLcrQC8r8" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
    Buka Google Maps (Ulasan & Direction)
  </a>
</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/40 text-sm">
            © {new Date().getFullYear()} Mantri Home Care. All rights reserved.
          </p>
          <div className="flex space-x-8 text-blue-100/40 text-sm">
            <a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
