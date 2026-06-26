import { Droplets, Target, Heart, Globe } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Droplets,
      title: 'Purity First',
      desc: 'We source our electrolytes from pristine glacial springs, ensuring every drop contains nothing but nature\'s finest minerals.',
    },
    {
      icon: Target,
      title: 'Science-Driven',
      desc: 'Our formulas are developed with sports nutritionists and backed by clinical research for optimal absorption.',
    },
    {
      icon: Heart,
      title: 'Athlete Obsessed',
      desc: 'Every product is tested by real athletes. We don\'t launch until it passes the toughest performance standards.',
    },
    {
      icon: Globe,
      title: 'Sustainable',
      desc: 'Our bottles are 100% recyclable and we offset 100% of our carbon emissions through verified programs.',
    },
  ];

  const milestones = [
    { year: '2019', event: 'Founded in Denver, Colorado' },
    { year: '2020', event: 'First product line launched' },
    { year: '2021', event: 'Expanded to 12 countries' },
    { year: '2022', event: 'B-Corp certification achieved' },
    { year: '2023', event: '1 million bottles sold' },
    { year: '2024', event: 'Carbon neutral operations' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/our-story.jpg')",
        }}
      >
        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-[#0A1A2A]/70"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-16 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-4">
              Our Story
            </p>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Born From the Ice
            </h1>

            <p className="text-white/80 text-lg leading-relaxed">
              TrueDrop was founded with a simple mission: to create the purest,
              most effective electrolyte hydration on the planet. Inspired by the
              crystal-clear waters of glacial springs, we set out to bottle that
              same pristine quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story Image + Text */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/product-4.jpg"
                alt="TrueDrop story"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0A1A2A] mb-6">
                Why We Started
              </h2>
              <p className="text-[#0A1A2A]/60 leading-relaxed mb-6">
                After years of consuming sugar-laden sports drinks that left us crashing mid-workout, we knew there had to be a better way. We teamed up with sports scientists and nutritionists to develop a formula that delivers electrolytes without the sugar, artificial colors, or fillers.
              </p>
              <p className="text-[#0A1A2A]/60 leading-relaxed mb-6">
                The result is TrueDrop: a clean, effective electrolyte drink that tastes as refreshing as it performs. Each bottle contains the precise mineral balance your body needs to stay hydrated during intense physical activity.
              </p>
              <p className="text-[#0A1A2A]/60 leading-relaxed">
                Today, thousands of athletes trust TrueDrop to keep them performing at their peak. From marathon runners to CrossFit enthusiasts, our community spans the globe united by one goal: pure hydration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F0F8FA] py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1A2A]">
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-[#D0F4F8] rounded-xl flex items-center justify-center mb-6">
                  <v.icon size={22} className="text-[#0A1A2A]" />
                </div>
                <h3 className="text-[#0A1A2A] font-semibold text-lg mb-3">{v.title}</h3>
                <p className="text-[#0A1A2A]/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl lg:text-5xl font-bold text-[#0A1A2A]">
              Milestones
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`flex items-center gap-8 py-6 ${
                  i !== milestones.length - 1 ? 'border-b border-[#D0F4F8]' : ''
                }`}
              >
                <span className="text-2xl lg:text-3xl font-bold text-[#8ACDE0] w-20 flex-shrink-0">
                  {m.year}
                </span>
                <span className="text-[#0A1A2A]/70">{m.event}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
