import { ShieldCheck, Undo2, Building2, Truck, FileText, Gamepad2, Search } from "lucide-react";

export default function SupportHero() {
  const actions = [
    { label: "Warranty Policy", icon: <ShieldCheck className="w-8 h-8 text-white mb-3" /> },
    { label: "Return", icon: <Undo2 className="w-8 h-8 text-white mb-3" /> },
    { label: "Service Centres", icon: <Building2 className="w-8 h-8 text-white mb-3" /> },
    { label: "Shipping & Delivery Information", icon: <Truck className="w-8 h-8 text-white mb-3" /> },
    { label: "Registration", icon: <FileText className="w-8 h-8 text-white mb-3" /> },
    { label: "Gaming Support", icon: <Gamepad2 className="w-8 h-8 text-white mb-3" /> },
  ];

  return (
    <section className="relative pt-32 pb-24 min-h-[50vh] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a] z-0"></div>
      
      <div className="absolute inset-0 opacity-40 z-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="#FF4B4B" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M0,80 Q25,30 50,80 T100,80" fill="none" stroke="#FF8C00" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M0,20 Q25,70 50,20 T100,20" fill="none" stroke="#FF8C00" strokeWidth="3" vectorEffect="non-scaling-stroke" opacity="0.5" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-jbl-orange/30 via-transparent to-transparent blur-xl z-0"></div>
      
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 z-0"></div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-8 drop-shadow-lg text-center">
          HOW CAN WE HELP YOU
        </h1>
        
        <div className="w-full max-w-2xl relative mb-16">
          <input 
            type="text" 
            placeholder="Enter Product Name Or Topic" 
            className="w-full bg-[#111] border border-gray-700 text-white rounded-md py-4 px-6 pr-12 focus:outline-none focus:border-jbl-orange transition-colors text-sm"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
          {actions.map((action, idx) => (
            <div key={idx} className="w-32 h-32 md:w-40 md:h-40 bg-[#111]/80 backdrop-blur-sm border border-gray-800 rounded-lg flex flex-col items-center justify-center p-4 cursor-pointer hover:border-jbl-orange transition-all hover:-translate-y-1 group">
              {action.icon}
              <span className="text-[10px] md:text-xs font-bold text-center text-gray-300 group-hover:text-white tracking-wider leading-tight">
                {action.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
