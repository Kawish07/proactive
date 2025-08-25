import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white py-16">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        
        {/* Company Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded mr-3"></div>
            <div>
              <img src="/footerlogo.png" alt="Proactive Cleaners Logo" loading="lazy" />
            </div>
          </div>
          <p className="text-gray-600 mb-6 text-sm leading-relaxed">
            Proactive Cleaners delivers reliable, high-quality cleaning services tailored to meet your commercial and industrial needs.
          </p>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Business Hours</h4>
            <p className="text-gray-600 text-sm">Office hours weekdays: 09:00 – 18:00</p>
          </div>
          
          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-3">Contact us</h4>
            <div className="space-y-1 text-sm text-gray-600">
              <p>01753 428151</p>
              <p>sales@proactivecleaners.co.uk</p>
              <p>Futureworks, 2 Brunel Way., Slough</p>
              <p>SL1 1XL, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
            <li><Link to="/location" className="hover:text-blue-600 transition-colors">Areas We Cover</Link></li>
            <li><Link to="/testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link></li>
            <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">Services</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/services/construction-cleaning" className="hover:text-blue-600 transition-colors">Construction Cleaning</Link></li>
            <li><Link to="/services/commercial-cleaning" className="hover:text-blue-600 transition-colors">Commercial Cleaning</Link></li>
            <li><Link to="/services/property-cleaning" className="hover:text-blue-600 transition-colors">Property Management Cleaning</Link></li>
            <li><Link to="/services/disinfection-cleaning" className="hover:text-blue-600 transition-colors">Disinfection & Decontamination</Link></li>
            <li><Link to="/services/specialist-cleaning" className="hover:text-blue-600 transition-colors">Specialist Cleaning</Link></li>
          </ul>
        </div>

        {/* About Company */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">About Company</h4>
          <ul className="space-y-3 text-gray-700">
            <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms and Conditions</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy/GDPR Policy</Link></li>
            <li><Link to="/health-safety" className="hover:text-blue-600 transition-colors">Health and Safety</Link></li>
            <li><Link to="/quality-control" className="hover:text-blue-600 transition-colors">Quality Control</Link></li>
            <li><Link to="/faqs" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
          </ul>
        </div>

        {/* Area We Cover with Map */}
        <div>
          <h4 className="font-bold text-blue-600 text-lg mb-6">Area We Cover</h4>
          <ul className="space-y-3 text-gray-700 mb-6">
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
          <div className="relative">
            <img src="/map.png" alt="Map of UK" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;