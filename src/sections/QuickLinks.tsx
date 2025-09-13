import { Link } from "react-router-dom";
import { FaUserFriends, FaCalendarAlt, FaGolfBall } from "react-icons/fa";

function QuickLinks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center px-6">
        
        {/* Membership Card */}
        <Link to="/membership" className="group bg-golfGreen text-white p-8 rounded-2xl shadow-lg hover:bg-golfGold transition">
          <FaUserFriends className="text-4xl mx-auto mb-4 group-hover:scale-110 transition" />
          <h3 className="text-2xl font-bold">Membership</h3>
          <p className="mt-2 text-sm">
            Explore exclusive tiers and privileges for members.
          </p>
        </Link>

        {/* Tee Booking Card */}
        <Link to="/booking" className="group bg-golfGreen text-white p-8 rounded-2xl shadow-lg hover:bg-golfGold transition">
          <FaGolfBall className="text-4xl mx-auto mb-4 group-hover:scale-110 transition" />
          <h3 className="text-2xl font-bold">Tee Booking</h3>
          <p className="mt-2 text-sm">
            Book your next round at our world-class courses.
          </p>
        </Link>

        {/* Events Card */}
        <Link to="/events" className="group bg-golfGreen text-white p-8 rounded-2xl shadow-lg hover:bg-golfGold transition">
          <FaCalendarAlt className="text-4xl mx-auto mb-4 group-hover:scale-110 transition" />
          <h3 className="text-2xl font-bold">Events</h3>
          <p className="mt-2 text-sm">
            Discover upcoming tournaments and special events.
          </p>
        </Link>

      </div>
    </section>
  );
}

export default QuickLinks;
