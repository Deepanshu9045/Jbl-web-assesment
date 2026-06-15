import { Share2, Globe, MessageCircle, Link, Play, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-gray-400 relative overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">


        <div className="flex flex-wrap justify-between items-center border-b border-gray-800 pb-12 mb-12">
          {["New York", "Paris", "", "", "", ""].map((city) => (
            <div key={city} className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer">


            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16">

          <div className="space-y-6">
            <div className="bg-jbl-orange text-white font-bold text-2xl px-4 py-1 inline-block rounded-sm tracking-tighter mb-4">
              JBL
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              The JBL Center Is Open On Weekdays From 9:00 To 18:00 And On Weekends From 10:00 To 18:00
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-jbl-orange" /> +1 1234 56789</p>
              <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-jbl-orange" /> abc@gmail.com</p>
            </div>

            <div className="pt-4">
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-4">FOLLOW US</h5>
              <div className="flex gap-4">
                <a href="#" className="hover:text-jbl-orange transition-colors"><Share2 className="w-5 h-5" /></a>
                <a href="#" className="hover:text-jbl-orange transition-colors"><Globe className="w-5 h-5" /></a>
                <a href="#" className="hover:text-jbl-orange transition-colors"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="hover:text-jbl-orange transition-colors"><Link className="w-5 h-5" /></a>
                <a href="#" className="hover:text-jbl-orange transition-colors"><Play className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          <div>
            <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-6">SHOP</h5>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Headphones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gaming</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soundbars</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Offer Zone</a></li>
            </ul>
          </div>

          <div>
            <div className="mb-8">
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-6">SUPPORT</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Order Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bulk Purchase Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Buy Authentic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product Support</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping & Delivery Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cancellation & Refund Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Brand Stores</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-4">SUSTAINABILITY 🌱</h5>
              <a href="#" className="text-sm hover:text-white transition-colors text-gray-500">Follow Our Efforts</a>
            </div>
          </div>

          <div id="about-us">
            <div className="mb-8">
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-6">ABOUT US</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Harman Corporate</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Setting</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Warranty Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Why Buy Direct</a></li>
                <li><a href="#" className="hover:text-white transition-colors">JBL Sound Partners</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-4">PRODUCT SUPPORT</h5>
              <div className="text-xs space-y-4">
                <p>
                  <strong>Manufactured By:</strong><br />
                  Harman International Industries, Inc.<br />
                  8500, Balboa Blvd,<br />
                  Northridge, CA 91329,USA
                </p>
                <p>
                  <strong>Imported By:</strong><br />
                  Harman International (India) Pvt. Ltd.,<br />
                  Salarpuria Sattva Knowledge Court<br />
                  Office-1, Wing 'A' & 'B' 6th Floor,<br />
                  Bengaluru-560034, Karnataka, India.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between relative">
          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2026 HARMAN INTERNATIONAL INDUSTRIES, INCORPORATED. ALL RIGHTS RESERVED.
          </p>

          <div className="flex gap-4 opacity-50 grayscale">
            <span className="text-xs font-bold">AKG</span>
            <span className="text-xs font-bold">harman/kardon</span>
            <span className="text-xs font-bold">Infinity</span>
            <span className="text-xs font-bold">JBL</span>
            <span className="text-xs font-bold">Lexicon</span>
            <span className="text-xs font-bold">Mark Levinson</span>
            <span className="text-xs font-bold">Revel</span>
          </div>

          <div className="absolute right-0 bottom-0 pointer-events-none translate-y-1/4 translate-x-1/4 opacity-20 z-0">
            <span className="text-[250px] font-black text-jbl-orange tracking-tighter leading-none">JBL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
