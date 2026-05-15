import React, { useState, useEffect } from 'react';

const HealthTips: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('khitan');

  const categories = [
    { id: 'khitan', label: 'Khitan & Sunat' },
    { id: 'luka', label: 'Perawatan Luka Diabetes' },
    { id: 'nutrisi', label: 'Nutrisi Penyembuhan' },
    { id: 'keluarga', label: 'Kesehatan Keluarga' },
  ];

  const tipsContent = {
    khitan: {
      title: "Tips Perawatan Pasca Khitan & Sunat di Rumah",
      items: [
        "Jaga luka tetap bersih dan kering selama 2-3 hari pertama",
        "Pakai celana sunat yang disediakan agar tidak bergesek",
        "Hindari aktivitas berat, berlari, atau naik sepeda selama 2-3 minggu",
        "Konsumsi makanan tinggi protein (telur, ikan, daging, tahu)",
        "Minum obat pereda nyeri sesuai anjuran",
        "Segera hubungi kami jika ada pendarahan banyak atau bengkak hebat"
      ]
    },
    luka: {
      title: "Tips Perawatan Luka Diabetes di Rumah",
      items: [
        "Kontrol gula darah secara ketat setiap hari",
        "Cuci luka dengan cairan NaCl steril, jangan digosok keras",
        "Ganti perban secara rutin sesuai jadwal",
        "Periksa kaki setiap hari menggunakan cermin",
        "Pakai sepatu yang nyaman dan hindari berjalan tanpa alas kaki",
        "Segera hubungi perawat jika luka semakin merah atau berbau"
      ]
    },
    nutrisi: {
      title: "Nutrisi untuk Mempercepat Penyembuhan Luka",
      items: [
        "Tingkatkan asupan protein (telur, ikan, ayam, daging, tahu tempe)",
        "Konsumsi makanan kaya Vitamin C (jeruk, kiwi, stroberi, paprika)",
        "Tambahkan Vitamin A & Zinc (wortel, bayam, kacang-kacangan)",
        "Minum air putih minimal 8-10 gelas sehari",
        "Hindari makanan manis, gorengan, dan minuman bersoda",
        "Makan dalam porsi kecil tapi sering"
      ]
    },
    keluarga: {
      title: "Tips Kesehatan Keluarga Sehari-hari",
      items: [
        "Cuci tangan dengan sabun sebelum makan dan setelah dari luar",
        "Makan makanan bergizi seimbang bersama keluarga",
        "Olahraga ringan minimal 30 menit setiap hari",
        "Tidur cukup 7-8 jam per malam",
        "Kelola stres dengan komunikasi dan istirahat yang cukup",
        "Lakukan cek kesehatan rutin minimal 1 kali setahun"
      ]
    }
  };

  const currentTip = tipsContent[activeCategory as keyof typeof tipsContent];

  return (
    <section id="tips-kesehatan" className="py-16 relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/health-tips.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* Gradasi Biru Brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 via-blue-800/70 to-blue-950/80 z-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-white font-bold tracking-widest uppercase text-sm mb-4">TIPS KESEHATAN</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Informasi Kesehatan Terpercaya</h3>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Tips perawatan medis yang praktis dan mudah dilakukan di rumah
          </p>
        </div>

        {/* Kategori Buttons */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full border font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-white text-blue-700 border-white shadow-md'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Konten Tips - Transparan */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-3xl shadow-2xl">
          <h4 className="text-2xl font-bold text-white mb-8">{currentTip.title}</h4>
          
          <ul className="space-y-4">
            {currentTip.items.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-100">
                <span className="text-green-400 mt-1.5 text-xl">✔</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 pt-8 border-t border-white/20 text-center">
            <p className="text-white/90 font-medium">
              Butuh penjelasan lebih lanjut? Hubungi kami via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;