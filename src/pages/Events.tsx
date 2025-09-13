import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import UpcomingEvents from "../sections/UpcomingEvents";
import PastEvents from "../sections/PastEvents";
import EventRegistration from "../sections/EventRegistration";

function Events() {
  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.search.brave.com/jKuFBNkIhYu6kwE8FSNdOgEko8hr9lhP4Jf312hLKoM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjIw/OTk0Mzg2MC9waG90/by9hdWd1c3RhLWdl/b3JnaWEtcm9yeS1t/Y2lscm95LW9mLW5v/cnRoZXJuLWlyZWxh/bmQtYWNrbm93bGVk/Z2VzLXRoZS1jcm93/ZC1vbi10aGUtdGhp/cmQtZ3JlZW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXFh/cy1LcFpMSzV3QjNu/cUNHa0lzaGF5OG5Q/eE9nSWRRdDItX0FV/LTJvZVU9')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-6xl font-serif font-bold text-center"
        >
          Events & Tournaments
        </motion.h1>
      </section>

      <UpcomingEvents />
      <PastEvents />
      <EventRegistration />
      <Footer />
    </div>
  );
}

export default Events;
