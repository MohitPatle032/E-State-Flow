// import { motion } from "framer-motion";

// function Herosec() {
//   return (
//     <section className="relative min-h-screen overflow-hidden">

//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop')",
//         }}
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/70"></div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950"></div>

//       {/* Glow Effect */}
//       <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lime-400/10 blur-[120px] rounded-full"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-center">

//         <div className="text-center max-w-4xl">

//           {/* Premium Badge */}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: .6 }}
//             className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/40 backdrop-blur-xl border border-lime-400/20"
//           >
//             <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

//             <span className="uppercase tracking-[0.35em] text-xs text-cyan-400">
//               India's Smart Property Marketplace
//             </span>
//           </motion.div>

//           {/* Heading */}

//           <motion.h1
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: .2 }}
//             className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight"
//           >
//             Explore
//             <span className="block text-cyan-400">
//               Premium Properties
//             </span>
//           </motion.h1>

//           {/* Subtitle */}

//           <motion.p
//             initial={{ opacity: 0, y: 35 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: .4 }}
//             className="mt-8 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
//           >
//             Buy, Rent, Commercial spaces and Premium Plots
//             from thousands of verified listings across India.
//           </motion.p>

//           {/* Placeholder */}

//          {/* Property Category Tabs */}

// <motion.div
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 0.6 }}
//     className="mt-16"
// >

//     <div className="inline-flex flex-wrap justify-center items-center gap-3 bg-slate-900/40 backdrop-blur-xl border border-slate-700 rounded-full p-2">

//         <button className="px-7 py-3 rounded-full bg-cyan-400 text-slate-950 font-semibold transition-all duration-300 shadow-lg shadow-cyan-400/20">
//             🏡 Buy
//         </button>

//         <button className="px-7 py-3 rounded-full text-slate-300 hover:bg-slate-800 rounded-full transition-all duration-300">
//             🏠 Rent
//         </button>

//         <button className="px-7 py-3 rounded-full text-slate-300 hover:bg-slate-800 rounded-full transition-all duration-300">
//             🏢 Commercial
//         </button>

//         <button className="px-7 py-3 rounded-full text-slate-300 hover:bg-slate-800 rounded-full transition-all duration-300">
//             🌿 Plots
//         </button>

//     </div>

// </motion.div>
// {/* Premium Search Panel */}

// <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ delay: 0.8 }}
//   className="mt-12 max-w-6xl mx-auto"
// >
//   <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-2xl">

//     <div className="grid grid-cols-1 md:grid-cols-5 items-center">

//       {/* Location */}

//       <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">

//         <p className="text-xs uppercase text-slate-400 tracking-wider text-left">
//           Location
//         </p>

//         <input
//           type="text"
//           placeholder="Search City..."
//           className="mt-2 bg-transparent w-full outline-none text-white placeholder:text-slate-500"
//         />

//       </div>

//       {/* Property */}

//       <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">

//         <p className="text-xs uppercase text-slate-400 tracking-wider text-left">
//           Property
//         </p>

//         <select className="mt-2 bg-transparent w-full outline-none text-white">

//           <option className="bg-slate-900">Villa</option>

//           <option className="bg-slate-900">Apartment</option>

//           <option className="bg-slate-900">House</option>

//         </select>

//       </div>

//       {/* Budget */}

//       <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">

//         <p className="text-xs uppercase text-slate-400 tracking-wider text-left">
//           Budget
//         </p>

//         <select className="mt-2 bg-transparent w-full outline-none text-white">

//           <option className="bg-slate-900">Any Budget</option>

//           <option className="bg-slate-900">₹10L - ₹50L</option>

//           <option className="bg-slate-900">₹50L - ₹1Cr</option>

//           <option className="bg-slate-900">₹1Cr+</option>

//         </select>

//       </div>

//       {/* Bedrooms */}

//       <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-white/10">

//         <p className="text-xs uppercase text-slate-400 tracking-wider text-left">
//           Bedrooms
//         </p>

//         <select className="mt-2 bg-transparent w-full outline-none text-white">

//           <option className="bg-slate-900">Any</option>

//           <option className="bg-slate-900">1 BHK</option>

//           <option className="bg-slate-900">2 BHK</option>

//           <option className="bg-slate-900">3 BHK</option>

//           <option className="bg-slate-900">4+ BHK</option>

//         </select>

//       </div>

