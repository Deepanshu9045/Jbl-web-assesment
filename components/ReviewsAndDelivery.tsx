import { Quote } from "lucide-react";

export default function ReviewsAndDelivery() {
  return (
    <section id="blog" className="relative">

      <div className="bg-[#111] py-24 relative z-0">
        <div className="container mx-auto px-4 flex flex-col items-center">

          <div className="flex items-center gap-2 mb-12">
            <Quote className="w-5 h-5 text-gray-500 transform rotate-180" />
            <h3 className="text-xl font-bold text-white uppercase tracking-widest">Client Reviews</h3>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl bg-transparent">
            <div className="bg-white p-4 rounded-xl shadow-2xl flex flex-col items-center relative z-10 w-64">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                <img src="/person.jpg" alt="Mable Payne" className="w-full h-full object-cover" />
              </div>
              <h4 className="text-black font-black text-lg tracking-wider uppercase">MABLE PAYNE</h4>
              <span className="text-gray-500 text-sm font-semibold">Manager</span>
              <div className="absolute -top-6 -z-10 w-32 h-12 bg-jbl-orange rounded-t-xl"></div>
            </div>

            <div className="text-gray-400 text-sm leading-relaxed max-w-lg relative">
              <Quote className="absolute -left-8 -top-4 w-8 h-8 text-jbl-orange/50 transform rotate-180" />
              Lorem Ipsum Dolor Sit Amet Consectetur. Odio Integer Non Tellus Et Bibendum Tortor Nunc Eu. Purus Ac Pellentesque Mi Sit. Consequat Et Quam Sed Mi Integer Tincidunt Placerat Ultrices. Id Elementum Consequat Ornare Massa Ut Etiam Lorem Ipsum Dolor Sit Amet Consectetur. Odio Integer Non Tellus Et Bibendum Tortor Nunc Eu. Purus Ac Pellentesque Mi Sit. Consequat Et Quam Sed Mi Integer Tincidunt Placerat Ultrices. Id Elementum Consequat Ornare Massa Ut Etiam.
              <Quote className="absolute -right-4 bottom-0 w-8 h-8 text-jbl-orange/50" />
            </div>
          </div>

          <div className="flex space-x-2 mt-12">
            <div className="w-2 h-2 rounded-full bg-white"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
            <div className="w-2 h-2 rounded-full bg-white/30"></div>
          </div>
        </div>
      </div>

      <div className="relative z-20 container mx-auto px-4 -mt-16 mb-16">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl overflow-hidden relative">

          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>

          <div className="text-white space-y-4 relative z-10 w-full md:w-1/2">
            <h4 className="font-bold tracking-widest text-sm text-yellow-300">ORDER YOUR FAVOURITE PRODUCT</h4>
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              24 Hours Fast<br />Delivery Challenge
            </h3>
            <button className="bg-jbl-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg mt-4 text-sm">
              ORDER NOW
            </button>
          </div>

          <div className="relative z-10 w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="w-64 h-64 flex items-center justify-center relative">
              <img src="/delivery.jpg" alt="Delivery Scooter" className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-12 text-yellow-400 font-black text-2xl drop-shadow-md">
                FREE<br />DELIVERY
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
