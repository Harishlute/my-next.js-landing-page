'use client';

import React, { useState } from 'react';
import { Rocket, Sparkles, Handshake, ChevronRight, Menu, Check, Mail } from 'lucide-react';

// Use a simple state-based router for a multi-page feel.
const pages = {
  home: 'home',
  features: 'features',
  pricing: 'pricing',
  contact: 'contact'
};

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const NavItem = ({ pageKey, label }) => (
    <a
      href="#"
      onClick={() => onNavigate(pageKey)}
      className={`relative px-4 py-2 transition-colors duration-300 rounded-full
      ${currentPage === pageKey ? 'text-white' : 'text-gray-300 hover:text-white'}`}
    >
      {label}
      {currentPage === pageKey && (
        <span className="absolute inset-0 z-0 rounded-full bg-indigo-500/50 blur-sm"></span>
      )}
    </a>
  );

  return (
    <header className="relative z-10 p-4 mx-auto max-w-7xl">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-2 text-2xl font-bold text-white">
          <Rocket className="text-indigo-400" size={32} />
          <span>Launchpad</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden space-x-6 md:flex">
          <NavItem pageKey={pages.home} label="Home" />
          <NavItem pageKey={pages.features} label="Features" />
          <NavItem pageKey={pages.pricing} label="Pricing" />
          <NavItem pageKey={pages.contact} label="Contact" />
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <Menu />
          </button>
        </div>
      </nav>
      
      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="absolute right-0 w-48 py-2 mt-2 origin-top-right bg-gray-800 rounded-md shadow-lg md:hidden">
          <NavItem pageKey={pages.home} label="Home" />
          <NavItem pageKey={pages.features} label="Features" />
          <NavItem pageKey={pages.pricing} label="Pricing" />
          <NavItem pageKey={pages.contact} label="Contact" />
        </div>
      )}
    </header>
  );
};

const HeroSection = () => {
  return (
    <div className="relative pt-12 pb-24 text-center text-white md:pt-24 md:pb-36">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-purple-900 opacity-50"></div>
        <svg
          className="absolute inset-0 w-full h-full text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <g fill="currentColor">
            <rect width="100" height="100" rx="100" />
            <path d="M0,50 C20,20 80,20 100,50 L100,100 L0,100 Z" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 px-4 mx-auto max-w-7xl">
        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
          The <span className="text-indigo-400">Next Generation</span> of Web Solutions.
        </h1>
        <p className="max-w-xl mx-auto mt-4 text-lg text-gray-300 md:text-xl">
          Build and deploy powerful, scalable web applications with ease. Our platform provides everything you need to go from idea to launch.
        </p>
        <div className="flex flex-col items-center justify-center mt-8 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#" className="flex items-center px-8 py-4 text-lg font-medium text-white transition-transform duration-300 transform bg-indigo-600 rounded-full hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300">
            Get Started
            <ChevronRight size={20} className="ml-2" />
          </a>
          <a href="#" className="flex items-center px-8 py-4 text-lg font-medium text-white transition-transform duration-300 transform bg-transparent rounded-full hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-600">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 transition-transform duration-300 transform bg-white border border-gray-200 rounded-2xl shadow-xl hover:scale-105">
    <div className="p-4 mb-4 text-white bg-indigo-500 rounded-full w-fit">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
          Designed for Scale and Speed
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600">
          Our platform is built to handle the most demanding applications with blazing-fast performance and an intuitive developer experience.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          <FeatureCard
            icon={<Rocket size={32} />}
            title="Blazing Fast Performance"
            description="Leverage server-side rendering and static site generation to deliver lightning-fast websites and applications."
          />
          <FeatureCard
            icon={<Sparkles size={32} />}
            title="Developer-Friendly"
            description="Start building immediately with a zero-config setup. Our tooling helps you focus on what matters most: your code."
          />
          <FeatureCard
            icon={<Handshake size={32} />}
            title="Scalable & Reliable"
            description="Our architecture is built for infinite scalability, ensuring your application grows seamlessly with your user base."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "This platform has revolutionized our workflow. The performance gains were immediate and our team is loving the developer experience.",
      author: "Jane Doe, CTO at TechCorp"
    },
    {
      text: "We were able to launch our new product 50% faster than planned, thanks to this amazing tool. Highly recommended!",
      author: "John Smith, Founder of Innovate Co."
    },
    {
      text: "The support team is incredible. They helped us solve a complex issue within minutes. A truly game-changing service.",
      author: "Sarah Lee, Lead Developer at Creative Minds"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
          What Our Users Say
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600">
          Trusted by thousands of developers and companies worldwide.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 transition-transform duration-300 transform bg-white border border-gray-200 rounded-2xl shadow-xl hover:scale-105">
              <p className="text-lg font-medium text-gray-700">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="mt-4 font-bold text-indigo-600">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ title, price, features, isPopular }) => (
  <div className={`flex flex-col p-8 transition-transform duration-300 transform border border-gray-200 rounded-2xl shadow-xl ${isPopular ? 'bg-indigo-600 text-white' : 'bg-white text-gray-900'} hover:scale-105`}>
    {isPopular && (
      <div className="self-start px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase bg-purple-500 rounded-full">
        Most Popular
      </div>
    )}
    <h3 className="mt-4 text-2xl font-bold">{title}</h3>
    <p className="mt-2 text-4xl font-extrabold">
      {price}
      <span className={`text-xl font-medium ${isPopular ? 'text-indigo-200' : 'text-gray-500'}`}>/month</span>
    </p>
    <ul className="flex-1 mt-6 space-y-4">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check size={20} className={`mr-2 flex-shrink-0 ${isPopular ? 'text-white' : 'text-indigo-500'}`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <a href="#" className={`block w-full px-4 py-3 mt-8 font-semibold text-center rounded-full transition-colors ${isPopular ? 'bg-white text-indigo-600 hover:bg-indigo-100' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
      Choose Plan
    </a>
  </div>
);

const PricingSection = () => {
  const plans = [
    {
      title: "Basic",
      price: "$29",
      features: ["10 Projects", "2GB Storage", "Basic Analytics", "Community Support"]
    },
    {
      title: "Pro",
      price: "$59",
      features: ["Unlimited Projects", "10GB Storage", "Advanced Analytics", "Dedicated Support"],
      isPopular: true
    },
    {
      title: "Enterprise",
      price: "$129",
      features: ["All Pro features", "Custom Integrations", "24/7 Priority Support", "White-glove Service"]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
          Pricing
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-center text-gray-600">
          Find the perfect plan for your needs.
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="px-4 mx-auto max-w-3xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 md:text-5xl">
          Get in Touch
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-lg text-center text-gray-600">
          Have a question or a project in mind? We&apos;d love to hear from you.
        </p>
        <div className="p-8 mt-12 bg-white border border-gray-200 rounded-2xl shadow-xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
            </div>
            <button type="submit" className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300">
              <Mail size={20} className="mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <Rocket className="text-indigo-400" size={24} />
            <span>Launchpad</span>
          </div>
          <p className="text-sm text-gray-400">&copy; 2024 Launchpad. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState(pages.home);

  const renderPage = () => {
    switch (currentPage) {
      case pages.home:
      default:
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            <TestimonialsSection />
          </>
        );
      case pages.features:
        return <FeaturesSection />;
      case pages.pricing:
        return <PricingSection />;
      case pages.contact:
        return <ContactSection />;
    }
  };

  return (
    <div className="relative font-sans antialiased text-gray-800 bg-white min-h-screen">
      <div className="relative overflow-hidden">
        <Header currentPage={currentPage} onNavigate={setCurrentPage} />
        <main>{renderPage()}</main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
