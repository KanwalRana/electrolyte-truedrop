import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const imagesBand1 = ['/images/product-1.jpg', '/images/product-3.jpg', '/images/product-5.jpg'];
const imagesBand2 = ['/images/product-2.jpg', '/images/product-4.jpg', '/images/product-6.jpg'];

export default function ShopCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const band1Ref = useRef<HTMLDivElement>(null);
  const band2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bands = [band1Ref.current, band2Ref.current];
    if (!bands[0] || !bands[1]) return;

    const triggers: ScrollTrigger[] = [];

    bands.forEach((band, i) => {
      if (!band) return;

      const images = band.querySelectorAll('img');
      const texts = band.querySelectorAll('span');
      const startX = i % 2 === 0 ? '-50%' : '0';
      const endX = startX === '-50%' ? '0' : '-50%';

      // Horizontal scroll
      const tween = gsap.fromTo(
        band,
        { x: startX },
        {
          x: endX,
          scrollTrigger: {
            trigger: band,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);

      // Image scale
      const scaleTween = gsap.fromTo(
        images,
        { scale: 0.8 },
        {
          scale: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: band,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
      if (scaleTween.scrollTrigger) triggers.push(scaleTween.scrollTrigger);

      // Velocity skew
      const proxy = { skew: 0 };
      const skewSetter = gsap.quickSetter(images, 'skewX', 'deg');
      const textSkewSetter = gsap.quickSetter(texts, 'skewX', 'deg');
      const clamp = gsap.utils.clamp(-5, 5);

      const st = ScrollTrigger.create({
        trigger: band,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = clamp(self.getVelocity() / -300);
          gsap.to(proxy, {
            skew: velocity,
            duration: 0.4,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => {
              skewSetter(proxy.skew);
              textSkewSetter(proxy.skew);
            },
          });
        },
      });
      triggers.push(st);
    });

    return () => {
      triggers.forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32 bg-[#8ACDE0] overflow-hidden relative"
    >
      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[#0A1A2A]/60 text-sm font-semibold uppercase tracking-wider mb-3">
              Shop the Collection
            </p>
            <h2 className="text-4xl lg:text-6xl font-bold text-[#0A1A2A] leading-tight">
              Find Your Flow
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden sm:inline-flex items-center gap-2 text-[#0A1A2A] font-medium hover:gap-3 transition-all"
          >
            View All <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Band 1 */}
      <div ref={band1Ref} className="carousel-band flex w-max mb-8">
        {[...imagesBand1, ...imagesBand1].map((src, i) => (
          <div
            key={`b1-${i}`}
            className="relative px-4 lg:px-8 flex items-center shrink-0"
            style={{ width: 'clamp(400px, 50vw, 700px)' }}
          >
            <img
              src={src}
              alt="Product"
              className="w-full h-[40vh] lg:h-[50vh] object-cover rounded-lg"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0A1A2A] text-[12.5vw] font-bold uppercase pointer-events-none whitespace-nowrap z-10 mix-blend-overlay opacity-60">
              TRUE
            </span>
          </div>
        ))}
      </div>

      {/* Band 2 */}
      <div ref={band2Ref} className="carousel-band flex w-max">
        {[...imagesBand2, ...imagesBand2].map((src, i) => (
          <div
            key={`b2-${i}`}
            className="relative px-4 lg:px-8 flex items-center shrink-0"
            style={{ width: 'clamp(400px, 50vw, 700px)' }}
          >
            <img
              src={src}
              alt="Product"
              className="w-full h-[40vh] lg:h-[50vh] object-cover rounded-lg"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0A1A2A] text-[12.5vw] font-bold uppercase pointer-events-none whitespace-nowrap z-10 mix-blend-overlay opacity-60">
              DROP
            </span>
          </div>
        ))}
      </div>

      {/* Mobile CTA */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12 sm:hidden">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[#0A1A2A] font-medium"
        >
          View All Products <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
