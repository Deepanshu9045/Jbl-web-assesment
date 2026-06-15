export default function NoiseCancelling() {
  const cards = [
    { id: 1, active: true, image: "/headphone.jpg" },
    { id: 2, active: false, image: "/buds.jpg" },
    { id: 3, active: false, image: "/jbloption1.jpg" },
    { id: 4, active: false, image: "/jbloption2.jpg" },
    { id: 5, active: false, image: "/jbloption3.jpg" },
    { id: 6, active: false, image: "/headphone.jpg" },
  ];

  return (
    <section className="py-24 bg-[#6F6F6F] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0a0a0a"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-10">
        <div className="flex items-end justify-center md:justify-start gap-4 mb-16 px-4 md:px-12">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider">
            NOISE CANCELLING
          </h2>
          <span className="text-jbl-orange font-semibold text-xl mb-1">
            Headphones
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`relative flex flex-col items-center p-8 rounded-lg shadow-xl transition-transform hover:-translate-y-2 cursor-pointer ${card.active ? 'bg-jbl-orange text-white' : 'bg-gray-100 text-black'}`}
            >
              <h3 className="font-black text-xl mb-3 tracking-wide text-center">I KNOW WHAT I WANT</h3>
              <p className={`text-xs text-center leading-relaxed max-w-[80%] ${card.active ? 'text-white/80' : 'text-gray-500'}`}>
                Lorem Ipsum Dolor Sit Amet Consectetur. Magna Nisi Morbi Eu Leo Pellentesque.
              </p>

              <div className="relative w-40 h-40 mt-8 flex items-center justify-center">
                {!card.active && (
                  <div className="absolute inset-0 bg-jbl-orange rounded-full scale-[0.6] -z-10 translate-y-4"></div>
                )}

                <div className={`w-32 h-32 rounded-full flex items-center justify-center ${card.active ? 'bg-black/30' : 'bg-transparent'} z-10 overflow-hidden relative drop-shadow-lg`}>
                  <img src={card.image} alt="JBL Noise Cancelling" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {card.active && (
                <div className="mt-8 text-xs font-bold w-full text-center border-t border-white/20 pt-4">
                  JBL Quiet Pro Plus <span className="ml-1 opacity-50">+</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#FF4B4B] hover:bg-jbl-orange text-white font-bold py-3 px-10 rounded-full transition-colors uppercase tracking-widest shadow-lg">
            VIEW MORE
          </button>
        </div>
      </div>
    </section>
  );
}
