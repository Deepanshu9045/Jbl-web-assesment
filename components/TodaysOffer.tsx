export default function TodaysOffer() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white relative">
      <div className="container mx-auto px-4 md:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm h-80 bg-jbl-orange rounded-xl shadow-2xl flex items-end justify-center relative overflow-hidden">
              <div className="absolute -right-8 top-10 rotate-12 opacity-50 font-[cursive] text-3xl">
                today's best tunes
              </div>

              <div className="w-[80%] h-[90%] bg-black/40 rounded-t-full flex items-center justify-center border-4 border-b-0 border-white/20 overflow-hidden relative">
                <img src="/personjbl.jpg" alt="Person wearing headphones" className="w-full h-full object-cover opacity-90 drop-shadow-xl" />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="w-16 h-16 rounded-md bg-black border border-zinc-700 p-1 cursor-pointer hover:border-jbl-orange transition-colors">
                  <div className="w-full h-full bg-zinc-900 rounded-sm flex items-center justify-center relative overflow-hidden">
                    <img src={item === 1 ? "/jbloption1.jpg" : item === 2 ? "/jbloption2.jpg" : "/jbloption3.jpg"} alt={`Headphone option ${item}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-sm font-semibold tracking-widest text-gray-400 uppercase">Save 20%</span>

            <h3 className="text-4xl font-bold text-jbl-orange">Today's Offer</h3>

            <h2 className="text-3xl md:text-5xl font-black tracking-wider uppercase">
              JBL Tune 770NC <span className="font-normal text-2xl ml-2">- ₹ 5,999.00</span>
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Lorem Ipsum Dolor Sit Amet Consectetur. Sagittis Ornare Dictum Felis Mattis Cursus. Dui Sed Mauris Lectus Dui Odio. Lectus Ullamcorper A Nunc Est Arcu Enim Aenean Nullam Mattis. Bibendum Sagittis Adipiscing.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#FF4B4B] hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full transition-colors uppercase shadow-lg text-sm tracking-wider">
                ORDER NOW
              </button>
              <button className="bg-jbl-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors uppercase shadow-lg text-sm tracking-wider">
                YOUR CUSTOMIZATION
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
