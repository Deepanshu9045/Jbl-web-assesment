import Link from "next/link";
import { Search, User, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-6xl z-50 px-4">
      <nav className="glass rounded-full px-8 py-4 flex items-center justify-between border border-white/10">
        <Link href="/" className="bg-jbl-orange text-white font-bold text-xl px-4 py-1 rounded-sm tracking-tighter">
          JBL
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider text-white">
          <Link href="/" className="text-jbl-orange flex items-center gap-1">
            <span className="text-jbl-orange text-lg leading-none">/</span>
            HOME
          </Link>
          <Link href="/product" className="hover:text-jbl-orange transition-colors">
            PRODUCT
          </Link>
          <Link href="/service" className="hover:text-jbl-orange transition-colors">
            SERVICE
          </Link>
          <Link href="/about" className="hover:text-jbl-orange transition-colors">
            ABOUT US
          </Link>
          <Link href="/contact" className="hover:text-jbl-orange transition-colors">
            CONTACT US
          </Link>
        </div>

        <div className="flex items-center space-x-6 text-white">
          <button className="hover:text-jbl-orange transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-jbl-orange transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="hover:text-jbl-orange transition-colors">
            <Heart className="w-5 h-5" />
          </button>
          <button className="hover:text-jbl-orange transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </nav>
    </header>
  );
}
