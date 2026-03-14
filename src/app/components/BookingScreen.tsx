import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock, Stethoscope } from 'lucide-react';
import { PillButton } from './PillButton';

export function BookingScreen() {
  const navigate = useNavigate();

  // Read the selected doctor from sessionStorage
  const storedDoctor = sessionStorage.getItem('selectedDoctor');
  const doctor = storedDoctor ? JSON.parse(storedDoctor) : {
    name: 'Dr. Priya Sharma',
    specialty: 'Orthodontist',
    initials: 'PS',
    gradientFrom: '#667eea',
    gradientTo: '#764ba2',
  };

  const [selectedDate, setSelectedDate] = useState('18');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');

  const weekDays = [
    { day: 'Mon', date: '16' },
    { day: 'Tue', date: '17' },
    { day: 'Wed', date: '18' },
    { day: 'Thu', date: '19' },
    { day: 'Fri', date: '20' },
    { day: 'Sat', date: '21', isToday: true },
    { day: 'Sun', date: '22' },
  ];

  const timeSlots = [
    { time: '9:00 AM', available: true },
    { time: '9:30 AM', available: false },
    { time: '10:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '11:30 AM', available: true },
    { time: '2:00 PM', available: true },
    { time: '2:30 PM', available: true },
    { time: '3:00 PM', available: true },
    { time: '3:30 PM', available: true },
  ];

  const handleConfirm = () => {
    sessionStorage.setItem('bookingDate', `March ${selectedDate}, 2026`);
    sessionStorage.setItem('bookingTime', selectedTime);
    navigate('/confirmation');
  };

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] pb-8">
      {/* Top Navigation */}
      <div className="px-5 pt-12 pb-4 flex items-center justify-between">
        <button onClick={() => navigate('/specialists')} className="p-2 -ml-2">
          <ArrowLeft size={24} className="text-[var(--deep-navy)]" />
        </button>
        <h2 className="font-['Lora',serif] text-[var(--deep-navy)] flex-1 text-center">Pick a Date & Time</h2>
        <div className="w-10"></div>
      </div>

      {/* Doctor Summary Card */}
      <div className="px-5 mb-6">
        <div className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(27,58,92,0.08)] p-4 flex items-center gap-3">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: `linear-gradient(135deg, ${doctor.gradientFrom}, ${doctor.gradientTo})` }}
          >
            <span className="font-['DM_Sans',sans-serif] text-white text-sm">{doctor.initials}</span>
          </div>
          <div className="flex-1">
            <h4 className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)]">{doctor.name}</h4>
            <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs">{doctor.specialty} · The Dental Paradise</p>
          </div>
          <Stethoscope size={24} className="text-[var(--sky-blue)]" />
        </div>
      </div>

      {/* Month Header */}
      <div className="px-5 mb-4 flex items-center justify-between">
        <button className="p-2 -ml-2">
          <ChevronLeft size={20} className="text-[var(--slate-gray)]" />
        </button>
        <h3 className="font-['Lora',serif] text-[var(--deep-navy)]">March 2026</h3>
        <button className="p-2 -mr-2">
          <ChevronRight size={20} className="text-[var(--slate-gray)]" />
        </button>
      </div>

      {/* Weekly Calendar Strip */}
      <div className="px-5 mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {weekDays.map((day) => {
            const isSelected = selectedDate === day.date;
            return (
              <button
                key={day.date}
                onClick={() => setSelectedDate(day.date)}
                className={`flex-shrink-0 w-14 h-16 rounded-2xl flex flex-col items-center justify-center gap-1 transition-all ${
                  isSelected
                    ? 'bg-[var(--sky-blue)] text-white'
                    : 'bg-white text-[var(--deep-navy)]'
                }`}
              >
                <span className={`font-['DM_Sans',sans-serif] text-xs ${isSelected ? 'text-white' : 'text-[var(--slate-gray)]'}`}>
                  {day.day}
                </span>
                <span className={`font-['DM_Sans',sans-serif] ${isSelected ? 'text-white' : 'text-[var(--deep-navy)]'}`}>
                  {day.date}
                </span>
                {day.isToday && !isSelected && (
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--warm-amber)] mt-0.5"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time Slots */}
      <div className="px-5 mb-4">
        <h3 className="font-['Lora',serif] text-[var(--deep-navy)] mb-4">Available Time Slots</h3>
        <div className="grid grid-cols-3 gap-2">
          {timeSlots.map((slot) => {
            const isSelected = selectedTime === slot.time;
            return (
              <button
                key={slot.time}
                onClick={() => slot.available && setSelectedTime(slot.time)}
                disabled={!slot.available}
                className={`h-11 rounded-[10px] font-['DM_Sans',sans-serif] transition-all ${
                  !slot.available
                    ? 'bg-[var(--light-gray)] text-[var(--slate-gray)] line-through cursor-not-allowed'
                    : isSelected
                    ? 'bg-[var(--sky-blue)] text-white'
                    : 'bg-white border-[1.5px] border-[var(--sky-blue)] text-[var(--deep-navy)] hover:bg-[var(--soft-aqua)]'
                }`}
              >
                {slot.time}
              </button>
            );
          })}
        </div>
      </div>

      {/* Visit Duration Note */}
      <div className="px-5 mb-6">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[var(--slate-gray)]" />
          <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs">
            Estimated visit duration: 45 minutes
          </p>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="px-5">
        <PillButton variant="accent" onClick={handleConfirm}>
          Confirm Appointment
        </PillButton>
      </div>
    </div>
  );
}