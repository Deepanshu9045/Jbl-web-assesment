import Link from "next/link";

export default function ProductHero() {
  return (
    <section className="relative pt-32 pb-24 min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
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

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-black text-white tracking-widest uppercase mb-4 drop-shadow-lg">
          OUR PRODUCT
        </h1>
        <p className="text-gray-300 font-semibold tracking-wider mb-6">
          Lorem Ipsum Dolor Sit Amet
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-sm font-bold tracking-widest">
          <Link href="/" className="text-jbl-orange hover:text-white transition-colors">
            Home Page
          </Link>
          <span className="text-white">&gt;</span>
          <span className="text-white">Product</span>
        </div>
      </div>
    </section>
  );
}
