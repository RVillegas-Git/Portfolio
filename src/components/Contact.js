import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-gray-200 py-20">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-3xl font-medium mb-8">Contact Information</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-lg mb-6">
            If you have any questions or would like to get in touch, feel free to reach out to me through any of the following methods:
          </p>
          <div className="flex justify-center mb-6">
            <div className="mr-12">
              <h3 className="text-xl font-semibold text-green-400">Email</h3>
              <p className="text-base">villegas2103362@ceu.edu.ph</p>
            </div>
            <div className="mr-12">
              <h3 className="text-xl font-semibold text-green-400">Phone</h3>
              <p className="text-base">+123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-400">Location</h3>
              <p className="text-base">1234 Street Name, City, Country</p>
            </div>
          </div>
          <a
            href="mailto:your-email@example.com"
            className="inline-block px-8 py-3 bg-green-400 text-white rounded-full text-lg font-semibold hover:bg-green-500 transition duration-300"
          >
            Send an Email
          </a>
        </div>
      </div>
    </section>
  );
}
