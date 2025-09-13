import { Helmet } from 'react-helmet-async'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function About() {
  return (
    <div>
      <Helmet>
        <title>About Omu-Aran Golf Club | History, Mission & Leadership</title>
        <meta name="description" content="Learn about Omu-Aran Golf Club's rich history, mission, vision, and leadership team. Discover our commitment to excellence in golf and community in Kwara State, Nigeria." />
        <meta name="keywords" content="about golf club, Omu-Aran history, golf club mission, golf leadership, Kwara State golf" />
        <meta property="og:title" content="About Omu-Aran Golf Club | History & Leadership" />
        <meta property="og:description" content="Learn about Omu-Aran Golf Club's rich history, mission, and leadership team in Nigeria." />
        <meta property="og:image" content="https://omuarangolfclub.com/clubhouse.jpg" />
      </Helmet>
      
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/10/44/65/38/1000_F_1044653802_P0BlSAVtdvi9k3w370mEn9nxByE9b749.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-6xl font-serif font-bold"
        >
          About Our Club
        </motion.h1>
      </section>

      {/* Club History */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Our History & Legacy
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center">
          Founded in 1990, Omu-Aran Golf Club has grown from a local passion project
          into one of Africa's most prestigious golf destinations. With lush
          fairways, world-class facilities, and a commitment to excellence, our
          legacy reflects decades of tradition and innovation in the sport of golf.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-golfGold">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To provide a world-class golfing experience that blends sport,
              community, and sustainability, inspiring the next generation of golfers.
            </p>
          </div>
          <div className="bg-white shadow-lg p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-golfGold">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              To be recognized globally as a premier golf destination, preserving
              tradition while embracing innovation and inclusivity.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Leadership Team
        </h2>
        <div className="mt-10 grid md:grid-cols-3 gap-10 text-center">
          {/* Example Leader */}
                  <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
                    <img
                      src="https://imgs.search.brave.com/1HF2DgvK9rLFUmbc8MgG43jOYPfGzUAU6eSfOFpk3us/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2RkLzVl/L2E5L2RkNWVhOTM2/OTUyM2EwM2U1YWYy/YTkxZjI0MWFjMzg0/LmpwZw"
                      alt="Leader 1"
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <h3 className="mt-4 text-xl font-bold text-golfGold">Mr. James Doe</h3>
                    <p className="text-sm text-gray-600">Club President</p>
                  </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <img
              src="https://imgs.search.brave.com/X-ry70cuHa_RbCuTLhZnROI3Ez6_-EfV1ZCmF-RmpgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXN5/LXBlYXN5LmFpL2Nk/bi1jZ2kvaW1hZ2Uv/cXVhbGl0eT03MCxm/b3JtYXQ9YXV0byx3/aWR0aD01MDAvaHR0/cHM6Ly9tZWRpYS5l/YXN5LXBlYXN5LmFp/LzBmMmRlYWQxLTVl/ODUtNDUzZi1iMTEy/LWNkNjMzYzkxZDJi/ZS83ZjYxYzUwZi02/MGJkLTRmZGYtYTZk/Zi02OGY3ZDBmN2Ix/OWEucG5n"
              alt="Leader 2"
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-golfGold">Mrs. Jane Smith</h3>
            <p className="text-sm text-gray-600">Vice President</p>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <img
              src="https://imgs.search.brave.com/40xjCWU_LPEh883jmXcvf21U1Wjs8hLKIfAN2BZ-CRE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9oZWFkc2hvdC1w/b3J0cmFpdC1hZnJp/Y2FuLWV0aG5pY2l0/eS1oZWFkLXNhbGVz/LWRlcGFydG1lbnQt/cmVwcmVzZW50YXRp/dmVfNjUwMzY2LTY5/NjguanBnP3NlbXQ9/YWlzX2luY29taW5n/Jnc9NzQwJnE9ODA"
              alt="Leader 3"
              className="w-32 h-32 rounded-full mx-auto object-cover"
            />
            <h3 className="mt-4 text-xl font-bold text-golfGold">Dr. Michael Lee</h3>
            <p className="text-sm text-gray-600">Director of Golf</p>
          </div>
        </div>
      </section>

      {/* Interactive Heritage Timeline */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-serif font-bold text-golfGreen text-center">
          Our Heritage
        </h2>
        <div className="mt-10 max-w-4xl mx-auto border-l-4 border-golfGold pl-6">
                  {[
                    { year: "1990", event: "Club founded with 9-hole course." },
                    { year: "1998", event: "Expanded to full 18-hole championship course." },
                    { year: "2009", event: "Hosted first international golf tournament." },
                    { year: "2022", event: "Ranked among top 10 clubs in Africa." },
                  ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-bold text-golfGold">{item.year}</h3>
              <p className="text-gray-700">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
