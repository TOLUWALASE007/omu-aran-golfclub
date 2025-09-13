import { useState } from "react";

function ContactForm() {
  // Local state for form inputs
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data (later connect to backend/email service)
    console.log("Form submitted:", form);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center mb-10">
          Get in Touch
        </h2>
        
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 max-w-xl mx-auto"
        >
          {/* Heading */}
          <h3 className="text-2xl font-bold text-golfGreen mb-6 text-center">
            Send Us a Message
          </h3>

          {/* Name field */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-golfGold"
          />

          {/* Email field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-golfGold"
          />

          {/* Message field */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-3 border rounded-lg mb-4 focus:ring-2 focus:ring-golfGold"
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-golfGreen text-white px-6 py-3 rounded-lg hover:bg-golfGold transition w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
