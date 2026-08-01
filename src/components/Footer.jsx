// import {
//    FaInstagram,
//    FaLinkedinIn,
//    FaGithub,
//    FaYoutube,
// } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// function Footer() {
//    return (
//       <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">

//          {/* Background Glow */}

//          <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-lime-500/5 blur-[140px] rounded-full"></div>

//          <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/5 blur-[140px] rounded-full"></div>

//          {/* Main Container */}

//          <div className="relative max-w-7xl mx-auto px-6">

//             {/* ================= CTA CARD ================= */}

//            {/* ================= CTA ================= */}

// {/* ================= CTA ================= */}

// <div className="mb-20">

//   <div className="bg-slate-900 border border-slate-800 rounded-3xl px-8 md:px-14 py-12">

//     <div className="max-w-3xl mx-auto text-center">

//       <span className="inline-flex items-center gap-2 text-lime-400 text-xs font-semibold uppercase tracking-[0.25em]">

//         ● Premium Real Estate Platform

//       </span>

//       <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">

//         Ready to Find Your
//         <span className="text-lime-400"> Dream Home?</span>

//       </h2>

//       <p className="mt-5 text-slate-400 text-lg leading-relaxed">

//         Discover verified premium properties with trusted agents,
//         secure transactions and a seamless buying experience.

//       </p>

//       <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">

//         <button className="px-8 py-4 rounded-xl bg-lime-400 text-slate-950 font-semibold hover:bg-lime-300 transition">

//           Explore Properties

//         </button>

//         <button className="px-8 py-4 rounded-xl border border-slate-700 text-white hover:border-lime-400 hover:text-lime-400 transition">

//           Contact Us

//         </button>

//       </div>

//     </div>

//   </div>

// </div>

//                {/* ================= Quick Links ================= */}

//                <div>

//                   <h3 className="text-white font-semibold text-lg mb-5">
//                      Quick Links
//                   </h3>

//                   <ul className="space-y-4">

//                      <li>
//                         <a href="/" className="text-slate-400 hover:text-lime-400 transition">
//                            Home
//                         </a>
//                      </li>

//                      <li>
//                         <a href="/buy" className="text-slate-400 hover:text-lime-400 transition">
//                            Buy Property
//                         </a>
//                      </li>

//                      <li>
//                         <a href="/sell" className="text-slate-400 hover:text-lime-400 transition">
//                            Sell Property
//                         </a>
//                      </li>

//                      <li>
//                         <a href="/properties" className="text-slate-400 hover:text-lime-400 transition">
//                            Properties
//                         </a>
//                      </li>

//                      <li>
//                         <a href="/contact" className="text-slate-400 hover:text-lime-400 transition">
//                            Contact
//                         </a>
//                      </li>

//                   </ul>

//                </div>



//                {/* ================= Services ================= */}

//                <div>

//                   <h3 className="text-white font-semibold text-lg mb-5">
//                      Services
//                   </h3>

//                   <ul className="space-y-4">

//                      <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
//                         Luxury Villas
//                      </li>

//                      <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
//                         Apartments
//                      </li>

//                      <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
//                         Commercial Property
//                      </li>

//                      <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
//                         Property Valuation
//                      </li>

//                      <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
//                         AI Assistant
//                      </li>

//                   </ul>

//                </div>



//                {/* ================= Contact ================= */}

//                <div>

//                   <h3 className="text-white font-semibold text-lg mb-5">
//                      Contact
//                   </h3>

//                   <div className="space-y-5">

//                      <div>

//                         <p className="text-white font-medium">
//                            Address
//                         </p>

//                         <p className="text-slate-400 text-sm">
//                            Gondia, Maharashtra, India
//                         </p>

//                      </div>

//                      <div>

//                         <p className="text-white font-medium">
//                            Email
//                         </p>

//                         <p className="text-slate-400 text-sm">
//                            support@estate.com
//                         </p>

//                      </div>

//                      <div>

//                         <p className="text-white font-medium">
//                            Phone
//                         </p>

//                         <p className="text-slate-400 text-sm">
//                            +91 98765 43210
//                         </p>

//                      </div>

//                      <div>

//                         <p className="text-white font-medium">
//                            Working Hours
//                         </p>

//                         <p className="text-slate-400 text-sm">
//                            Mon - Sat (9 AM - 7 PM)
//                         </p>

//                      </div>

//                   </div>

//                </div>

//             </div>

//             {/* ================= Bottom Footer ================= */}

//             {/* ================= Bottom Footer ================= */}

//             <div className="border-t border-slate-800 pt-8 pb-10">

//                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

//                   {/* Copyright */}

//                   <div>

//                      <p className="text-slate-500 text-sm text-center lg:text-left">
//                         © {new Date().getFullYear()} E-State. All Rights Reserved.
//                      </p>

