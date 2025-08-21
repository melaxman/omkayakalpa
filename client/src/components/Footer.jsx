import React from 'react';
import { Link } from 'react-router-dom';
import {
  // Facebook,
  Instagram,
  // Twitter,
  // Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

// ✅ Custom TikTok icon component
const TikTokIcon = ({ color = 'currentColor', size = 20, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
    width={size}
    height={size}
    viewBox="0 0 50 50"
    className={className}
  >
    <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z
      M37.006,22.323c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388
      c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527s-8.527-3.818-8.527-8.527
      s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202
      c-0.175-0.021-0.347-0.053-0.527-0.053c-2.404,0-4.352,1.948-4.352,4.352
      s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298
      c0-0.095,0.042-19.594,0.042-19.594h4.016
      c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"
    />
  </svg>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* ✅ Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-64">
        {/* Left Side */}
        <div>
          <Link to="/" className="flex items-center space-x-2 mb-4">
            <span className="text-xl font-bold">Om Kaya Kalpa</span>
          </Link>
          <p className="text-gray-400 mb-4">
            Transforming lives through the ancient wisdom of yoga. Join our community of wellness seekers.
          </p>
          <div className="flex space-x-4">
            {/* Instagram (✅ updated link) */}
            <a
              href="https://www.instagram.com/__kaya_kalpa_wellness_center__?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            {/* TikTok (✅ new) */}
            <a
              href="https://www.tiktok.com/@kaya_kapla_wellness?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-400 transition-colors"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            {/* Commented out old socials */}
            {/*
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            */}
          </div>
        </div>

        {/* Right Side */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-green-400" />
              <span className="text-gray-400">+977 9851078466, +977 9818521447</span>
            </li>
            {/* <li className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-green-400" />
              <span className="text-gray-400">+977 9818521447</span>
            </li> */}
            <li className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-green-400" />
              <span className="text-gray-400">contact@kayakalpa.com</span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-green-400 mt-1" />
              <span className="text-gray-400">
                Budhanilkantha, Kathmandu<br />
                Nepal
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center">
        <p className="text-gray-400">
          © 2024 Kaya Kalpa. All rights reserved. Made with ❤️ for wellness seekers.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
