// import { NavLink } from "react-router-dom";

// function Contact_Action() {
//    return (
//       <>

//          <section className=" w-screen  flex  justify-center  items-center  bg-slate-500 ">
//             <div className=" flex flex-col  items-center  md:h-64 w-screen m-10 border  border-black-500 rounded-lg p-10 ">



//                <div className="flex flex-col  items-center">

//                   <span className="border border-black-500 p-5 rounded-lg m-5">🏡</span>


//                   <h1 className="text-yellow-500 border border-black p-5 m-5 rounded-lg   "> LET'S BUILD YOUR FUTURE</h1>

//                </div>

//                <div className="flex flex-col  items-center gap-2">

//                   <p className="text-2xl font-lg text-yellow-500 ">Find Your</p>
//                   <span  className="text-2xl font-lg text-slate-900 ">Dream Property </span>
//                   <p  className="text-2xl font-lg text-red-500 ">With Confidence </p>

//                </div>

//                <div className="flex flex-col  items-center gap-2">
//                  <p>Whether you're buying your first home
// or investing in luxury real estate,
// our experts are here to guide you.</p>
//                </div>


//                <div  className="flex flex-col  items-center gap-2">
//                   <button className="border border-black rounded p-3 m-4 hover:trasform">

//                       <NavLink to="/contact"> Contact Our Team →</NavLink>

  
//                   </button>
//                </div>

//                <div>
//                   <p>✔ Verified Listings</p>
//                   <p>✔ Trusted Experts</p>
//                   <p>✔ 24/7 Support</p>
//                </div>








//             </div>
//          </section>




//       </>
//    )
// }

// export default Contact_Action;





import { NavLink } from "react-router-dom";

function Contact_Action() {
  return (
    <>
      {/* 1. Background ko rich slate tone aur uniform vertical spacing di hai */}
      <section className="w-full flex justify-center items-center bg-slate-900 py-16 px-4 md:py-24"

      style={
         {
            backgroundImage :`URL("https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlYW0lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D")`,
            backgroundSize : "cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"

            
         }
      }
      
      >
        
        {/* 2. Container: Fixed max-width, premium drop shadow, glassmorphism border aur custom internal spacing */}
        <div className="flex flex-col items-center max-w-4xl w-full bg-slate-800/70 border border-slate-700/50  rounded-2xl p-8 md:p-12 transition-all duration-1010 hover:scale-103 cursor-pointer  hover:shadow-2xl shadow-blue-300 ">
          
          {/* Top Section: Badge and Premium Title */}
          <div className="flex flex-col items-center mb-6">
            {/* Soft background visual anchor badge */}
            <span className="text-2xl bg-slate-700/40 border border-slate-600/50 p-4 rounded-full mb-4 shadow-inner">
              🏡
            </span>
            <h1 className="text-xs md:text-sm font-bold tracking-widest text-amber-500 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full uppercase">
              Let's Build Your Future
            </h1>
          </div>

          {/* Core Value Proposition (Responsive Text Layout) */}
          {/* Mobile par vertical stack, Desktop (md) par side-by-side single line with dynamic font sizing */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center text-2xl md:text-4xl font-extrabold tracking-tight mb-6">
            <span className="text-amber-400">Find Your</span>
            <span className="text-white">Dream Property</span>
            <span className="text-amber-500">With Confidence</span>
          </div>

          {/* Subtitle / Paragraph */}
          <div className="max-w-2xl text-center mb-8">
            <p className="text-sm md:text-base text-slate-400 leading-relaxed font-light">
              Whether you're buying your first home or investing in luxury real estate, 
              our vetted network of experts is here to guide you through every step securely.
            </p>
          </div>

          {/* Interactive Responsive Button */}
          {/* Transition and Scale animations added for desktop hover effect */}
          <div className="mb-10 w-full flex justify-center">
            <NavLink 
              to="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-500 text-slate-950 font-semibold rounded-xl  md:hover:bg-amber-400 md:hover:scale-[1.02] md:hover:shadow-xl md:hover:shadow-amber-500/30 transition-all duration-300 group  transition-all duration-1000 hover:translate-y-3.5 hover:shadow-lg shadow-amber-600"
            >
              Contact Our Team 
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </NavLink>
          </div>

          {/* Trust Badges (Trust-Building Features) */}
          {/* Mobile par single layout wrap, Desktop (md) par grid banner design */}
          <div className="w-full border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm font-medium text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-amber-500">✔</span> Verified Listings
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">✔</span> Trusted Experts
            </div>
            <div className="flex items-center gap-2">
              <span className="text-amber-500">✔</span> 24/7 Premium Support
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Contact_Action;
