import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import NewsList from "../sections/NewsList";
// Lazy load MediaGallery
import { lazy, Suspense } from "react";

const MediaGallery = lazy(() => import("../sections/MediaGallery"));

function NewsMedia() {
  return (
    <div>
      <Navbar />

      {/* Hero Banner */}
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('https://imgs.search.brave.com/lPwc013fNbYYybjap8AERQAXDQtw01whoDhm654no3g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/NDAyNjI3Ny9lcy9m/b3RvL2Jpcm1pbmdo/YW0tZW5nbGFuZC1u/ZXctYXN0b24tdmls/bGEtaGVhZC1jb2Fj/aC1zdGV2ZW4tZ2Vy/cmFyZC10YWxrcy10/by10aGUtcHJlc3Mt/ZHVyaW5nLWEtcHJl/c3MuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXpYbl9UeExO/YTR3R3RWbUU3Z0w4/RngyYll2b01IbDFU/Zmt5X3M2MS1XUkk9')" }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Animated heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-white text-5xl md:text-6xl font-serif font-bold"
        >
          News & Media
        </motion.h1>
      </section>

      {/* Sections */}
      <NewsList />

      {/* Suspense fallback while lazy loading */}
      <Suspense fallback={
        <div className="py-20 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-golfGreen mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      }>
        <MediaGallery />
      </Suspense>
      <Footer />
    </div>
  );
}

export default NewsMedia;
