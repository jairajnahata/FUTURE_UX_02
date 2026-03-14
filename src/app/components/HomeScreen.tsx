import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Star, Sparkles, Grid3x3, Activity, Heart, Camera, MapPin, Clock } from 'lucide-react';
import { BottomNav } from './BottomNav';

export function HomeScreen() {
  const navigate = useNavigate();

  // ✅ useState ensures appointments re-read from sessionStorage every time screen loads
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const stored = sessionStorage.getItem('appointments');
    setAppointments(stored ? JSON.parse(stored) : []);
  }, []);

  const services = [
    { icon: Activity, label: 'Cleaning', color: 'var(--sky-blue)' },
    { icon: Sparkles, label: 'Whitening', color: 'var(--sky-blue)' },
    { icon: Grid3x3, label: 'Braces', color: 'var(--sky-blue)' },
    { icon: Activity, label: 'Root Canal', color: 'var(--sky-blue)' },
    { icon: Heart, label: 'Implants', color: 'var(--sky-blue)' },
    { icon: Camera, label: 'X-Ray', color: 'var(--sky-blue)' },
  ];

  const doctors = [
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Orthodontist',
      rating: '4.9',
      available: true,
      initial: 'PS',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      name: 'Dr. Arjun Mehta',
      specialty: 'Cosmetic Dentist',
      rating: '4.7',
      available: false,
      initial: 'AM',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      name: 'Dr. Sneha Rao',
      specialty: 'Endodontist',
      rating: '4.8',
      available: true,
      initial: 'SR',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] pb-20">
      {/* Top Bar */}
      <div className="px-5 pt-12 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">Good Morning 😊</p>
            <h2 className="font-['Lora',serif] text-[var(--deep-navy)] mt-1">Rahul Sharma</h2>
          </div>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--sky-blue)] to-[#2D7DB5] flex items-center justify-center">
              <span className="font-['DM_Sans',sans-serif] text-white">RS</span>
            </div>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--soft-red)]"></div>
          </div>
        </div>
      </div>

      {/* Appointment Banner */}
      <div className="px-5 mb-4">
        <div className="relative bg-gradient-to-r from-[var(--sky-blue)] to-[#2D7DB5] rounded-[20px] p-5 overflow-hidden">
          <svg className="absolute right-0 top-0 w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="none">
            <path d="M50 10C35 10 25 20 25 35C25 42 28 48 32 52C35 55 40 57 45 57C50 57 53 55 56 52C60 48 63 42 63 35V30C63 26 60 23 56 23C52 23 50 26 50 30V35C50 38 48 40 45 40C42 40 40 38 40 35C40 26 46 20 56 20C66 20 72 26 72 35C72 52 60 65 40 65" stroke="white" strokeWidth="3" strokeLinecap="round"/>
          </svg>
          <p className="font-['DM_Sans',sans-serif] text-white/60 text-xs mb-1 relative z-10">Upcoming Appointment</p>
          <h3 className="font-['DM_Sans',sans-serif] text-white mb-1 relative z-10">Dr. Priya Sharma</h3>
          <div className="flex items-center gap-2 mb-3 relative z-10">
            <Calendar size={14} className="text-white/80" />
            <p className="font-['DM_Sans',sans-serif] text-white/80">Orthodontist · March 20, 10:30 AM</p>
          </div>
          <button
            onClick={() => navigate('/booking')}
            className="bg-white text-[var(--sky-blue)] font-['DM_Sans',sans-serif] px-4 py-2 rounded-[20px] text-xs inline-block relative z-10"
          >
            View Details
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-5 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--slate-gray)]" size={20} />
          <input
            type="text"
            placeholder="Search services, doctors..."
            className="w-full h-12 pl-12 pr-4 rounded-[30px] bg-[var(--soft-aqua)] text-[var(--deep-navy)] placeholder:text-[var(--slate-gray)] placeholder:italic focus:outline-none focus:ring-2 focus:ring-[var(--sky-blue)]"
          />
        </div>
      </div>

      {/* My Appointments Section */}
      <div className="mb-6">
        <div className="px-5 mb-3 flex items-center justify-between">
          <h3 className="font-['Lora',serif] text-[var(--deep-navy)]">My Appointments</h3>
          <div className="flex items-center gap-3">
            <span className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs">
              {appointments.length} booked
            </span>
            {appointments.length > 0 && (
              <button
                onClick={() => {
                  sessionStorage.removeItem('appointments');
                  setAppointments([]);
                }}
                className="font-['DM_Sans',sans-serif] text-xs text-[var(--soft-red)] border border-[var(--soft-red)] px-3 py-1 rounded-[20px]"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {appointments.length === 0 && (
          <div className="mx-5 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(27,58,92,0.08)] p-5 flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--soft-aqua)] flex items-center justify-center mb-3">
              <Calendar size={24} className="text-[var(--sky-blue)]" />
            </div>
            <p className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)] text-sm font-semibold mb-1">
              No Appointments Yet
            </p>
            <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs mb-4">
              Book your first appointment with one of our specialists.
            </p>
            <button
              onClick={() => navigate('/specialists')}
              className="bg-[var(--sky-blue)] text-white font-['DM_Sans',sans-serif] px-5 py-2 rounded-[20px] text-xs"
            >
              Book Now
            </button>
          </div>
        )}

        {/* Appointments List */}
        {appointments.length > 0 && (
          <div className="px-5 space-y-3">
            {appointments.map((appt: any, index: number) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(27,58,92,0.08)] p-4 border border-[var(--soft-aqua)]"
              >
                {/* Doctor Row */}
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${appt.doctor.gradientFrom}, ${appt.doctor.gradientTo})` }}
                  >
                    <span className="font-['DM_Sans',sans-serif] text-white text-xs font-semibold">
                      {appt.doctor.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['DM_Sans',sans-serif] font-semibold text-[var(--deep-navy)] text-sm">
                      {appt.doctor.name}
                    </h4>
                    <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs">
                      {appt.doctor.specialty}
                    </p>
                  </div>
                  <span className="bg-[var(--mint-light-bg)] text-[var(--mint-dark-text)] font-['DM_Sans',sans-serif] text-[10px] px-3 py-1 rounded-[20px]">
                    Upcoming
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--soft-aqua)] mb-3"></div>

                {/* Details */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Calendar size={13} className="text-[var(--sky-blue)] flex-shrink-0" />
                    <p className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)] text-xs">{appt.date}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={13} className="text-[var(--sky-blue)] flex-shrink-0" />
                    <p className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)] text-xs">{appt.time}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-[var(--sky-blue)] flex-shrink-0" />
                    <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs">
                      The Dental Paradise, Banjara Hills
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Our Services */}
      <div className="mb-6">
        <div className="px-5 mb-3 flex items-center justify-between">
          <h3 className="font-['Lora',serif] text-[var(--deep-navy)]">Our Services</h3>
          <button className="font-['DM_Sans',sans-serif] text-[var(--sky-blue)]">See All</button>
        </div>
        <div className="flex gap-3 px-5 overflow-x-auto pb-2 scrollbar-hide">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.label}
                className="flex-shrink-0 w-[72px] h-[88px] bg-white rounded-2xl shadow-[0px_4px_20px_rgba(27,58,92,0.08)] flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <Icon size={24} style={{ color: service.color }} />
                <span className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)] text-xs">{service.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Our Dentists */}
      <div className="mb-6">
        <div className="px-5 mb-3 flex items-center justify-between">
          <h3 className="font-['Lora',serif] text-[var(--deep-navy)]">Our Dentists</h3>
          <button
            onClick={() => navigate('/specialists')}
            className="font-['DM_Sans',sans-serif] text-[var(--sky-blue)]"
          >
            See All
          </button>
        </div>
        <div className="flex gap-3 px-5 overflow-x-auto pb-2 scrollbar-hide">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="flex-shrink-0 w-[150px] bg-white rounded-2xl shadow-[0px_4px_20px_rgba(27,58,92,0.08)] p-4"
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-3 mx-auto"
                style={{ background: doctor.gradient }}
              >
                <span className="font-['DM_Sans',sans-serif] text-white">{doctor.initial}</span>
              </div>
              <h4 className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)] text-center mb-1">{doctor.name}</h4>
              <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs text-center mb-2">{doctor.specialty}</p>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star size={14} fill="var(--warm-amber)" color="var(--warm-amber)" />
                <span className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)] text-xs">{doctor.rating}</span>
              </div>
              {doctor.available && (
                <div className="bg-[var(--mint-light-bg)] text-[var(--mint-dark-text)] font-['DM_Sans',sans-serif] text-[11px] text-center py-1 px-2 rounded-[20px]">
                  Available
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
