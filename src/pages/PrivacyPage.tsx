
export default function ShopCarousel() {
    return (
        <>
            <section
            className="relative py-24 lg:py-32 bg-cover bg-top bg-no-repeat"
            style={{
                backgroundImage: "url('/images/policy-hero.jpg')",
            }}
            >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2A]/90 via-[#0A1A2A]/70 to-[#0A1A2A]/80" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
                <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
                Legal
                </p>

                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
                Privacy Policy
                </h1>

                <p className="text-white/80 max-w-2xl text-lg">
                Learn how we collect, use, and protect your personal information when
                you shop with TrueDrop.
                </p>
            </div>
        </section>

        <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-14">

            <p className="text-sm text-gray-500 mb-10">
            Last Updated: June 2026
            </p>

            <div className="space-y-10">

            <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                Information We Collect
                </h2>

                <p className="text-gray-600 leading-8">
                We collect information that you voluntarily provide when placing an
                order, contacting us, or subscribing to our newsletter. This may
                include your name, email address, phone number, billing and
                shipping address, and payment information processed securely
                through our payment partners.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                How We Use Your Information
                </h2>

                <ul className="space-y-3 text-gray-600 list-disc pl-6">
                <li>Process and deliver your orders</li>
                <li>Provide customer support</li>
                <li>Send order updates</li>
                <li>Improve our products and website</li>
                <li>Prevent fraud and unauthorized transactions</li>
                </ul>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                Cookies
                </h2>

                <p className="text-gray-600 leading-8">
                Our website uses cookies to improve your browsing experience,
                remember preferences, and analyze website traffic.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-bold text-[#0A1A2A] mb-4">
                Contact Us
                </h2>

                <p className="text-gray-600 leading-8">
                If you have any questions regarding this Privacy Policy, please
                contact us through our Contact page.
                </p>
            </div>

            </div>

        </div>

        </div>
        </section>
        </>
    );

}