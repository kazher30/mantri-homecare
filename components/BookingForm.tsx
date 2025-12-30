
import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'khitan',
    message: '',
    lat: -7.93079, // Default Kediri
    lng: 112.02463
  });

  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // Fix Leaflet icon error di build
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    leafletMap.current = L.map(mapRef.current).setView([formData.lat, formData.lng], 11);
      
      // Initialize Map
      leafletMap.current = L.map(mapRef.current).setView([formData.lat, formData.lng], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(leafletMap.current);

      // Add Service Area Circle (Kediri approximation)
      L.circle([-7.93079, 112.02463], {
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.1,
        radius: 35000 // 35km radius
      }).addTo(leafletMap.current).bindPopup('Area Layanan Utama MANTRI HOME CARE');

      // Marker for user selection
      markerRef.current = L.marker([formData.lat, formData.lng], {
        draggable: true
      }).addTo(leafletMap.current);

      markerRef.current.on('dragend', (event) => {
        const marker = event.target;
        const position = marker.getLatLng();
        setFormData(prev => ({ ...prev, lat: position.lat, lng: position.lng }));
      });

      leafletMap.current.on('click', (e) => {
        const { lat, lng } = e.latlng;
        markerRef.current?.setLatLng([lat, lng]);
        setFormData(prev => ({ ...prev, lat, lng }));
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
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData(prev => ({ ...prev, lat: latitude, lng: longitude }));
        leafletMap.current?.setView([latitude, longitude], 15);
        markerRef.current?.setLatLng([latitude, longitude]);
      }, (error) => {
        alert("Gagal mendapatkan lokasi: " + error.message);
      });
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
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
              <input 
                type="text" 
                required
                placeholder="Contoh: Budi Santoso"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Nomor WhatsApp</label>
              <input 
                type="tel" 
                required
                placeholder="Contoh: 08123456xxx"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Pilih Layanan</label>
              <select 
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
              >
                <option value="khitan">Khitan Modern (Anak/Dewasa)</option>
                <option value="luka">Perawatan Luka Diabetes</option>
                <option value="luka_postop">Perawatan Luka Pasca Operasi</option>
                <option value="medis_lain">Layanan Medis Lainnya</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Detail Kebutuhan (Opsional)</label>
              <textarea 
                rows={4}
                placeholder="Berikan informasi singkat mengenai kondisi pasien..."
                className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3"
            >
              <span>Kirim Pesanan ke WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
