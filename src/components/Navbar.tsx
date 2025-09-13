import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Helper function to get link classes
  const getLinkClasses = (path: string) => {
    const baseClasses = "transition relative group";
    const activeClasses = isActive(path) 
      ? "text-golfGreen font-semibold" 
      : "text-gray-700 hover:text-golfGreen";
    
    return `${baseClasses} ${activeClasses}`;
  };

  // Helper function to get mobile link classes
  const getMobileLinkClasses = (path: string) => {
    const baseClasses = "block py-3 px-4 text-lg transition relative group";
    const activeClasses = isActive(path) 
      ? "text-golfGreen font-semibold bg-golfGreen bg-opacity-10" 
      : "text-gray-700 hover:text-golfGreen hover:bg-gray-100";
    
    return `${baseClasses} ${activeClasses}`;
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-white shadow-md z-50" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand Name */}
        <h1 className="text-xl md:text-2xl font-serif text-golfGreen">
          <Link to="/" aria-label="Omu-Aran Golf Club - Home">
            Omu-Aran Golf Club
          </Link>
        </h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 font-medium" role="menubar">
          <li role="none">
            <Link to="/" className={getLinkClasses("/")} role="menuitem" aria-label="Home page">
              Home
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
          <li role="none">
            <Link to="/about" className={getLinkClasses("/about")} role="menuitem" aria-label="About Omu-Aran Golf Club">
              About
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/about") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
          <li role="none">
            <Link to="/courses" className={getLinkClasses("/courses")} role="menuitem" aria-label="Golf courses and facilities">
              Courses
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/courses") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
          <li role="none">
            <Link to="/membership" className={getLinkClasses("/membership")} role="menuitem" aria-label="Membership information and application">
              Membership
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/membership") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
          <li role="none">
            <Link to="/events" className={getLinkClasses("/events")} role="menuitem" aria-label="Events and tournaments">
              Events
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/events") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
          <li role="none">
            <Link to="/news" className={getLinkClasses("/news")} role="menuitem" aria-label="News and media">
              News
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/news") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
          <li role="none">
            <Link to="/contact" className={getLinkClasses("/contact")} role="menuitem" aria-label="Contact information and support">
              Contact
              <span className={`absolute bottom-0 left-0 h-0.5 bg-golfGreen transition-all duration-300 ${
                isActive("/contact") ? "w-full" : "w-0 group-hover:w-full"
              }`}></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-700 hover:text-golfGreen transition"
          aria-label="Toggle mobile menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <ul className="py-2" role="menubar">
          <li role="none">
            <Link 
              to="/" 
              className={getMobileLinkClasses("/")} 
              role="menuitem" 
              aria-label="Home page"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/about" 
              className={getMobileLinkClasses("/about")} 
              role="menuitem" 
              aria-label="About Omu-Aran Golf Club"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/courses" 
              className={getMobileLinkClasses("/courses")} 
              role="menuitem" 
              aria-label="Golf courses and facilities"
              onClick={closeMenu}
            >
              Courses
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/membership" 
              className={getMobileLinkClasses("/membership")} 
              role="menuitem" 
              aria-label="Membership information and application"
              onClick={closeMenu}
            >
              Membership
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/events" 
              className={getMobileLinkClasses("/events")} 
              role="menuitem" 
              aria-label="Events and tournaments"
              onClick={closeMenu}
            >
              Events
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/news" 
              className={getMobileLinkClasses("/news")} 
              role="menuitem" 
              aria-label="News and media"
              onClick={closeMenu}
            >
              News
            </Link>
          </li>
          <li role="none">
            <Link 
              to="/contact" 
              className={getMobileLinkClasses("/contact")} 
              role="menuitem" 
              aria-label="Contact information and support"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
