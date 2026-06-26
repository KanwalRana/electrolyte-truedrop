import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Calendar, DollarSign, ShoppingBag, Home } from 'lucide-react';

interface OrderData {
  orderNumber: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
    flavor: string;
  }>;
  total: number;
  shipping: {
    fullName: string;
    address: string;
    city: string;
    pincode: string;
    phone: string;
    email: string;
  };
  date: string;
}

export default function ThankYouPage() {
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('lastOrder');
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  if (!order) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A1A2A] mb-4">No Order Found</h1>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A1A2A] text-white rounded-full font-medium"
          >
            <ShoppingBag size={18} />
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const orderDate = new Date(order.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="pt-20 min-h-screen bg-[#F0F8FA]">
      <div className="max-w-[800px] mx-auto px-6 lg:px-12 py-12">
        {/* Success Header */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-[#0A1A2A] mb-3">
            Order Placed Successfully!
          </h1>
          <p className="text-[#0A1A2A]/50 max-w-md mx-auto mb-2">
            Thank you for your order. We've sent a confirmation to your email.
          </p>
          <p className="text-[#8ACDE0] font-semibold text-lg">
            Order #{order.orderNumber}
          </p>
        </div>

        {/* Order Details */}
        <div className="bg-white rounded-2xl p-8 mb-6">
          <h2 className="text-lg font-semibold text-[#0A1A2A] mb-6">
            Order Details
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-[#F0F8FA] rounded-xl">
              <Calendar size={18} className="text-[#8ACDE0]" />
              <div>
                <p className="text-xs text-[#0A1A2A]/40">Order Date</p>
                <p className="text-sm font-medium text-[#0A1A2A]">{orderDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#F0F8FA] rounded-xl">
              <DollarSign size={18} className="text-[#8ACDE0]" />
              <div>
                <p className="text-xs text-[#0A1A2A]/40">Total Amount</p>
                <p className="text-sm font-medium text-[#0A1A2A]">
                  ${order.total.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#F0F8FA] rounded-xl">
              <Package size={18} className="text-[#8ACDE0]" />
              <div>
                <p className="text-xs text-[#0A1A2A]/40">Payment</p>
                <p className="text-sm font-medium text-[#0A1A2A]">Cash on Delivery</p>
              </div>
            </div>
          </div>

          {/* Items */}
          <h3 className="text-sm font-semibold text-[#0A1A2A] mb-4">Items Ordered</h3>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 bg-[#F0F8FA] rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded-lg bg-white"
                />
                <div className="flex-1">
                  <p className="font-medium text-[#0A1A2A]">{item.name}</p>
                  <p className="text-sm text-[#0A1A2A]/40">
                    {item.flavor} x {item.quantity}
                  </p>
                </div>
                <p className="font-semibold text-[#0A1A2A]">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* Shipping Address */}
          <h3 className="text-sm font-semibold text-[#0A1A2A] mt-8 mb-4">
            Shipping Address
          </h3>
          <div className="p-4 bg-[#F0F8FA] rounded-xl">
            <p className="font-medium text-[#0A1A2A]">{order.shipping.fullName}</p>
            <p className="text-sm text-[#0A1A2A]/60">{order.shipping.address}</p>
            <p className="text-sm text-[#0A1A2A]/60">
              {order.shipping.city}, {order.shipping.pincode}
            </p>
            <p className="text-sm text-[#0A1A2A]/60">{order.shipping.phone}</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/shop"
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0A1A2A] text-white rounded-full font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
          >
            <ShoppingBag size={18} />
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A1A2A] rounded-full font-medium hover:bg-[#D0F4F8] transition-all duration-300"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
