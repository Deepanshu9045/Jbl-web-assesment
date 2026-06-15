import { Phone, MessageCircleMore } from "lucide-react";

export default function ContactSupport() {
  return (
    <section className="bg-[#e94511] relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none z-0"></div>
      
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#1a1a1a"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 mt-8">
        
        <div className="w-full md:w-5/12 text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest leading-snug">
            CAN'T FIND WHAT<br/>YOU'RE LOOKING FOR?
          </h2>
        </div>

        <div className="w-full md:w-7/12">
          <div className="border border-white/80 rounded-sm">
            
            <div className="p-8 border-b border-white/80 flex justify-between items-center relative overflow-hidden group hover:bg-white/5 transition-colors cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2">CALL US</h3>
                <p className="text-[10px] text-white font-bold tracking-wider">Talk To A Product Expert</p>
                <p className="text-[10px] text-white font-bold tracking-wider mb-4">Call Us Now At: <span className="ml-2">(800)365 546</span></p>
                
                <p className="text-[8px] text-white/90 font-bold tracking-widest mt-4">Mon - Fri: 9:00 Am - 11:00 Pm (ET)</p>
                <p className="text-[8px] text-white/90 font-bold tracking-widest">Sat - Sun: 9:00 Am - 5:00 Pm (ET)</p>
              </div>
              <div>
                <Phone className="w-12 h-12 text-white fill-white group-hover:scale-110 transition-transform" />
              </div>
            </div>

            <div className="p-8 flex justify-between items-center relative overflow-hidden group hover:bg-white/5 transition-colors cursor-pointer">
              <div className="space-y-3">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4">CHAT WITH US</h3>
                
                <p className="text-[8px] text-white/90 font-bold tracking-widest mb-1">Mon - Fri: 9:00 Am - 11:00 Pm (ET)</p>
                <p className="text-[8px] text-white/90 font-bold tracking-widest mb-6">Sat - Sun: 9:00 Am - 5:00 Pm (ET)</p>

                <p className="text-[8px] text-white font-bold tracking-widest mt-6">
                  No Chat Agents Are Currently Available. Please Call Or Email Us.
                </p>
              </div>
              <div>
                <MessageCircleMore className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
