


import { useState } from "react";

const FEATURES = [
   {
      id: "verified",
      icon: "🛡️",
      title: "Verified Listings",
      desc: "Every single property undergoes a rigorous background check and verification process before publishing.",
      badge: "100% Curated",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d"
   },
   {
      id: "agents",
      icon: "🤝",
      title: "Trusted Agents",
      desc: "Our handpicked, top-rated local agents guide you through every legal and financial step smoothly.",
      badge: "Bespoke Service",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
   },
   {
      id: "search",
      icon: "⚡",
      title: "Smart Search",
      desc: "Find your dream home in seconds using our AI-driven filters, neighborhood analysis, and price histories.",
      badge: "Intuitive Engine",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
   },
   {
      id: "secure",
      icon: "🔒",
      title: "Secure Deals",
      desc: "We utilize encrypted escrow services to guarantee safe, compliant, and transparent financial transactions.",
      badge: "Private Escrow",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994"
   }
];

function WhyChooseUs() {
   const [activeFeature, setActiveFeature] = useState(null);
   const activeData = FEATURES.find((f) => f.id === activeFeature);

   return (
      <section className="py-32 bg-neutral-950 text-stone-100 antialiased overflow-hidden select-none relative">
         {/* Premium Cinematic Background Elements */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f12_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
         <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/[0.02] rounded-full blur-[120px] pointer-events-none" />

         <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-24 max-w-2xl mx-auto">
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-500 bg-clip-text text-transparent block mb-4">
                  The E-State Signature
               </span>
               <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white leading-none">
                  Why Choose <span className="font-serif italic font-normal bg-gradient-to-b from-cyan-200 to-cyan-500 bg-clip-text text-transparent">Us</span>
               </h2>
               <p className="text-neutral-400 mt-5 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
                  Discover how we elevate premium real estate into a seamless, highly secure digital acquisition experience.
               </p>
            </div>

            {/* Master Interactive Core Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
               {/* Left Side: Cyber-Glow Button Controls */}
               <div className="lg:col-span-5 flex flex-col gap-4 justify-center">
                  {FEATURES.map((feat) => {
                     const isSelected = activeFeature === feat.id;
                     return (
                        <button
                           key={feat.id}
                           onClick={() => setActiveFeature(feat.id)}
                           className={`w-full text-left p-6 rounded-2xl border flex items-center gap-6 relative overflow-hidden transition-all duration-500 group ${isSelected
                                 ? "bg-neutral-900/90 border-neutral-800/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_20px_50px_rgba(0,0,0,0.5)] scale-[1.02] z-10"
                                 : "bg-transparent border-transparent hover:bg-neutral-900/30 hover:translate-x-2"
                              }`}
                        >
                           {/* Dynamic Glowing Left Edge Indicator */}
                           {isSelected && (
                              <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-300 via-cyan-500 to-teal-500 rounded-r shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
                           )}

                           {/* Premium Sculpted Structural Frame for Icon */}
                           <div
                              className={`text-xl p-4 rounded-xl border transition-all duration-500 flex items-center justify-center shrink-0 ${isSelected
                                    ? "bg-cyan-500/[0.08] border-cyan-500/30 text-cyan-400 rotate-3 scale-105 shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                                    : "bg-neutral-900 border-neutral-800/60 text-neutral-400 group-hover:text-stone-100 group-hover:border-neutral-700 group-hover:-rotate-3"
                                 }`}
                           >
                              {feat.icon}
                           </div>

                           {/* Text Container Layers */}
                           <div className="flex-1 pointer-events-none min-w-0">
                              <h3
                                 className={`font-medium text-lg tracking-wide transition-colors duration-300 ${isSelected ? "text-cyan-400" : "text-neutral-300 group-hover:text-white"
                                    }`}
                              >
                                 {feat.title}
                              </h3>
                              <p className="text-sm text-neutral-400 mt-1 line-clamp-1 group-hover:text-neutral-300 transition-colors duration-300 font-light">
                                 {feat.desc}
                              </p>
                           </div>
                        </button>
                     );
                  })}
               </div>

               {/* Right Side: Fluid Darkroom Dashboard Frame (Bottom-heavy Aligned) */}
               <div className="lg:col-span-7 min-h-[560px] flex">
                  <div className="w-full h-full bg-gradient-to-b from-neutral-900/60 to-neutral-950 border border-neutral-900 rounded-3xl p-8 md:p-12 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03),0_50px_100px_-20px_rgba(0,0,0,0.7)] relative flex flex-col justify-end overflow-hidden backdrop-blur-md group/card">
                     {/* Premium Luxury Fluid Mesh Glow Background Lights */}
                     <div className="absolute -top-40 -right-40 w-[450px] h-[450px] bg-cyan-500/[0.02] rounded-full blur-[120px] pointer-events-none group-hover/card:bg-cyan-500/[0.045] transition-all duration-1000" />
                     <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-neutral-500/[0.01] rounded-full blur-[100px] pointer-events-none" />

                     {activeFeature === null ? (
                        /* ✨ LUXURY DEFAULT PLATFORM OVERVIEW MATRIX ✨ */
                        <div className="w-full space-y-10 transition-all duration-500">
                           <div>
                              <div className="flex items-center gap-2 mb-3">
                                 <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)] animate-pulse" />
                                 <span className="text-[9px] uppercase tracking-[0.3em] text-cyan-500/90 font-semibold">
                                    System Dashboard
                                 </span>
                              </div>
                              <h3 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight leading-tight">
                                 Welcome to <span className="font-serif italic text-cyan-400 font-normal">E-State</span> Excellence
                              </h3>
                              <p className="text-neutral-400 text-sm font-light mt-3 max-w-md leading-relaxed">
                                 Select an operational layer on the left side rails to verify institutional security, technical analytics, and private escrow protection frameworks.
                              </p>
                           </div>

                           {/* High-End Micro-Grid System Layout Blocks */}
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                              {[
                                 { icon: "🛡️", t: "100% Vetted Assets", d: "Physical title deeds and core structural parameters pre-inspected daily." },
                                 { icon: "🤝", t: "Direct Concierge", d: "Zero data leakage to external agencies. Core institutional desk processing." },
                                 { icon: "⚡", t: "Instant Metrics", d: "Isolate micro-location assets by spatial noise and true solar orientation." },
                                 { icon: "🔒", t: "Escrow Protected", d: "Sovereign vault isolation architecture maintained until key completion." }
                              ].map((item, idx) => (
                                 <div
                                    key={idx}
                                    className="p-5 bg-neutral-950/50 border border-neutral-900/60 rounded-2xl hover:border-neutral-800 hover:bg-neutral-950/90 transition-all duration-300 group/griditem shadow-[0_4px_30px_rgba(0,0,0,0.2)]"
                                 >
                                    <div className="text-stone-200 text-sm font-medium mb-1.5 flex items-center gap-2.5">
                                       <span className="group-hover/griditem:scale-110 transition-transform duration-300">{item.icon}</span>
                                       <span className="group-hover/griditem:text-cyan-400 transition-colors duration-300 tracking-wide">{item.t}</span>
                                    </div>
                                    <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.d}</p>
                                 </div>
                              ))}
                           </div>

                           <div className="pt-6 border-t border-neutral-900/80 flex items-center justify-between">
                              <span className="text-xs text-neutral-500 font-light tracking-wide">Ready to evaluate listings?</span>
                              <button className="px-6 py-3 text-xs font-medium tracking-widest uppercase text-neutral-950 bg-gradient-to-r from-cyan-300 via-cyan-400 to-teal-400 hover:from-cyan-200 hover:to-teal-300 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:-translate-y-0.5 active:translate-y-0">
                                 Explore Properties →
                              </button>
                           </div>
                        </div>
                     ) : (
                        /* ✨ Selected Feature View ✨ */
                        <div className="space-y-6 flex flex-col justify-end h-full w-full transition-all duration-500 relative z-10">

                           {/* 🖼️ Premium Feature Image Container */}
                           {activeData.image && (
                              <div className="w-full h-48 md:h-64 rounded-2xl overflow-hidden mb-2 border border-neutral-800/80 relative group/img shadow-2xl">
                                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-10" />
                                 <img
                                    src={activeData.image}
                                    alt={activeData.title}
                                    className="w-full h-full object-cover transform scale-100 group-hover/img:scale-105 transition-transform duration-700 ease-out"
                                 />
                              </div>
                           )}

                           <div className="space-y-5">
                              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-[10px] font-medium tracking-widest uppercase bg-neutral-950 border border-neutral-900 text-cyan-400 shadow-inner">
                                 <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                                 {activeData.badge}
                              </div>
                              <div className="space-y-4">
                                 <h3 className="text-3xl md:text-5xl font-serif font-light text-white flex items-center gap-4 tracking-tight leading-none">
                                    <span className="opacity-90 text-3xl md:text-4xl">{activeData.icon}</span>
                                    {activeData.title}
                                 </h3>
                                 <p className="text-neutral-300 text-base md:text-lg font-light leading-relaxed max-w-xl">
                                    {activeData.desc}
                                 </p>
                              </div>
                           </div>
                           <button
                              onClick={() => setActiveFeature(null)}
                              className="text-[10px] font-medium tracking-widest uppercase text-neutral-500 hover:text-cyan-400 transition-colors duration-300 inline-flex items-center gap-2 mt-8 pt-5 border-t border-neutral-800/60 w-full group/back"
                           >
                              <span className="transform group-hover/back:-translate-x-1.5 transition-transform duration-300">←</span>
                              Return to Platform Overview
                           </button>
                        </div>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default WhyChooseUs;
