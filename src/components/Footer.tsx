import { Link } from 'react-router-dom';
import { Droplets, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#04101A] text-white pt-20 pb-8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Droplets size={28} className="text-[#8ACDE0]" />
              <span className="text-2xl font-bold tracking-tight">TrueDrop</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Electrolytes born from pure glacial springs. Replenish, restore, and rise above your limits.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <Mail size={16} className="text-[#8ACDE0]" />
                <span>hello@truedrop.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/40 text-sm">
                <Phone size={16} className="text-[#8ACDE0]" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-start gap-3 text-white/40 text-sm">
                <MapPin size={16} className="text-[#8ACDE0] mt-0.5" />
                <span>123 Glacier Ave, Suite 100<br />Denver, CO 80202</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8ACDE0] mb-6">Shop</h3>
            <nav className="space-y-3">
              <Link to="/shop" className="block text-white/50 hover:text-white text-sm transition-colors">All Products</Link>
              {/* <Link to="/shop" className="block text-white/50 hover:text-white text-sm transition-colors">Classic Line</Link> */}
              {/* <Link to="/shop" className="block text-white/50 hover:text-white text-sm transition-colors">Flavored</Link> */}
              {/* <Link to="/shop" className="block text-white/50 hover:text-white text-sm transition-colors">Performance</Link> */}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8ACDE0] mb-6">Company</h3>
            <nav className="space-y-3">
              <Link to="/about" className="block text-white/50 hover:text-white text-sm transition-colors">About Us</Link>
              {/* <Link to="/about" className="block text-white/50 hover:text-white text-sm transition-colors">Our Science</Link> */}
              <Link to="/contact" className="block text-white/50 hover:text-white text-sm transition-colors">Contact</Link>
              {/* <Link to="/contact" className="block text-white/50 hover:text-white text-sm transition-colors">Careers</Link> */}
            </nav>
          </div>

          {/* Legal & Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8ACDE0] mb-6">Stay Hydrated</h3>
            <p className="text-white/40 text-sm mb-4">Get hydration tips and exclusive offers.</p>
            <div className="flex border-b border-[#D0F4F8]/30 pb-1 mb-8">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent text-white placeholder-white/30 text-sm flex-1 outline-none py-2"
              />
              <button className="text-[#8ACDE0] text-sm font-medium hover:text-white transition-colors px-2">
                Subscribe
              </button>
            </div>

            <h3 className="text-sm font-semibold uppercase tracking-wider text-[#8ACDE0] mb-4">Legal</h3>
            <nav className="space-y-2">
              <a href="/privacy" className="block text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
              <a href="term-condition" className="block text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
              <a href="shipping-policy" className="block text-white/40 hover:text-white text-xs transition-colors">Shipping Policy</a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} TrueDrop. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/30 text-xs">
            <Droplets size={14} className="text-[#8ACDE0]" />
            <span>Pure hydration, zero compromise.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
