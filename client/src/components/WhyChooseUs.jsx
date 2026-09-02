import React from "react";
import {
  Truck,
  ShieldCheck,
  UtensilsCrossed,
  Timer,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Hot and fresh meals delivered to your doorstep in under 30 minutes.",
  },
  {
    icon: UtensilsCrossed,
    title: "Fresh Food",
    desc: "Prepared with fresh ingredients by top-rated restaurants.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Payment",
    desc: "100% secure online payment with trusted gateways.",
  },
  {
    icon: Timer,
    title: "24/7 Service",
    desc: "Order your favorite meals anytime, anywhere.",
  },
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-600">
            We deliver happiness with every order.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, index) => (
            <div
              key={title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="rounded-3xl bg-gray-50 p-8 text-center shadow-lg transition hover:-translate-y-3 hover:bg-green-600 hover:text-white"
            >
              <Icon size={50} className="mx-auto mb-5" />
              <h3 className="mb-3 text-xl font-bold">
                {title}
              </h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;