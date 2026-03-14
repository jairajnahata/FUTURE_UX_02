import { ReactNode } from 'react';

interface PillButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'accent' | 'outline' | 'white';
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  icon?: ReactNode;
}

export function PillButton({
  children,
  onClick,
  variant = 'primary',
  fullWidth = true,
  className = '',
  type = 'button',
  icon
}: PillButtonProps) {
  const baseStyles = 'h-[52px] rounded-[50px] font-[\'DM_Sans\',sans-serif] transition-all duration-200';

  const variants = {
    primary: 'bg-[var(--sky-blue)] text-white hover:bg-[#3a8fc4]',
    accent: 'bg-[var(--warm-amber)] text-white hover:bg-[#e59613] shadow-[0px_8px_24px_rgba(245,166,35,0.35)]',
    outline: 'bg-white border-[1.5px] border-[var(--sky-blue)] text-[var(--sky-blue)] hover:bg-[var(--soft-aqua)]',
    white: 'bg-white text-[var(--sky-blue)] hover:bg-[var(--soft-aqua)]'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className} flex items-center justify-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
