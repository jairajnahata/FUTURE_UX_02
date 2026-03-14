import { Home, Calendar, Users } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Calendar, label: 'Appointments', path: '/home' },
    { icon: Users, label: 'Doctors', path: '/specialists' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--soft-aqua)] h-16 flex items-center justify-around px-4 z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = location.pathname === tab.path && tab.label === 'Home'
          ? location.pathname === '/home'
          : location.pathname === tab.path && tab.label !== 'Home';
        return (
          <button
            key={tab.label}
            onClick={() => navigate(tab.path)}
            className="flex flex-col items-center justify-center gap-1 flex-1"
          >
            <Icon
              size={22}
              className={isActive ? 'text-[var(--sky-blue)]' : 'text-[var(--slate-gray)]'}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span
              className={`text-[10px] font-['DM_Sans',sans-serif] ${
                isActive ? 'text-[var(--sky-blue)] font-semibold' : 'text-[var(--slate-gray)]'
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}