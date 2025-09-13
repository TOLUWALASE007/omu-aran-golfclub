import { Helmet } from 'react-helmet-async'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import MembershipPlans from "../sections/MembershipPlans";
import MembershipPerks from "../sections/MembershipPerks";
import MembershipForm from "../sections/MembershipForm";

function Membership() {
  return (
    <div>
      <Helmet>
        <title>Membership | Omu-Aran Golf Club | Join Today</title>
        <meta name="description" content="Join Omu-Aran Golf Club with our exclusive membership tiers. Individual, Family, and Corporate memberships available. Apply online today in Kwara State, Nigeria." />
        <meta name="keywords" content="golf membership Nigeria, golf club membership, individual membership, family membership, corporate golf membership" />
        <meta property="og:title" content="Membership | Omu-Aran Golf Club" />
        <meta property="og:description" content="Join our exclusive golf club with Individual, Family, and Corporate membership options." />
        <meta property="og:image" content="https://omuarangolfclub.com/membership-hero.jpg" />
      </Helmet>
      
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.search.brave.com/hsSHed4NO9QtpP0gQNgjUBJ4CiS3G13I69uj973oEE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L2hV/NkhRZVppYW9jU0ZL/WVNVbldpamIuanBn')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-6xl font-serif font-bold"
        >
          Membership
        </motion.h1>
      </section>

      <MembershipPlans />
      <MembershipPerks />
      <MembershipForm />
      <Footer />
    </div>
  );
}

export default Membership;
