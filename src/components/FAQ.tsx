import { useState } from "react";

function FAQ() {
  // FAQ data
  const faqs = [
    {
      question: "How do I book a tee time?",
      answer: "You can book directly online through our Visitor Information page or call our reception desk at +234 800 123 4567. We recommend booking in advance, especially during peak season.",
    },
    {
      question: "Do you allow visitors or only members?",
      answer: "Visitors are welcome! We offer daily green fees for non-members. Tee time reservations are recommended, and we have special visitor packages available.",
    },
    {
      question: "How do I apply for membership?",
      answer: "Visit our Membership page and fill out the online application form. Our membership team will review your application and contact you within 5 business days.",
    },
    {
      question: "What are your operating hours?",
      answer: "We're open daily from 6:00 AM to 8:00 PM. The pro shop and dining facilities have slightly different hours, which you can find on our website.",
    },
    {
      question: "Do you offer golf lessons?",
      answer: "Yes! We have certified PGA professionals who offer individual and group lessons. Contact our pro shop to schedule a lesson or learn about our lesson packages.",
    },
    {
      question: "Is there a dress code?",
      answer: "We maintain a smart casual dress code. Collared shirts and appropriate golf attire are required on the course. Denim and athletic wear are not permitted.",
    },
    {
      question: "Do you host corporate events?",
      answer: "Absolutely! We offer corporate packages for meetings, team building events, and tournaments. Contact our events team for custom packages and pricing.",
    },
    {
      question: "What facilities do you have?",
      answer: "We feature an 18-hole championship course, practice range, putting green, pro shop, dining facilities, locker rooms, and event spaces for private functions.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Find answers to common questions about our club and services.
        </p>

        {/* FAQ list */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4">
              {/* Question clickable */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left font-semibold text-golfGold flex justify-between items-center hover:text-golfGreen transition-colors"
              >
                {faq.question}
                <span className="text-xl font-bold">{openIndex === i ? "−" : "+"}</span>
              </button>

              {/* Answer */}
              {openIndex === i && (
                <p className="mt-2 text-gray-600 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
