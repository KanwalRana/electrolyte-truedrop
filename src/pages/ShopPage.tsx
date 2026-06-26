import { useState } from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const categories = ['all', 'classic', 'flavored', 'energy', 'performance'];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high'>('default');

  const filtered =
    activeCategory === 'all'
      ? [...products]
      : products.filter((p) => p.category === activeCategory);

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/our-product.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0A1A2A]/75"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 py-32 lg:px-12">
          <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
            Collection
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Shop All Products
          </h1>

          <p className="text-white/80 max-w-lg">
            Find your perfect hydration companion. Each formula is crafted for
            specific performance needs.
          </p>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full sm:w-auto scrollbar-hide">
              <SlidersHorizontal size={18} className="text-[#0A1A2A]/40 flex-shrink-0 mr-2" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? 'bg-[#0A1A2A] text-white'
                      : 'bg-[#F0F8FA] text-[#0A1A2A]/60 hover:bg-[#D0F4F8]'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[#0A1A2A]/40 text-sm">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-[#F0F8FA] text-[#0A1A2A] text-sm rounded-full px-4 py-2 outline-none cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Count */}
          <p className="text-[#0A1A2A]/40 text-sm mb-8">
            Showing {sorted.length} product{sorted.length !== 1 ? 's' : ''}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sorted.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#0A1A2A]/40 text-lg">
                No products found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
