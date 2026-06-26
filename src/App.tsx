import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ShopPage from '@/pages/ShopPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ContactPage from '@/pages/ContactPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ThankYouPage from '@/pages/ThankYouPage';
import PrivacyPage from '@/pages/PrivacyPage';
import TermPage from '@/pages/TermPage';
import ShippingPolicy from '@/pages/ShippingPolicy';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/term-condition" element={<TermPage />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/thankyou" element={<ThankYouPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}
