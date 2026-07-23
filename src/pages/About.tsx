import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Truck, CheckCircle2, Shield } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { STATS_DATA, COMPANY_VALUES } from '../data/contentData';

interface AboutProps {
  onOpenQuote: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full pb-20">
      {/* About Hero Header */}
      <section className="relative min-h-[55vh] flex items-center justify-center bg-brand-blue-dark text-white overflow-hidden -mt-28 pt-36 pb-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={IMAGES.about}
            alt="GNA Logistics Professional Driver"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-brand-blue-dark/85 to-brand-blue-dark/95" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-4 py-1.5 rounded-full border border-brand-orange/30 mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Headquartered in Edmonton, Alberta</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight"
          >
            Moving Construction Forward Through Reliable Logistics.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Building Western Canada's most dependable construction transportation network—backed by certified drivers, modern flatbeds, and Moffett forklift precision.
          </motion.p>
        </div>
      </section>

      {/* 1. COMPANY STORY & MISSION */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
                Our Foundation & Story
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Engineered specifically for the realities of Western Canadian jobsites.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Founded in Edmonton, Alberta, GNA Logistics recognized a critical gap in the commercial transport market: general freight carriers lacked the specialized equipment and jobsite awareness needed for high-efficiency construction site unloading.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We invested heavily in a dedicated fleet of tandem tractor units, step-deck flatbeds, and heavy-duty truck-mounted Moffett forklifts. Today, GNA Logistics serves as the premier logistics partner for top commercial builders, roofing suppliers, concrete product manufacturers, and lumber yards across Alberta.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">Our Mission</h4>
                  <p className="text-xs text-slate-500 mt-1">Deliver materials safely, on time, and directly to point-of-use with zero site downtime.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900">Our Vision</h4>
                  <p className="text-xs text-slate-500 mt-1">To be Western Canada's gold-standard enterprise construction transportation provider.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Warehouse Logistics Showcase Image 14 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={IMAGES.warehouseLogistics}
                  alt="Warehouse Logistics Team"
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/60">
                  <h4 className="text-base font-bold text-slate-900">Warehouse & Dispatch Operations</h4>
                  <p className="text-xs text-slate-600">Edmonton cross-docking facility with real-time GPS fleet tracking.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SAFETY & DRIVER STANDARDS */}
      <section className="py-24 bg-brand-surface border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
              Uncompromised Standards
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
              Safety, Rigorous Certification & Fleet Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[22px] border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">COR Certified Safety</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Full Certificate of Recognition (COR) compliance ensuring complete hazard assessment, daily vehicle logs, and jobsite hazard controls.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[22px] border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Professional Drivers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Class 1 & 3 licensed operators trained in heavy rigging, load securement, defensive winter driving, and jobsite courtesy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[22px] border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Late-Model Fleet</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Inspected daily by certified mechanics with preventive maintenance schedules that eliminate breaking down on delivery routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FLEET SHOWCASE SECTION (Image 19) */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-6">
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={IMAGES.fleet}
                  alt="GNA Logistics Commercial Fleet"
                  className="w-full h-[460px] object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
                Modern Equipment
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                High-Capacity Assets Built to Haul Heavy Cargo.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our asset-backed infrastructure features tandem tractors, step-decks, flatbeds, and all-terrain Moffett forklifts maintained to the highest provincial transport standards.
              </p>

              <div className="space-y-3 pt-2">
                {COMPANY_VALUES.map((val, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{val.title}: </span>
                      <span className="text-slate-600 font-normal">{val.description}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold rounded-full shadow-lg transition-all"
                >
                  Schedule Delivery With Our Fleet
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <section className="py-20 bg-brand-blue-dark text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-4xl sm:text-5xl font-extrabold text-brand-orange">
                  {stat.value}{stat.suffix}
                </div>
                <div className="mt-2 text-sm font-bold text-white">{stat.label}</div>
                <div className="mt-1 text-xs text-slate-300">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
