import React from "react";
import { Percent } from "lucide-react";

function Offers() {
  return (
    <section className="bg-green-600 py-24 text-white">

      <div
        className="mx-auto max-w-6xl rounded-3xl bg-green-700 px-8 py-20 text-center shadow-2xl"
        data-aos="zoom-in"
      >

        <div className="mb-8 flex justify-center">
          <Percent size={70} />
        </div>

        <h2 className="text-5xl font-black">
          Get 30% OFF
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg">
          Order your favorite meals today and enjoy an exclusive
          discount on your first purchase.
        </p>

        <button className="mt-10 rounded-full bg-white px-10 py-4 text-lg font-bold text-green-700 transition hover:scale-105">
          Claim Offer
        </button>

      </div>

    </section>
  );
}

export default Offers;