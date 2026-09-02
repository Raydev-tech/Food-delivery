import { MapPin, Clock } from "lucide-react";
import React from "react";

const restaurants = [
  {
    name: "Burger House",
    location: "New York",
    time: "20 mins",
  },
  {
    name: "Italian Pizza",
    location: "Chicago",
    time: "25 mins",
  },
  {
    name: "Chicken Spot",
    location: "Los Angeles",
    time: "18 mins",
  },
];

function FeaturedRestaurants() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="text-center text-4xl font-bold mb-14"
          data-aos="fade-up"
        >
          Featured Restaurants
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {restaurants.map((item, index) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-3xl border p-8 shadow-lg transition hover:-translate-y-3"
            >
              <h3 className="text-2xl font-bold">
                {item.name}
              </h3>

              <div className="mt-6 flex items-center gap-3">
                <MapPin className="text-green-600" />
                {item.location}
              </div>

              <div className="mt-3 flex items-center gap-3">
                <Clock className="text-green-600" />
                {item.time}
              </div>

              <button className="mt-8 rounded-full bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700">
                View Menu
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedRestaurants;