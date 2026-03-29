import InfluencerForm from "@/components/forms/InfluencerForm";
import { DollarSign, ShieldCheck, Heart } from "lucide-react";

export default function InfluencersPage() {
  const benefits = [
    {
      title: "Paid Collaborations",
      description: "Get access to exclusive paid campaigns with world-leading brands.",
      icon: <DollarSign className="text-cyan" size={24} />,
    },
    {
      title: "Brand Safety",
      description: "We only partner with brands that respect your creative vision and audience.",
      icon: <ShieldCheck className="text-cyan" size={24} />,
    },
    {
      title: "Creative Freedom",
      description: "Maintain your authentic voice while delivering professional brand results.",
      icon: <Heart className="text-cyan" size={24} />,
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-xl">
              Partner with Top Brands & <span className="text-gradient">Get Paid</span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
              Join the Influencio roster and unlock opportunities to work with your favorite brands. We handle the business, you handle the creation.
            </p>

            <div className="space-y-8 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-6">
                  <div className="mt-1 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-white/60 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                <div className="text-3xl font-bold text-cyan mb-1">500+</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Active Brands</div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl text-center">
                <div className="text-3xl font-bold text-cyan mb-1">$2M+</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Paid to Creators</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="sticky top-32 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-8">Join the Roster</h2>
              <InfluencerForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
