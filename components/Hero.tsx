import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showReviews, setShowReviews] = useState(false);

  // Daftar Screenshot Review (sesuaikan nama file sesuai yang kamu simpan di folder public)
  const reviewImages = [
    "/review1.jpeg",
    "/review2.jpeg",
    "/review3.jpeg",
    "/review4.jpeg",
    "/review5.jpeg",
    "/review6.jpeg",
  ];

  // Handler untuk membuka link Google Maps
  const handleMoreReviewsClick = () => {
    window.open('https://maps.app.goo.gl/MPo7bKF3iLcrQC8r8', '_blank');
  };

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
            Mantri Home Care menyediakan jasa khitan modern tanpa nyeri dan perawatan luka profesional oleh tenaga kesehatan berpengalaman, langsung ke tempat Anda.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#layanan" 
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

          {/* Testimoni Clickable */}
          <div 
            onClick={() => setShowReviews(true)}
            className="flex items-center space-x-6 pt-4 cursor-pointer hover:opacity-90 transition-all group"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-10 h-10 rounded-full border-2 border-blue-900 shadow-lg object-cover" 
                  src={`https://picsum.photos/seed/user${i}/100/100`} 
                  alt="Testimonial"
                />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-blue-200 text-sm font-medium group-hover:text-white transition-colors">
                1000+ Pasien Puas ★★★★★
              </p>
              <p className="text-blue-300 text-xs">Klik untuk melihat review</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/hero mantri.png" 
              alt="Professional Nurse" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal Review - Hanya Gambar Screenshot */}
      {showReviews && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-2xl font-bold text-blue-900">Apa Kata Pasien Kami</h3>
              <button 
                onClick={() => setShowReviews(false)}
                className="text-4xl leading-none text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
            
            <div className="p-6 grid md:grid-cols-2 gap-6 overflow-y-auto max-h-[65vh]">
              {reviewImages.map((img, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
                  <img 
                    src={img} 
                    alt={`Review ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Tombol Link ke Google Maps - DIPERJELAS */}
            <div className="p-6 border-t text-center bg-gray-50">
              <p className="text-gray-500 mb-4">Masih ada ratusan testimoni lainnya dari pasien kami</p>
              <button
                onClick={handleMoreReviewsClick}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Lihat Semua Ulasan di Google Maps
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;