"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const heroImages = [
    "/image copy 2.png",
    "/jbl speaker 3.png",
    "/headset3.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/80 via-black to-purple-700/80">
        <div className="absolute inset-0 opacity-20 bg-black"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-8 items-center">

        {/* Left Content */}
        <div className="lg:col-span-5 text-white">
          <h1 className="text-5xl md:text-6xl font-black leading-tight uppercase">
            JUST PUT THE HEADPHONES ON,
            <br />
            AND GO WITH THE FLOW!
          </h1>

          <p className="mt-6 text-gray-300">
            Lorem Ipsum Dolor Sit Amet Consectetur. Ac Tempor Eu Mollis
            Nascetur Convallis Viverra Lorem.
          </p>

          <button className="mt-8 px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 transition">
            ORDER NOW
          </button>
        </div>

        {/* Center Image */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px]">

            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[100px] animate-pulse"></div>

            <Image
              key={currentImage}
              src={heroImages[currentImage]}
              alt="Headset"
              fill
              priority
              sizes="(max-width:768px) 320px, 520px"
              className="object-contain animate-float"
            />
          </div>
        </div>

        {/* Right Thumbnails */}
        <div className="hidden lg:flex lg:col-span-1 flex-col gap-4">
          {heroImages.map((img, index) => (
            <button
              key={`thumb-${index}`}
              onClick={() => setCurrentImage(index)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden border ${currentImage === index
                ? "border-orange-500"
                : "border-white/30"
                }`}
            >
              <Image
                src={img}
                alt={`Headset ${index + 1}`}
                fill
                sizes="64px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setCurrentImage(index)}
            className={`rounded-full transition-all ${currentImage === index
              ? "w-8 h-2 bg-white"
              : "w-2 h-2 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  );
}