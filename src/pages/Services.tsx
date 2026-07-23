import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { SERVICES_DATA } from '../data/contentData';

interface ServicesProps {
  onOpenQuote: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full pb-20">
      {/* Services Hero Header */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-brand-blue-dark text-white overflow-hidden -mt-28 pt-36 pb-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={IMAGES.flatbed}
            alt="Flatbed Transportation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-brand-blue-dark/80 to-brand-blue-dark/95" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-4 py-1.5 rounded-full border border-brand-orange/30 mb-4"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Alberta Heavy Transportation Capabilities</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Construction Logistics Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Serving Edmonton and surrounding communities with dedicated truck-mounted forklifts, flatbeds, and precision jobsite placement.
          </motion.p>
        </div>
      </section>

      {/* Six Service Detail Sections */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-28">
        {SERVICES_DATA.map((service, idx) => (
          <React.Fragment key={service.id}>
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-200 group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[440px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/60">
                    <div className="grid grid-cols-2 gap-4">
                      {service.specs.slice(0, 2).map((spec, sIdx) => (
                        <div key={sIdx}>
                          <span className="block text-[10px] font-extrabold uppercase text-slate-400">{spec.label}</span>
                          <span className="text-xs font-bold text-slate-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="inline-flex items-center space-x-2 text-xs font-bold text-brand-orange bg-brand-orange/10 px-3.5 py-1 rounded-full border border-brand-orange/20">
                  <span>Service 0{idx + 1}</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  {service.title}
                </h2>
                
                <h3 className="text-base font-semibold text-brand-blue">{service.subtitle}</h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* Features list */}
                <div className="space-y-3 pt-2">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center space-x-3 text-sm font-semibold text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center space-x-4">
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3 bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm rounded-full shadow-md transition-all flex items-center space-x-2"
                  >
                    <span>Request Quote for This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.section>

            {/* Large Conversion CTA Banner after every 2 services (after idx 1 and idx 3) */}
            {(idx === 1 || idx === 3) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="my-16 bg-gradient-to-r from-brand-blue via-brand-blue-dark to-slate-900 rounded-[28px] p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold">Need Custom Freight Dispatch?</h3>
                  <p className="text-slate-300 text-sm mt-1">Our Edmonton dispatch team provides 24/7 quote turnarounds for urgent jobsite delivery requirements.</p>
                </div>
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold rounded-full shadow-lg shrink-0 transition-all"
                >
                  Contact Dispatch (780) 555-0199
                </button>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
