import { Activity, Globe, Headphones } from "lucide-react";

export default function AboutMission() {
  const features = [
    { title: "Global Reach", desc: "Connecting millions of listeners worldwide.", icon: <Globe className="w-5 h-5 text-jbl-orange" /> },
    { title: "Acoustic Excellence", desc: "Uncompromising sound quality and engineering.", icon: <Activity className="w-5 h-5 text-jbl-orange" /> },
    { title: "Iconic Design", desc: "Bold aesthetics that stand out in any crowd.", icon: <Headphones className="w-5 h-5 text-jbl-orange" /> },
  ];

  return (
    <section className="relative py-24 bg-[#1a1a1a] overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="relative w-full h-[450px] md:h-[650px] order-2 md:order-1 mt-12 md:mt-0">
          <div className="absolute top-8 -left-4 md:-left-8 w-full h-full bg-[#f05a1e] rounded-xl z-0"></div>
          <div className="w-full h-full relative z-10 overflow-hidden rounded-xl shadow-2xl border border-white/5">
             <img src="/aboutus2.png" alt="JBL Mission" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          
          <div className="absolute -bottom-8 -right-4 md:-right-8 bg-black border border-[#f05a1e] p-6 rounded-lg shadow-2xl z-20 max-w-xs">
            <p className="text-white font-black text-xl uppercase tracking-widest leading-none mb-1">Since</p>
            <p className="text-[#f05a1e] font-black text-4xl uppercase tracking-widest leading-none">1946</p>
          </div>
        </div>

        <div className="space-y-8 order-1 md:order-2">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">
              HEAR THE <span className="text-[#f05a1e]">TRUTH</span>
            </h2>
            <p className="text-gray-400 font-semibold tracking-wider leading-relaxed text-sm">
              We believe that sound should be felt, not just heard. Every product we build is crafted to deliver the raw emotion and power of the original performance. From Woodstock to the cinema, our legacy is built on pushing the boundaries of audio technology.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-gray-800">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 group">
                <div className="mt-1 p-2 bg-[#111] border border-gray-800 rounded-md group-hover:border-[#f05a1e] transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-500 font-semibold">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pt-4">
            <a href="#" className="inline-block bg-[#f05a1e] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full uppercase tracking-widest text-xs transition-colors shadow-lg">
              Explore Our Legacy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
