import { ChevronLeft, ChevronRight } from "lucide-react";

export default function AboutHistory() {
  return (
    <section className="bg-jbl-orange relative py-32 z-20 mt-[-40px] mb-[-40px] overflow-hidden">
      
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none z-0"></div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1a1a1a"></path>
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[80px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1a1a1a"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
        
        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-2 drop-shadow-md">
          OUR HISTORY
        </h2>
        <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest mb-16 drop-shadow-md">
          75 YEARS OF JBL SOUND
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
           <div className="w-full md:w-1/2 h-[200px] md:h-[250px] overflow-hidden rounded-md border-2 border-white/20 shadow-2xl relative group cursor-pointer">
             <img src="/jbl speaker 1.jpg" alt="JBL Speaker" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
           </div>
           <div className="w-full md:w-1/2 h-[200px] md:h-[250px] overflow-hidden rounded-md border-2 border-white/20 shadow-2xl relative group cursor-pointer">
             <img src="/buds.jpg" alt="JBL Buds" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
           </div>
        </div>

        <div className="flex items-center justify-center gap-8 mb-4">
          <button className="text-white hover:text-black transition-colors"><ChevronLeft className="w-8 h-8" /></button>
          <span className="text-white font-black text-xl tracking-widest">2024</span>
          <button className="text-white hover:text-black transition-colors"><ChevronRight className="w-8 h-8" /></button>
        </div>

        <h4 className="text-white font-bold tracking-widest uppercase mb-4 text-sm">
          IN TUNE WITH THE ENVIRONMENT
        </h4>
        <p className="text-white/90 font-semibold tracking-wider text-xs md:text-sm leading-relaxed max-w-2xl mx-auto">
          Introducing The JBL Clip 4 And Go 3 In An Eco-Friendly Material Made From 90% Post-Consumer Recycled Plastic. It's Part Of Our Ongoing Plan To Redesign Our Products And Packaging As We Move Towards Becoming Carbon Neutral.
        </p>

      </div>
    </section>
  );
}
