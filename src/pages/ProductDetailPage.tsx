import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductById, products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';
import {
  Minus,
  Plus,
  ShoppingCart,
  ArrowLeft,
  Check,
  Beaker,
  Flame,
  Droplets,
  Package,
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || '');
  const { addItem, setIsOpen } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A1A2A] mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-[#8ACDE0] hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        flavor: product.flavor,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setIsOpen(true);
  };

  const nutritionItems = [
    { icon: Flame, label: 'Calories', value: `${product.nutritionInfo.calories}kcal` },
    { icon: Droplets, label: 'Sodium', value: product.nutritionInfo.sodium },
    { icon: Droplets, label: 'Potassium', value: product.nutritionInfo.potassium },
    { icon: Beaker, label: 'Magnesium', value: product.nutritionInfo.magnesium },
    { icon: Beaker, label: 'Calcium', value: product.nutritionInfo.calcium },
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[#F0F8FA] py-4">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-[#0A1A2A]/50 hover:text-[#0A1A2A] text-sm transition-colors"
          >
            <ArrowLeft size={16} />
            Back
          </button>
        </div>
      </div>

      {/* Product Detail */}
      <section className="bg-white py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image */}
            <div className="bg-[#F0F8FA] rounded-2xl p-8 lg:p-16 flex items-center justify-center aspect-square">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain max-w-[400px]"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-center">
              <span className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-5xl font-bold text-[#0A1A2A] mb-3">
                {product.name}
              </h1>
              <p className="text-[#0A1A2A]/40 text-sm mb-6">{product.flavor}</p>

              <p className="text-[#0A1A2A]/60 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-[#0A1A2A]">
                  ${product.price.toFixed(2)}
                </span>
                <span className="text-[#0A1A2A]/30">/ 500ml bottle</span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-sm text-[#0A1A2A]/60">Quantity</span>
                <div className="flex items-center gap-3 bg-[#F0F8FA] rounded-full px-2 py-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-white rounded-full transition-colors"
                  >
                    <Minus size={16} className="text-[#0A1A2A]" />
                  </button>
                  <span className="text-[#0A1A2A] font-semibold w-8 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-white rounded-full transition-colors"
                  >
                    <Plus size={16} className="text-[#0A1A2A]" />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    added
                      ? 'bg-green-500 text-white'
                      : 'bg-[#0A1A2A] text-white hover:bg-[#0A1A2A]/80'
                  }`}
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8ACDE0] text-[#0A1A2A] rounded-full font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-300 active:scale-[0.98]"
                >
                  Buy Now
                </button>
              </div>

              {/* Ingredients */}
              <div className="border-t border-[#D0F4F8] pt-8">
                <div className="flex items-center gap-2 mb-4">
                  <Package size={16} className="text-[#8ACDE0]" />
                  <h3 className="text-[#0A1A2A] font-semibold">Ingredients</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span
                      key={ing}
                      className="px-3 py-1 bg-[#F0F8FA] text-[#0A1A2A]/60 text-xs rounded-full"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Info */}
      <section className="bg-[#F0F8FA] py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1A2A] mb-10 text-center">
            Nutrition Information
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {nutritionItems.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <item.icon size={24} className="text-[#8ACDE0] mx-auto mb-3" />
                <p className="text-2xl font-bold text-[#0A1A2A] mb-1">{item.value}</p>
                <p className="text-[#0A1A2A]/40 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0A1A2A] mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
