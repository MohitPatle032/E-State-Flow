import { NavLink } from "react-router-dom";

function Contact_Action() {
  return (
    <>
      {/* 1. Background styled with your custom premium interior image path and high-end cinematic visibility overlays */}
      <section 
        className="w-full flex justify-center items-center bg-slate-950 py-16 px-4 md:py-24" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 10, 0), rgba(0, 0, 10, 0.88)), url("https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D")`, 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat" 
        }}
      >
        
        {/* 2. Container: Fixed max-width, premium drop shadow, glassmorphism border aur custom internal spacing */}
        <div className="flex flex-col items-center max-w-4xl w-full bg-slate-900/10 backdrop-blur-md border border-slate-800/80 rounded-2xl p-8 md:p-12 transition-all duration-1010 hover:scale-103 cursor-pointer hover:shadow-2xl shadow-lime-400/10">
          
          {/* Top Section: Badge and Premium Title */}
          <div className="flex flex-col items-center mb-6">
            {/* Soft background visual anchor badge using branding color scales */}
            <span className="text-2xl bg-slate-950/60 border border-slate-800 p-4 rounded-full mb-4 shadow-inner"> 🏡 </span>
            <h1 className="text-xs md:text-sm font-bold tracking-widest text-lime-400 bg-lime-400/10 border border-lime-400/20 px-4 py-1.5 rounded-full uppercase"> Let's Build Your Future </h1>
          </div>

          {/* Core Value Proposition (Responsive Text Layout with Theme Colors) */}
          {/* Mobile par vertical stack, Desktop (md) par side-by-side single line with dynamic font sizing */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center text-2xl md:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-lime-400">Find Your</span>
            <span className="text-white">Dream Property</span>
            <span className="text-emerald-400">With Confidence</span>
          </div>

          {/* Subtitle / Paragraph */}
          <div className="max-w-2xl text-center mb-8">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              Whether you're buying your first home or investing in luxury real estate, our vetted network of experts is here to guide you through every step securely.
            </p>
          </div>

          {/* Interactive Responsive Button (Matching Theme Accent) */}
          {/* Transition and Scale animations kept exactly as you wrote */}
          <div className="mb-10 w-full flex justify-center">
            <NavLink to="/contact" className="inline-flex items-center justify-center px-8 py-3.5 bg-lime-400 text-slate-950 font-semibold rounded-xl md:hover:bg-lime-300 md:hover:scale-[1.02] md:hover:shadow-xl md:hover:shadow-lime-400/30 transition-all duration-300 group transition-all duration-1000 hover:translate-y-3.5 hover:shadow-lg shadow-lime-500" >
              Contact Our Team <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </NavLink>
          </div>

          {/* Trust Badges (Trust-Building Features with Emerald Accent) */}
          {/* Mobile par single layout wrap, Desktop (md) par grid banner design */}
          <div className="w-full border-t border-slate-800/60 pt-8 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> Verified Listings
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> Trusted Experts
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✔</span> 24/7 Premium Support
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact_Action;
