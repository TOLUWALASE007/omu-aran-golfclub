import { Helmet } from 'react-helmet-async'
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import QuickLinks from "../sections/QuickLinks";
import Testimonials from "../sections/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Helmet>
        <title>Omu-Aran Golf Club | Premier Golf Experience in Nigeria</title>
        <meta name="description" content="Experience world-class golf at Omu-Aran Golf Club. Premium facilities, championship courses, membership, tournaments, and exceptional service in Kwara State, Nigeria." />
        <meta name="keywords" content="golf club Nigeria, Omu-Aran golf, championship course, golf membership, golf tournaments, Kwara State golf" />
        <meta name="author" content="Omu-Aran Golf Club" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omuarangolfclub.com/" />
        <meta property="og:title" content="Omu-Aran Golf Club | Premier Golf Experience" />
        <meta property="og:description" content="Experience world-class golf at Omu-Aran Golf Club. Premium facilities, championship courses, and exceptional service in Nigeria." />
        <meta property="og:image" content="https://omuarangolfclub.com/golf-course.jpg" />
        <meta property="og:site_name" content="Omu-Aran Golf Club" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://omuarangolfclub.com/" />
        <meta property="twitter:title" content="Omu-Aran Golf Club | Premier Golf Experience" />
        <meta property="twitter:description" content="Experience world-class golf at Omu-Aran Golf Club. Premium facilities, championship courses, and exceptional service in Nigeria." />
        <meta property="twitter:image" content="https://omuarangolfclub.com/golf-course.jpg" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SportsOrganization",
            "name": "Omu-Aran Golf Club",
            "url": "https://omuarangolfclub.com",
            "logo": "https://omuarangolfclub.com/logo.png",
            "description": "Premier golf club offering world-class facilities, championship courses, and exceptional service in Kwara State, Nigeria.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Omu-Aran Golf Road",
              "addressLocality": "Omu-Aran",
              "addressRegion": "Kwara State",
              "addressCountry": "Nigeria"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+234-800-123-4567",
              "contactType": "customer service",
              "email": "info@omuarangolfclub.com"
            },
            "sameAs": [
              "https://www.facebook.com/omuarangolfclub",
              "https://www.instagram.com/omuarangolfclub",
              "https://www.twitter.com/omuarangolfclub"
            ]
          })}
        </script>
      </Helmet>
      
      <div>
        <Navbar />
        <Hero />
        <QuickLinks />   {/* New Quick Links Section */}
        <section className="py-20 bg-gray-50 text-center">
          <h2 className="text-3xl font-serif font-bold text-golfGreen">
            Why Choose Omu-Aran Golf Club?
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            <div className="bg-white p-6 shadow-lg rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold text-golfGold">World-Class Courses</h3>
              <p className="mt-2 text-gray-600">
                Designed to challenge professionals and welcome beginners alike.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold text-golfGold">Exclusive Membership</h3>
              <p className="mt-2 text-gray-600">
                Enjoy luxury privileges, networking, and elite tournaments.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-xl hover:scale-105 transition">
              <h3 className="text-xl font-bold text-golfGold">Prestigious Events</h3>
              <p className="mt-2 text-gray-600">
                Host and attend global tournaments and signature events.
              </p>
            </div>
          </div>
        </section>
        <Testimonials /> {/* New Testimonials Section */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
