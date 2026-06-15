import { Headphones, Leaf, Droplets } from "lucide-react";

export default function SupportGrid() {
  return (
    <section className="bg-[#1a1a1a] relative z-10 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h3 className="text-xl font-black text-white uppercase tracking-widest">
              DID YOU BUY THE REAL THING
            </h3>
            <p className="text-xs text-gray-400 font-semibold leading-relaxed max-w-sm">
              Counterfeit Products Are Not Authentic And Therefore Do Not Meet The High Quality And Safety.
              <br/><br/>
              These Products Are Inferior And Usually Fail A Short Time After First Use Due To Poor Components And Expose.
            </p>
            <a href="#" className="inline-block text-jbl-orange font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
              Buy Authentic &rarr;
            </a>
          </div>

          <div className="bg-[#c28469] p-8 rounded-sm text-center shadow-lg">
            <h3 className="text-lg font-black text-white uppercase tracking-widest mb-4">
              FIND A DEALER
            </h3>
            <p className="text-[10px] font-bold text-white mb-6 leading-relaxed max-w-sm mx-auto">
              To Ensure You Are Purchasing A Genuine JBL Product, And Not A Counterfeit, Buy Direct From One Of Our Websites Or Shop With Confidence At Any Of Our JBL Authorized Online Dealers.
            </p>
            <a href="#" className="inline-block text-white font-bold text-xs uppercase tracking-widest hover:text-jbl-orange transition-colors">
              Where To Buy &rarr;
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="w-full h-64 overflow-hidden rounded-sm relative">
            <img src="/blog.png" alt="Headphone buds" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="w-full h-64 bg-[#f05a1e] p-4 rounded-sm flex items-center justify-center">
            <div className="bg-black w-full h-full p-8 relative flex flex-col items-center justify-center text-center">
              <h3 className="text-white font-black uppercase tracking-widest mb-4 text-sm md:text-base">
                HEADPHONE SUPPORT GUIDE
              </h3>
              <p className="text-[10px] text-gray-300 font-bold mb-6 max-w-xs">
                Need Help To Resolve Some Of The Most Common Headphone Challenges?
              </p>
              <a href="#" className="text-white hover:text-[#f05a1e] font-bold text-xs uppercase tracking-widest transition-colors">
                Learn More &rarr;
              </a>
              <Headphones className="absolute -bottom-3 -right-3 w-12 h-12 text-[#f05a1e] bg-black rounded-full border-4 border-black box-content p-1" />
            </div>
          </div>

          <div className="w-full h-[400px] flex flex-col rounded-sm overflow-hidden">
            <div className="w-full h-1/2 overflow-hidden bg-gray-800">
              <img src="/products_grid.png" alt="Speaker" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-1/2 bg-[#f05a1e] p-3 flex items-center justify-center">
              <div className="bg-black w-full h-full p-6 relative flex flex-col items-center justify-center text-center">
                <h3 className="text-white font-black uppercase tracking-widest mb-3 text-sm flex items-center gap-2">
                  SUSTAINABILITY <Leaf className="w-4 h-4 text-green-500" />
                </h3>
                <p className="text-[8px] text-gray-300 font-bold mb-4 leading-relaxed max-w-xs">
                  Sustainability Isn't Just The Right Thing To Do. At HARMAN, Sustainability Is One Of Our Strategic Pillars That Guide Everything We Do.
                </p>
                <a href="#" className="text-[#f05a1e] hover:text-white font-bold text-[10px] uppercase tracking-widest transition-colors">
                  Follow Our Effort &rarr;
                </a>
                <div className="absolute -bottom-4 -right-4 w-10 h-10 bg-[#f05a1e] rounded-full flex items-center justify-center border-4 border-black">
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[400px] flex flex-col rounded-sm overflow-hidden">
            <div className="w-full h-1/2 overflow-hidden bg-gray-800">
              <img src="/personjbl.jpg" alt="Person" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-1/2 bg-[#f05a1e] p-3 flex items-center justify-center">
              <div className="bg-black w-full h-full p-6 relative flex flex-col items-center justify-center text-center">
                <h3 className="text-white font-black uppercase tracking-widest mb-3 text-sm">
                  SUSTAINABILITY
                </h3>
                <p className="text-[8px] text-gray-300 font-bold mb-4 leading-relaxed max-w-xs">
                  Sustainability Isn't Just The Right Thing To Do. At HARMAN, Sustainability Is One Of Our Strategic Pillars That Guide Everything We Do.
                </p>
                <a href="#" className="text-[#f05a1e] hover:text-white font-bold text-[10px] uppercase tracking-widest transition-colors">
                  Follow Our Effort &rarr;
                </a>
                <Droplets className="absolute -bottom-3 -right-3 w-8 h-8 text-[#f05a1e] bg-black rounded-full border-4 border-black box-content p-1" />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
