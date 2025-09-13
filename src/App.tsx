import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async'
import SkipToContent from "./components/SkipToContent";
import Home from "./pages/Home"; // homepage we'll build
import About from "./pages/About"; // add import
import Courses from "./pages/Courses"; // add import
import Membership from "./pages/Membership"; // add this
import Events from "./pages/Events"; // add this
import NewsMedia from "./pages/NewsMedia"; // add this
import Contact from "./pages/Contact"; // add this

function App() {
  return (
    <HelmetProvider>
      <SkipToContent />
      <Router>
        <main id="main">
          <Routes>
            {/* Route for homepage */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} /> {/* new about route */}
            <Route path="/courses" element={<Courses />} /> {/* new route */}
            <Route path="/membership" element={<Membership />} /> {/* new route */}
            <Route path="/events" element={<Events />} /> {/* new route */}
            <Route path="/news" element={<NewsMedia />} /> {/* new route */}
            <Route path="/contact" element={<Contact />} /> {/* new route */}
          </Routes>
        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;
