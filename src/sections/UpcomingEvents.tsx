import { upcomingEvents } from "../data/events";

function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Upcoming Events
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          Don't miss out on our prestigious upcoming tournaments.
        </p>

        {/* Event Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              {/* Event Image */}
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />

              {/* Event Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-golfGold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>

                {/* Register Button */}
                <button className="mt-4 px-5 py-2 bg-golfGreen text-white rounded-lg hover:bg-golfGold transition">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
