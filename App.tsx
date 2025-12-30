import React from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthTips from './components/HealthTips';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Head>
        {/* Meta Title - Judul biru di Google */}
        <title>Mantri Home Care Kediri - Khitan Modern & Perawatan Luka Panggilan Rumah</title>

        {/* Meta Description */}
        <meta name="description" content="Jasa khitan sunat modern tanpa nyeri (Super Ring/Sealer/Couter), perawatan luka diabetes/pasca operasi, home visit keperawatan di Kediri dan sekitarnya. Tenaga medis berlisensi, panggil langsung ke rumah. Konsultasi gratis via WA!" />

        {/* Keywords */}
        <meta name="keywords" content="khitan kediri, sunat kediri, khitan modern kediri, perawatan luka kediri, perawatan luka diabetes kediri, home care kediri, perawat panggilan kediri, sunat tanpa nyeri kediri, ganti perban kediri" />

        {/* Open Graph untuk share WA/FB/IG */}
        <meta property="og:title" content="Mantri Home Care Kediri - Khitan Modern & Perawatan Luka di Rumah" />
        <meta property="og:description" content="Layanan khitan tanpa nyeri dan perawatan luka profesional panggilan ke rumah di Kediri. Konsultasi gratis!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mantri-homecare.vercel.app" />
        {/* <meta property="og:image" content="https://mantri-homecare.vercel.app/og-image.jpg" /> */} {/* uncomment kalau sudah ada gambar */}

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen relative">
        <Navbar />
        <Hero />
        <Services />
        <HealthTips />
        <FAQ />
        <BookingForm />
        <Footer />

        {/* Floating WhatsApp Button - Pojok Kanan Bawah (desktop & mobile) */}
        <div className="fixed bottom-6 right-6 z-[9999]">
          <a
            href="https://wa.me/6285736360363?text=Halo%20Mantri%20Home%20Care,%20saya%20mau%20konsultasi%20layanan%20home%20care/khitan/perawatan%20luka.%20Bisa%20dibantu?"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl animate-pulse bg-white p-1"
          >
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="Chat WhatsApp Mantri Home Care"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default App;