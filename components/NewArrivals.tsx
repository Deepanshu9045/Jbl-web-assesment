import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function NewArrivals() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative border-b-2 border-[#333]">
      <div className="container mx-auto px-4">
        
        <div className="flex items-end justify-center md:justify-start gap-4 mb-16 px-12">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider">
            NEW ARRIVALS
          </h2>
          <span className="text-jbl-orange font-semibold text-xl mb-1">
            Product
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-12 relative">
          <div className="space-y-6 z-10">
            <h3 className="text-3xl font-bold text-jbl-orange uppercase tracking-wide">
              JBL BOOMBOX 3 WI-FI
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-300">With 24 Hours Battery Life</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-300">Massive JBL Original Pro Sound With</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-gray-300">Wi-Fi And Bluetooth Connectivity</span>
              </li>
            </ul>

            <div className="flex items-center gap-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-jbl-orange text-jbl-orange" />
                ))}
              </div>
              <span className="text-xs font-bold text-white bg-jbl-orange px-2 py-1 rounded-sm">
                4.9 / 5.0
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 text-sm">Available Colours :</span>
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full bg-black border border-gray-600 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-red-600 cursor-pointer"></div>
                <div className="w-4 h-4 rounded-full bg-jbl-orange cursor-pointer"></div>
              </div>
              <span className="text-xs font-bold text-white bg-jbl-orange px-2 py-1 rounded-sm ml-2">
                YOUR CUSTOMIZATION
              </span>
            </div>

            <button className="bg-[#FF4B4B] hover:bg-jbl-orange text-white font-bold py-3 px-8 rounded-full transition-colors uppercase shadow-lg mt-4">
              ORDER NOW
            </button>
          </div>

          <div className="relative h-[400px] flex items-center justify-center">
            <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 text-jbl-orange hover:text-white transition-colors">
              <ChevronLeft className="w-12 h-12" />
            </button>
            <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-jbl-orange hover:text-white transition-colors">
              <ChevronRight className="w-12 h-12" />
            </button>

            <div className="w-[80%] h-[250px] flex items-center justify-center relative z-10 group">
              <img src="/boombox.jpg" alt="JBL BOOMBOX" className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500" />
              
              <div className="absolute -top-10 left-[20%] text-jbl-orange text-xs flex flex-col items-center">
                <span>Carry Handle</span>
                <div className="h-10 w-px bg-jbl-orange mt-1"></div>
              </div>
              <div className="absolute top-[20%] -right-16 text-jbl-orange text-xs flex items-center">
                <div className="w-16 h-px bg-jbl-orange mr-1"></div>
                <span>Power Button</span>
              </div>
              <div className="absolute bottom-[20%] -right-16 text-jbl-orange text-xs flex items-center">
                <div className="w-16 h-px bg-jbl-orange mr-1"></div>
                <span>Volume Up</span>
              </div>
              <div className="absolute -bottom-8 left-[30%] text-jbl-orange text-xs flex flex-col items-center">
                <div className="h-8 w-px bg-jbl-orange mb-1"></div>
                <span>Dolby Speaker</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-16 px-12">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div 
              key={item} 
              className={`w-16 h-12 rounded-md border flex items-center justify-center cursor-pointer transition-colors ${index === 5 ? "border-jbl-orange bg-jbl-orange/20" : "border-zinc-700 bg-zinc-900 hover:border-zinc-500"}`}
            >
              <span className="text-[10px] text-zinc-500 font-bold">TB {item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
