import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { PillButton } from './PillButton';

export function LoginScreen() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-[var(--pearl-white)] px-5 py-8 overflow-y-auto">
      <div className="max-w-md mx-auto">
        {/* Logo Section */}
        <div className="flex flex-col items-center mt-8 mb-8">

          {/* Outer ring */}
          <div className="relative w-20 h-20 flex items-center justify-center mb-3">
            <div className="absolute inset-0 rounded-full bg-[var(--sky-blue)] opacity-10"></div>
            <div className="absolute inset-[5px] rounded-full bg-[var(--sky-blue)] opacity-20"></div>

            {/* Main logo circle */}
            <div className="w-14 h-14 rounded-full bg-[var(--sky-blue)] flex items-center justify-center shadow-lg">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Tooth shape */}
                <path
                  d="M16 4C12.5 4 9 6.5 9 10.5C9 12.5 9.5 14 10 15.5C10.8 18 11 20 11 22C11 23.7 11.5 25 12.5 25C13.5 25 14 23.5 14.5 21.5C15 19.5 15.5 18 16 18C16.5 18 17 19.5 17.5 21.5C18 23.5 18.5 25 19.5 25C20.5 25 21 23.7 21 22C21 20 21.2 18 22 15.5C22.5 14 23 12.5 23 10.5C23 6.5 19.5 4 16 4Z"
                  fill="white"
                />
                {/* Shine effect */}
                <path
                  d="M12 8C12 8 12.5 7 14 7"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* App name with styled text */}
          <div className="text-center">
            <p className="font-['Lora',serif] text-[var(--deep-navy)] text-lg font-semibold tracking-wide">
              The Dental Paradise
            </p>
            <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)] text-xs tracking-widest uppercase mt-0.5">
              Your Smile · Our Priority
            </p>
          </div>

        </div>

        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="font-['Lora',serif] text-[var(--deep-navy)] mb-2">Welcome Back 👋</h1>
          <p className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">
            Book your dental appointment in minutes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block font-['DM_Sans',sans-serif] text-[var(--deep-navy)] mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--slate-gray)]" size={20} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-[var(--soft-aqua)] border border-[var(--light-gray)] text-[var(--deep-navy)] placeholder:text-[var(--slate-gray)] placeholder:italic focus:border-[var(--sky-blue)] focus:border-2 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block font-['DM_Sans',sans-serif] text-[var(--deep-navy)] mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--slate-gray)]" size={20} />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full h-14 pl-12 pr-12 rounded-xl bg-[var(--soft-aqua)] border border-[var(--light-gray)] text-[var(--deep-navy)] placeholder:text-[var(--slate-gray)] placeholder:italic focus:border-[var(--sky-blue)] focus:border-2 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--slate-gray)]"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button type="button" className="font-['DM_Sans',sans-serif] text-[var(--warm-amber)]">
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <div className="pt-2">
            <PillButton type="submit" variant="primary">
              Login
            </PillButton>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[var(--light-gray)]"></div>
          <span className="font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">or continue with</span>
          <div className="flex-1 h-px bg-[var(--light-gray)]"></div>
        </div>

        {/* Social Login */}
        <div className="flex gap-3 mb-6">
          <button className="flex-1 h-12 rounded-xl bg-white border border-[var(--light-gray)] flex items-center justify-center gap-2 hover:bg-[var(--soft-aqua)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M18.17 8.37H17.5H10v3.63h4.83c-.45 2.27-2.47 3.63-4.83 3.63-2.94 0-5.32-2.38-5.32-5.32S7.06 5 10 5c1.36 0 2.59.52 3.53 1.36l2.68-2.68C14.55 2.21 12.38 1.25 10 1.25c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75c4.48 0 8.34-3.26 8.34-8.75 0-.59-.06-1.17-.17-1.73-.02-.09-.04-.18-.05-.27z" fill="#4285F4"/>
            </svg>
            <span className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)]">Google</span>
          </button>
          <button className="flex-1 h-12 rounded-xl bg-white border border-[var(--light-gray)] flex items-center justify-center gap-2 hover:bg-[var(--soft-aqua)] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.25 10c0-3.45-2.8-6.25-6.25-6.25-3.45 0-6.25 2.8-6.25 6.25 0 3.11 2.27 5.69 5.24 6.16v-4.36H7.26V10h1.73V8.56c0-1.71 1.02-2.65 2.57-2.65.74 0 1.52.13 1.52.13v1.67h-.86c-.84 0-1.1.52-1.1 1.06V10h1.88l-.3 1.8h-1.58v4.36c2.97-.47 5.24-3.05 5.24-6.16z" fill="#000000"/>
            </svg>
            <span className="font-['DM_Sans',sans-serif] text-[var(--deep-navy)]">Apple</span>
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center font-['DM_Sans',sans-serif] text-[var(--slate-gray)]">
          Don't have an account?{' '}
          <button className="text-[var(--sky-blue)]">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}