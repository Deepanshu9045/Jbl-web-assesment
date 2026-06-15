import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-jbl-orange/80 via-black to-jbl-purple/80 z-0">
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-jbl-orange/20 via-transparent to-transparent blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-20">
        <div className="lg:col-span-5 text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-black leading-tight uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300 drop-shadow-lg">
            JUST PUT THE HEADPHONES ON, AND GO WITH THE FLOW!
          </h1>
          <p className="text-gray-300 text-lg max-w-md">
            Lorem Ipsum Dolor Sit Amet Consectetur. Ac Tempor Eu Mollis Nascetur Convallis Viverra Lorem.
          </p>
          <button className="bg-gradient-to-r from-jbl-orange to-orange-600 hover:from-orange-600 hover:to-jbl-orange text-white font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(255,75,36,0.5)] transition-all transform hover:scale-105">
            ORDER NOW
          </button>
        </div>

        <div className="lg:col-span-6 flex justify-center relative">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <div className="absolute inset-0 bg-jbl-orange/20 blur-[100px] rounded-full"></div>

            <div className="w-full h-full relative z-10 flex items-center justify-center drop-shadow-2xl hover:scale-105 transition-transform duration-500">
              <Image src="/jbl speaker 3.png" alt="JBL Headphone" fill className="object-contain" priority />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 hidden lg:flex flex-col items-center justify-center space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-16 h-16 rounded-lg bg-white/10 border border-white/20 p-1 cursor-pointer hover:border-jbl-orange transition-colors relative overflow-hidden">
              {item === 1 ? (
                <Image src="/jbloption1.jpg" alt="Thumbnail 1" fill className="object-cover rounded-md p-1" />
              ) : item === 2 ? (
                <Image src="/jbloption2.jpg" alt="Thumbnail 2" fill className="object-cover rounded-md p-1" />
              ) : item === 3 ? (
                <Image src="/jbloption3.jpg" alt="Thumbnail 3" fill className="object-cover rounded-md p-1" />
              ) : (
                <div className="w-full h-full bg-black/50 rounded-md flex items-center justify-center">
                  <span className="text-xs text-white/50">Img {item}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        <div className="w-2 h-2 rounded-full bg-white"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
        <div className="w-2 h-2 rounded-full bg-white/50"></div>
      </div>
    </section>
  );
}
