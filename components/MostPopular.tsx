"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const categories = [
  {
    title: "HEADPHONE",
    color: "bg-red-900",
    price: "4999 ₹",
    rating: 4,
    image: "/headphone.jpg",
  },
  {
    title: "SPEAKERS",
    color: "bg-slate-600",
    price: "6999 ₹",
    rating: 5,
    image: "/speaker.jpg",
  },
  {
    title: "HEADPHONE",
    color: "bg-[#FF4B4B]",
    price: "3990 ₹",
    rating: 5,
    image: "/headphone.jpg",
  },
  {
    title: "EARBUDS",
    color: "bg-pink-500",
    price: "2999 ₹",
    rating: 4,
    image: "/buds.jpg",
  },
  {
    title: "CLOCK SPEAKER",
    color: "bg-purple-500",
    price: "1999 ₹",
    rating: 4,
    image: "/clock.jpg",
  },
];

export default function MostPopular() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % categories.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="product"
      className="py-24 bg-[#111] relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-center gap-3 mb-20">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider">
            MOST POPULAR
          </h2>

          <span className="text-[#FF4B4B] font-semibold text-xl mb-1">
            Categories
          </span>
        </div>

        <div className="flex justify-center items-end gap-3 md:gap-5 min-h-[450px]">
          {categories.map((cat, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`
                  relative flex flex-col items-center rounded-[35px]
                  p-6 shadow-2xl
                  transition-all duration-700 ease-in-out
                  ${cat.color}
                  ${isActive
                    ? "w-[260px] h-[340px] scale-110 z-30 mb-8"
                    : "w-[180px] h-[240px] scale-90 z-10"
                  }
                `}
              >
                {/* Product Image */}
                <div
                  className={`
                    absolute transition-all duration-700
                    ${isActive
                      ? "-top-24 w-48 h-48"
                      : "-top-14 w-32 h-32"
                    }
                  `}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-contain rounded-full drop-shadow-[0_15px_20px_rgba(0,0,0,.5)]"
                  />
                </div>

                <div className="mt-auto w-full">
                  <h3
                    className={`
                      text-center text-white uppercase font-bold
                      transition-all duration-500
                      ${isActive ? "text-xl" : "text-sm"}
                    `}
                  >
                    {cat.title}
                  </h3>

                  {isActive && (
                    <p className="text-center text-white/70 text-xs mt-3 mb-5 leading-5">
                      Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                    </p>
                  )}

                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${i < cat.rating
                              ? "fill-white text-white"
                              : "text-white/30"
                            }`}
                        />
                      ))}
                    </div>

                    <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-bold">
                      {cat.price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-20">
          <button className="bg-[#FF4B4B] hover:bg-red-600 transition-all duration-300 text-white px-10 py-3 rounded-full font-bold tracking-widest uppercase">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
