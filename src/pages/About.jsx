const About = () => {
  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>About Medisty</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>Committed to Your Health and Happiness</p>
        </div>
      </div>

      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1551076805-e18690c5e53b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Hospital Facility" 
              style={{ borderRadius: '1rem', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          <div>
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">A Legacy of Medical Excellence</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Founded in 1995, Medisty has been at the forefront of medical innovation and patient care. 
              Our mission is to provide accessible, high-quality healthcare to our community.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              We believe in a holistic approach to medicine, combining advanced medical technology with 
              compassionate care. Our state-of-the-art facilities and dedicated staff ensure that you 
              receive the best possible treatment.
            </p>
            
            <div className="grid-2" style={{ gap: '1rem' }}>
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem', margin: 0 }}>25+</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Years of Experience</p>
              </div>
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem', margin: 0 }}>50k+</h3>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
