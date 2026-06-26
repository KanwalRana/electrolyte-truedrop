import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-img.jpg')",backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-[#8ACDE0]/70" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white mb-6">
            Melt
            <br />
            the Limits
          </h1>

          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-lg">
            Electrolytes born from pure glacial springs. Replenish what sweat
            takes away and push beyond your boundaries.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="px-8 py-4 bg-white text-[#0A1A2A] rounded-full font-medium"
            >
              Shop Products
            </Link>

            <Link
              to="/about"
              className="px-8 py-4 border border-white text-white rounded-full font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}