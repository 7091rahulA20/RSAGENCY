import BrandForm from "@/components/forms/BrandForm";
import { CheckCircle2, TrendingUp, Target, Palette } from "lucide-react";

export default function BrandsPage() {
  const benefits = [
    {
      title: "Real ROI",
      description: "Data-backed campaigns that translate into actual sales and brand growth.",
      icon: <TrendingUp className="text-cyan" size={24} />,
    },
    {
      title: "Targeted Reach",
      description: "Connect with the exact audience that aligns with your brand values.",
      icon: <Target className="text-cyan" size={24} />,
    },
    {
      title: "Quality Content",
      description: "High-end content created by professional influencers for your brand.",
      icon: <Palette className="text-cyan" size={24} />,
    },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-xl">
              Grow Your Brand with <span className="text-gradient">Authentic</span> Influence
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-lg leading-relaxed">
              We help brands navigate the complex world of influencer marketing by providing strategic partnerships that deliver measurable impact.
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

            <div className="p-8 bg-cyan/5 border border-cyan/20 rounded-3xl">
              <p className="italic text-lg text-white/80 mb-4">
                "Influencio transformed our digital presence. Within 3 months, our engagement increased by 200% and we saw a direct 30% lift in direct-to-consumer sales."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-600 rounded-full" />
                <div>
                  <div className="font-bold">Rahul</div>
                  <div className="text-sm text-white/40">Marketing Director, GlowUp Cosmetics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="sticky top-32 bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2.5rem] backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-8">Work with Us</h2>
              <BrandForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