//       {/* Button */}

//       <div className="p-2">

//         <button className="w-full h-16 rounded-2xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold transition-all duration-300 hover:scale-105 duration-1000 transition-all hover:shadow-2xl shadow-cyan-400 hover:cursor-pointer">

//           Search

//         </button>

//       </div>

//     </div>

//   </div>

// </motion.div>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default Herosec;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroData = {
  buy: {
    title: "Explore Premium Properties",
    subtitle:
      "Discover verified villas, apartments and dream homes across India.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop",
  },

  rent: {
    title: "Find Your Perfect Rental Home",
    subtitle:
      "Browse premium rental homes and apartments at the best locations.",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2070&auto=format&fit=crop",
  },

  commercial: {
    title: "Premium Commercial Spaces",
    subtitle:
      "Offices, Shops & Commercial Spaces for your growing business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop",
  },

  plots: {
    title: "Discover Premium Land & Plots",
    subtitle:
      "Residential and commercial plots in India's fastest growing cities.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop",
  },
};

function Herosec() {
  const [activeTab, setActiveTab] = useState("buy");

  const current = heroData[activeTab];

  return (
    <section className="relative min-h-screen overflow-hidden   pt-43">

      {/* Background */}

      <AnimatePresence mode="wait">

        <motion.div
          key={current.image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .6 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${current.image})`,
          }}
        />

      </AnimatePresence>

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950"></div>

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-lime-400/10 blur-[120px] rounded-full"></div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-screen flex items-center justify-center">

        <div className="text-center max-w-5xl">

          {/* Badge */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/40 backdrop-blur-xl border border-lime-400/20"
          >

            <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>

            <span className="uppercase tracking-[0.35em] text-xs text-lime-400">

              India's Smart Property Marketplace

            </span>

          </motion.div>

          {/* Dynamic Heading */}

          <AnimatePresence mode="wait">

            <motion.h1
              key={current.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: .4 }}
              className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight"
            >

              {current.title}

            </motion.h1>

          </AnimatePresence>

          {/* Dynamic Subtitle */}

          <AnimatePresence mode="wait">

            <motion.p
              key={current.subtitle}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .4 }}
              className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            >

              {current.subtitle}

            </motion.p>

          </AnimatePresence>
                    {/* Category Tabs */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <div className="inline-flex flex-wrap justify-center items-center gap-3 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-full p-2">

              {Object.keys(heroData).map((tab) => (

                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-7 py-3 rounded-full font-medium transition-all duration-300 capitalize

                  ${
                    activeTab === tab
                      ? "bg-lime-400 text-slate-950 shadow-lg shadow-lime-400/20"
                      : "text-slate-300 hover:bg-slate-800/70"
                  }`}
                >
                  {tab}
                </button>

              ))}

            </div>
          </motion.div>

          {/* Premium Search Box */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            className="mt-12"
          >

            <div className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl">

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

                {/* Location */}

                <div className="bg-slate-900/40 rounded-2xl p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400 text-left">

                    Location

                  </p>

                  <input
                    type="text"
                    placeholder="Search City"
                    className="mt-2 bg-transparent outline-none w-full text-white placeholder:text-slate-500"
                  />

                </div>

                {/* Property */}

                <div className="bg-slate-900/40 rounded-2xl p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400 text-left">

                    Property

                  </p>

                  <input
                    type="text"
                    placeholder="Villa"
                    className="mt-2 bg-transparent outline-none w-full text-white placeholder:text-slate-500"
                  />

                </div>

                {/* Budget */}

                <div className="bg-slate-900/40 rounded-2xl p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400 text-left">

                    Budget

                  </p>

                  <input
                    type="text"
                    placeholder="₹50L - ₹1Cr"
                    className="mt-2 bg-transparent outline-none w-full text-white placeholder:text-slate-500"
                  />

                </div>

                {/* Bedrooms */}

                <div className="bg-slate-900/40 rounded-2xl p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400 text-left">

                    Bedrooms

                  </p>

                  <input
                    type="text"
                    placeholder="4 BHK"
                    className="mt-2 bg-transparent outline-none w-full text-white placeholder:text-slate-500"
                  />

                </div>

                {/* Button */}

                <button className="rounded-2xl bg-lime-400 hover:bg-lime-300 transition-all duration-300 font-bold text-slate-950">

                  Search

                </button>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Herosec;