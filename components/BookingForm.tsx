import React, { useState, useEffect, useRef } from 'react';
import L from 'leaflet';

// Import image marker untuk fix icon error di production (wajib!)
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

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
      // FIX LEAFLET DEFAULT ICON DI PRODUCTION (WAJIB!)
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
      });

      // Inisialisasi map (hanya sekali)
      leafletMap.current = L.map(mapRef.current).setView([formData.lat, formData.lng], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(leafletMap.current);

      // Area layanan circle
      L.circle([-7.93079, 112.02463], {
        color: '#3b82f6',
        fillColor: '#3b82f6',
        fillOpacity: 0.1,
        radius: 35000
      }).addTo(leafletMap.current).bindPopup('Area Layanan Utama MANTRI HOME CARE');

      // Marker draggable
      markerRef.current = L.marker([formData.lat, formData.lng], {
        draggable: true
      }).addTo(leafletMap.current);

      // Drag end update form
      markerRef.current.on('dragend', (event) => {
        const marker = event.target;
        const position = marker.getLatLng();
        setFormData(prev => ({ ...prev, lat: position.lat, lng: position.lng }));
      });

      // Klik peta pindah marker
      leafletMap.current.on('click', (e: L.LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        markerRef.current?.setLatLng([lat, lng]);
        setFormData(prev => ({ ...prev, lat, lng }));
      });
    }

    // Cleanup
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
      {/* sisa JSX form & map kamu tetap sama, nggak perlu ubah */}
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
        {/* ... kode hero form & map kamu ... */}
      </div>
    </section>
  );
};

export default BookingForm;