import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="logo" style={{ color: 'white', marginBottom: '1.5rem', display: 'inline-flex' }}>
              <Stethoscope size={32} color="#22d3ee" />
              Medisty
            </Link>
            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
              Providing world-class healthcare with state-of-the-art facilities and a compassionate approach. Your health is our priority.
            </p>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/doctors">Our Doctors</Link></li>
              <li><Link to="/medicines">Medicines</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li><Link to="/services">Cardiology</Link></li>
              <li><Link to="/services">Neurology</Link></li>
              <li><Link to="/services">Pediatrics</Link></li>
              <li><Link to="/services">Orthopedics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-links">
              <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} color="#22d3ee" />
                <span>123 Health Ave, Medical City</span>
              </li>
              <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                <Phone size={18} color="#22d3ee" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex-center" style={{ justifyContent: 'flex-start', gap: '0.5rem' }}>
                <Mail size={18} color="#22d3ee" />
                <span>info@medisty.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Medisty Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
