
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/medical/1920/1080" 
          alt="Medical Home Care Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">Layanan Kesehatan Profesional di Rumah</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Kesehatan Keluarga <br /> <span className="text-blue-400">Dimulai dari Rumah</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
            Mantri Home Care menyediakan jasa khitan modern tanpa nyeri dan perawatan luka profesional oleh tenaga medis berpengalaman, langsung ke tempat Anda.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#services" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-1 text-center"
            >
              Lihat Layanan Kami
            </a>
            <a 
              href="#contact" 
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold border border-white/20 transition-all hover:-translate-y-1 text-center"
            >
              Konsultasi Gratis
            </a>
          </div>
          
          <div className="flex items-center space-x-6 pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-blue-900 shadow-lg" 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Testimonial User"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-blue-200 text-sm font-medium">1000+ Pasien Puas</p>
            </div>
          </div>
        </div>
        
        <div className="hidden md:block relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700">
            <img 
              src="https://picsum.photos/seed/nurse/800/1000" 
              alt="Professional Nurse" 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl z-20">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Sertifikasi Resmi</p>
                <p className="text-blue-900 font-extrabold">Tenaga Kesehatan Medis Berlisensi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
