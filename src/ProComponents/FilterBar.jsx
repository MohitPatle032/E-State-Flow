import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, LayoutGrid, Check } from "lucide-react";

function FilterBar() {
  const [activeFilters, setActiveFilters] = useState(["Verified"]);
  const [viewMode, setViewMode] = useState("grid");

  const filterOptions = [
    "Verified", "Ready To Move", "Luxury", "Apartment", "Villa", "2 BHK", "3 BHK", "Parking"
  ];

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((item) => item !== filter) : [...prev, filter]
    );
  };

  return (
    <section className="sticky top-20 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        
        {/* Main Header Container */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Left Text Segment */}
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-lime-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500"></span>
              </span>
              2,548 Properties Found
            </div>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Buy Properties
            </h2>
          </div>

          {/* Right Control Actions */}
          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <button 
              onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
              className="group flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-slate-700 hover:text-white active:scale-95"
            >
              <LayoutGrid size={16} className={`transition-transform duration-300 ${viewMode === 'grid' ? 'rotate-90 text-lime-400' : ''}`} />
              <span>{viewMode === "grid" ? "Grid View" : "List View"}</span>
            </button>

            {/* Advanced Filters Button */}
            <button className="group flex items-center gap-2 rounded-xl border border-lime-500/20 bg-lime-500/5 px-4 py-2.5 text-sm font-medium text-lime-400 transition-all hover:bg-lime-500 hover:text-slate-950 active:scale-95">
              <SlidersHorizontal size={16} className="transition-transform group-hover:rotate-180 duration-500" />
              <span>All Filters</span>
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

        {/* Animated Filter Chips Row */}
        <div className="flex flex-wrap items-center gap-2.5">
          {filterOptions.map((filter) => {
            const isActive = activeFilters.includes(filter);
            return (
              <button
                key={filter}
                onClick={() => toggleFilter(filter)}
                className="relative flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 active:scale-95"
              >
                {/* Background Animation Layer */}
                <motion.div
                  className={`absolute inset-0 z-0 ${isActive ? "bg-lime-400" : "border border-slate-800 bg-slate-900/40"}`}
                  layoutId={`bg-${filter}`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />

                {/* Content Elements Layer */}
                <span className={`relative z-10 flex items-center gap-1.5 transition-colors duration-300 ${isActive ? "text-slate-950 font-semibold" : "text-slate-400 hover:text-white"}`}>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.span
                        initial={{ width: 0, scale: 0, opacity: 0 }}
                        animate={{ width: "auto", scale: 1, opacity: 1 }}
                        exit={{ width: 0, scale: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                  {filter}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FilterBar;
