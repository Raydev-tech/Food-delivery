import React from "react";
import hero from "../assets/hero.jpg";
import { ArrowRight, Star, Clock, Users, Utensils } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,.65),
              rgba(0,0,0,.55)
            ),
            url(${hero})
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-9 pt-28 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-green-400/40 bg-white/10 px-5 py-2 text-sm font-semibold text-green-300 backdrop-blur-md">
            <Star size={16} className="mr-2 fill-green-400 text-green-400" />
            Best Food Delivery in Town
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Fresh &
            <span className="text-green-400"> Delicious</span>
            <br />
            Food Delivered
            <br />
            To Your Doorstep
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Order your favorite meals from top restaurants near you.
            Fast delivery, fresh ingredients, and unforgettable taste—
            all within 30 minutes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700">
              Order Now
            </button>

            <button className="flex items-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-black">
              Explore Menu
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-3">
            {/* Customers */}
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
              <Users className="mb-3 text-green-400" size={30} />
              <h2 className="text-3xl font-bold text-white">15K+</h2>
              <p className="text-gray-300">Happy Customers</p>
            </div>

            {/* Restaurants */}
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
              <Utensils className="mb-3 text-green-400" size={30} />
              <h2 className="text-3xl font-bold text-white">250+</h2>
              <p className="text-gray-300">Restaurants</p>
            </div>

            {/* Delivery */}
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-md">
              <Clock className="mb-3 text-green-400" size={30} />
              <h2 className="text-3xl font-bold text-white">30 Min</h2>
              <p className="text-gray-300">Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;