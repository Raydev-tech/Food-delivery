import { Mail, Phone, MapPin } from "lucide-react";
import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-gray-100 p-8 text-center">
            <Mail className="mx-auto mb-5 text-green-600" size={40} />
            hello@foodie.com
          </div>

          <div className="rounded-3xl bg-gray-100 p-8 text-center">
            <Phone className="mx-auto mb-5 text-green-600" size={40} />
            +1 234 567 890
          </div>

          <div className="rounded-3xl bg-gray-100 p-8 text-center">
            <MapPin className="mx-auto mb-5 text-green-600" size={40} />
            New York, USA
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;