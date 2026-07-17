import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>Contact Us</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>We're Here to Help and Answer Any Questions</p>
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
              <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <MapPin color="white" size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Our Location</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>123 Health Ave, Medical City, MC 10001</p>
                </div>
              </div>
              
              <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Phone color="white" size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Phone Number</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>+1 (800) 123-4567</p>
                </div>
              </div>
              
              <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.5rem' }}>
                <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                  <Mail color="white" size={24} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Email Address</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>info@medisty.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Send a Message</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-input" placeholder="john@example.com" required />
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
