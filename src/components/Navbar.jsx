import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Calendar, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <Stethoscope size={32} color="#2563eb" />
          Medisty
        </Link>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link></li>
          <li><Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>Services</Link></li>
          <li><Link to="/doctors" className={`nav-link ${isActive('/doctors')}`} onClick={closeMenu}>Our Doctors</Link></li>
          <li><Link to="/medicines" className={`nav-link ${isActive('/medicines')}`} onClick={closeMenu}>Medicines</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="flex-center" style={{ gap: '0.5rem' }}>
          <Link to="/appointment" className="btn btn-primary appointment-btn" onClick={closeMenu}>
            <Calendar size={18} />
            <span className="appointment-text">Book Appointment</span>
          </Link>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
