import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, Send, MessageSquare } from "lucide-react";
import Image from "next/image";

import PageHero from "@/components/PageHero";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black flex flex-col font-sans">
      <Header />

      <PageHero title="Contact Us" breadcrumbLabel="Contact Us" />

      <section className="relative w-full bg-[#111] px-6 py-20 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-sm mb-10 max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis faucibus odio feugiat arc dolor.
            </p>
            
            <div className="w-full h-[400px] bg-white rounded-2xl overflow-hidden relative shadow-lg">
              <div className="absolute inset-0 bg-[#e5e3df]">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwem0yMCAwdjIwbS0yMCAwaDIwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')]"></div>
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-sm shadow-sm rotate-12"></div>
                <div className="absolute top-1/2 right-1/4 w-40 h-24 bg-white rounded-sm shadow-sm -rotate-6"></div>
                <div className="absolute bottom-1/4 left-1/3 w-24 h-40 bg-white rounded-sm shadow-sm rotate-6"></div>
                
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 bg-red-600 rounded-full border-2 border-white shadow-md z-10"></div>
                  <div className="text-red-600 font-bold text-xs mt-1 bg-white/80 px-1 rounded">JBL Store</div>
                </div>
                
                <div className="absolute top-4 left-4 w-64 bg-white rounded-xl shadow-md p-4 flex flex-col h-[90%]">
                  <div className="w-full h-8 bg-gray-100 rounded-full mb-4 flex items-center px-3">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-2"></div>
                    <div className="h-2 w-20 bg-gray-200 rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="h-24 bg-gray-100 rounded-lg"></div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                      <div className="h-3 w-32 bg-gray-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-green-100"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4 uppercase tracking-wide">
              Fill Up the Form
            </h2>
            <p className="text-gray-400 text-sm mb-10">
              Your email address will not be published. Required fields are marked *
            </p>
            
            <form className="space-y-8">
              <div className="relative border-b border-[#333] pb-2 group focus-within:border-[#f97316] transition-colors">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </span>
                  <input 
                    type="text" 
                    placeholder="Your Name*" 
                    className="w-full bg-transparent text-white placeholder-gray-500 outline-none focus:ring-0 text-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="relative border-b border-[#333] pb-2 group focus-within:border-[#f97316] transition-colors">
                <div className="flex items-center">
                  <span className="text-gray-500 mr-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </span>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent text-white placeholder-gray-500 outline-none focus:ring-0 text-sm"
                    required
                  />
                </div>
              </div>
              
              <div className="relative border-b border-[#333] pb-2 group focus-within:border-[#f97316] transition-colors">
                <div className="flex items-start mt-4">
                  <span className="text-gray-500 mr-3 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                  </span>
                  <textarea 
                    placeholder="Enter Your Message Here" 
                    className="w-full bg-transparent text-white placeholder-gray-500 outline-none focus:ring-0 text-sm resize-none min-h-[100px]"
                  ></textarea>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="mt-6 bg-[#f43f5e] hover:bg-[#e11d48] text-white font-bold uppercase text-sm py-3 px-8 rounded-full transition-colors shadow-[0_0_15px_rgba(244,63,94,0.3)]"
              >
                Submit
              </button>
            </form>
          </div>
          
        </div>
      </section>

      <section className="relative w-full bg-[#f04b12] text-white py-24 min-h-[600px]">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform -translate-y-[99%]">
          <svg className="relative block w-full h-[150px] md:h-[200px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#f04b12"></path>
          </svg>
        </div>

        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" }}></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
          
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-start">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-center lg:text-right leading-tight max-w-sm">
              <span className="block text-white opacity-80 text-xl font-medium mb-4 relative w-12 mx-auto lg:mx-0 lg:ml-auto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
              </span>
              Can't Find What<br/>You're Looking For?
            </h2>
          </div>
          
          <div className="lg:col-span-3 space-y-4">
            
            <div className="border border-white/30 rounded-md p-6 hover:bg-white/5 transition-colors group flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">Call Us</h3>
                <p className="text-white/80 text-xs mb-1">Talk To A Product Expert</p>
                <p className="font-semibold text-sm mb-4">Call Us Now At: <span className="font-bold">(800)365 546</span></p>
                <p className="text-white/70 text-[10px]">Mon - Fri: 9:00 Am - 11:00 Pm (ET)</p>
                <p className="text-white/70 text-[10px]">Sat - Sun: 9:00 Am - 5:00 Pm (ET)</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#f04b12] transition-all">
                <Phone className="w-8 h-8" />
              </div>
            </div>

            <div className="border border-white/30 rounded-md p-6 hover:bg-white/5 transition-colors group flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">Chat With Us</h3>
                <p className="text-white/70 text-[10px] mb-1">Mon - Fri: 9:00 Am - 11:00 Pm (ET)</p>
                <p className="text-white/70 text-[10px] mb-4">Sat - Sun: 9:00 Am - 5:00 Pm (ET)</p>
                <p className="text-white/90 text-xs">No Chat Agents Are Currently Available. Please Call Or Email Us.</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#f04b12] transition-all">
                <MessageCircle className="w-8 h-8" />
              </div>
            </div>

            <div className="border border-white/30 rounded-md p-6 hover:bg-white/5 transition-colors group flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">E-Mail</h3>
                <p className="text-white/80 text-xs mb-1">Email Our Customer Service Team</p>
                <p className="text-white/90 text-xs mb-4">365 Days, We Will Reply Within 24 Hours</p>
                <button className="bg-[#5c1c0a] hover:bg-[#3d1105] text-white text-xs font-bold uppercase py-2 px-6 rounded-full transition-colors">
                  Submit
                </button>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#f04b12] transition-all">
                <Send className="w-8 h-8 -rotate-45 ml-1" />
              </div>
            </div>

            <div className="border border-white/30 rounded-md p-6 hover:bg-white/5 transition-colors group flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">Whatsapp Us</h3>
                <p className="text-white/80 text-xs mb-1">Chat With A Support Agent Via Whatsapp At:</p>
                <p className="text-white/90 text-xs mb-4">By Clicking Or Send Hi To 91+5554658214</p>
                <p className="text-white/70 text-[10px]">Mon - Sun: 10:00 Am - 7:00 Pm(IST)</p>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#f04b12] transition-all">
                <MessageSquare className="w-8 h-8" />
              </div>
            </div>

            <div className="border border-white/30 rounded-md p-6 hover:bg-white/5 transition-colors group flex justify-between items-center cursor-pointer">
              <div>
                <h3 className="text-xl font-bold uppercase mb-2">Write To India CEO</h3>
                <p className="text-white/80 text-xs mb-4">Email For Any Unresolved Customer Service Queries</p>
                <button className="bg-[#5c1c0a] hover:bg-[#3d1105] text-white text-xs font-bold uppercase py-2 px-6 rounded-full transition-colors">
                  Submit
                </button>
              </div>
              <div className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#f04b12] transition-all">
                <Send className="w-8 h-8 -rotate-45 ml-1" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
