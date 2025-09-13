import { pastEvents } from "../data/events";

function PastEvents() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Past Tournaments
        </h2>
        <p className="mt-2 text-gray-600 text-center">
          A glimpse into our prestigious tournament history.
        </p>

        {/* Event Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {pastEvents.map((event, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-golfGold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PastEvents;
