import { Helmet } from 'react-helmet-async'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import CourseMap from "../sections/CourseMap";
import Scorecards from "../sections/Scorecards";

function Courses() {
  return (
    <div>
      <Helmet>
        <title>Golf Courses | Omu-Aran Golf Club Championship Course</title>
        <meta name="description" content="Explore our championship 18-hole golf course at Omu-Aran Golf Club. Interactive course map, scorecards, and detailed hole information in Kwara State, Nigeria." />
        <meta name="keywords" content="golf course Nigeria, championship course, golf holes, course map, golf scorecard, Kwara State golf" />
        <meta property="og:title" content="Golf Courses | Omu-Aran Golf Club" />
        <meta property="og:description" content="Explore our championship 18-hole golf course with interactive map and scorecards." />
        <meta property="og:image" content="https://omuarangolfclub.com/golf-green.jpg" />
      </Helmet>
      
      <Navbar />

      {/* Hero */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.search.brave.com/LYO30t_R2FOGoQEq1COFc09I-VOWHdSkw-zAD1s9WKQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTI1/MDAzNy5qcGc')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-6xl font-serif font-bold"
        >
          Our Golf Courses
        </motion.h1>
      </section>

      {/* Interactive Map */}
      <CourseMap />

      {/* Scorecards & Guides */}
      <Scorecards />

      {/* Virtual Tour Placeholder */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-serif font-bold text-golfGreen">Virtual Tour</h2>
        <p className="mt-2 text-gray-600">Coming soon: Explore our course in 360°</p>
        <div className="mt-6 w-full max-w-4xl h-[300px] mx-auto bg-gray-200 flex items-center justify-center rounded-xl">
          <span className="text-gray-500 italic">[ Virtual Tour Player Placeholder ]</span>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Courses;
