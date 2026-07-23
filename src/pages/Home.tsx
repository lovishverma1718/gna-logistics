import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Truck,
  Boxes,
  HardHat,
  Move,
  Container,
  Zap,
  MapPin,
} from 'lucide-react';
import { IMAGES } from '../assets/images';
import { SERVICES_DATA, INDUSTRIES_DATA, PROCESS_STEPS, STATS_DATA, COMPANY_VALUES } from '../data/contentData';
import { StatCounter } from '../components/StatCounter';

gsap.registerPlugin(ScrollTrigger);

interface HomeProps {
  onOpenQuote: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuote }) => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Hero Parallax Zoom & Scroll Reveal
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        scale: 1.15,
        y: '8%',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  const serviceIconMap: Record<string, React.ReactNode> = {
    Truck: <Truck className="w-6 h-6 text-brand-orange" />,
    Boxes: <Boxes className="w-6 h-6 text-brand-orange" />,
    HardHat: <HardHat className="w-6 h-6 text-brand-orange" />,
    Move: <Move className="w-6 h-6 text-brand-orange" />,
    Trailer: <Container className="w-6 h-6 text-brand-orange" />,
    Zap: <Zap className="w-6 h-6 text-brand-orange" />,
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION (100vh Cinematic) */}
      <section className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-blue-dark text-white -mt-28">
        {/* Parallax Background Image with Dark Blue Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            ref={heroImageRef}
            src={IMAGES.hero}
            alt="GNA Logistics Semi Truck"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-transparent to-black/30 z-10" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-20 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Main Hero Text */}
            <div ref={heroContentRef} className="lg:col-span-8 space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider uppercase text-brand-orange"
              >
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Alberta’s Enterprise Construction Logistics</span>
              </motion.div>

              {/* Headline with Instrument Serif Italic Accent */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white"
              >
                Premium{' '}
                <span className="font-instrument italic font-normal text-brand-orange underline decoration-brand-orange/30 underline-offset-8">
                  Construction Logistics
                </span>{' '}
                Built Around Your Schedule.
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed font-normal"
              >
                Professional truck-mounted forklift deliveries, flatbed transportation, warehouse logistics and jobsite material placement across Edmonton and Alberta.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-base font-bold rounded-full shadow-orange transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <NavLink
                  to="/services"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white text-base font-bold rounded-full backdrop-blur-md transition-all border border-white/20 text-center"
                >
                  Explore Services
                </NavLink>
              </motion.div>
            </div>

            {/* Right Side: Floating Premium Glass Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[28px] p-8 shadow-2xl space-y-6 text-white"
              >
                <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center border border-brand-orange/30">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Service Coverage</h3>
                    <p className="text-xs text-slate-300">Edmonton HQ & Alberta Network</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">Edmonton Metro</span>
                    <span className="text-brand-orange font-bold">Dedicated Fleet</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">Alberta Corridor</span>
                    <span className="text-brand-orange font-bold">Same-Day Express</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">Commercial & Residential</span>
                    <span className="text-brand-orange font-bold">COR Safety Certified</span>
                  </div>
                  <div className="flex items-center justify-between text-xs font-semibold px-3 py-2 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-slate-300">Construction Sites</span>
                    <span className="text-brand-orange font-bold">Moffett Onboard</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-white/10">
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span>24/7 Dispatch Availability</span>
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer opacity-80 hover:opacity-100"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase font-bold tracking-widest text-slate-300 mb-2">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1.5 h-2.5 bg-brand-orange rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Image 2 (Driver) */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl border border-slate-200">
                <img
                  src={IMAGES.about}
                  alt="GNA Logistics Driver"
                  className="w-full h-[520px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/60 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-xl shrink-0">
                      15+
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">Years of Construction Excellence</h4>
                      <p className="text-xs text-slate-600">Certified Class 1 drivers & specialized jobsite handling experts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Copy & Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
                About GNA Logistics
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
                Trusted Logistics Built Exclusively for Construction.
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Standard freight carriers unload at the curb and leave your crew with massive secondary labor overhead. At GNA Logistics, we specialize in high-precision construction material transportation and jobsite placement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Professional Drivers</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Class 1 & 3 certified operators with full PPE and safety orientation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">On-Board Moffett Forklifts</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Self-unloading rough terrain capabilities directly to point-of-use.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <NavLink
                  to="/about"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-bold rounded-full shadow-md transition-all"
                >
                  <span>Learn More About Our Company</span>
                  <ArrowRight className="w-4 h-4" />
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (Six Cards Grid) */}
      <section className="py-28 bg-brand-surface border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
                Featured Freight & Logistics Services
              </h2>
            </div>
            <NavLink
              to="/services"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-[22px] overflow-hidden border border-slate-200 shadow-enterprise shadow-enterprise-hover group flex flex-col justify-between"
              >
                <div>
                  {/* Service Card Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 right-4 p-3 bg-white/90 backdrop-blur-md rounded-xl shadow-md border border-white/50">
                      {serviceIconMap[service.iconName]}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-orange transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-3 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Edmonton & Alberta</span>
                  <NavLink
                    to="/services"
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </NavLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE GNA & ANIMATED STATS */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
              The GNA Advantage
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
              Why Global Industrial Leaders Partner With GNA
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              We combine enterprise asset reliability with custom construction field experience to ensure zero jobsite friction.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 p-8 sm:p-12 bg-slate-50 rounded-[28px] border border-slate-200">
            {STATS_DATA.map((stat, idx) => (
              <StatCounter
                key={idx}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.value % 1 !== 0 ? 1 : 0}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>

          {/* Value Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-8 rounded-[22px] bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="w-2 h-full bg-brand-orange absolute top-0 left-0" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES PREVIEW (Alternating Layouts) */}
      <section className="py-28 bg-brand-blue-dark text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-4 py-1.5 rounded-full border border-brand-orange/30">
                Sectors We Serve
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-4 leading-tight">
                Tailored Solutions for Industrial Sectors
              </h2>
            </div>
            <NavLink
              to="/industries"
              className="inline-flex items-center space-x-2 text-sm font-bold text-brand-orange hover:text-white transition-colors"
            >
              <span>Explore All Sectors</span>
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          <div className="space-y-16">
            {INDUSTRIES_DATA.slice(0, 4).map((ind, idx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`lg:col-span-6 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-96">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/80 via-transparent to-transparent" />
                  </div>
                </div>

                <div className={`lg:col-span-6 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                    {ind.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white">{ind.title}</h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{ind.description}</p>
                  
                  <div className="pt-2">
                    <NavLink
                      to="/industries"
                      className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white/10 hover:bg-brand-orange text-white text-xs font-bold transition-all border border-white/20"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </NavLink>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. DELIVERY PROCESS TIMELINE */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/10 px-4 py-1.5 rounded-full border border-brand-orange/20">
              Seamless Execution
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-4 leading-tight">
              Our 4-Step Jobsite Delivery Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="relative bg-slate-50 p-8 rounded-[22px] border border-slate-200 space-y-4 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-extrabold text-brand-orange/30 font-mono">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2">{step.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
                <div className="w-full h-1 bg-brand-orange/20 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-brand-orange" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FLEET PREVIEW SECTION */}
      <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[28px] overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={IMAGES.fleet}
              alt="GNA Logistics Fleet"
              className="w-full h-[540px] object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/75 to-transparent" />
            
            <div className="absolute inset-0 p-8 sm:p-16 flex flex-col justify-center max-w-2xl text-white">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-orange bg-brand-orange/20 px-4 py-1.5 rounded-full border border-brand-orange/30 w-fit mb-4">
                Enterprise Commercial Fleet
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Modern Fleet Ready for Every Jobsite.
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                Equipped with late-model tandem tractors, step-deck flatbeds, and heavy-duty Moffett forklifts inspected daily to ensure peak reliability across Edmonton and Alberta.
              </p>

              <div className="pt-8 flex flex-wrap gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-brand-orange hover:bg-brand-orange-hover text-white text-sm font-bold rounded-full shadow-lg transition-all"
                >
                  Book Fleet Transport
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
