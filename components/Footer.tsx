import {
  Share2,
  Globe,
  MessageCircle,
  Link,
  Play,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  const cities = [
    "New York",
    "Paris",
    "London",
    "Tokyo",
    "Dubai",
    "Sydney",
  ];

  return (
    <footer
      id="contact"
      className="bg-[#111] text-gray-400 relative overflow-hidden pt-24 pb-12"
    >
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 z-0"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">

        {/* Cities */}
        <div className="flex flex-wrap justify-center md:justify-between items-center border-b border-gray-800 pb-12 mb-12 gap-6">
          {cities.map((city, index) => (
            <div
              key={`${city}-${index}`}
              className="flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <MapPin className="w-5 h-5 text-jbl-orange mb-2" />
              <span className="text-sm">{city}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-800 pb-16">

          {/* Column 1 */}
          <div className="space-y-6">
            <div className="bg-jbl-orange text-white font-bold text-2xl px-4 py-1 inline-block rounded-sm tracking-tighter">
              JBL
            </div>

            <p className="text-sm leading-relaxed max-w-xs">
              The JBL Center Is Open On Weekdays From 9:00 To 18:00 And On
              Weekends From 10:00 To 18:00.
            </p>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-jbl-orange" />
                +1 1234 56789
              </p>

              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-jbl-orange" />
                abc@gmail.com
              </p>
            </div>

            <div>
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-4">
                Follow Us
              </h5>

              <div className="flex gap-4">
                <a href="#">
                  <Share2 className="w-5 h-5 hover:text-jbl-orange" />
                </a>

                <a href="#">
                  <Globe className="w-5 h-5 hover:text-jbl-orange" />
                </a>

                <a href="#">
                  <MessageCircle className="w-5 h-5 hover:text-jbl-orange" />
                </a>

                <a href="#">
                  <Link className="w-5 h-5 hover:text-jbl-orange" />
                </a>

                <a href="#">
                  <Play className="w-5 h-5 hover:text-jbl-orange" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-6">
              Shop
            </h5>

            <ul className="space-y-3 text-sm">
              <li>Featured</li>
              <li>Headphones</li>
              <li>Gaming</li>
              <li>Speakers</li>
              <li>Soundbars</li>
              <li>Professional</li>
              <li>Offer Zone</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-6">
              Support
            </h5>

            <ul className="space-y-3 text-sm">
              <li>Order Status</li>
              <li>Bulk Purchase Program</li>
              <li>Buy Authentic</li>
              <li>Product Support</li>
              <li>Shipping & Delivery Policy</li>
              <li>Cancellation & Refund Policy</li>
              <li>Service Center</li>
              <li>Brand Stores</li>
            </ul>

            <div className="mt-8">
              <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-4">
                Sustainability 🌱
              </h5>

              <p className="text-sm">
                Follow Our Efforts
              </p>
            </div>
          </div>

          {/* Column 4 */}
          <div id="about-us">
            <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-6">
              About Us
            </h5>

            <ul className="space-y-3 text-sm mb-8">
              <li>Harman Corporate</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Cookie Setting</li>
              <li>Warranty Policy</li>
              <li>Terms Of Use</li>
              <li>Why Buy Direct</li>
              <li>JBL Sound Partners</li>
            </ul>

            <h5 className="text-jbl-orange font-bold uppercase tracking-widest mb-4">
              Product Support
            </h5>

            <div className="text-xs space-y-4">
              <p>
                <strong>Manufactured By:</strong>
                <br />
                Harman International Industries, Inc.
                <br />
                8500 Balboa Blvd
                <br />
                Northridge, CA 91329, USA
              </p>

              <p>
                <strong>Imported By:</strong>
                <br />
                Harman International (India) Pvt. Ltd.
                <br />
                Salarpuria Sattva Knowledge Court
                <br />
                Bengaluru, Karnataka, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center relative">

          <p className="text-xs text-gray-500 mb-4 md:mb-0">
            © 2026 HARMAN INTERNATIONAL INDUSTRIES, INCORPORATED. ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap gap-4 opacity-50 grayscale text-xs font-bold">
            <span>AKG</span>
            <span>harman/kardon</span>
            <span>Infinity</span>
            <span>JBL</span>
            <span>Lexicon</span>
            <span>Mark Levinson</span>
            <span>Revel</span>
          </div>

          <div className="absolute right-0 bottom-0 pointer-events-none translate-y-1/4 translate-x-1/4 opacity-10">
            <span className="text-[220px] font-black text-jbl-orange">
              JBL
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
