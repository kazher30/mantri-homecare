import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showReviews, setShowReviews] = useState(false);

  // Daftar Screenshot Review (sesuaikan nama file)
  const reviewImages = [
    "/review1.jpeg",
    "/review2.jpeg",
    "/review3.jpeg",
    "/review4.jpeg",
    "/review5.jpeg",
    "/review6.jpeg",
  ];

  const handleMoreReviewsClick = () => {
    window.open('https://maps.app.goo.gl/MPo7bKF3iLcrQC8r8', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-blue-900">
      <style>{`
        @keyframes gentleShake {
          0% { transform: translate(0px, 0px) rotate(0deg); }
          20% { transform: translate(-2px, 1px) rotate(-1deg); }
          40% { transform: translate(2px, -1px) rotate(1deg); }
          60% { transform: translate(-1px, 2px) rotate(0.5deg); }
          80% { transform: translate(1px, -1px) rotate(-0.5deg); }
          100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        .hover-goyang:hover {
          animation: gentleShake 0.5s ease-in-out 0s 2;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/medical/1920/1080" 
          alt="Background" 
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
            Layanan Rawat Luka & Sunat Modern <br /> <span className="text-blue-400">Terbaik di Kediri</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-blue-200 mt-4">
            Home Care Profesional Panggilan ke Rumah 24 Jam
          </h2>
          
          <p className="text-xl text-blue-100 max-w-lg leading-relaxed">
            Mantri Home Care menyediakan <strong className="text-white">jasa rawat luka diabetes, pasca operasi, luka bakar</strong> dan 
            <strong className="text-white"> khitan modern tanpa nyeri</strong> oleh tenaga kesehatan berpengalaman, langsung ke tempat Anda di Kediri dan sekitarnya.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="#layanan" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-1 text-center">
              Lihat Layanan Kami
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold border border-white/20 transition-all hover:-translate-y-1 text-center">
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
                <img key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 shadow-lg object-cover" src={`https://picsum.photos/seed/user${i}/100/100`} alt="Testimonial" />
              ))}
            </div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-blue-200 text-sm font-medium group-hover:text-white">Ulasan Pasien Puas ★★★★★</p>
              <p className="text-blue-300 text-xs">Klik untuk melihat review</p>
            </div>
          </div>
        </div>

        <div className="hidden md:block relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/hero mantri.png" alt="Nurse" className="w-full h-auto object-cover transition-all duration-300 hover-goyang" />
          </div>
        </div>
      </div>

      {/* MODAL REVIEW - Tidak memaksakan dalam satu layar, bisa scroll */}
      {showReviews && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="p-4 md:p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900">Apa Kata Pasien Kami</h3>
              <button onClick={() => setShowReviews(false)} className="text-3xl md:text-4xl leading-none text-gray-400 hover:text-gray-600">×</button>
            </div>

            {/* Area gambar - Scroll vertikal, gambar tidak dipotong, ukuran asli terjaga */}
            <div className="overflow-y-auto flex-1 p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
                {reviewImages.map((img, index) => (
                  <div key={index} className="rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white">
                    <img 
                      src={img} 
                      alt={`Review ${index + 1}`}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Footer dengan tombol */}
            <div className="p-4 md:p-6 border-t text-center bg-gray-50 flex-shrink-0">
              <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">Masih ada banyak testimoni lainnya dari pasien kami</p>
              <button
                onClick={handleMoreReviewsClick}
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 md:px-8 py-2.5 md:py-3 rounded-xl font-semibold transition-all shadow-md text-sm md:text-base w-full sm:w-auto"
              >
                <svg className="h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                <span>Lihat Semua Ulasan di Google Maps</span>
                <svg className="h-4 w-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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