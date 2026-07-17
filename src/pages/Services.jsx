import { Heart, Brain, Baby, Bone, Eye, Syringe } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <Heart size={40} color="white"/>, title: 'Cardiology', desc: 'Comprehensive care for your heart, from prevention to advanced treatments.' },
    { icon: <Brain size={40} color="white"/>, title: 'Neurology', desc: 'Expert diagnosis and treatment of disorders affecting the nervous system.' },
    { icon: <Baby size={40} color="white"/>, title: 'Pediatrics', desc: 'Compassionate medical care for infants, children, and adolescents.' },
    { icon: <Bone size={40} color="white"/>, title: 'Orthopedics', desc: 'Specialized care for bones, joints, ligaments, tendons, and muscles.' },
    { icon: <Eye size={40} color="white"/>, title: 'Ophthalmology', desc: 'Complete eye care services including surgery and vision correction.' },
    { icon: <Syringe size={40} color="white"/>, title: 'Vaccination', desc: 'Immunization services to protect you and your family from diseases.' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>Our Services</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>Comprehensive Healthcare Solutions</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card" style={{ transition: 'all 0.3s' }}>
                <div style={{ 
                  background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))',
                  display: 'inline-flex',
                  padding: '1.2rem',
                  borderRadius: '1rem',
                  marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-md)'
                }}>
                  {service.icon}
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>
                  {service.desc}
                </p>
                <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
