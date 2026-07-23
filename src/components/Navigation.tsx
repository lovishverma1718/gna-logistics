import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, PhoneCall } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface NavigationProps {
  onOpenQuote: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-4 sm:px-6 pointer-events-none">
      <div className="max-w-[1400px] mx-auto pointer-events-auto">
        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full h-[76px] sm:h-[84px] rounded-2xl md:rounded-full px-6 flex items-center transition-all duration-500 border ${
            isScrolled
              ? 'bg-white/90 backdrop-blur-xl border-slate-200/80 shadow-enterprise'
              : 'bg-white/80 backdrop-blur-md border-white/40 shadow-lg shadow-black/5'
          }`}
        >
          <div className="flex items-center justify-between w-full">
            {/* Left: Brand Logo */}
            <NavLink to="/" className="flex items-center space-x-3 group overflow-visible">
              <img
                src={IMAGES.logo}
                alt="GNA Logistics Logo"
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105 scale-[2.8] sm:scale-[3.15] origin-left"
              />
            </NavLink>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 relative ${
                      isActive
                        ? 'text-white bg-brand-blue shadow-md'
                        : 'text-slate-700 hover:text-brand-blue hover:bg-white/80'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right: Phone & Primary Quote CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="tel:7805550199"
                className="hidden xl:flex items-center space-x-2 text-xs font-semibold text-slate-600 hover:text-brand-blue transition-colors px-3 py-2"
              >
                <PhoneCall className="w-4 h-4 text-brand-orange" />
                <span>(780) 555-0199</span>
              </a>

              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 10px 25px -5px rgba(245, 130, 32, 0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center space-x-2 px-6 py-2.5 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold rounded-full transition-all shadow-md"
              >
                <span>Request Quote</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={onOpenQuote}
                className="px-3.5 py-1.5 bg-brand-orange text-white text-xs font-bold rounded-full shadow-sm"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-full text-slate-700 hover:text-brand-blue hover:bg-slate-100 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Animated Slide-Down Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="md:hidden overflow-hidden pt-4 pb-2 border-t border-slate-200/80 mt-3"
              >
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `px-5 py-3 text-base font-semibold rounded-2xl transition-all ${
                          isActive
                            ? 'bg-brand-blue text-white shadow-sm'
                            : 'text-slate-700 hover:bg-slate-100 hover:text-brand-blue'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  <div className="pt-2 border-t border-slate-100 flex flex-col space-y-3">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenQuote();
                      }}
                      className="w-full py-3.5 bg-brand-orange text-white text-center font-bold text-sm rounded-full shadow-md hover:bg-brand-orange-hover"
                    >
                      Request a Construction Quote
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
};
