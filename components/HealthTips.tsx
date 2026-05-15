import React, { useState, useEffect } from 'react';
import { getHealthTips } from '../services/geminiService';
import { HealthTip } from '../types';

const HealthTips: React.FC = () => {
  const [tips, setTips] = useState<HealthTip[]>([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState('Khitan & Luka');

  const categories = [
    'Khitan & Sunat',
    'Perawatan Luka Diabetes',
    'Nutrisi Penyembuhan',
    'Kesehatan Keluarga'
  ];

  const fetchTips = async (cat: string) => {
    setLoading(true);
    const result = await getHealthTips(cat);
    setTips(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchTips(category);
  }, []);

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    fetchTips(cat);
  };

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

      {/* Gradasi Biru Brand (sama seperti Booking Form) */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/75 via-blue-800/70 to-blue-950/80 z-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-20">
        <div className="text-center mb-12">
          <h2 className="text-white font-bold tracking-widest uppercase text-sm mb-4">TIPS KESEHATAN</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Informasi Kesehatan Terpercaya</h3>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Dapatkan tips perawatan medis yang divalidasi dan dihasilkan secara cerdas untuk membantu masa pemulihan Anda atau keluarga.
          </p>
        </div>

        {/* Tombol Kategori */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => handleCategoryChange(cat)}
              className={`px-6 py-3 rounded-full border font-medium transition ${
                category === cat
                  ? 'bg-white text-blue-700 border-white'
                  : 'bg-white/10 text-white border-white/30 hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Konten Tips */}
        <div className="bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-3xl shadow-2xl relative z-20">
          {/* Isi tips kamu tetap sama */}
          {category === 'Khitan & Sunat' && (
            <>
              <h4 className="text-2xl font-bold text-blue-900 mb-6">Tips Perawatan Pasca Khitan & Sunat di Rumah</h4>
              <ul className="space-y-4 text-gray-700">
                <li>✔ Jaga luka tetap bersih dan kering.</li>
                <li>✔ Oleskan gel atau spray pada luka setelah mandi.</li>
                <li>✔ Pakai celana longgar atau celana khitan.</li>
                <li>✔ Hindari aktivitas berat selama 2-3 minggu.</li>
                <li>✔ Konsumsi makanan tinggi protein.</li>
              </ul>
            </>
          )}

          {/* Tambahkan konten kategori lain sesuai kebutuhan */}
          {/* ... (kode kategori lain tetap sama seperti sebelumnya) */}

        </div>
      </div>
    </section>
  );
};

export default HealthTips;