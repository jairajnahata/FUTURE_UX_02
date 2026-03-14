import { useNavigate } from 'react-router-dom';
import { Check, Calendar, User, Activity, MapPin } from 'lucide-react';
import { PillButton } from './PillButton';

export function ConfirmationScreen() {
  const navigate = useNavigate();

  // Read doctor, date and time from sessionStorage
  const storedDoctor = sessionStorage.getItem('selectedDoctor');
  const doctor = storedDoctor ? JSON.parse(storedDoctor) : {
    name: 'Dr. Priya Sharma',
    specialty: 'Orthodontist',
    initials: 'PS',
    gradientFrom: '#667eea',
    gradientTo: '#764ba2',
  };
  const date = sessionStorage.getItem('bookingDate') ?? 'March 18, 2026';
  const time = sessionStorage.getItem('bookingTime') ?? '10:00 AM';

  // Save this appointment into the appointments list in sessionStorage
  const stored = sessionStorage.getItem('appointments');
  const existing = stored ? JSON.parse(stored) : [];
  const alreadySaved = existing.some(
    (a: any) => a.doctor.name === doctor.name && a.date === date && a.time === time
  );
  if (!alreadySaved) {
    sessionStorage.setItem('appointments', JSON.stringify([...existing, { doctor, date, time }]));
  }

  const bookingDetails = [
    { icon: User, label: 'Doctor', value: doctor.name },
    { icon: Activity, label: 'Service', value: 'Orthodontic Consultation' },
    { icon: Calendar, label: 'Date & Time', value: `${date} · ${time}` },
    { icon: MapPin, label: 'Location', value: 'The Dental Paradise, Banjara Hills, Hyderabad' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--soft-aqua)] to-[var(--pearl-white)] px-5 py-12 flex flex-col items-center">
      {/* Success Icon with Ripple Effect */}
      <div className="relative mb-6 mt-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[120px] h-[120px] rounded-full bg-[var(--mint-green)] opacity-10 animate-ping"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[140px] h-[140px] rounded-full bg-[var(--mint-green)] opacity-20 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[160px] h-[160px] rounded-full bg-[var(--mint-green)] opacity-10"></div>
        </div>
        <div className="relative w-[120px] h-[120px] rounded-full bg-[var(--mint-green)] flex items-center justify-center shadow-lg">
          <Check size={60} className="text-white" strokeWidth={3} />
        </div>
      </div>

      {/* Heading */}
      <div className="text-center mb-2">
        <h1 className="font-['Lora',serif] text-[var(--deep-navy)] mb-1">
          Appointment Confirmed! 🎉
        </h1>
        <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">
          We've sent the booking details to your email.
        </p>
      </div>

      {/* Booking Summary Card */}
      <div className="w-full max-w-md bg-white rounded-[20px] shadow-[0px_4px_20px_rgba(27,58,92,0.08)] p-5 my-8">
        <h3 className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs uppercase tracking-wider mb-4">
          Booking Summary
        </h3>
        <div className="w-full h-px bg-[var(--soft-aqua)] mb-4"></div>
        <div className="space-y-4 mb-4">
          {bookingDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <div key={detail.label} className="flex items-start gap-3">
                <Icon size={20} className="text-[var(--sky-blue)] mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs mb-0.5">
                    {detail.label}
                  </p>
                  <p className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)]">
                    {detail.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-[var(--mint-light-bg)] rounded-[10px] p-3">
          <p className="font-['DM_Sans',sans-serif] text-[var(--mint-dark-text)] text-xs">
            Please arrive 10 minutes early and bring a valid ID.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-md space-y-3">
        <PillButton
          variant="outline"
          icon={<Calendar size={20} />}
          onClick={() => alert('Calendar integration would be implemented here')}
        >
          Add to Calendar
        </PillButton>
        <PillButton variant="primary" onClick={() => navigate('/home')}>
          Back to Home
        </PillButton>
      </div>
    </div>
  );
}