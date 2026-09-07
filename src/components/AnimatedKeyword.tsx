import React from 'react';
import { useInView } from '../hooks/useInView';

export type KeywordVariant = 'amber' | 'warning' | 'emerald' | 'sky';

interface AnimatedKeywordProps {
  children: React.ReactNode;
  variant?: KeywordVariant;
  className?: string;
  as?: 'span' | 'strong' | 'em';
}

export const AnimatedKeyword: React.FC<AnimatedKeywordProps> = ({
  children,
  variant = 'amber',
  className = '',
  as: Component = 'span',
}) => {
  const { ref, isInView } = useInView<HTMLSpanElement>({
    threshold: 0.25,
    triggerOnce: true,
  });

  const variantGradients: Record<KeywordVariant, string> = {
    amber: 'from-amber-200 via-amber-400 to-orange-400',
    warning: 'from-red-400 via-amber-300 to-red-400',
    emerald: 'from-emerald-300 via-amber-300 to-teal-300',
    sky: 'from-sky-300 via-amber-200 to-cyan-300',
  };

  const shadowGlows: Record<KeywordVariant, string> = {
    amber: 'drop-shadow-[0_2px_14px_rgba(245,158,11,0.28)]',
    warning: 'drop-shadow-[0_2px_14px_rgba(239,68,68,0.28)]',
    emerald: 'drop-shadow-[0_2px_14px_rgba(16,185,129,0.28)]',
    sky: 'drop-shadow-[0_2px_14px_rgba(56,189,248,0.28)]',
  };

  return (
    <Component
      ref={ref}
      className={`inline-block font-black bg-clip-text text-transparent bg-gradient-to-r ${variantGradients[variant]} transition-all duration-700 ease-out ${
        isInView
          ? `animate-keyword-reveal ${shadowGlows[variant]} scale-100 opacity-100`
          : 'opacity-70 scale-[0.98]'
      } ${className}`}
    >
      {children}
    </Component>
  );
};
