import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react';
import { IMAGES } from '../assets/images';

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer className="relative bg-white pt-16 pb-12 overflow-hidden border-t border-slate-200">
      {/* Top Pre-Footer CTA Banner */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-brand-blue via-[#092348] to-[#05152E] rounded-[28px] p-8 md:p-16 text-white overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Glow & Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#F58220_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full mb-4 border border-brand-orange/20">
                <ShieldCheck className="w-4 h-4" />
                <span>Edmonton & Alberta Freight Specialists</span>
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Let’s Keep Your Construction Project Moving.
              </h2>
              <p className="mt-4 text-slate-300 text-base md:text-lg leading-relaxed">
                Contact our dispatch team today for Moffett forklift delivery, flatbed transportation, or custom jobsite placement quotes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 15px 30px -5px rgba(245, 130, 32, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenQuote}
                className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-base font-bold rounded-full shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <a
                href="tel:7805550199"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-base font-bold rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5 text-brand-orange" />
                <span>(780) 555-0199</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Enterprise Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-200">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <NavLink to="/">
              <img
                src={IMAGES.logo}
                alt="GNA Logistics Logo"
                className="h-24 sm:h-28 w-auto object-contain"
              />
            </NavLink>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              GNA Logistics is Alberta’s trusted enterprise construction transportation & jobsite material handling partner. Headquartered in Edmonton, delivering reliability, safety, and operational excellence across Western Canada.
            </p>

            <div className="flex items-center space-x-6 text-slate-500 text-xs font-semibold uppercase tracking-wider pt-2">
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-brand-orange" />
                <span>24/7 Dispatch</span>
              </span>
              <span className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-brand-orange" />
                <span>COR Certified</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><NavLink to="/services" className="hover:text-brand-orange transition-colors">Truck-Mounted Forklift</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-orange transition-colors">Building Materials Delivery</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-orange transition-colors">Construction Site Delivery</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-orange transition-colors">Material Placement</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-orange transition-colors">Flatbed Transportation</NavLink></li>
              <li><NavLink to="/services" className="hover:text-brand-orange transition-colors">Same-Day Regional</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-6">
              Industries Served
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><NavLink to="/industries" className="hover:text-brand-orange transition-colors">Commercial Construction</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-brand-orange transition-colors">Roofing & Building Envelope</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-brand-orange transition-colors">Warehousing Logistics</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-brand-orange transition-colors">Residential Homebuilding</NavLink></li>
              <li><NavLink to="/industries" className="hover:text-brand-orange transition-colors">Building Suppliers</NavLink></li>
            </ul>
          </div>

          {/* Column 4: Edmonton HQ Contact */}
          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span>10450 178 St NW, Edmonton, AB T5S 1J2, Canada</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                <span>(780) 555-0199</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                <span>dispatch@gnalogistics.ca</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} GNA Logistics Inc. All rights reserved. Built for Edmonton & Western Canada Construction.</p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Terms of Transport</span>
            <span className="hover:text-slate-900 cursor-pointer transition-colors">Safety Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
