
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
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">FAQ</h2>
            <h3 className="text-4xl font-extrabold text-blue-900 mb-4">Pertanyaan Populer</h3>
            <p className="text-gray-600">Temukan jawaban cepat untuk pertanyaan yang sering diajukan mengenai layanan kami.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-blue-200 bg-blue-50/30 shadow-sm' : 'border-gray-100 hover:border-blue-100'
                }`}
              >
                <button 
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${openIndex === index ? 'text-blue-600' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-blue-100/50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Pertanyaan Anda tidak ada di sini?</p>
            <a 
              href="#contact" 
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors group"
            >
              Hubungi Tim Medis Kami Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
