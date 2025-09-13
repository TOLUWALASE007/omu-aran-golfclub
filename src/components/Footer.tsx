import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-golfGreen text-golfWhite">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club Info */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Omu-Aran Golf Club</h3>
            <p className="text-gray-300 mb-4">
              Experience the finest golfing in a beautiful, serene environment. 
              Our championship courses and world-class facilities await you.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-sm">Omu-Aran, Kwara State, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">info@omuaran-golfclub.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-golfGold transition-colors">
                About Us
              </Link>
              <Link to="/courses" className="block text-gray-300 hover:text-golfGold transition-colors">
                Our Courses
              </Link>
              <Link to="/membership" className="block text-gray-300 hover:text-golfGold transition-colors">
                Membership
              </Link>
              <Link to="/events" className="block text-gray-300 hover:text-golfGold transition-colors">
                Events
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-golfGold transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Sunday</p>
              <p>6:00 AM - 8:00 PM</p>
              <p className="mt-4">
                Book your tee time today and experience golf at its finest.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-golfGold mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Omu-Aran Golf Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
