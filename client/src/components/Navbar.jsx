import React from "react";
import { Menu, ShoppingCart } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <a href="#" className="text-3xl font-extrabold text-green-600">
          Foodie
        </a>

        <nav className="hidden gap-8 md:flex">
          <a href="#home" className="hover:text-green-600 transition">Home</a>
          <a href="#categories" className="hover:text-green-600 transition">Categories</a>
          <a href="#foods" className="hover:text-green-600 transition">Foods</a>
          <a href="#about" className="hover:text-green-600 transition">About</a>
          <a href="#contact" className="hover:text-green-600 transition">Contact</a>
        </nav>

        <div className="flex items-center gap-4">

          <button className="relative">
            <ShoppingCart size={25} />
            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              2
            </span>
          </button>

          <button className="rounded-full bg-green-600 px-5 py-2 font-semibold text-white hover:bg-green-700">
            Order Now
          </button>

          <button className="md:hidden">
            <Menu size={28} />
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;