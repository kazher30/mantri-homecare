import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showReviews, setShowReviews] = useState(false);

  // Daftar Review - Ganti nama file sesuai yang kamu simpan di folder public
  const reviews = [
    { 
      img: "/review1.png", 
      name: "Bpk. Ahmad Santoso", 
      text: "Khitan anak saya sangat nyaman, tidak menangis sama sekali. Pelayanan cepat dan profesional." 
    },
    { 
      img: "/review2.png", 
      name: "Ibu Siti Rahayu", 
      text: "Luka diabetes ayah saya sembuh dengan cepat. Terima kasih Mantri Home Care!" 
    },
    { 
      img: "/review3.png", 
      name: "Mas Budi Pratama", 
      text: "Pelayanan home visit sangat memuaskan. Perawatnya ramah dan telaten." 
    },
    { 
      img: "/review4.png", 
      name: "Keluarga Hadi", 
      text: "Rekomendasi untuk khitan modern. Hasilnya rapi dan cepat sembuh." 
    },
    { 
      img: "/review5.png", 
      name: "Ibu Rina Wijaya", 
      text: "Sangat puas dengan perawatan lukanya. Timnya responsif dan kompeten." 
    },
  ];

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

          {/* Testimoni Clickable - 1000+ Pasien Puas */}
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
              <p className="text-blue-300 text-xs">Klik untuk melihat review asli</p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
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

      {/* Modal Review */}
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
            
            <div className="p-6 grid md:grid-cols-2 gap-6 overflow-y-auto max-h-[70vh]">
              {reviews.map((review, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-5">
                  <img 
                    src={review.img} 
                    alt={`Review ${index+1}`}
                    className="w-full h-56 object-cover rounded-xl mb-4"
                  />
                  <p className="font-semibold text-blue-900">{review.name}</p>
                  <p className="text-gray-600 mt-2 leading-relaxed">"{review.text}"</p>
                </div>
              ))}
            </div>

            <div className="p-6 border-t text-center bg-gray-50">
              <p className="text-gray-500 mb-3">Masih ada ratusan testimoni lainnya</p>
              <button 
                onClick={() => alert("Fitur review lengkap akan ditambahkan nanti")}
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Lihat Semua Review →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;