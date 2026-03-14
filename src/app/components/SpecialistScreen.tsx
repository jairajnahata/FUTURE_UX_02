import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, Star } from 'lucide-react';
import { BottomNav } from './BottomNav';

export function SpecialistScreen() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'General', 'Orthodontist', 'Cosmetic', 'Endodontist', 'Pediatric'];

  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Orthodontist',
      rating: '4.9',
      reviews: 214,
      availability: 'Available Today',
      available: true,
      initial: 'PS',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Dr. Arjun Mehta',
      specialty: 'Cosmetic Dentist',
      rating: '4.7',
      reviews: 98,
      availability: 'Available Tomorrow',
      available: false,
      initial: 'AM',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Dr. Sneha Rao',
      specialty: 'Endodontist',
      rating: '4.8',
      reviews: 156,
      availability: 'Available Today',
      available: true,
      initial: 'SR',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
  ];

  const handleBook = (doctor: typeof doctors[0]) => {
    // Store selected doctor in sessionStorage so BookingScreen can read it
    sessionStorage.setItem('selectedDoctor', JSON.stringify({
      name: doctor.name,
      specialty: doctor.specialty,
      initials: doctor.initial,
      gradientFrom: doctor.gradient.match(/#[a-fA-F0-9]{6}/g)?.[0] ?? '#667eea',
      gradientTo: doctor.gradient.match(/#[a-fA-F0-9]{6}/g)?.[1] ?? '#764ba2',
    }));
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] pb-20">
      {/* Top Navigation */}
      <div className="px-5 pt-12 pb-4 flex items-center justify-between">
        <button onClick={() => navigate('/home')} className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-[var(--deep-navy)]" />
        </button>
        <h2 className="font-['Lora',serif] text-[var(--deep-navy)] flex-1 text-center">Choose a Dentist</h2>
        <button className="p-2 -mr-2">
          <SlidersHorizontal size={24} className="text-[var(--slate-gray)]" />
        </button>
      </div>

      {/* Subtitle */}
      <div className="px-5 mb-4">
        <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">
          Select a specialist for your visit
        </p>
      </div>

      {/* Filter Chips */}
      <div className="px-5 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-shrink-0 px-[18px] py-2 rounded-[20px] font-['DM_Sans',sans-serif] transition-all ${
                activeFilter === filter
                  ? 'bg-[var(--sky-blue)] text-white'
                  : 'bg-[var(--soft-aqua)] text-[var(--deep-navy)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Dentist Cards */}
      <div className="px-5 space-y-3">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(27,58,92,0.08)] p-4 flex items-center gap-3"
          >
            {/* Avatar */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: doctor.gradient }}
            >
              <span className="font-['DM_Sans',sans-serif] text-white">{doctor.initial}</span>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <h4 className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)]">{doctor.name}</h4>
              <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">{doctor.specialty}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center gap-1">
                  <Star size={14} fill="var(--warm-amber)" color="var(--warm-amber)" />
                  <span className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)]">{doctor.rating}</span>
                </div>
                <span className="text-[var(--slate-gray)]">·</span>
                <span className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs">{doctor.reviews} reviews</span>
              </div>
              <div className="mt-2">
                <span className="bg-[var(--mint-light-bg)] text-[var(--mint-dark-text)] font-['DM_Sans',sans-serif] text-[11px] px-[10px] py-1 rounded-[20px] inline-block">
                  {doctor.availability}
                </span>
              </div>
            </div>

            {/* Book Button */}
            <button
              onClick={() => handleBook(doctor)}
              className="bg-[var(--sky-blue)] text-white font-['DM_Sans',sans-serif] px-4 py-2 rounded-[20px] text-xs flex-shrink-0"
            >
              Book
            </button>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
}