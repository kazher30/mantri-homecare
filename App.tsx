
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthTips from './components/HealthTips';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HealthTips />
      <FAQ />
      <section id="lokasi-maps" className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">LOKASI PRAKTEK & ULASAN GOOGLE</h2>
      <p className="text-xl text-gray-700">
        Temukan lokasi Mantri Home Care dan baca ulasan langsung dari pasien kami di Google
      </p>
    </div>

    <div className="w-full h-96 md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.384957035148!2d106.789699315322!3d-6.208927462449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6e0b0f0e4b9%3A0x9e0f0e4b9f6e0f6e!2sMantri%20Home%20Care!5e0!3m2!1sid!2sid!4v1700000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div className="text-center mt-12">
      <a
        href="https://maps.app.goo.gl/MPo7bKF3iLcrQC8r8"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-transform hover:scale-105"
      >
        Buka Google Maps Lengkap (Lihat Semua Ulasan, Foto & Direction)
      </a>
    </div>
  </div>
</section>
      <BookingForm />
      <Footer />
      
      {/* Floating Action Button for Mobile */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href="https://wa.me/6281234567890" 
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce hover:animate-none transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default App;
