import Link from "next/link";
import { ArrowRight, BarChart3, Users, Zap, CheckCircle2 } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Campaign Management",
      description: "End-to-end management of your influencer campaigns, from strategy to execution.",
      icon: <Zap className="text-cyan" size={32} />,
    },
    {
      title: "Talent Booking",
      description: "Access our exclusive roster of top-tier creators across all major platforms.",
      icon: <Users className="text-cyan" size={32} />,
    },
    {
      title: "Strategy & Analytics",
      description: "Data-driven insights to optimize your ROI and track campaign performance.",
      icon: <BarChart3 className="text-cyan" size={32} />,
    },
  ];

  const stats = [
    { label: "Influencers", value: "5,000+" },
    { label: "Campaigns", value: "1,200+" },
    { label: "Total Reach", value: "500M+" },
    { label: "Avg. ROI", value: "4.5x" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-cyan rounded-full animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/70">Premier Influencer Agency</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Connect Brands with <span className="text-gradient">Top Influencers</span>
            </h1>
            <p className="text-xl text-white/60 mb-12 max-w-xl leading-relaxed">
              Influencio bridges the gap between visionary brands and world-class creators. We craft authentic narratives that resonate and drive measurable growth.
            </p>
            <div className="flex flex-col sm:row items-center gap-6">
              <Link
                href="/brands"
                className="group bg-cyan text-navy px-10 py-5 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                For Brands
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                href="/influencers"
                className="group bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
              >
                For Influencers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-navy/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan transition-colors">{stat.value}</div>
                <div className="text-sm font-bold tracking-widest uppercase text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Our Expertise</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
              We provide comprehensive influencer marketing solutions tailored to your brand's unique needs and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:border-cyan/50 transition-all hover:-translate-y-2 group"
              >
                <div className="mb-8 p-4 bg-navy rounded-2xl border border-white/5 group-hover:border-cyan/30 w-fit transition-all">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyan/5 -z-10" />
        <div className="max-w-5xl mx-auto px-6 text-center bg-navy border border-white/10 p-16 md:p-24 rounded-[3rem]">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl mx-auto">
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join the ranks of leading brands and elite creators who trust Influencio to power their influencer marketing success.
          </p>
          <div className="flex flex-col sm:row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-cyan text-navy px-12 py-5 rounded-full font-bold text-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
