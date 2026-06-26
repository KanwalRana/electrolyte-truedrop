import { Link } from 'react-router-dom';
import { Beaker, Leaf, Zap, Droplets } from 'lucide-react';

export default function ScienceSection() {
  const features = [
    {
      icon: Beaker,
      title: 'Zero Sugar Formula',
      desc: 'No added sugars or artificial sweeteners. Pure electrolyte delivery without the crash.',
    },
    {
      icon: Leaf,
      title: 'Natural Sources',
      desc: 'Minerals extracted from natural glacial deposits and plant-based sources.',
    },
    {
      icon: Zap,
      title: 'Rapid Absorption',
      desc: 'Optimized osmolality for fastest cellular uptake during intense activity.',
    },
    {
      icon: Droplets,
      title: 'Complete Balance',
      desc: 'Sodium, potassium, magnesium, and calcium in precise ratios.',
    },
  ];

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/science-runner.jpg"
                alt="Athlete with TrueDrop"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#8ACDE0] text-[#0A1A2A] px-6 py-4 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">0g</p>
              <p className="text-sm font-medium">Added Sugar</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-4">
              The Science
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0A1A2A] mb-6 leading-tight">
              Balance Restored
            </h2>
            <p className="text-[#0A1A2A]/60 text-lg leading-relaxed mb-10">
              Zero sugar, maximum absorption. Our electrolyte matrix mimics the natural flow of glacial meltwater, delivering essential minerals in the exact ratios your body needs during exertion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#D0F4F8] rounded-lg flex items-center justify-center flex-shrink-0">
                    <f.icon size={18} className="text-[#0A1A2A]" />
                  </div>
                  <div>
                    <h4 className="text-[#0A1A2A] font-semibold text-sm mb-1">{f.title}</h4>
                    <p className="text-[#0A1A2A]/50 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 bg-[#8ACDE0] text-[#0A1A2A] rounded-full font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
            >
              Explore the Formula
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
