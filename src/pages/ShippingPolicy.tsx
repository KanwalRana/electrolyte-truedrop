import { Link } from "react-router-dom";

export default function ShippingPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-24 lg:py-32 bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: "url('/images/policy-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2A]/90 via-[#0A1A2A]/70 to-[#0A1A2A]/80"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
            Customer Support
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Shipping Policy
          </h1>

          <p className="text-white/80 text-lg max-w-2xl">
            Everything you need to know about processing times, shipping
            methods, delivery estimates, and tracking your TrueDrop order.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-14">

            <p className="text-sm text-gray-500 mb-12">
              Last Updated: June 2026
            </p>

            <div className="space-y-12">

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Order Processing
                </h2>

                <p className="text-gray-600 leading-8">
                  Orders are typically processed within 1–2 business days after
                  payment has been successfully received. Orders placed on
                  weekends or public holidays will be processed on the next
                  business day.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Shipping Methods
                </h2>

                <p className="text-gray-600 leading-8">
                  We offer Standard and Express shipping options where
                  available. Available delivery methods and costs will be
                  displayed during checkout based on your shipping address.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Estimated Delivery Time
                </h2>

                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Standard Shipping: 3–7 business days</li>
                  <li>Express Shipping: 1–3 business days</li>
                  <li>International Shipping: Delivery times vary by country.</li>
                </ul>

                <p className="text-gray-600 leading-8 mt-4">
                  Delivery estimates are provided for convenience and may vary
                  depending on your location and the selected shipping method.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Shipping Costs
                </h2>

                <p className="text-gray-600 leading-8">
                  Shipping fees are calculated during checkout based on your
                  delivery location and chosen shipping option. Promotional
                  offers such as free shipping may be available on qualifying
                  orders.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Order Tracking
                </h2>

                <p className="text-gray-600 leading-8">
                  Once your order has been shipped, you'll receive a
                  confirmation email containing your tracking number and carrier
                  details so you can monitor your delivery status.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Delivery Delays
                </h2>

                <p className="text-gray-600 leading-8">
                  While we strive to deliver every order on time, delays may
                  occasionally occur due to weather conditions, customs
                  clearance, courier issues, or other circumstances beyond our
                  control.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Incorrect Shipping Information
                </h2>

                <p className="text-gray-600 leading-8">
                  Customers are responsible for providing accurate shipping
                  information. Orders shipped to incorrect addresses provided by
                  the customer may incur additional shipping charges or be
                  delayed.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Lost or Damaged Packages
                </h2>

                <p className="text-gray-600 leading-8">
                  If your package is lost, delayed beyond the expected delivery
                  window, or arrives damaged, please contact our support team
                  within 7 days of the expected delivery date. We will work with
                  the shipping carrier to resolve the issue as quickly as
                  possible.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  International Shipping
                </h2>

                <p className="text-gray-600 leading-8">
                  International orders may be subject to customs duties, taxes,
                  or import fees imposed by the destination country. These
                  charges are the responsibility of the customer and are not
                  included in the purchase price unless otherwise stated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Need Assistance?
                </h2>

                <p className="text-gray-600 leading-8">
                  If you have any questions regarding shipping, delivery,
                  tracking, or your order status, our customer support team is
                  happy to help.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1A2A] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have a Shipping Question?
          </h2>

          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Whether you need help tracking an order, estimating delivery times,
            or understanding our shipping options, we're here to help.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#8ACDE0] text-[#0A1A2A] font-semibold hover:opacity-90 transition"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </>
  );
}