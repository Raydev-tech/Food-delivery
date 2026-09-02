import React from "react";
import {
  Smartphone,
  ShoppingBag,
  Bike,
} from "lucide-react";

const steps = [
  {
    icon: Smartphone,
    title: "Choose Food",
    desc: "Browse our delicious menu and choose your favorite meals.",
  },
  {
    icon: ShoppingBag,
    title: "Place Order",
    desc: "Order online in just a few clicks.",
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    desc: "Sit back while we deliver your meal quickly.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div
          className="mb-16 text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold">
            How It Works
          </h2>

          <p className="mt-4 text-gray-600">
            Ordering food has never been easier.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {steps.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-3xl bg-white p-10 text-center shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                <Icon size={40} className="text-green-600" />
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {title}
              </h3>

              <p className="text-gray-600">
                {desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;