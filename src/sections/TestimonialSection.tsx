import { Link } from 'react-router-dom';
import { Quote, Star } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <Quote size={40} className="text-[#8ACDE0] mx-auto mb-8" />

          <div className="mb-8">
            <img
              src="/images/testimonial-athlete.jpg"
              alt="Sarah Mitchell"
              className="w-24 h-24 rounded-full object-cover mx-auto mb-6 ring-4 ring-[#D0F4F8]"
            />
            <div className="flex items-center justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-[#8ACDE0] fill-[#8ACDE0]" />
              ))}
            </div>
          </div>

          <blockquote className="text-2xl lg:text-3xl text-[#0A1A2A] font-medium leading-relaxed mb-8">
            "This isn't just a drink; it's the feeling of finishing strong. The clarity is unmatched. TrueDrop has completely changed how I approach hydration during my training."
          </blockquote>

          <div className="mb-10">
            <p className="text-[#0A1A2A] font-semibold text-lg">Sarah Mitchell</p>
            <p className="text-[#0A1A2A]/50 text-sm">Marathon Runner & Fitness Coach</p>
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-[#0A1A2A] text-white rounded-full font-medium hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </section>
  );
}
