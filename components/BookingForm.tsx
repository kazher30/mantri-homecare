import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'khitan',
    message: '',
    lat: -7.93079,
    lng: 112.02463
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // Fix Leaflet icon dengan URL CDN langsung (nggak import image, aman untuk Vercel build)
      (L.Icon.Default.prototype as any)._getIconUrl = L.Icon.Default.prototype._getIconUrl || (() => {});
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      leafletMap.current = L.map(mapRef.current).setView([formData.lat, formData.lng], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(leafletMap.current);

      L.circle([-7.93079, 112.02463], {
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.1,
        radius: 35000
      }).addTo(leafletMap.current).bindPopup('Area Layanan Utama MANTRI HOME CARE');

      markerRef.current = L.marker([formData.lat, formData.lng], {
        draggable: true
      }).addTo(leafletMap.current);

      markerRef.current.on('dragend', (event) => {
        const marker = event.target;
        const position = marker.getLatLng();
        setFormData(prev => ({ ...prev, lat: position.lat, lng: position.lng }));
      });

      leafletMap.current.on('click', (e: any) => {
        const { lat, lng } = e.latlng;
        markerRef.current?.setLatLng([lat, lng]);
        setFormData(prev => ({ ...prev, lat: lat, lng: lng }));
      });
    }

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  const handleUseMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({ ...prev, lat: latitude, lng: longitude }));
          leafletMap.current?.setView([latitude, longitude], 15);
          markerRef.current?.setLatLng([latitude, longitude]);
        },
        (error) => {
          alert("Gagal mendapatkan lokasi: " + error.message);
        }
      );
    } else {
      alert("Geolokasi tidak didukung oleh browser ini.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const googleMapsUrl = `https://www.google.com/maps?q=${formData.lat},${formData.lng}`;
    const text = `Halo Mantri Home Care, 
Nama: ${formData.name}
Layanan: ${formData.service}
Pesan: ${formData.message}
Lokasi Saya: ${googleMapsUrl}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6285736360363?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* sisa JSX form & map kamu tetap sama seperti asli */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div className="lg:sticky lg:top-32">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Pesan Layanan</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8 leading-tight">Tentukan Lokasi & Jadwal Kunjungan</h3>
          
          <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
            <p className="text-blue-800 text-sm font-medium">
              <span className="font-bold">Info:</span> Klik pada peta atau geser pin biru ke lokasi rumah Anda untuk memudahkan tim medis kami menemukan alamat Anda.
            </p>
          </div>

          <div className="space-y-6">
            <div className="h-[400px] w-full relative rounded-3xl overflow-hidden shadow-inner border border-gray-200">
              <div ref={mapRef} className="h-full w-full"></div>
              <button 
                type="button"
                onClick={handleUseMyLocation}
                className="absolute bottom-4 right-4 z-[1000] bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                title="Gunakan Lokasi Saya"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Latitude</p>
                  <p className="text-sm font-mono text-gray-700">{formData.lat.toFixed(6)}</p>
               </div>
               <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">Longitude</p>
                  <p className="text-sm font-mono text-gray-700">{formData.lng.toFixed(6)}</p>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-10 -translate-y-10"></div>
          <h4 className="text-2xl font-bold text-blue-900 mb-8">Formulir Pemesanan</h4>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* sisa form kamu tetap sama */}
            {/* ... */}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;