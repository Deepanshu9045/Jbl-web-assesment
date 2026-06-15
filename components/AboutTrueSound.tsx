export default function AboutTrueSound() {
  return (
    <section className="bg-[#1a1a1a] relative py-24 overflow-hidden z-10">
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
        
        <div className="w-full md:w-5/12 text-center md:text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-widest leading-none">
            FIND<br/>YOUR<br/><span className="text-jbl-orange">TRUE</span><br/>SOUND
          </h2>
        </div>

        <div className="w-full md:w-7/12">
          <p className="text-white/90 font-bold tracking-wider leading-relaxed text-sm max-w-lg">
            JBL Has Always Believed That Sound Should Be An Open Stage. A Place Of Free Expression Where Voices Are Heard. Without Restrictions. Without Limitations. That's Why We Surface And Celebrate The Unfiltered Self-Expression Of Courageous Artists, Creators, And Performers. JBL Is Here To Help You Express Your True Self, So You Can Experience The Joy And Excitement Of Being You.
          </p>
        </div>

      </div>
    </section>
  );
}
