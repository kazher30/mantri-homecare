
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
    <section id="tips" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Tips Kesehatan AI</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-4">Informasi Kesehatan Terpercaya</h3>
            <p className="text-gray-600">Dapatkan tips perawatan medis yang divalidasi dan dihasilkan secara cerdas untuk membantu masa pemulihan Anda atau keluarga.</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  category === cat 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse bg-white p-8 rounded-3xl h-64 border border-gray-100">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {tips.length > 0 ? tips.map((tip, idx) => (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-4">{tip.title}</h4>
                <p className="text-gray-600 leading-relaxed">{tip.content}</p>
              </div>
            )) : (
              <div className="col-span-3 text-center py-12 text-gray-500 italic">
                Tips sedang disiapkan oleh asisten cerdas kami...
              </div>
            )}
          </div>
        )}

        <div className="mt-16 p-8 bg-blue-900 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-lg">
            <h4 className="text-2xl font-bold mb-2">Punya pertanyaan medis khusus?</h4>
            <p className="text-blue-100 opacity-90">Tim Mantri Home Care siap memberikan konsultasi personal gratis untuk kondisi kesehatan Anda.</p>
          </div>
          <a
  href="https://wa.me/6285736360363?text=Halo%20Mantri%20Home%20Care,%20saya%20punya%20pertanyaan%20tentang%20layanan%20home%20care/khitan/luka.%20Bisa%20dibantu%20konsultasi%20gratis?"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition whitespace-nowrap"
>
  Tanya Via WhatsApp
</a>
        </div>
      </div>
    </section>
  );
};

export default HealthTips;
