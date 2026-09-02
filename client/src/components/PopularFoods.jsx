import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import chicken from "../assets/chicken.jpg";
import React from "react";

import { Star } from "lucide-react";

const foods = [
  {
    image: pizza,
    name: "Pepperoni Pizza",
    price: "$15",
  },
  {
    image: burger,
    name: "Beef Burger",
    price: "$12",
  },
  {
    image: chicken,
    name: "Fried Chicken",
    price: "$18",
  },
];

function PopularFoods() {
  return (
    <section id="foods" className="bg-gray-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <h2
          data-aos="fade-up"
          className="mb-16 text-center text-4xl font-bold"
        >
          Popular Foods
        </h2>

        <div className="grid gap-8 lg:grid-cols-3">

          {foods.map((food, index) => (
            <div
              key={food.name}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="overflow-hidden rounded-3xl bg-white shadow-xl transition hover:-translate-y-4"
            >
              <img
                src={food.image}
                className="h-72 w-full object-cover"
                alt={food.name}
              />

              <div className="p-6">

                <div className="mb-4 flex items-center justify-between">

                  <h3 className="text-2xl font-bold">
                    {food.name}
                  </h3>

                  <span className="text-2xl font-bold text-green-600">
                    {food.price}
                  </span>

                </div>

                <div className="mb-6 flex text-yellow-500">

                  <Star fill="currentColor" />

                  <Star fill="currentColor" />

                  <Star fill="currentColor" />

                  <Star fill="currentColor" />

                  <Star fill="currentColor" />

                </div>

                <button className="w-full rounded-full bg-green-600 py-3 font-bold text-white transition hover:bg-green-700">
                  Order Now
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default PopularFoods;