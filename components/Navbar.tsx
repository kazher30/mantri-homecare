
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Beranda', href: '#hero' },
  { name: 'Layanan', href: '#layanan' },        // ← ke section layanan
  { name: 'Tips Kesehatan', href: '#tips-kesehatan' },
  { name: 'Lokasi & Ulasan', href: 'https://maps.app.goo.gl/MPo7bKF3iLcrQC8r8' }, // external
  { name: 'Hubungi Kami', href: '#contact' },   // ← ke form booking
];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <a href="#hero" className="flex items-center">  
            <img  
              src="/logo.png"
              alt="Mantri Home Care - Spesialis Rawat Luka & Sunat Modern Kediri"
              className="h-12 w-auto"
            />
          </a>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            MANTRI HOME CARE
          </span>
        </div>
        
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
          <a
      key={link.name}
      href={link.href}
      target={link.href.startsWith('http') ? '_blank' : undefined}
      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={(e) => {
        if (link.href.startsWith('#')) {
          e.preventDefault();
          const targetId = link.href.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            setTimeout(() => {
              const retryElement = document.getElementById(targetId);
              if (retryElement) {
                retryElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 300);
          }
        }
      }}
      className={`text-sm font-medium transition-colors hover:text-blue-500 ${
        isScrolled ? 'text-gray-600' : 'text-white'
      }`}
    >
      {link.name}
    </a>
    ))}
</div>

        <a 
          href="https://wa.me/6285736360363" 
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-transform hover:scale-105 hidden md:block"
        >
          Pesan Sekarang
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
