import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { MapPin, Truck, CreditCard, Package, ChevronRight } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'shipping' | 'review'>('shipping');
  const [shipping, setShipping] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package size={48} className="text-[#0A1A2A]/20 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#0A1A2A] mb-2">Your cart is empty</h1>
          <p className="text-[#0A1A2A]/50 mb-6">Add some products before checking out.</p>
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3 bg-[#0A1A2A] text-white rounded-full font-medium hover:bg-[#0A1A2A]/80 transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const validateShipping = () => {
    const newErrors: Record<string, string> = {};
    if (!shipping.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!shipping.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shipping.email))
      newErrors.email = 'Invalid email address';
    if (!shipping.phone.trim()) newErrors.phone = 'Phone is required';
    if (!shipping.address.trim()) newErrors.address = 'Address is required';
    if (!shipping.city.trim()) newErrors.city = 'City is required';
    if (!shipping.pincode.trim()) newErrors.pincode = 'Pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (validateShipping()) {
      setStep('review');
      window.scrollTo(0, 0);
    }
  };

  const handlePlaceOrder = () => {
    const orderNumber = 'TD' + Date.now().toString(36).toUpperCase();
    const orderData = {
      orderNumber,
      items,
      total: totalPrice,
      shipping,
      date: new Date().toISOString(),
    };
    sessionStorage.setItem('lastOrder', JSON.stringify(orderData));
    clearCart();
    navigate('/thankyou');
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-[#F0F8FA] rounded-xl text-[#0A1A2A] outline-none focus:ring-2 focus:ring-[#8ACDE0] transition-all ${
      errors[field] ? 'ring-2 ring-red-400' : ''
    }`;

  return (
    <div className="pt-20 min-h-screen bg-[#F0F8FA]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 py-12">
        {/* Header */}
        <h1 className="text-3xl lg:text-4xl font-bold text-[#0A1A2A] mb-2">Checkout</h1>
        <p className="text-[#0A1A2A]/50 mb-10">
          Complete your order. We only accept Cash on Delivery.
        </p>

        {/* Steps */}
        <div className="flex items-center gap-4 mb-12">
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              step === 'shipping'
                ? 'bg-[#0A1A2A] text-white'
                : 'bg-white text-[#0A1A2A]'
            }`}
          >
            <MapPin size={16} />
            Shipping
          </div>
          <ChevronRight size={16} className="text-[#0A1A2A]/20" />
          <div
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
              step === 'review'
                ? 'bg-[#0A1A2A] text-white'
                : 'bg-white text-[#0A1A2A]/40'
            }`}
          >
            <CreditCard size={16} />
            Review & Pay
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            {step === 'shipping' ? (
              <div className="bg-white rounded-2xl p-8">
                <h2 className="text-xl font-semibold text-[#0A1A2A] mb-6 flex items-center gap-2">
                  <MapPin size={20} className="text-[#8ACDE0]" />
                  Shipping Details
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={shipping.fullName}
                      onChange={(e) =>
                        setShipping({ ...shipping, fullName: e.target.value })
                      }
                      className={inputClass('fullName')}
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={shipping.email}
                        onChange={(e) =>
                          setShipping({ ...shipping, email: e.target.value })
                        }
                        className={inputClass('email')}
                        placeholder="Your Email"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={shipping.phone}
                        onChange={(e) =>
                          setShipping({ ...shipping, phone: e.target.value })
                        }
                        className={inputClass('phone')}
                        placeholder="Your contact number"
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      value={shipping.address}
                      onChange={(e) =>
                        setShipping({ ...shipping, address: e.target.value })
                      }
                      className={inputClass('address')}
                      placeholder="shipping address"
                    />
                    {errors.address && (
                      <p className="text-red-400 text-xs mt-1">{errors.address}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        value={shipping.city}
                        onChange={(e) =>
                          setShipping({ ...shipping, city: e.target.value })
                        }
                        className={inputClass('city')}
                        placeholder=""
                      />
                      {errors.city && (
                        <p className="text-red-400 text-xs mt-1">{errors.city}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                        Pincode *
                      </label>
                      <input
                        type="text"
                        value={shipping.pincode}
                        onChange={(e) =>
                          setShipping({ ...shipping, pincode: e.target.value })
                        }
                        className={inputClass('pincode')}
                        placeholder=""
                      />
                      {errors.pincode && (
                        <p className="text-red-400 text-xs mt-1">{errors.pincode}</p>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleProceed}
                  className="w-full mt-8 py-4 bg-[#0A1A2A] text-white rounded-full font-medium hover:scale-[1.01] hover:shadow-lg transition-all duration-300"
                >
                  Proceed to Review
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Shipping Summary */}
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-xl font-semibold text-[#0A1A2A] mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-[#8ACDE0]" />
                    Shipping Address
                  </h2>
                  <div className="text-[#0A1A2A]/70 space-y-1">
                    <p className="font-medium text-[#0A1A2A]">{shipping.fullName}</p>
                    <p>{shipping.address}</p>
                    <p>
                      {shipping.city}, {shipping.pincode}
                    </p>
                    <p>{shipping.phone}</p>
                    <p>{shipping.email}</p>
                  </div>
                  <button
                    onClick={() => setStep('shipping')}
                    className="mt-4 text-[#8ACDE0] text-sm hover:underline"
                  >
                    Edit
                  </button>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-xl font-semibold text-[#0A1A2A] mb-4 flex items-center gap-2">
                    <CreditCard size={20} className="text-[#8ACDE0]" />
                    Payment Method
                  </h2>
                  <div className="flex items-center gap-4 p-4 bg-[#F0F8FA] rounded-xl">
                    <div className="w-12 h-12 bg-[#D0F4F8] rounded-lg flex items-center justify-center">
                      <Truck size={20} className="text-[#0A1A2A]" />
                    </div>
                    <div>
                      <p className="text-[#0A1A2A] font-medium">Cash on Delivery</p>
                      <p className="text-[#0A1A2A]/50 text-sm">
                        Pay when your order arrives
                      </p>
                    </div>
                  </div>
                </div>

                {/* Place Order */}
                <button
                  onClick={handlePlaceOrder}
                  className="w-full py-4 bg-[#0A1A2A] text-white rounded-full font-medium hover:scale-[1.01] hover:shadow-lg transition-all duration-300 text-lg"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-[#0A1A2A] mb-6">
                Order Summary
              </h3>

              {/* Items */}
              <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-contain rounded-lg bg-[#F0F8FA]"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#0A1A2A] truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#0A1A2A]/40">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-medium text-[#0A1A2A]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t border-[#D0F4F8] pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#0A1A2A]/50">Subtotal</span>
                  <span className="text-[#0A1A2A]">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#0A1A2A]/50">Shipping</span>
                  <span className="text-green-500 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t border-[#D0F4F8] pt-3">
                  <span className="text-[#0A1A2A]">Total</span>
                  <span className="text-[#0A1A2A]">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Shipping badge */}
              <div className="mt-6 p-3 bg-[#F0F8FA] rounded-xl flex items-center gap-3">
                <Truck size={18} className="text-[#8ACDE0]" />
                <p className="text-xs text-[#0A1A2A]/50">
                  Free shipping on all orders
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
