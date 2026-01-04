import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'khitan',
      title: 'Jasa Khitan Modern',
      description: 'Layanan khitan (sunat) untuk anak dan dewasa dengan metode modern yang minim nyeri, bius tanpa jarum suntik, tanpa dijahit, tanpa diperban, penyembuhan cepat, minim nyeri/pendarahan, tanpa diet khusus/pantangan, bisa langsung aktivitas seperti biasa dan bisa dipanggil ke rumah.',
      features: ['Metode Super Ring', 'Metode Super Sealer', 'Metode Super Couter', 'Tanpa Jarum Suntik (Optional)', 'Kontrol Pasca Khitan Gratis'],
      waMessage: 'Halo Mantri Home Care, saya tertarik dengan layanan Khitan Modern (Super Ring/Sealer/Couter). Boleh konsultasi lebih lanjut?',
      icon: (
        <img 
        src="/sunattopBW.png"  // atau /logo.svg kalau SVG
        alt="Sunat Top Logo - Spesialis Rawat Luka & Sunat Modern Kediri"
        className="h-20 w-auto mr-2"  // ukuran logo di footer, sesuaikan kalau perlu
        />
    
      ),
      color: 'bg-blue-50'
    },
    {
      id: 'luka',
      title: 'Perawatan Luka Home Care',
      description: 'Perawatan luka profesional untuk pasien diabetes, luka pasca operasi, luka bakar, hingga dekubitus (luka baring) di rumah pasien.',
      features: ['Luka Diabetes (Gangren)', 'Luka Pasca Operasi', 'Luka Kronis/Sulit Sembuh', 'Ganti Perban (Wound Dressing)'],
      waMessage: 'Halo Mantri Home Care, saya butuh layanan Perawatan Luka (diabetes/pasca operasi/kronis). Boleh dibantu konsultasi?',
      icon: (
        <img 
        src="/logorawatluka.png"  // atau /logo.svg kalau SVG
        alt="Sunat Top Logo - Spesialis Rawat Luka & Sunat Modern Kediri"
        className="h-20 w-auto mr-2"  // ukuran logo di footer, sesuaikan kalau perlu
        />
      ),
      color: 'bg-teal-50'
    },
    {
      id: 'lainnya',
      title: 'Layanan Kesehatan Lainnya',
      description: 'Layanan keperawatan tambahan seperti pemasangan kateter, infus, cek kesehatan berkala, hingga injeksi obat sesuai instruksi dokter.',
      features: ['Pasang/Ganti Kateter', 'Home Visit Keperawatan', 'Cek Gula Darah & Kolesterol', 'Injeksi / Pemberian Vitamin'],
      waMessage: 'Halo Mantri Home Care, saya tertarik dengan layanan medis lainnya (kateter/cek lab/injeksi). Boleh info lebih lanjut?',
      icon: (
        <img 
        src="/logostetoskop.png"  // atau /logo.svg kalau SVG
        alt="Sunat Top Logo - Spesialis Rawat Luka & Sunat Modern Kediri"
        className="h-20 w-auto mr-2"  // ukuran logo di footer, sesuaikan kalau perlu
        />
      ),
      color: 'bg-purple-50'
    }
  ];

  return (
    <section id="layanan" className="py-24 bg-white">  {/* 3 kartu layanan */}
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Layanan Unggulan Kami</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">Solusi Layanan Kesehatan Profesional Di Rumah Anda</h3>
          <p className="text-gray-600 text-lg">
            Kami membawa kualitas klinik ke dalam kenyamanan rumah Anda. Ditangani oleh tenaga kesehatan profesional berlisensi dengan peralatan medis modern yang steril.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-transparent hover:border-blue-100 ${service.color}`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={`https://wa.me/6285736360363?text=${encodeURIComponent(service.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-full py-4 bg-blue-700 text-white rounded-full font-bold hover:bg-blue-800 block text-center transition"
              >
                Pesan Layanan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;