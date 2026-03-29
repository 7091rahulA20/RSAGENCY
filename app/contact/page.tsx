import ContactForm from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Contact <span className="text-gradient">Us</span></h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Get in touch with our team of influencer marketing experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Details */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-cyan/30 transition-all">
              <div className="mb-6 w-12 h-12 bg-cyan/10 rounded-2xl flex items-center justify-center">
                <Mail className="text-cyan" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <p className="text-white/60">rsagencyoffical@gmail.com</p>
              <p className="text-white/40 text-sm mt-1">We typically reply within 24 hours.</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-cyan/30 transition-all">
              <div className="mb-6 w-12 h-12 bg-cyan/10 rounded-2xl flex items-center justify-center">
                <Phone className="text-cyan" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Number</h3>
              <p className="text-white/60">+1 (91) 7091 830 749 </p>
              <p className="text-white/40 text-sm mt-1"></p>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-cyan/30 transition-all">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan transition-all cursor-pointer">
                  <Instagram size={20} />
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan transition-all cursor-pointer">
                  <Linkedin size={20} />
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan transition-all cursor-pointer">
                  <Twitter size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Main Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem]">
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
