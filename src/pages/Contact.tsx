import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Send, CheckCircle, AlertTriangle, MessageSquare } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { sendToWhatsApp } from '../utils/whatsapp';

export const Contact: React.FC = () => {
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

    // Automatically send details to the user's WhatsApp number
    sendToWhatsApp(formData, newRef);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleManualWhatsApp = () => {
    sendToWhatsApp(formData, refNum || `GNA-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  return (
    <div className="w-full pb-20">
      {/* Contact Hero */}
      <section className="relative bg-brand-blue-dark text-white overflow-hidden -mt-28 pt-36 pb-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-4 py-1.5 rounded-full border border-brand-orange/30 mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Edmonton Dispatch & Customer Support</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-3xl mx-auto"
          >
            Let’s Discuss Your Next Delivery.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto"
          >
            Reach out directly to our Edmonton dispatch team for fast freight estimates, project scheduling, or emergency hot-shot transport across Alberta.
          </motion.p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Business Info & Hours */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-slate-50 p-8 rounded-[28px] border border-slate-200 space-y-6 shadow-sm">
                <div className="flex items-center space-x-3 pb-6 border-b border-slate-200">
                  <img src={IMAGES.logo} alt="GNA Logistics" className="h-14 sm:h-16 w-auto object-contain" />
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">GNA Logistics Inc.</h3>
                    <p className="text-xs text-slate-500">Edmonton Headquarters</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-400">Headquarters Address</h4>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        10450 178 St NW, Edmonton, AB T5S 1J2, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-400">Dispatch & Office Phone</h4>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">(780) 555-0199</p>
                      <p className="text-xs text-slate-500">24/7 Priority Emergency Line</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-400">Email Enquiries</h4>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">dispatch@gnalogistics.ca</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-extrabold uppercase text-slate-400">Operating Business Hours</h4>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">Monday – Friday: 06:00 – 18:00 MST</p>
                      <p className="text-xs text-slate-500">Saturday: By Scheduled Reservation</p>
                      <p className="text-xs text-slate-500">Sunday: Closed (Emergency Hot-Shots Available)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Hot-Shot Callout Card */}
              <div className="p-6 rounded-[22px] bg-amber-500/10 border border-amber-500/20 flex items-start space-x-4">
                <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-900">Urgent Jobsite Hot-Shot Required?</h4>
                  <p className="text-xs text-amber-800 mt-1">
                    If your project is shut down due to missing materials, call our direct emergency dispatch line at (780) 555-0199 for immediate driver deployment.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Complete Interactive Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-[28px] border border-slate-200 shadow-enterprise">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Request Freight Rate & Booking</h3>
                <p className="text-slate-500 text-sm mb-8">Fill out the fields below for an official GNA Logistics freight estimate.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                      Your freight quote request has been sent to your WhatsApp number (<strong className="text-slate-900">{formData.phone}</strong>) and logged with our Edmonton dispatch team.
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
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. David Ross"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Alberta Roof & Envelope"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="david@albertaroof.ca"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="(780) 555-0199"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Select Primary Logistics Service *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all"
                      >
                        <option value="Moffett Forklift Delivery">Truck-Mounted Moffett Forklift Delivery</option>
                        <option value="Building Materials Transport">Building Materials Delivery</option>
                        <option value="Construction Site Freight">Construction Site Delivery</option>
                        <option value="Material Placement">Job Site Material Placement</option>
                        <option value="Flatbed Hauling">Flatbed Transportation</option>
                        <option value="Same-Day Hot Shot">Same-Day Express Hot-Shot</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Project & Delivery Requirements
                      </label>
                      <textarea
                        rows={4}
                        name="projectDetails"
                        value={formData.projectDetails}
                        onChange={handleChange}
                        placeholder="Provide details on cargo dimensions, total weight, delivery location, and jobsite terrain..."
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:bg-white transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-base font-bold rounded-full shadow-lg transition-all flex items-center justify-center space-x-2"
                    >
                      <span>Submit & Send to WhatsApp</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Map Edmonton Region Placeholder */}
          <div className="mt-20 rounded-[28px] overflow-hidden border border-slate-200 shadow-lg bg-slate-900 text-white relative h-96">
            {/* Custom Styled Map Graphic representation */}
            <div className="absolute inset-0 bg-[radial-gradient(#F58220_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
              <div className="w-16 h-16 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center border border-brand-orange/40 mb-4 animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-extrabold text-white">Edmonton Headquarters & Service Coverage</h4>
              <p className="text-slate-300 text-sm max-w-md mt-2">
                10450 178 St NW, Edmonton, AB T5S 1J2 • Serving Edmonton Metro, Nisku, Leduc, St. Albert, Sherwood Park & Provincial Corridors.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold border border-white/20">Edmonton Metro</span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold border border-white/20">Calgary Corridor</span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold border border-white/20">Fort McMurray Route</span>
                <span className="px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold border border-white/20">Red Deer Network</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
