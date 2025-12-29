import 'react/jsx-runtime';
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
    <section className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-blue-900 mb-2">TIPS KESEHATAN AI</h2>
      <h3 className="text-2xl font-semibold text-blue-800 mb-4">Informasi Kesehatan Terpercaya</h3>
      <p className="text-gray-700 mb-8">
        Dapatkan tips perawatan medis yang divalidasi dan dihasilkan secara cerdas untuk membantu masa pemulihan Anda atau keluarga.
      </p>

      {/* Tombol-tombol kategori */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        <button
          onClick={() => setCategory('khitan')}
          className={`px-6 py-3 rounded-full border font-medium transition ${
            category === 'khitan'
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-50'
          }`}
        >
          Khitan &amp; Sunat
        </button>

        <button
          onClick={() => setCategory('luka')}
          className={`px-6 py-3 rounded-full border font-medium transition ${
            category === 'luka'
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-50'
          }`}
        >
          Perawatan Luka Diabetes
        </button>

        <button
          onClick={() => setCategory('nutrisi')}
          className={`px-6 py-3 rounded-full border font-medium transition ${
            category === 'nutrisi'
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-50'
          }`}
        >
          Nutrisi Penyembuhan
        </button>

        <button
          onClick={() => setCategory('keluarga')}
          className={`px-6 py-3 rounded-full border font-medium transition ${
            category === 'keluarga'
              ? 'bg-blue-700 text-white border-blue-700'
              : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-50'
          }`}
        >
          Kesehatan Keluarga
        </button>
      </div>

      {/* Konten Tips */}
      <div className="bg-white p-8 rounded-2xl shadow-md">
        {category === 'khitan' && (
          <>
            <h4 className="text-xl font-bold text-blue-800 mb-4">Tips Perawatan Pasca Khitan &amp; Sunat di Rumah</h4>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Jaga luka tetap bersih dan kering, ganti perban jika basah.</li>
              <li>✔ Oleskan madu murni pada luka setelah mandi atau buang air kecil.</li>
              <li>✔ Pakai celana longgar atau celana khitan agar tidak bergesek.</li>
              <li>✔ Hindari berlari, naik sepeda, atau aktivitas mengangkang selama 3 minggu.</li>
              <li>✔ Berikan makanan tinggi protein (telur, ikan, daging) untuk penyembuhan cepat.</li>
              <li>✔ Minum obat penghilang nyeri sesuai resep dokter.</li>
              <li>✔ Segera ke dokter jika ada pendarahan banyak atau nyeri hebat.</li>
            </ul>
          </>
        )}

        {category === 'luka' && (
          <>
            <h4 className="text-xl font-bold text-blue-800 mb-4">Tips Perawatan Luka Diabetes di Rumah</h4>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Kontrol gula darah tetap stabil (makan teratur, minum obat).</li>
              <li>✔ Cuci luka dengan air mengalir dan sabun lembut, jangan digosok.</li>
              <li>✔ Oleskan salep dari dokter, lalu tutup dengan kasa steril.</li>
              <li>✔ Ganti perban setiap hari atau jika basah.</li>
              <li>✔ Periksa kaki setiap hari dengan cermin (cari luka baru).</li>
              <li>✔ Pakai sepatu yang nyaman, hindari berjalan tanpa alas kaki.</li>
              <li>✔ Segera ke perawat luka jika luka tak kunjung kering dalam 1 minggu.</li>
            </ul>
          </>
        )}

        {category === 'nutrisi' && (
          <>
            <h4 className="text-xl font-bold text-blue-800 mb-4">Tips Nutrisi untuk Mempercepat Penyembuhan Luka</h4>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Makan tinggi protein: ayam, ikan, telur, tahu, tempe.</li>
              <li>✔ Konsumsi vitamin C: jeruk, stroberi, kiwi, paprika.</li>
              <li>✔ Tambah vitamin A: wortel, bayam, ubi jalar.</li>
              <li>✔ Makan makanan kaya zinc: tiram, kacang-kacangan, daging.</li>
              <li>✔ Pilih karbohidrat sehat: nasi merah, ubi, gandum utuh.</li>
              <li>✔ Minum air putih minimal 8 gelas sehari.</li>
              <li>✔ Hindari makanan manis dan gorengan berlebih.</li>
            </ul>
          </>
        )}

        {category === 'keluarga' && (
          <>
            <h4 className="text-xl font-bold text-blue-800 mb-4">Tips Kesehatan Keluarga Sehari-hari</h4>
            <ul className="space-y-3 text-gray-700">
              <li>✔ Cuci tangan pakai sabun sebelum makan &amp; setelah dari luar.</li>
              <li>✔ Makan bersama keluarga dengan menu gizi seimbang.</li>
              <li>✔ Olahraga ringan 30 menit/hari (jalan kaki, sepeda).</li>
              <li>✔ Tidur cukup 7-8 jam setiap malam.</li>
              <li>✔ Minum air putih cukup, hindari minuman manis.</li>
              <li>✔ Kelola stres dengan ngobrol atau meditasi 5 menit.</li>
              <li>✔ Cek kesehatan rutin (tekanan darah, gula darah) setahun sekali.</li>
            </ul>
          </>
        )}

        {!category && (
          <p className="text-center text-gray-500 italic">Pilih kategori di atas untuk melihat tips kesehatan</p>
        )}
      </div>
    </div>
  </section>
  );
};

export default HealthTips;
