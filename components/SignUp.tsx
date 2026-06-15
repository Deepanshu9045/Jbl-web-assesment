export default function SignUp() {
  return (
    <section className="bg-jbl-orange py-24 relative z-10 overflow-hidden border-b-2 border-jbl-orange pt-24">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-50 z-0"></div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#111111"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-center gap-16">

        <div className="text-white w-full md:w-1/2 md:text-right">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide leading-tight mb-4">
            SIGN UP FOR THE LATEST<br />JBL NEWS & OFFERS!
          </h2>
          <p className="text-sm font-semibold tracking-wider">
            View Our <a href="#" className="underline text-black">Privacy Policy -&gt;</a>
          </p>
        </div>

        <div className="w-full md:w-1/3">
          <div className="bg-[#111] p-8 rounded-xl shadow-2xl relative border border-white/10">
            <h3 className="text-white font-bold text-xl uppercase tracking-widest text-center mb-8">SIGN UP</h3>

            <form className="space-y-6">
              <div>
                <input type="email" placeholder="email" className="w-full bg-transparent border-b border-gray-600 focus:border-jbl-orange text-white text-sm pb-2 outline-none transition-colors" />
              </div>
              <div>
                <input type="password" placeholder="password" className="w-full bg-transparent border-b border-gray-600 focus:border-jbl-orange text-white text-sm pb-2 outline-none transition-colors" />
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-jbl-orange" />
                  Remember Me
                </label>
                <a href="#" className="hover:text-jbl-orange transition-colors">Forgot Password?</a>
              </div>

              <button className="w-full bg-jbl-orange hover:bg-orange-600 text-white font-bold py-3 rounded-full transition-colors uppercase shadow-lg text-sm tracking-wider">
                ORDER NOW
              </button>

              <p className="text-center text-[10px] text-gray-600 mt-4">
                Already Have An Account? <a href="#" className="text-jbl-orange">Log In</a>
              </p>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
