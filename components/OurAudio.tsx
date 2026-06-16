"use client";

import { ArrowRight } from "lucide-react";

export default function OurAudio() {
  const products = [
    {
      id: 1,
      title: "Speakers",
      height: "h-64",
      align: "mt-0",
      image: "/speaker2.jpg",
    },
    {
      id: 2,
      title: "Headphones",
      height: "h-80",
      align: "mt-12",
      image: "/headphone.jpg",
    },
    {
      id: 3,
      title: "Speakers",
      height: "h-56",
      align: "mt-0",
      image: "/speaker3.jpg",
    },
    {
      id: 4,
      title: "Speakers",
      height: "h-72",
      align: "mt-24",
      image: "/speaker4.jpg",
    },
    {
      id: 5,
      title: "Speakers",
      height: "h-64",
      align: "mt-0",
      image: "/speaker5.jpg",
    },
    {
      id: 6,
      title: "Speakers",
      height: "h-80",
      align: "mt-12",
      image: "/speaker.jpg",
    },
  ];

  return (
    <section className="relative py-24 bg-[#ff6a00] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Wave */}
      <div className="absolute top-0 left-0 w-full rotate-180 overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-[140px]"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
            172-41.86,82.39-16.72,168.19-17.73,
            250.45-.39C823.78,31,906.67,72,
            985.66,92.83c70.05,18.48,
            146.53,26.09,214.34,3V0H0V27.35
            A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#111"
          />
        </svg>
      </div>

      <div className="container mx-auto px-5 relative z-10 pt-16">
        <div className="grid lg:grid-cols-12 gap-14 items-center">
          {/* Left Side */}
          <div className="lg:col-span-5 text-white">
            <h2 className="text-5xl md:text-6xl font-black uppercase leading-tight">
              OUR AUDIO
              <br />
              DOES IT ALL
            </h2>

            <p className="mt-8 text-lg leading-8 text-white/90 max-w-md">
              Discover JBL's range of cutting-edge audio solutions. Enjoy
              premium bass, immersive sound and crystal-clear quality for every
              lifestyle.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`flex flex-col ${product.align}`}
                >
                  <div
                    className={`
                    ${product.height}
                    bg-black
                    rounded-3xl
                    border-[6px]
                    border-white
                    p-4
                    relative
                    overflow-hidden
                    shadow-2xl
                    group
                    transition-all
                    duration-500
                    hover:-translate-y-4
                    hover:scale-105
                    hover:rotate-1
                  `}
                  >
                    {/* Orange Glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    {/* Image */}
                    <div className="h-[55%] flex items-center justify-center bg-zinc-800 rounded-xl overflow-hidden relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="
                        h-full
                        object-contain
                        transition-all
                        duration-700
                        group-hover:scale-125
                        group-hover:rotate-6
                        drop-shadow-2xl
                      "
                      />
                    </div>

                    {/* Content */}
                    <div className="mt-5 relative z-10">
                      <h3 className="text-white font-bold text-xl">
                        {product.title}
                      </h3>

                      <p className="text-zinc-400 text-xs mt-2 leading-5">
                        Premium JBL audio experience with deep bass and crystal
                        clear sound.
                      </p>

                      <button className="mt-4 flex items-center gap-2 text-orange-500 font-bold transition-all group-hover:text-white">
                        Shop Now

                        <ArrowRight className="w-4 h-4 transition-all duration-300 group-hover:translate-x-2" />
                      </button>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute -left-40 top-0 h-full w-20 rotate-12 bg-white/20 blur-xl transition-all duration-700 group-hover:left-[120%]" />
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