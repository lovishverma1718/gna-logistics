import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ArrowRight, Building, Layers, Warehouse, Home as HomeIcon, Store, Factory } from 'lucide-react';
import { IMAGES } from '../assets/images';
import { INDUSTRIES_DATA } from '../data/contentData';

interface IndustriesProps {
  onOpenQuote: () => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenQuote }) => {
  const sectorIcons: Record<string, React.ReactNode> = {
    construction: <Building className="w-6 h-6 text-brand-orange" />,
    roofing: <Layers className="w-6 h-6 text-brand-orange" />,
    warehousing: <Warehouse className="w-6 h-6 text-brand-orange" />,
    residential: <HomeIcon className="w-6 h-6 text-brand-orange" />,
    commercial: <Store className="w-6 h-6 text-brand-orange" />,
    'building-suppliers': <Factory className="w-6 h-6 text-brand-orange" />,
  };

  return (
    <div className="w-full pb-20">
      {/* Industries Hero Banner */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-brand-blue-dark text-white overflow-hidden -mt-28 pt-36 pb-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={IMAGES.construction}
            alt="Construction Site Logistics"
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
            <span>Sector Specialization & Expertise</span>
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
          >
            Industries We Serve Across Alberta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-lg max-w-2xl mx-auto"
          >
            Engineered logistics solutions tailored to commercial builders, roofing contractors, warehousing hubs, and building material suppliers.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid & Detailed Sections */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-28">
        {INDUSTRIES_DATA.map((ind, idx) => (
          <motion.section
            key={ind.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[28px] p-8 sm:p-12 border border-slate-200 shadow-enterprise"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Photo Column */}
              <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative rounded-[22px] overflow-hidden shadow-lg border border-slate-200 h-[380px] group">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
                    {sectorIcons[ind.id]}
                  </div>
                </div>
              </div>

              {/* Copy Column */}
              <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange">
                  {ind.tagline}
                </span>

                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  {ind.title}
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {ind.description}
                </p>

                {/* Key Sector Benefits */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Strategic Logistics Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {ind.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs font-bold text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200/60">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenQuote}
                    className="px-6 py-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-xs rounded-full shadow-md transition-all flex items-center space-x-2"
                  >
                    <span>Request Sector Delivery Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};
