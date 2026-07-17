import { CalendarCheck } from 'lucide-react';

const Appointment = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>Book an Appointment</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>Schedule Your Visit with Our Specialists</p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass-card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <CalendarCheck size={48} color="var(--primary-color)" />
              <h2 style={{ marginTop: '1rem' }}>Appointment Form</h2>
              <p style={{ color: 'var(--text-muted)' }}>Fill in the details below and we'll confirm your appointment soon.</p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" required />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" required />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phone Number</label>
                  <input type="tel" className="form-input" required />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-input" required />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Department</label>
                  <select className="form-input" required style={{ appearance: 'auto' }}>
                    <option value="">Select Department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Preferred Date</label>
                  <input type="date" className="form-input" required />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Additional Notes (Optional)</label>
                <textarea className="form-input" rows="4"></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
