import { Link } from 'react-router-dom';
import type { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, setIsOpen } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      flavor: product.flavor,
    });
    setIsOpen(true);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="relative bg-[#F0F8FA] p-8 flex items-center justify-center aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
        />
        <button
          onClick={handleAddToCart}
          className="absolute bottom-4 right-4 w-12 h-12 bg-[#0A1A2A] text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#8ACDE0] hover:text-[#0A1A2A] shadow-lg"
          aria-label="Add to cart"
        >
          <ShoppingCart size={18} />
        </button>
        <span className="absolute top-4 left-4 text-xs font-medium uppercase tracking-wider text-[#0A1A2A]/40 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs text-[#8ACDE0] font-medium uppercase tracking-wider mb-1">
          {product.flavor}
        </p>
        <h3 className="text-[#0A1A2A] font-semibold text-base mb-2 group-hover:text-[#8ACDE0] transition-colors">
          {product.name}
        </h3>
        <p className="text-[#0A1A2A]/60 text-sm line-clamp-2 mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#0A1A2A] font-bold text-lg">${product.price.toFixed(2)}</span>
          <span className="text-xs text-[#0A1A2A]/40">500ml</span>
        </div>
      </div>
    </Link>
  );
}
