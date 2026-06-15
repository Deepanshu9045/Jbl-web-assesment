import { Star, Heart } from "lucide-react";
import Image from "next/link"; // Wait, Image from "next/image" but we've been using simple img tags.

export default function ProductCard({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full border-b border-gray-800 pb-12 mb-12 last:border-b-0">
      <div className="lg:w-1/3 flex-shrink-0">
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100\' height=\'100\' filter=\'url(%23noise)\' opacity=\'0.2\'/%3E%3C/svg%3E")', backgroundColor: '#2a2a2a' }}>
          <img src={imageSrc} alt="WF-C700N" className="w-full h-full object-contain p-8 drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
        </div>
      </div>

      <div className="lg:w-2/3 flex flex-col justify-between">
        
        <div className="flex justify-between items-start mb-2">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            WF-C700N Wireless Noise Cancelling Headphones
          </p>
          <div className="text-right">
            <span className="text-white font-bold text-sm">Rs.</span>
            <span className="text-jbl-orange font-bold text-lg">12,9901</span>
            <span className="text-[10px] text-gray-400 font-bold ml-1">(Incl. Of All Taxes)</span>
          </div>
        </div>

        <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-1">
          WF-C700N
        </h2>
        <p className="text-sm font-bold text-white mb-4">
          Comfortable Design, Immersive Sound
        </p>

        <div className="flex items-center gap-2 mb-6">
          <div className="flex space-x-1">
            <Star className="w-3 h-3 fill-jbl-orange text-jbl-orange" />
            <Star className="w-3 h-3 fill-jbl-orange text-jbl-orange" />
            <Star className="w-3 h-3 fill-jbl-orange text-jbl-orange" />
            <Star className="w-3 h-3 fill-jbl-orange text-jbl-orange" />
            <Star className="w-3 h-3 fill-white text-white opacity-20" />
          </div>
          <span className="text-[10px] text-gray-400 font-bold">4.2 (1463 Reviews)</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-6">
          
          <div className="md:col-span-3 space-y-4">
            <button className="text-jbl-orange hover:text-white transition-colors">
              <Heart className="w-5 h-5 fill-current" />
            </button>
            <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-gray-300">
              <input type="checkbox" className="accent-jbl-orange w-3 h-3" />
              Compare
            </label>
          </div>

          <div className="md:col-span-9">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-jbl-orange mt-1 flex-shrink-0"></span>
                <span className="text-[10px] font-bold text-gray-300 leading-tight">Noise Sensor Technology Lets You Immerse Yourself In Music</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-jbl-orange mt-1 flex-shrink-0"></span>
                <span className="text-[10px] font-bold text-gray-300 leading-tight">Compact Size And Lightweight For A More Comfortable Fit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-jbl-orange mt-1 flex-shrink-0"></span>
                <span className="text-[10px] font-bold text-gray-300 leading-tight">Tailor Your Music With The EQ Setting On The Sony | Headphones Connect App</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end md:items-center mt-auto gap-6 pt-4 border-t border-gray-800">
          
          <div>
            <p className="text-[8px] font-bold text-white mb-2 tracking-widest uppercase">Glossy Black</p>
            <div className="flex gap-3">
              <div className="w-8 h-5 bg-[#333] rounded-sm cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-8 h-5 bg-white rounded-sm cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-8 h-5 bg-[#FF4B4B] rounded-sm cursor-pointer hover:scale-110 transition-transform"></div>
              <div className="w-8 h-5 bg-yellow-400 rounded-sm cursor-pointer hover:scale-110 transition-transform"></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-[#FF4B4B] hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition-colors text-xs shadow-lg uppercase tracking-wider">
              LEARN MORE
            </button>
            <button className="bg-jbl-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors text-xs shadow-lg uppercase tracking-wider">
              BUY NOW
            </button>
            <button className="bg-jbl-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition-colors text-xs shadow-lg uppercase tracking-wider">
              Your Customization
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
