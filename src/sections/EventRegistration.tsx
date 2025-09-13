function EventRegistration() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-serif font-bold text-golfGreen">
          Event Registration
        </h2>
        <p className="mt-2 text-gray-600">
          Register for upcoming tournaments and secure your spot.
        </p>

        {/* Form */}
        <form className="mt-8 bg-white p-8 rounded-xl shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen"
          />
          <select className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-golfGreen">
            <option>Select Event</option>
            <option>Omu-Aran Invitational</option>
            <option>Annual Charity Golf Tournament</option>
            <option>Spring Championship</option>
            <option>Corporate Cup</option>
          </select>
          <button className="w-full py-3 bg-golfGold text-white font-semibold rounded-lg hover:bg-golfGreen transition">
            Submit Registration
          </button>
        </form>
      </div>
    </section>
  );
}

export default EventRegistration;
