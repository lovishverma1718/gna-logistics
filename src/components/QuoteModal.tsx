import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Send, Shield, MessageSquare } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { sendToWhatsApp } from '../utils/whatsapp';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [refNum, setRefNum] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Moffett Forklift Delivery',
    projectDetails: '',
    deliveryDate: '',
    location: 'Edmonton Area',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRef = `GNA-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefNum(newRef);
    setSubmitted(true);
    
    // Automatically trigger WhatsApp message send
    sendToWhatsApp(formData, newRef);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleManualWhatsApp = () => {
    sendToWhatsApp(formData, refNum || `GNA-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-blue-dark/70 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-slate-200"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-brand-blue to-brand-blue-dark p-6 sm:p-8 text-white relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close quote modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-3">
                <img src={IMAGES.logo} alt="GNA Logistics" className="h-10 sm:h-12 w-auto bg-white/90 p-1.5 rounded-lg object-contain" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-3 py-1 rounded-full border border-brand-orange/30">
                  Fast Dispatch Response
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Request a Construction Freight Quote
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm">
                Complete your details below and our Edmonton dispatch coordinator will respond within 30 minutes.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Quote Request Received!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your request details have been sent to your WhatsApp number (<strong className="text-slate-900">{formData.phone}</strong>) and logged with our Edmonton dispatch team.
                  </p>
                  
                  <div className="inline-flex items-center space-x-2 text-xs font-semibold text-brand-blue bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
                    <span>Reference #: {refNum}</span>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleManualWhatsApp}
                      className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-md transition-all flex items-center justify-center space-x-2"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Resend to WhatsApp</span>
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-full transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Builders Inc."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="marcus@apexbuilders.ca"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(780) 555-0199"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Required Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                      >
                        <option value="Moffett Forklift Delivery">Truck-Mounted Moffett Delivery</option>
                        <option value="Building Materials">Building Materials Transport</option>
                        <option value="Construction Site">Construction Site Freight</option>
                        <option value="Material Placement">Job Site Material Placement</option>
                        <option value="Flatbed Transportation">Flatbed Hauling</option>
                        <option value="Same-Day Delivery">Same-Day Hot Shot Express</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Estimated Delivery Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="deliveryDate"
                          value={formData.deliveryDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Project & Cargo Specifications
                    </label>
                    <textarea
                      rows={3}
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Specify material types, weight estimate, pickup/drop-off addresses, or jobsite access restrictions..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="flex items-center space-x-1.5 text-xs text-slate-500">
                      <Shield className="w-4 h-4 text-emerald-600" />
                      <span>Details Sent Instantly to WhatsApp</span>
                    </span>

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm rounded-full shadow-lg transition-all flex items-center space-x-2"
                    >
                      <span>Submit & Send via WhatsApp</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
