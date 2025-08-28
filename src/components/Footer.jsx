import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-50 py-10 sm:py-14 md:py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-12 lg:gap-14 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">

        {/* Company Info */}
        <div className="lg:col-span-1 flex flex-col items-start pb-8 sm:pb-0 sm:pr-8">
          <div className="flex items-center mb-6">
            <img
              src="/logo.jpg"
              alt="Pro-Radiant Cleaners Logo"
              loading="lazy"
              className="h-20 sm:h-24 md:h-28 w-auto object-contain"
            />
          </div>
          <p className="text-gray-600 mb-4 leading-relaxed text-base">
            Pro-Radiant Cleaners delivers reliable, high-quality cleaning
            services tailored to meet your commercial and industrial needs.
          </p>

          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-2 text-lg">
              Business Hours
            </h4>
            <p className="text-gray-600 text-base">
              Office hours weekdays: 09:00 – 18:00
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-bold text-gray-800 mb-2 text-lg">Contact us</h4>
            <div className="space-y-1 text-gray-600 text-base">
              <p>01753 428151</p>
              <p>sales@proradiantcleaners.co.uk</p>
              <p>Futureworks, 2 Brunel Way., Slough</p>
              <p>SL1 1XL, United Kingdom</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="pt-8 sm:pt-0 sm:px-8 pb-8 sm:pb-0">
          <h4 className="font-bold text-blue-600 mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/location"
                className="hover:text-blue-600 transition-colors"
              >
                Areas We Cover
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="hover:text-blue-600 transition-colors"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-blue-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Area We Cover */}
          <div className="mt-8">
            <h4 className="font-bold text-blue-600 mb-4 text-lg">
              Area We Cover
            </h4>
            <ul className="space-y-2 text-gray-700 text-base">
              <li>Bedfordshire</li>
              <li>Berkshire</li>
              <li>Buckinghamshire</li>
              <li>West London</li>
              <li>Hampshire</li>
              <li>Hertfordshire</li>
              <li>Oxfordshire</li>
              <li>Surrey</li>
            </ul>
          </div>
        </div>

        {/* Services */}
        <div className="pt-8 sm:pt-0 sm:px-8 pb-8 sm:pb-0">
          <h4 className="font-bold text-blue-600 mb-6 text-lg">Services</h4>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>
              <Link
                to="/services/construction-cleaning"
                className="hover:text-blue-600 transition-colors"
              >
                Construction Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/services/commercial-cleaning"
                className="hover:text-blue-600 transition-colors"
              >
                Commercial Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/services/property-cleaning"
                className="hover:text-blue-600 transition-colors"
              >
                Property Management Cleaning
              </Link>
            </li>
            <li>
              <Link
                to="/services/disinfection-cleaning"
                className="hover:text-blue-600 transition-colors"
              >
                Disinfection & Decontamination
              </Link>
            </li>
            <li>
              <Link
                to="/services/specialist-cleaning"
                className="hover:text-blue-600 transition-colors"
              >
                Specialist Cleaning
              </Link>
            </li>
          </ul>
        </div>

        {/* About Company */}
        <div className="pt-8 sm:pt-0 sm:px-8 pb-8 sm:pb-0">
          <h4 className="font-bold text-blue-600 mb-6 text-lg">About Company</h4>
          <ul className="space-y-3 text-gray-700 text-base">
            <li>
              <Link
                to="/terms"
                className="hover:text-blue-600 transition-colors"
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-600 transition-colors"
              >
                Privacy/GDPR Policy
              </Link>
            </li>
            <li>
              <Link
                to="/health-safety"
                className="hover:text-blue-600 transition-colors"
              >
                Health and Safety
              </Link>
            </li>
            <li>
              <Link
                to="/quality-control"
                className="hover:text-blue-600 transition-colors"
              >
                Quality Control
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-blue-600 transition-colors"
              >
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="pt-8 sm:pt-0 sm:pl-8 flex justify-center">
          <div className="relative w-full flex justify-center items-center">
            <img
              src="/map.png"
              alt="Map of UK"
              loading="lazy"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <hr className="border-t-2 border-gray-400 mt-8" />
    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-0 mt-4 px-4 text-base text-gray-700">
      <p>©2025 Pro-Radiant Cleaners Ltd. All Rights Reserved.</p>
      <div className="flex gap-6">
        <Link to="/terms" className="hover:text-blue-600 transition-colors">
          Terms & Conditions
        </Link>
        <Link to="/privacy" className="hover:text-blue-600 transition-colors">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
