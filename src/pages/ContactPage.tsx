import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@truedrop.com' },
    { icon: Phone, label: 'Phone', value: '+1 (800) 555-0199' },
    { icon: MapPin, label: 'Address', value: '123 Glacier Ave, Suite 100, Denver, CO 80202' },
    { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 6PM MST' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
       className="relative py-16 lg:py-24 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: "url('/images/contact-hero.jpg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2A]/90 via-[#0A1A2A]/65 to-[#0A1A2A]/80"></div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
          <p className="text-[#8ACDE0] text-sm font-semibold uppercase tracking-wider mb-3">
            Get in Touch
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>

          <p className="text-white/80 max-w-lg">
            Have questions about our products, shipping, or just want to say hi?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0A1A2A] mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 bg-[#D0F4F8] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-[#0A1A2A]" />
                    </div>
                    <div>
                      <p className="text-[#0A1A2A] font-medium text-sm">{item.label}</p>
                      <p className="text-[#0A1A2A]/50 text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ teaser */}
              <div className="mt-12 p-6 bg-[#F0F8FA] rounded-2xl">
                <h3 className="text-[#0A1A2A] font-semibold mb-3">Frequently Asked</h3>
                <ul className="space-y-2 text-sm text-[#0A1A2A]/60">
                  <li>How long does shipping take?</li>
                  <li>What is your return policy?</li>
                  <li>Do you ship internationally?</li>
                  <li>Are your bottles recyclable?</li>
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-[#F0F8FA] rounded-2xl p-12 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#0A1A2A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#0A1A2A]/50">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F0F8FA] rounded-xl text-[#0A1A2A] outline-none focus:ring-2 focus:ring-[#8ACDE0] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#F0F8FA] rounded-xl text-[#0A1A2A] outline-none focus:ring-2 focus:ring-[#8ACDE0] transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F0F8FA] rounded-xl text-[#0A1A2A] outline-none focus:ring-2 focus:ring-[#8ACDE0] transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#0A1A2A]/60 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F0F8FA] rounded-xl text-[#0A1A2A] outline-none focus:ring-2 focus:ring-[#8ACDE0] transition-all resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1A2A] text-white rounded-full font-medium hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