//                      <p className="text-slate-600 text-xs mt-2 text-center lg:text-left">
//                         Crafted with ❤️ by
//                         <span className="text-lime-400 font-medium">
//                            {" "}Mohit Patle
//                         </span>
//                      </p>

//                   </div>

//                   {/* Social Icons */}

//                   <div className="flex items-center gap-4">

//                      <a
//                         href="#"
//                         className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300"
//                      >
//                         <FaInstagram size={18} />
//                      </a>

//                      <a
//                         href="#"
//                         className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300"
//                      >
//                         <FaLinkedinIn size={18} />
//                      </a>

//                      <a
//                         href="#"
//                         className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300"
//                      >
//                         <FaGithub size={18} />
//                      </a>

//                      <a
//                         href="#"
//                         className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300"
//                      >
//                         <FaYoutube size={18} />
//                      </a>

//                   </div>

//                   {/* Footer Links */}

//                   <div className="flex flex-wrap justify-center gap-6">

//                      <a
//                         href="#"
//                         className="text-slate-500 hover:text-lime-400 transition text-sm"
//                      >
//                         Privacy Policy
//                      </a>

//                      <a
//                         href="#"
//                         className="text-slate-500 hover:text-lime-400 transition text-sm"
//                      >
//                         Terms & Conditions
//                      </a>

//                      <a
//                         href="#"
//                         className="text-slate-500 hover:text-lime-400 transition text-sm"
//                      >
//                         Cookies
//                      </a>

//                   </div>

//                </div>

//             </div>

         

      



//       </footer>
//    );
// }

// export default Footer;




import { FaInstagram, FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-lime-500/5 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/5 blur-[140px] rounded-full"></div>

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* ================= CTA CARD ================= */}
        <div className="mb-20 pt-16">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl px-8 md:px-14 py-12">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-lime-400 text-xs font-semibold uppercase tracking-[0.25em]">
                ● Premium Real Estate Platform
              </span>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Find Your <span className="text-lime-400"> Dream Home?</span>
              </h2>
              <p className="mt-5 text-slate-400 text-lg leading-relaxed">
                Discover verified premium properties with trusted agents, secure transactions and a seamless buying experience.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
                <button className="px-8 py-4 rounded-xl bg-lime-400 text-slate-950 font-semibold hover:bg-lime-300 transition">

                  <NavLink to="/Properties" > Explore Properties</NavLink>
                 
                </button>
                <button className="px-8 py-4 rounded-xl border border-slate-700 text-white hover:border-lime-400 hover:text-lime-400 transition">

                      <NavLink to="/contact" > Contact Us</NavLink>
                 
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Main Footer Grid ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-16">
          
          {/* ================= Quick Links ================= */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="/" className="text-slate-400 hover:text-lime-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/buy" className="text-slate-400 hover:text-lime-400 transition">
                  Buy Property
                </a>
              </li>
              <li>
                <a href="/sell" className="text-slate-400 hover:text-lime-400 transition">
                  Sell Property
                </a>
              </li>
              <li>
                <a href="/properties" className="text-slate-400 hover:text-lime-400 transition">
                  Properties
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-400 hover:text-lime-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ================= Services ================= */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-4">
              <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
                Luxury Villas
              </li>
              <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
                Apartments
              </li>
              <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
                Commercial Property
              </li>
              <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
                Property Valuation
              </li>
              <li className="text-slate-400 hover:text-lime-400 transition cursor-pointer">
                AI Assistant
              </li>
            </ul>
          </div>

          {/* ================= Contact ================= */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">Contact</h3>
            <div className="space-y-5">
              <div>
                <p className="text-white font-medium">Address</p>
                <p className="text-slate-400 text-sm">Gondia, Maharashtra, India</p>
              </div>
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-slate-400 text-sm">support@estate.com</p>
              </div>
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-slate-400 text-sm">+91 98765 43210</p>
              </div>
              <div>
                <p className="text-white font-medium">Working Hours</p>
                <p className="text-slate-400 text-sm">Mon - Sat (9 AM - 7 PM)</p>
              </div>
            </div>
          </div>

        </div>

        {/* ================= Bottom Footer ================= */}
        <div className="border-t border-slate-800 pt-8 pb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Copyright */}
            <div>
              <p className="text-slate-500 text-sm text-center lg:text-left">
                © {new Date().getFullYear()} E-State. All Rights Reserved.
              </p>
              <p className="text-slate-600 text-xs mt-2 text-center lg:text-left">
                Crafted with ❤️ by <span className="text-lime-400 font-medium">Mohit Patle</span>
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300">
                <FaGithub size={18} />
              </a>
              <a href="#" className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-lime-400 hover:text-slate-950 hover:-translate-y-1 transition-all duration-300">
                <FaYoutube size={18} />
              </a>
            </div>

            {/* Footer Links */}
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-slate-500 hover:text-lime-400 transition text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-lime-400 transition text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-slate-500 hover:text-lime-400 transition text-sm">
                Cookies
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
