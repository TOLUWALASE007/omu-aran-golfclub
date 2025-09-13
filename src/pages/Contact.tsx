import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

function Contact() {
  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.search.brave.com/r1JL3llbAPu18y6QAYTuecJJo37OShPbgHzCBnR-weU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oaWdoLWFuZ2xl/LXZpZXctY29udGFj/dC11cy10ZXh0LXRh/YmxlXzEwNDg5NDQt/NDcwNjU5NC5qcGc_/c2VtdD1haXNfaW5j/b21pbmcmdz03NDAm/cT04MA')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-6xl font-serif font-bold"
        >
          Contact & Support
        </motion.h1>
      </section>

      {/* Contact Info */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center mb-10">
          Get in Touch
        </h2>
        
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-golfGold mb-4">Address</h3>
            <p className="text-gray-600">
              123 Omu-Aran Golf Road<br />
              Omu-Aran, Kwara State<br />
              Nigeria
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-golfGold mb-4">Phone</h3>
            <p className="text-gray-600">
              +234 800 123 4567<br />
              +234 803 456 7890<br />
              <span className="text-sm text-gray-500">Mon-Sun: 6AM-8PM</span>
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-golfGold mb-4">Email</h3>
            <p className="text-gray-600">
              info@omuarangolfclub.com<br />
              membership@omuarangolfclub.com<br />
              events@omuarangolfclub.com
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Google Map */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold text-golfGreen text-center mb-10">
            Find Us
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Omu-Aran Golf Club Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.123456789!2d4.123456789!3d8.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMjQuNCJOIDTCsDA3JzI0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123!5m2!1sen!2sng"
              width="100%"
              height="450"
              allowFullScreen={true}
              loading="lazy"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default Contact;
