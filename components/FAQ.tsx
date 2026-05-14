import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Berapa perkiraan biaya khitan di Mantri Home Care?",
      answer: "Biaya khitan kami sangat kompetitif dan bervariasi tergantung metode yang dipilih (Super Ring, Super Sealer, Super Counter, atau metode lainnya). Paket standar sudah termasuk tindakan, obat-obatan pasca-khitan dan celana sunat. Untuk detail harga terbaru, silakan hubungi kami via WhatsApp."
    },
    {
      question: "Apa saja persiapan yang harus dilakukan sebelum anak dikhitan?",
      answer: "Persiapan utama adalah kesiapan mental anak. Pastikan anak sudah makan sebelumnya, mandi dengan bersih, dan menggunakan pakaian yang longgar. Jika ada riwayat alergi obat atau gangguan pembekuan darah, harap informasikan kepada tim kami saat pendaftaran."
    },
    {
      question: "Bagaimana cara merawat luka khitan agar cepat sembuh?",
      answer: "Jagalah area luka tetap kering dan bersih selama 2-3 hari pertama. Gunakan celana sunat yang disediakan untuk mengurangi gesekan. Minum obat pereda nyeri jika diperlukan serta berikan makanan tinggi protein seperti telur atau ikan untuk mempercepat regenerasi jaringan."
    },
    {
      question: "Berapa lama durasi penyembuhan untuk perawatan luka diabetes?",
      answer: "Penyembuhan luka diabetes (gangren) sangat bergantung pada kadar gula darah pasien dan kepatuhan dalam perawatan. Dengan metode pencucian luka modern dan dressing yang tepat dari kami, progres biasanya mulai terlihat dalam 1-2 minggu pertama. Kami menyarankan kunjungan rutin 2-3 kali seminggu."
    },
    {
      question: "Apakah layanan Mantri Home Care tersedia di hari Sabtu, Minggu, atau hari libur?",
      answer: "Ya, layanan kami tersedia setiap hari termasuk hari libur nasional. Namun, karena tingginya permintaan di akhir pekan, kami menyarankan Anda untuk melakukan pemesanan jadwal setidaknya 1-2 hari sebelumnya."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<section id="faq" className="py-24 relative overflow-hidden">
  
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
    style={{
      backgroundImage: `url('/faq-background.png')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  />

  {/* Gradasi yang lebih ringan */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/85 z-10"></div>

  {/* Content */}
  <div className="container mx-auto px-6 relative z-20">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-white font-bold tracking-widest uppercase text-sm mb-4">FAQ</h2>
        <h3 className="text-4xl font-extrabold text-white mb-4">Pertanyaan Populer</h3>
        <p className="text-gray-200">Temukan jawaban cepat untuk pertanyaan yang sering diajukan mengenai layanan kami.</p>
      </div>

      {/* FAQ Items tetap sama */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          // ... kode FAQ item kamu tetap sama
        ))}
      </div>

      {/* ... bagian bawah tetap sama */}

    </div>
  </div>
</section>
  );
};

export default FAQ;