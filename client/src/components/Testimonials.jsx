import { Star } from "lucide-react";
import React from "react";

const reviews = [
  {
    name: "John Smith",
    review:
      "Amazing food and super fast delivery. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    review:
      "Fresh meals and excellent customer service every time.",
  },
  {
    name: "Michael Brown",
    review:
      "The best food delivery app I've ever used.",
  },
];

function Testimonials() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold">Customer Reviews</h2>
          <p className="mt-4 text-gray-600">
            Thousands of happy customers love our service.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <div className="flex text-yellow-500 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600">
                "{review.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;