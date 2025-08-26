import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white py-10 sm:py-14 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
        {/* Company Info */}
        <div className="lg:col-span-1 flex flex-col items-start">
          <div className="flex items-center mb-4 sm:mb-6">
            <img src="/logo.png" alt="Proactive Cleaners Logo" loading="lazy" className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" />
          </div>
          <p className="text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed">
            Proactive Cleaners delivers reliable, high-quality cleaning services tailored to meet your commercial and industrial needs.
          </p>
          
          <div className="mb-4 sm:mb-6">
            <h4 className="font-bold text-gray-800 mb-2 sm:mb-3">Business Hours</h4>
            <p className="text-gray-600 text-xs sm:text-sm">Office hours weekdays: 09:00 – 18:00</p>
          </div>
          
          <div className="mb-4 sm:mb-6">
            <h4 className="font-bold text-gray-800 mb-2 sm:mb-3">Contact us</h4>
            <div className="space-y-1 text-xs sm:text-sm text-gray-600">
              <p>01753 428151</p>
              <p>sales@proactivecleaners.co.uk</p>
              <p>Futureworks, 2 Brunel Way., Slough</p>
              <p>SL1 1XL, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-blue-600 text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="/location" className="hover:text-blue-600 transition-colors">Areas We Cover</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-blue-600 text-base sm:text-lg mb-4 sm:mb-6">Services</h4>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
            <li><Link to="/services/construction-cleaning" className="hover:text-blue-600 transition-colors">Construction Cleaning</Link></li>
            <li><Link to="/services/commercial-cleaning" className="hover:text-blue-600 transition-colors">Commercial Cleaning</Link></li>
            <li><Link to="/services/property-cleaning" className="hover:text-blue-600 transition-colors">Property Management Cleaning</Link></li>
            <li><Link to="/services/disinfection-cleaning" className="hover:text-blue-600 transition-colors">Disinfection & Decontamination</Link></li>
            <li><Link to="/services/specialist-cleaning" className="hover:text-blue-600 transition-colors">Specialist Cleaning</Link></li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="font-bold text-blue-600 text-base sm:text-lg mb-4 sm:mb-6">About Company</h4>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
            <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy/GDPR Policy</Link></li>
            <li><Link to="/health-safety" className="hover:text-blue-600 transition-colors">Health and Safety</Link></li>
            <li><Link to="/quality-control" className="hover:text-blue-600 transition-colors">Quality Control</Link></li>
            <li><Link to="/faqs" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Area We Cover with Map */}
        <div>
          <h4 className="font-bold text-blue-600 text-base sm:text-lg mb-4 sm:mb-6">Area We Cover</h4>
          <ul className="space-y-2 sm:space-y-3 text-gray-700 mb-4 sm:mb-6 text-xs sm:text-sm">
            <li>Bedfordshire</li>
            <li>Berkshire</li>
            <li>Buckinghamshire</li>
            <li>West London</li>
            <li>Hampshire</li>
            <li>Hertfordshire</li>
            <li>Oxfordshire</li>
            <li>Surrey</li>
          </ul>
          
          {/* UK Map */}
          <div className="relative w-full flex justify-center items-center">
            <img src="/map.png" alt="Map of UK" loading="lazy" className="w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] h-auto object-contain" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;