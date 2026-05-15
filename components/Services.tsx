import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      id: 'khitan',
      title: 'Jasa Khitan Modern',
      description: 'Khitan modern anak & dewasa dengan metode minim nyeri, tanpa jarum suntik, tanpa jahitan, tanpa perban, penyembuhan cepat, dan tidak ada pantangan khusus.',
      features: ['Aneka Metode Khitan Sesuai Kebutuhan', 'Tanpa Jarum Suntik (Optional)', 'Kontrol Pasca Khitan Gratis'],
      waMessage: 'Halo Mantri Home Care, saya tertarik dengan layanan Khitan Modern (Super Ring/Sealer/Couter). Boleh konsultasi lebih lanjut?',
      icon: (
        <img 
          src="/layanan-sunat.png" 
          alt="Jasa Khitan Modern - Mantri Home Care Kediri"
          className="h-full w-full object-contain"   
        />
      ),
      color: 'bg-white/10'
    },
    {
      id: 'luka',
      title: 'Perawatan Luka Home Care',
      description: 'Perawatan luka profesional untuk pasien diabetes, luka pasca operasi, luka bakar, hingga dekubitus (luka baring) di rumah pasien.',
      features: ['Luka Diabetes (Gangren)', 'Luka Pasca Operasi', 'Luka Kronis/Sulit Sembuh', 'Ganti Perban (Wound Dressing)'],
      waMessage: 'Halo Mantri Home Care, saya butuh layanan Perawatan Luka (diabetes/pasca operasi/kronis). Boleh dibantu konsultasi?',
      icon: (
        <img 
          src="/rawat-luka.png" 
          alt="Perawatan Luka Home Care"
          className="h-full w-full object-contain"
        />
      ),
      color: 'bg-white/10'
    },
    {
      id: 'lainnya',
      title: 'Layanan Kesehatan Lainnya',
      description: 'Layanan keperawatan tambahan seperti pemasangan kateter, cek kesehatan berkala, hingga injeksi obat sesuai instruksi dokter.',
      features: ['Pasang/Ganti Kateter', 'Home Visit Keperawatan', 'Cek Gula Darah & Kolesterol', 'Injeksi / Pemberian Vitamin'],
      waMessage: 'Halo Mantri Home Care, saya tertarik dengan layanan medis lainnya (kateter/cek lab/injeksi). Boleh info lebih lanjut?',
      icon: (
        <img 
          src="/kesehatan-lain.png" 
          alt="Layanan Kesehatan Lainnya"
          className="h-full w-full object-contain"
        />
      ),
      color: 'bg-white/10'
    }
  ];

  return (
    <section id="layanan" className="py-24 relative overflow-hidden">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url('/background-services.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />

      {/* Gradasi Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/80 z-10"></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-white font-bold tracking-widest uppercase text-sm mb-4">Layanan Unggulan Kami</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Solusi Layanan Kesehatan Profesional Di Rumah Anda</h3>
          <p className="text-gray-200 text-lg">
            Kami membawa kualitas klinik ke dalam kenyamanan rumah Anda. Ditangani oleh tenaga kesehatan profesional berlisensi dengan peralatan medis modern yang steril.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-white/20 backdrop-blur-md ${service.color}`}
            >
              {/* Container Icon */}
              <div className="w-full h-40 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 p-4 border border-gray-100">
                {service.icon}
              </div>

              <h4 className="text-2xl font-bold text-white mb-4">{service.title}</h4>
              <p className="text-gray-200 mb-8 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-3 mb-10">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-100 font-medium">
                    <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                className="mt-10 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold block text-center transition"
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