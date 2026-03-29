import Link from "next/link";
import { Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tighter mb-4 inline-block">
              RSAGENCY<span className="text-cyan">IO</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              The premier agency connecting world-class brands with influential voices. We craft authentic narratives that drive real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link href="/" className="hover:text-cyan transition-colors">Home</Link></li>
              <li><Link href="/brands" className="hover:text-cyan transition-colors">For Brands</Link></li>
              <li><Link href="/influencers" className="hover:text-cyan transition-colors">For Influencers</Link></li>
              <li><Link href="/contact" className="hover:text-cyan transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Campaign Management</li>
              <li>Talent Booking</li>
              <li>Strategy & Analytics</li>
              <li>Content Creation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-cyan" />
                <span>rsagencyoffical@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-cyan" />
                <span>+1 (91) 7091 830 749 </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan" />
                <span>Aurangabad, Bihar</span>
              </li>
              <li className="flex items-center gap-4 mt-6">
                <Link href="#" className="hover:text-cyan transition-colors" aria-label="Instagram">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan transition-all">
                    <Instagram size={20} />
                  </div>
                </Link>
                <Link href="#" className="hover:text-cyan transition-colors" aria-label="LinkedIn">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan transition-all">
                    <Linkedin size={20} />
                  </div>
                </Link>
                <Link href="#" className="hover:text-cyan transition-colors" aria-label="Twitter">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan transition-all">
                    <Twitter size={20} />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} RSAGENCY. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
