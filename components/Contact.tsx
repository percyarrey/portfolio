"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_9na6ez6",
        "template_x12z3mp",
        formData,
        "ttD8GC4hWYBAi_qrs"
      )
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch(() => {
        setSuccessMessage("Failed to send the message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-8">
      {/* TITLE */}
      <div className="text-4xl md:text-5xl text-blue font-bold font-roboto flex items-center gap-8">
        <span className="whitespace-nowrap">Contact Me</span>
        <div className="w-full bg-blue h-[1px] rounded-xl opacity-70"></div>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="mt-4 text-center text-green-500">{successMessage}</div>
      )}

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6 bg-white px-8 py-12 border-[1px] border-gray-300 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-cyan-500">
          Get in Touch
        </h2>
        <div className="text-gray-500 text-center">
          I'm currently looking for new opportunities, but my inbox is always
          open.
          <br />
          Feel free to reach out if you just want to say hi or connect!
        </div>
        <div className="flex gap-x-5 gap-y-5 flex-col md:flex-row w-full">
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue text-white font-semibold opacity-95 py-2 rounded-md hover:opacity-100 transition duration-200"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
