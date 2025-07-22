import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n9ywuod",  // Replace with your EmailJS Service ID
        "template_uyruhow",  // Replace with your EmailJS Template ID
        form.current,
        "ILAsQhdpN6X54m_NJ"  // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };


  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-[10vw] lg:px-[20vw] bg-[#0d081f] text-white font-sans"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3" />
        <p className="mt-4 text-gray-400 text-lg">
          I’d love to hear from you — let’s build something together!
        </p>
      </div>

      {/* Form Card */}
      <div className="w-full max-w-xl mx-auto bg-[#151026] border border-gray-700 p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-semibold text-center mb-6">
          Let’s Connect <span className="ml-1">📬</span>
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#1d1833] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#1d1833] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#1d1833] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-md bg-[#1d1833] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>

          <button
            type="submit"
            className="mt-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 rounded-md hover:opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
