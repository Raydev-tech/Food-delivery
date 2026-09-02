import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-green-500">
            Foodie
          </h2>
          <p className="mt-4 text-sm leading-6 text-gray-400">
            Bringing delicious meals straight to your doorstep. Fresh,
            affordable, and delivered with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-green-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#categories" className="hover:text-green-500 transition">
                Categories
              </a>
            </li>
            <li>
              <a href="#foods" className="hover:text-green-500 transition">
                Foods
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Contact
          </h3>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-green-500" />
              <span>Lagos, Nigeria</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-green-500" />
              <span>+234 800 123 4567</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-green-500" />
              <span>support@foodie.com</span>
            </div>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="rounded-full bg-gray-800 p-3 transition hover:bg-green-600"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Foodie. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;