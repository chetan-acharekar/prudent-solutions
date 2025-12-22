import React, { useState } from 'react';
import { Shield, CheckCircle, Mail, Phone, MapPin, Menu, X, ArrowRight } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { title: "Commercial Insurance", desc: "Tailored protection for businesses, covering liabilities and assets." },
    { title: "Employee Benefits", desc: "Comprehensive health and wellness packages to retain top talent." },
    { title: "Life & Health", desc: "Personalized plans ensuring security for individuals and families." },
    { title: "Claims Management", desc: "Expert guidance to ensure swift and fair claim settlements." }
  ];

  return (
    <div className="font-sans text-slate-800 bg-white">
      {/* HEADER */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Shield className="text-blue-700 w-8 h-8" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">PRUDENT SOLUTIONS</span>
          </div>
          
          <div className="hidden md:flex gap-8 font-medium">
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-700 transition">
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Protecting Your <span className="text-blue-700">Future</span> Today.
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Prudent Solutions provides world-class insurance brokerage and risk management. 
              We empower you with the confidence to grow in an uncertain world.
            </p>
            <div className="flex gap-4">
              <a href="#contact" className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
                Get a Quote
              </a>
              <a href="#services" className="border border-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
                Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 bg-blue-100 h-64 md:h-96 w-full rounded-2xl flex items-center justify-center">
            <Shield className="w-32 h-32 text-blue-300" />
          </div>
        </div>
      </section>

      {/* ABOUT ME / COMPANY */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Who We Are</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center text-left">
            <p className="text-slate-600 leading-relaxed">
              Founded on the principles of transparency and integrity, Prudent Solutions has grown into a leading 
              insurance advisor. We don't just sell policies; we build relationships. Our team of experts 
              analyzes your specific risk profile to deliver bespoke solutions that safeguard your assets and people.
            </p>
            <div className="space-y-4">
              {["Independent & Partner Focused", "Total Transparency", "Data-Driven Risk Analysis"].map(text => (
                <div key={text} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500" />
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <div key={i} className="p-8 bg-slate-800 rounded-xl hover:border-blue-500 border border-transparent transition cursor-default">
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-slate-400 text-sm mb-6">{s.desc}</p>
                <ArrowRight className="text-blue-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-blue-50 rounded-3xl p-12 flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Let's Secure Your Business</h2>
              <p className="mb-8 text-slate-600">Have questions? Reach out to our consultants today for a free assessment.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Phone className="text-blue-700" /> <span>+1 (555) 000-PRUDENT</span></div>
                <div className="flex items-center gap-4"><Mail className="text-blue-700" /> <span>contact@prudentsolutions.com</span></div>
                <div className="flex items-center gap-4"><MapPin className="text-blue-700" /> <span>Financial District, Suite 400</span></div>
              </div>
            </div>
            <form className="md:w-1/2 space-y-4 bg-white p-8 rounded-xl shadow-sm">
              <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <input type="email" placeholder="Email Address" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              <textarea placeholder="How can we help?" className="w-full p-3 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold hover:bg-blue-800">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t text-center text-slate-500">
        <p>© 2025 Prudent Solutions Insurance. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
