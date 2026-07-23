import { MapPin, Phone, Mail, Send, Clock, AlertCircle, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ 
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(240, 249, 255, 0.9) 0%, rgba(224, 242, 254, 0.85) 100%), url("https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '9rem 0 5rem', 
        textAlign: 'center'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>We're Here to Help and Answer Any Questions</p>
          
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            background: 'rgba(255, 255, 255, 0.65)', 
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(22, 163, 74, 0.4)',
            borderRadius: '1rem',
            padding: '0.5rem 1rem',
            marginTop: '2rem',
            color: '#15803d',
            fontWeight: '600',
            fontSize: '0.85rem',
            boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.1)'
          }}>
            <AlertCircle size={16} />
            <span>For medical emergencies, please call 911 or your local emergency number immediately.</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container grid-2">
          {/* Contact Info */}
          <div>
            <h2 className="section-title">Get in Touch</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Have questions about our services or need help? Reach out to us directly or fill out the form.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <MapPin color="white" size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>123 Health Ave, Medical City, MC 10001</p>
                </div>
              </div>
              
              <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Phone color="white" size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Phone Number</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>+1 (800) 123-4567</p>
                </div>
              </div>
              
              <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Mail color="white" size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Email Address</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>info@medisty.com</p>
                </div>
              </div>
              
              {/* Operating Hours */}
              <div className="glass-panel" style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Clock color="white" size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 0.75rem 0', fontSize: '1.1rem' }}>Operating Hours</h4>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>
                    <span>Mon - Fri</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem', color: 'var(--text-muted)' }}>
                    <span>Saturday</span>
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#16a34a', fontWeight: '600', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                    <span>Emergency Services</span>
                    <span>24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send a Message</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Clock size={16} /> We typically respond within 24 hours.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="text" className="form-input" placeholder="John Doe" style={{ paddingLeft: '2.75rem' }} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input type="email" className="form-input" placeholder="john@example.com" style={{ paddingLeft: '2.75rem' }} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Subject</label>
                <input type="text" className="form-input" placeholder="How can we help?" required />
              </div>
              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea className="form-input" rows="4" placeholder="Your message here..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
