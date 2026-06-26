import { Link } from "react-router-dom";

export default function TermPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-24 lg:py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/policy-hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2A]/90 via-[#0A1A2A]/70 to-[#0A1A2A]/80"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
            Legal
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Terms & Conditions
          </h1>

          <p className="text-white/80 text-lg max-w-2xl">
            Please read these Terms & Conditions carefully before using our
            website or purchasing products from TrueDrop.
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
                  Acceptance of Terms
                </h2>

                <p className="text-gray-600 leading-8">
                  By accessing or using the TrueDrop website, you agree to be
                  bound by these Terms & Conditions. If you do not agree with
                  any part of these terms, please discontinue use of the
                  website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Website Use
                </h2>

                <p className="text-gray-600 leading-8">
                  You agree to use this website only for lawful purposes. You
                  may not misuse the website, attempt unauthorized access,
                  interfere with its operation, or engage in activities that
                  could harm other users or our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Products & Availability
                </h2>

                <p className="text-gray-600 leading-8">
                  We strive to ensure all product descriptions, pricing,
                  availability, and images are accurate. However, occasional
                  errors may occur. We reserve the right to update, modify, or
                  discontinue products at any time without prior notice.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Orders
                </h2>

                <p className="text-gray-600 leading-8">
                  All orders are subject to acceptance and product availability.
                  We reserve the right to refuse or cancel any order for any
                  reason, including suspected fraud, pricing errors, or product
                  availability. If payment has already been made, an appropriate
                  refund will be issued.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Pricing & Payments
                </h2>

                <p className="text-gray-600 leading-8">
                  Prices displayed on the website are subject to change without
                  notice. Payment must be successfully completed before an order
                  is processed and shipped. We use secure third-party payment
                  providers to process transactions.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Shipping & Delivery
                </h2>

                <p className="text-gray-600 leading-8">
                  Delivery estimates are provided for convenience only and are
                  not guaranteed. Delivery times may vary due to courier
                  services, weather conditions, customs processing, or other
                  circumstances beyond our control.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Returns & Refunds
                </h2>

                <p className="text-gray-600 leading-8">
                  Returns and refunds are handled in accordance with our Refund
                  Policy. Please review that policy before requesting a return
                  or exchange.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Intellectual Property
                </h2>

                <p className="text-gray-600 leading-8">
                  All content on this website, including logos, graphics,
                  product images, text, designs, and branding, is the property
                  of TrueDrop and is protected by applicable intellectual
                  property laws. Unauthorized reproduction or distribution is
                  prohibited.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Limitation of Liability
                </h2>

                <p className="text-gray-600 leading-8">
                  To the fullest extent permitted by law, TrueDrop shall not be
                  liable for any indirect, incidental, special, or consequential
                  damages arising from the use of our website or products.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Changes to These Terms
                </h2>

                <p className="text-gray-600 leading-8">
                  We reserve the right to update these Terms & Conditions at any
                  time. Changes become effective immediately upon publication on
                  this page. Continued use of the website constitutes acceptance
                  of the revised terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                  Contact Us
                </h2>

                <p className="text-gray-600 leading-8">
                  If you have any questions regarding these Terms & Conditions,
                  please contact our customer support team through our Contact
                  page.
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
            Need More Information?
          </h2>

          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            If you have questions about our terms, orders, shipping, or
            products, we're here to help.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#8ACDE0] text-[#0A1A2A] font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}