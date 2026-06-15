export default function ComingSoon() {
  return (
    <section className="py-24 bg-jbl-orange relative overflow-hidden">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50 z-0"></div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[150px]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0a0a0a"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20 flex flex-col items-center text-center">
        
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-6">
          COMMING SOON
        </h2>
        
        <p className="text-white/90 text-sm max-w-2xl leading-relaxed mb-16">
          Lorem Ipsum Dolor Sit Amet Consectetur. Platea Vitae Ultricies Eu Aenean Erat Id. 
          Tortor Tellus Lectus Hac Dictumst Lectus Ipsum A. Pharetra Proin Faucibus 
          Pellentesque Nec Fermentum Nunc.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { value: "41", label: "Days" },
            { value: "14", label: "Hours" },
            { value: "24", label: "Minutes" },
            { value: "57", label: "Seconds" },
          ].map((item, index) => (
            <div key={index} className="bg-[#111] text-white rounded-lg w-24 h-32 md:w-32 md:h-40 flex flex-col items-center justify-center shadow-2xl border border-white/5">
              <span className="text-4xl md:text-5xl font-black tracking-wider mb-2">{item.value}</span>
              <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
