import { useCart } from '@/hooks/useCart';
import { Minus, Plus, X, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, setIsOpen, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsOpen(false);
    navigate('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      </div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="liquid-glass h-full flex flex-col overflow-hidden rounded-l-[24px]">
          {/* Edge refraction pseudo-element handled by CSS */}
          <div className="liquid-glass-edge" />

          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag size={20} className="text-[#0A1A2A]" />
              <h2 className="text-xl font-semibold text-[#0A1A2A]">Your Cart</h2>
              <span className="text-sm text-[#0A1A2A]/60">({items.length} items)</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X size={20} className="text-[#0A1A2A]" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingBag size={48} className="text-[#0A1A2A]/20 mb-4" />
                <p className="text-[#0A1A2A]/60 text-lg mb-2">Your cart is empty</p>
                <p className="text-[#0A1A2A]/40 text-sm mb-6">Add some electrolytes to get started</p>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    navigate('/shop');
                  }}
                  className="px-6 py-3 bg-[#0A1A2A] text-white rounded-full text-sm font-medium hover:bg-[#0A1A2A]/80 transition-colors"
                >
                  Browse Products
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 bg-white/40 backdrop-blur-sm rounded-xl p-4"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-24 object-contain rounded-lg bg-white/50"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="text-[#0A1A2A] font-medium text-sm truncate pr-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-50 rounded-full transition-colors flex-shrink-0"
                          aria-label="Remove item"
                        >
                          <Trash2 size={14} className="text-red-400" />
                        </button>
                      </div>
                      <p className="text-[#0A1A2A]/50 text-xs mb-3">{item.flavor}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 bg-white/50 rounded-full px-2 py-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus size={14} className="text-[#0A1A2A]" />
                          </button>
                          <span className="text-sm font-medium text-[#0A1A2A] w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white rounded-full transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus size={14} className="text-[#0A1A2A]" />
                          </button>
                        </div>
                        <span className="text-[#0A1A2A] font-semibold text-sm">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={clearCart}
                  className="text-red-400 text-sm hover:text-red-600 transition-colors flex items-center gap-1"
                >
                  <Trash2 size={14} />
                  Clear all items
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-white/20">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#0A1A2A]/60">Subtotal</span>
                <span className="text-[#0A1A2A] font-semibold text-lg">${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-[#0A1A2A]/40 text-xs mb-4">Shipping calculated at checkout. Cash on Delivery only.</p>
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-[#0A1A2A] text-white rounded-full font-medium hover:bg-[#0A1A2A]/80 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 mt-2 text-[#0A1A2A]/60 text-sm hover:text-[#0A1A2A] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
