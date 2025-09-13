function Testimonials() {
  const testimonials = [
    {
      name: "John Smith",
      role: "Club Member",
      quote:
        "Omu-Aran Golf Club offers a truly world-class experience. The courses are pristine and the atmosphere is unmatched.",
    },
    {
      name: "Mary Johnson",
      role: "Visitor",
      quote:
        "I attended a tournament here and was blown away by the elegance of the facilities and professionalism of the staff.",
    },
    {
      name: "David Brown",
      role: "Corporate Partner",
      quote:
        "Partnering with the club has been an incredible journey. The prestige of Omu-Aran elevates our brand.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl font-serif font-bold text-golfGreen">
          What People Say About Us
        </h2>
        <p className="mt-2 text-gray-600">
          Hear from members, visitors, and partners who've experienced the club.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
            >
              <p className="italic text-gray-700">"{t.quote}"</p>
              <h3 className="mt-4 font-bold text-golfGold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
