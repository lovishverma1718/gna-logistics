import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  label: string;
  description?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  suffix = '',
  decimals = 0,
  duration = 2,
  label,
  description,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out cubic function for smooth decelerating count
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = easeOut * value;
      
      setCount(current);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  const formattedNumber = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString();

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue tracking-tight font-sans">
        {formattedNumber}
        <span className="text-brand-orange ml-1 font-extrabold">{suffix}</span>
      </div>
      <span className="mt-2 text-sm sm:text-base font-bold text-slate-900 tracking-wide">
        {label}
      </span>
      {description && (
        <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
