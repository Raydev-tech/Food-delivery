import React from "react";
import hero from "../assets/hero.jpg";
import { ArrowRight, Star, Clock } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-black"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(0,0,0,.55),
              rgba(0,0,0,.55)
            ),
            url(${hero})
          `,
        }}
      />

      {/* Content */}
      <div className="relative flex w-full items-center px-4 pt-32 md:px-8 lg:px-12">
        <div
          data-aos="fade-right"
          className="max-w-3xl"
        >
          <span className="mb-5 inline-flex items-center rounded-full bg-green-500/20 px-5 py-2 font-semibold text-green-300">
            <Star className="mr-2" size={18} />
            #1 Food Delivery
          </span>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Delicious Food
            <br />
            Delivered To
            <span className="text-green-400"> Your Door</span>
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-200">
            Fresh meals from your favorite restaurants delivered in less than
            30 minutes.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row">
            <button className="rounded-full bg-green-600 px-8 py-4 font-bold text-white transition hover:scale-105 hover:bg-green-700">
              Order Now
            </button>

            <button className="flex items-center justify-center gap-2 rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
              Explore Menu
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-10 text-white">
            <div>
              <h2 className="text-4xl font-black">15K+</h2>
              <p>Happy Customers</p>
            </div>

            <div>
              <h2 className="text-4xl font-black">250+</h2>
              <p>Restaurants</p>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="text-green-400" />
              <div>
                <h2 className="font-bold">30 Minutes</h2>
                <p>Average Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;