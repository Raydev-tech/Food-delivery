import React from "react";
import {
  Pizza,
  Beef,
  Sandwich,
  IceCream,
  Coffee,
  Soup,
} from "lucide-react";

const categories = [
  { name: "Pizza", icon: Pizza },
  { name: "Burger", icon: Sandwich },
  { name: "Chicken", icon: Beef },
  { name: "Dessert", icon: IceCream },
  { name: "Coffee", icon: Coffee },
  { name: "Soup", icon: Soup },
];

function Categories() {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2
          className="text-4xl font-bold text-center mb-14"
          data-aos="fade-up"
        >
          Food Categories
        </h2>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon: Icon }, index) => (
            <div
              key={name}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="rounded-3xl border bg-white p-8 text-center shadow-lg transition hover:-translate-y-3 hover:bg-green-600 hover:text-white"
            >
              <Icon size={50} className="mx-auto mb-4" />
              <h3 className="font-bold">{name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Categories;