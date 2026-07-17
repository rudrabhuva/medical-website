const Doctors = () => {
  const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiologist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Michael Chen', specialty: 'Neurologist', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. Emily Davis', specialty: 'Pediatrician', img: 'https://images.unsplash.com/photo-1594824436998-d70cb9e261d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { name: 'Dr. James Wilson', specialty: 'Orthopedic Surgeon', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>Our Specialists</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>Meet Our Expert Medical Team</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {doctors.map((doctor, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <img 
                  src={doctor.img} 
                  alt={doctor.name} 
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                <div style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{doctor.name}</h3>
                  <p style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
