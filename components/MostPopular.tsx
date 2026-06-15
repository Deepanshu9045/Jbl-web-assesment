import { Star } from "lucide-react";

const categories = [
  {
    title: "HEADPHONE",
    color: "bg-jbl-maroon",
    price: "4999 ₹",
    rating: 4,
    scale: "scale-90",
    zIndex: "z-10",
    image: "/headphone.jpg",
  },
  {
    title: "SPEAKERS",
    color: "bg-slate-600",
    price: "6999 ₹",
    rating: 5,
    scale: "scale-95",
    zIndex: "z-20",
    image: "/speaker.jpg",
  },
  {
    title: "HEADPHONE",
    color: "bg-[#FF4B4B]",
    price: "3990 ₹",
    rating: 5,
    scale: "scale-110",
    zIndex: "z-30",
    active: true,
    image: "/headphone.jpg",
  },
  {
    title: "EARBUDS",
    color: "bg-pink-500",
    price: "2999 ₹",
    rating: 4,
    scale: "scale-95",
    zIndex: "z-20",
    image: "/buds.jpg",
  },
  {
    title: "CLOCK SPEAKER",
    color: "bg-purple-500",
    price: "1999 ₹",
    rating: 4,
    scale: "scale-90",
    zIndex: "z-10",
    image: "/clock.jpg",
  },
];

export default function MostPopular() {
  return (
    <section className="py-24 bg-[#111] relative overflow-hidden" id="product">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white uppercase tracking-wider">
            MOST POPULAR
          </h2>
          <span className="text-jbl-orange font-semibold text-xl mb-1">
            Categories
          </span>
        </div>

        <div className="flex justify-center items-end min-h-[400px] gap-2 md:gap-4 relative">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center p-6 rounded-3xl ${cat.color} ${cat.scale} ${cat.zIndex} shadow-2xl transition-transform hover:-translate-y-4`}
              style={{
                width: cat.active ? "260px" : "180px",
                height: cat.active ? "320px" : "240px",
                marginBottom: cat.active ? "20px" : "0",
              }}
            >
              <div className={`absolute -top-16 w-32 h-32 ${cat.active ? "w-48 h-48 -top-24" : ""} drop-shadow-2xl`}>
                <div className="w-full h-full relative flex items-center justify-center">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-contain rounded-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                </div>
              </div>

              <div className="mt-auto w-full text-center">
                <h3 className={`font-bold text-white uppercase ${cat.active ? "text-xl" : "text-sm"} mb-2`}>
                  {cat.title}
                </h3>
                {cat.active && (
                  <p className="text-white/80 text-xs mb-4">
                    Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor
                  </p>
                )}

                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-1 text-white">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${i < cat.rating ? "fill-white" : "fill-transparent opacity-50"}`} />
                    ))}
                  </div>
                  <div className="bg-white text-black font-bold text-xs px-2 py-1 rounded-full">
                    {cat.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <button className="bg-[#FF4B4B] hover:bg-jbl-orange text-white font-bold py-3 px-10 rounded-full transition-colors uppercase tracking-widest shadow-lg">
            VIEW ALL
          </button>
        </div>
      </div>
    </section>
  );
}
