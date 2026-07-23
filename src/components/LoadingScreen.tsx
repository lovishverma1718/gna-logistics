import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../assets/images';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Smooth percentage counter animation over 1.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 5;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white px-6"
        >
          <div className="relative flex flex-col items-center max-w-sm w-full">
            {/* Centered Brand Logo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10 flex items-center justify-center"
            >
              <img
                src={IMAGES.logo}
                alt="GNA Logistics"
                className="h-32 sm:h-40 w-auto object-contain drop-shadow-md"
              />
            </motion.div>

            {/* Subtitle tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.2 }}
              className="text-xs tracking-[0.25em] uppercase text-brand-blue font-semibold mb-6 text-center"
            >
              Construction Transportation & Logistics
            </motion.p>

            {/* Animated Loading Bar Container */}
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden relative shadow-inner mb-4">
              <motion.div
                className="h-full bg-brand-orange rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.1 }}
              />
            </div>

            {/* Percentage Counter (000 - 100 format) */}
            <div className="flex items-center justify-between w-full text-slate-400 font-mono text-xs tracking-wider">
              <span>INITIALIZING SYSTEM</span>
              <span className="font-bold text-brand-blue">
                {String(progress).padStart(3, '0')}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
