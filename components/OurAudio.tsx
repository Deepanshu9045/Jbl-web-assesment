import { ArrowRight } from "lucide-react";

export default function OurAudio() {
  const products = [
    { id: 1, title: "Speakers", height: "h-64", align: "mt-0", image: "/speaker2.jpg" },
    { id: 2, title: "Headphones", height: "h-80", align: "mt-12", image: "/headphone.jpg" },
    { id: 3, title: "Speakers", height: "h-56", align: "mt-0", image: "/speaker3.jpg" },
    { id: 4, title: "Speakers", height: "h-72", align: "mt-24", image: "/speaker4.jpg" },
    { id: 5, title: "Speakers", height: "h-64", align: "mt-0", image: "/speaker5.jpg" },
    { id: 6, title: "Speakers", height: "h-80", align: "mt-12", image: "/speaker.jpg" },
  ];

  return (
    <section className="relative py-24 bg-jbl-orange overflow-hidden">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50"></div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#111111"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-5 text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wide">
              OUR AUDIO DOES IT ALL
            </h2>
            <p className="text-white/90 text-lg leading-relaxed max-w-md font-medium">
              Discover JBL's Range Of Cutting-Edge Audio Solutions To Elevate Your Listening Experience. From Portable Bluetooth Speakers To Immersive Sound Systems, JBL Delivers Unparalleled Sound Quality.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className={`flex flex-col ${product.align}`}>
                  <div className={`w-full ${product.height} bg-black border-[6px] border-white p-4 shadow-2xl flex flex-col group relative overflow-hidden transition-transform hover:-translate-y-2`}>

                    <div className="w-full h-1/2 bg-zinc-800 rounded-sm mb-4 flex items-center justify-center relative overflow-hidden group-hover:bg-zinc-700 transition-colors p-2">
                      <img src={product.image} alt={product.title} className="w-full h-full object-contain z-10 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-jbl-orange/20 opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none"></div>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-white font-bold text-lg">{product.title}</h4>
                      <p className="text-zinc-400 text-[10px] leading-tight my-2">
                        Lorem ipsum dolor sit amet. Consectetur elit.
                      </p>
                      <button className="text-jbl-orange text-xs font-bold flex items-center gap-1 group-hover:text-white transition-colors">
                        Shop Speakers <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
