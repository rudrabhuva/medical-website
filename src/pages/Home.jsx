import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Activity, ShieldCheck, Clock, Users, Star, Award, Banknote, Pill, Video, Building2 } from 'lucide-react';

const Home = () => {
  const [isHeartbeatVisible, setIsHeartbeatVisible] = useState(false);
  const heartbeatRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsHeartbeatVisible(true);
      }
    }, { threshold: 0.3 });

    if (heartbeatRef.current) {
      observer.observe(heartbeatRef.current);
    }

    return () => {
      if (heartbeatRef.current) observer.unobserve(heartbeatRef.current);
    };
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(to bottom, #bfdbfe 0%, #e0f2fe 60%, var(--bg-color) 100%)',
        paddingTop: '7rem',
        paddingBottom: '2rem'
      }}>
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="section-subtitle">Welcome to Medisty</span>
            <h1 style={{ fontSize: '3.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
              Your Health, Our <br/>
              <span style={{ color: 'var(--secondary-color)' }}>Top Priority</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '500px' }}>
              Experience world-class healthcare with our expert team of specialists and state-of-the-art medical technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/appointment" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Book Appointment <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
                Our Services
              </Link>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div className="glass-card animate-fade-in" style={{ 
              position: 'absolute', top: '1rem', left: '-2.5rem', 
              padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, animationDelay: '0.2s'
            }}>
              <div style={{ background: 'var(--primary-light)', padding: '0.75rem', borderRadius: '50%' }}>
                <HeartPulse color="white" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>24/7</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Emergency Service</div>
              </div>
            </div>

            <div className="glass-card animate-fade-in" style={{ 
              position: 'absolute', top: '5rem', right: '1.5rem', 
              padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, animationDelay: '0.4s'
            }}>
              <div style={{ background: 'var(--secondary-color)', padding: '0.75rem', borderRadius: '50%' }}>
                <Star color="white" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>4.9/5</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Patient Rating</div>
              </div>
            </div>

            <div className="glass-card animate-fade-in" style={{ 
              position: 'absolute', bottom: '-2rem', right: '2rem', 
              padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, animationDelay: '0.6s'
            }}>
              <div style={{ background: '#f59e0b', padding: '0.75rem', borderRadius: '50%' }}>
                <Users color="white" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>50k+</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Happy Patients</div>
              </div>
            </div>

            <div className="glass-card animate-fade-in" style={{ 
              position: 'absolute', bottom: '4rem', left: '-3rem', 
              padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, animationDelay: '0.8s'
            }}>
              <div style={{ background: '#10b981', padding: '0.75rem', borderRadius: '50%' }}>
                <Award color="white" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>Top 10</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Award Winning</div>
              </div>
            </div>
            
            <div className="glass-card animate-fade-in" style={{ 
              position: 'absolute', top: '50%', left: '-3.5rem', transform: 'translateY(-50%)',
              padding: '1rem', display: 'flex', alignItems: 'center', gap: '1rem',
              zIndex: 10, animationDelay: '1.0s'
            }}>
              <div style={{ background: '#ef4444', padding: '0.75rem', borderRadius: '50%' }}>
                <Activity color="white" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: '700', fontSize: '1.2rem' }}>100%</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Success Rate</div>
              </div>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Medical Team" 
              style={{ borderRadius: '2rem', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Animated Heartbeat Divider */}
      <div ref={heartbeatRef} style={{ width: '100%', overflow: 'hidden', padding: '1rem 0 0', display: 'flex', justifyContent: 'center', opacity: isHeartbeatVisible ? 1 : 0, transition: 'opacity 0.8s ease-in' }}>
        <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '60px', stroke: 'url(#heartbeat-gradient)', strokeWidth: '4', fill: 'none', filter: 'drop-shadow(0 4px 6px rgba(37, 99, 235, 0.2))' }}>
          <defs>
            <linearGradient id="heartbeat-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary-color)" />
              <stop offset="50%" stopColor="var(--secondary-color)" />
              <stop offset="100%" stopColor="var(--primary-color)" />
            </linearGradient>
          </defs>
          <path 
            className={isHeartbeatVisible ? "heartbeat-animate" : ""}
            d="M 0,50 L 300,50 L 320,50 L 340,20 L 360,90 L 390,10 L 410,70 L 430,50 L 500,50 L 520,30 L 540,60 L 560,50 L 1000,50" 
            vectorEffect="non-scaling-stroke"
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Features Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Dedicated to Excellence</h2>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
            {[
              { icon: <Activity size={32} color="var(--primary-color)"/>, title: 'Advanced Technology', desc: 'We use the latest medical technology and equipment.' },
              { icon: <ShieldCheck size={32} color="var(--primary-color)"/>, title: 'Certified Doctors', desc: 'Our team consists of highly qualified and experienced specialists.' },
              { icon: <Clock size={32} color="var(--primary-color)"/>, title: 'Fast Support', desc: 'We provide quick response and emergency services around the clock.' },
              { icon: <Banknote size={32} color="var(--primary-color)"/>, title: 'Affordable Care', desc: 'Premium healthcare services that fit within your family budget.' },
              { icon: <Pill size={32} color="var(--primary-color)"/>, title: '24/7 Pharmacy', desc: 'Fully stocked pharmacy open around the clock for your convenience.' },
              { icon: <Video size={32} color="var(--primary-color)"/>, title: 'Online Consults', desc: 'Speak with our expert doctors from the comfort of your home.' },
              { icon: <Building2 size={32} color="var(--primary-color)"/>, title: 'Modern Facilities', desc: 'State-of-the-art medical center designed for patient comfort.' }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card" style={{ textAlign: 'center', flex: '1 1 280px', maxWidth: '350px' }}>
                <div style={{ 
                  display: 'inline-flex', padding: '1rem', 
                  background: 'rgba(37, 99, 235, 0.1)', borderRadius: '50%',
                  marginBottom: '1.5rem'
                }}>
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
