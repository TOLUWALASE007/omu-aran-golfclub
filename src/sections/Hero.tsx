import { motion } from "framer-motion"; // for animation

function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center pt-20"
      style={{ backgroundImage: "url('https://imgs.search.brave.com/CJAw4w3Iq9WwP_Oq6jgBj7Wb1NOpCFQkMtb6LHwTEEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9h/bWF6aW5nLXZpZXct/Z29sZi1jb3Vyc2Ut/YmFsaS1pbmRvbmVz/aWFfNzIyMjktNzcz/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDAmcT04MA')" }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Animated Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white"
      >
        <h1 className="text-5xl md:text-7xl font-serif font-bold">
          Welcome to Omu-Aran Golf Club
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light">
          Experience prestige, elegance, and world-class golfing.
        </p>
        <button className="mt-6 px-6 py-3 bg-golfGreen hover:bg-golfGold text-white font-semibold rounded-lg transition">
          Book a Tee Time
        </button>
      </motion.div>
    </section>
  );
}

export default Hero;