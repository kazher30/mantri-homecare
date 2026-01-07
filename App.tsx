
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HealthTips from './components/HealthTips';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  return (
  <div className="min-h-screen relative">  {/* tambah relative biar fixed bekerja */}
    <Navbar />
    <Hero />
    <Services />
    <HealthTips />
    <FAQ />
    <BookingForm />
    <Footer />

    {/* Floating WhatsApp Button - Pojok Kanan Bawah (untuk desktop & mobile) */}
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

<Analytics />
  </div>
);
};

export default App;
