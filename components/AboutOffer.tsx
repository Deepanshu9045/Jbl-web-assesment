export default function AboutOffer() {
  const tabs = ["Bluetooth", "Headphones", "Gaming", "Home", "Specialty", "Car", "Toyota"];

  return (
    <section className="bg-[#1a1a1a] relative py-24 overflow-hidden z-10 pt-16">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-widest mb-2 drop-shadow-md">
            WHAT WE OFFER
          </h2>
          <p className="text-gray-300 font-bold tracking-wider text-xs md:text-sm">
            Any Way You Want To Listen, We Got You.
          </p>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center bg-[#d3d3d3] border border-gray-600 mb-12">
          {tabs.map((tab, idx) => (
             <div 
               key={idx} 
               className={`flex-1 min-w-[100px] text-center py-2 px-2 text-xs md:text-sm font-bold tracking-widest uppercase cursor-pointer transition-colors ${
                 idx === 0 
                 ? "bg-jbl-orange text-black" 
                 : "text-black hover:bg-gray-400"
               }`}
             >
               {tab}
             </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl">
           <div className="space-y-4">
             <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-widest">
               BLUETOOTH SPEAKER
             </h3>
             <p className="text-[10px] md:text-xs text-gray-400 font-semibold tracking-wider leading-relaxed">
               Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet
             </p>
             <button className="bg-gradient-to-r from-jbl-orange to-orange-600 hover:from-orange-600 hover:to-jbl-orange text-white font-bold py-2 px-6 rounded-full shadow-[0_0_15px_rgba(255,75,36,0.3)] transition-all transform hover:scale-105 text-xs tracking-widest uppercase mt-4">
               LEARN MORE
             </button>
           </div>
           
           <div className="w-full h-[250px] bg-black rounded-sm overflow-hidden shadow-2xl relative">
              <img src="/personjbl.jpg" alt="Listening to music" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
           </div>
        </div>

      </div>
    </section>
  );
}
