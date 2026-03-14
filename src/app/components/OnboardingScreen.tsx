import { useNavigate } from 'react-router-dom';
import { PillButton } from './PillButton';

export function OnboardingScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] flex flex-col items-center justify-between px-5 py-10 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--soft-aqua)_0%,transparent_70%)] opacity-40"></div>

      {/* Top area - Logo and branding */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10">

        {/* Logo — matches LoginScreen exactly */}
        <div className="relative w-20 h-20 flex items-center justify-center mb-3">
          <div className="absolute inset-0 rounded-full bg-[var(--sky-blue)] opacity-10"></div>
          <div className="absolute inset-[5px] rounded-full bg-[var(--sky-blue)] opacity-20"></div>
          <div className="w-14 h-14 rounded-full bg-[var(--sky-blue)] flex items-center justify-center shadow-lg">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 4C12.5 4 9 6.5 9 10.5C9 12.5 9.5 14 10 15.5C10.8 18 11 20 11 22C11 23.7 11.5 25 12.5 25C13.5 25 14 23.5 14.5 21.5C15 19.5 15.5 18 16 18C16.5 18 17 19.5 17.5 21.5C18 23.5 18.5 25 19.5 25C20.5 25 21 23.7 21 22C21 20 21.2 18 22 15.5C22.5 14 23 12.5 23 10.5C23 6.5 19.5 4 16 4Z"
                fill="white"
              />
              <path
                d="M12 8C12 8 12.5 7 14 7"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* App name */}
        <p className="font-['Lora',serif] text-[var(--deep-navy)] text-lg font-semibold tracking-wide text-center mb-1">
          The Dental Paradise
        </p>
        {/* Tagline */}
        <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs tracking-widest uppercase text-center">
          Your Smile · Our Priority
        </p>

        {/* Illustration */}
        <div className="mt-12 relative">
          <div className="w-64 h-48 rounded-[50%] bg-[var(--soft-lavender)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
          <div className="relative z-10 text-8xl">
            🦷
          </div>
        </div>
      </div>

      {/* Bottom area - CTA and pagination */}
      <div className="w-full max-w-md relative z-10 space-y-4">
        {/* Pagination dots */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-6 h-2 rounded-full bg-[var(--sky-blue)]"></div>
          <div className="w-2 h-2 rounded-full bg-[var(--light-gray)]"></div>
          <div className="w-2 h-2 rounded-full bg-[var(--light-gray)]"></div>
        </div>
        {/* Get Started button */}
        <PillButton variant="accent" onClick={() => navigate('/login')}>
          Get Started
        </PillButton>
        {/* Login link */}
        <p className="text-center font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-[var(--sky-blue)] underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}