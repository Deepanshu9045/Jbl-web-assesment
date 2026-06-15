import { Headphones, Gamepad2, Activity, Droplets, Smartphone, Ear, Airplay } from "lucide-react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const categories = [
    { label: "Truly Wireless", icon: <Ear className="w-8 h-8 text-white mb-2" />, active: true },
    { label: "Headband", icon: <Headphones className="w-8 h-8 text-white mb-2" />, active: false },
    { label: "In-Ear", icon: <Airplay className="w-8 h-8 text-white mb-2" />, active: false },
    { label: "Gaming", icon: <Gamepad2 className="w-8 h-8 text-white mb-2" />, active: false },
    { label: "Noise Cancelling", icon: <Activity className="w-8 h-8 text-white mb-2" />, active: false },
    { label: "Water Resistant", icon: <Droplets className="w-8 h-8 text-white mb-2" />, active: false },
    { label: "Wireless", icon: <Smartphone className="w-8 h-8 text-white mb-2" />, active: false },
  ];

  return (
    <section className="bg-[#1a1a1a] relative z-10 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        
        <div className="mb-12">
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider">
              Headphone's
            </h2>
            <span className="text-jbl-orange font-bold text-xl">
              Truly Wireless
            </span>
          </div>

          <div className="flex flex-wrap items-end justify-between border-b border-gray-700 pb-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col items-center cursor-pointer group relative px-4">
                <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                  {cat.icon}
                </div>
                <span className={`text-[10px] font-bold ${cat.active ? 'text-white' : 'text-gray-400 group-hover:text-white'} transition-colors`}>
                  {cat.label}
                </span>
                {cat.active && (
                  <div className="absolute -bottom-4 w-full h-0.5 bg-jbl-orange"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <ProductCard imageSrc="/buds.jpg" />
          <ProductCard imageSrc="/jbloption1.jpg" />
          <ProductCard imageSrc="/jbloption2.jpg" />
          <ProductCard imageSrc="/jbloption3.jpg" />
        </div>

      </div>
    </section>
  );
}
