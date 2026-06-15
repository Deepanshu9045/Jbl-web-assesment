import Image from "next/image"; // Note: not fully using Next.js Image component in this codebase consistently, but we can use regular img

export default function ProductCategories() {
  const categories = [
    { name: "Speaker", image: "/boombox.jpg" },
    { name: "Headphone", image: "/headphone.jpg" },
    { name: "Car Speakers", image: "/speaker2.jpg" }, // Using placeholder
    { name: "Microphones", image: "/speaker4.jpg" }, // Using placeholder
  ];

  return (
    <section className="bg-[#1a1a1a] relative z-10 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>
      
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center uppercase tracking-widest mb-12">
          BROWSE BY PRODUCT CATEGORY
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-[#b34d28] rounded-md p-6 flex flex-col items-center justify-between cursor-pointer hover:-translate-y-2 transition-transform shadow-lg group h-48">
              <div className="w-full h-24 flex items-center justify-center relative mb-4">
                <img src={cat.image} alt={cat.name} className="max-w-full max-h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-white font-bold text-sm tracking-wider uppercase flex items-center gap-1">
                {cat.name} <span className="text-lg leading-none">&rarr;</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
