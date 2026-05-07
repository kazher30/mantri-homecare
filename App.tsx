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

  // Structured Data untuk Local Business + Service (SEO)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mantri Home Care Kediri",
    "description": "Jasa khitan modern tanpa nyeri dan rawat luka profesional (diabetes, pasca operasi, gangren) di Kediri. Layanan home care panggilan ke rumah oleh tenaga kesehatan berlisensi.",
    "url": "https://mantri-homecare.vercel.app",
    "telephone": "+6285736360363",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kediri",
      "addressRegion": "Jawa Timur",
      "addressCountry": "Indonesia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.8162,
      "longitude": 112.0119
    },
    "openingHours": "Mo-Su 07:00-20:00",
    "serviceArea": {
      "@type": "Place",
      "name": "Kediri dan sekitarnya, Jawa Timur"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Kesehatan Home Care",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rawat Luka Diabetes & Luka Kronis",
            "description": "Perawatan luka profesional di rumah"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Khitan Modern Tanpa Nyeri",
            "description": "Metode Super Ring, Sealer, dan Couter"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Perawatan Luka Pasca Operasi",
            "description": "Ganti perban dan perawatan luka pasca operasi di rumah"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Structured Data JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navbar />
      <Hero />
      <Services />
      <HealthTips />
      <FAQ />
      <BookingForm />
      <Footer />

      {/* Floating WhatsApp Button */}
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