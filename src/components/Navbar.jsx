import { Link, useLocation } from 'react-router-dom';
import { Stethoscope, Calendar, Menu } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <Stethoscope size={32} color="#2563eb" />
          Medisty
        </Link>
        
        <ul className="nav-links">
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About Us</Link></li>
          <li><Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link></li>
          <li><Link to="/doctors" className={`nav-link ${isActive('/doctors')}`}>Our Doctors</Link></li>
          <li><Link to="/testimonials" className={`nav-link ${isActive('/testimonials')}`}>Testimonials</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
        </ul>

        <div className="flex-center" style={{ gap: '1rem' }}>
          <Link to="/appointment" className="btn btn-primary">
            <Calendar size={18} />
            Book Appointment
          </Link>
          <button className="btn btn-outline" style={{ display: 'none', padding: '0.5rem' }} id="mobile-menu-btn">
             <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
