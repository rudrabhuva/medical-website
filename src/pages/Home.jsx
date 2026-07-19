import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartPulse, Activity, ShieldCheck, Clock, Users, Star, Award, Banknote, Pill, Video, Building2, PhoneCall, Stethoscope, Microscope, Syringe, Baby, Bone, CheckCircle2, Quote } from 'lucide-react';
import doctorsImage from '../photo/doctors.png';

const Home = () => {
  const [isHeartbeatVisible, setIsHeartbeatVisible] = useState(false);
  const heartbeatRef = useRef(null);
  
  const [currentFacilityImage, setCurrentFacilityImage] = useState(0);
  const facilityImages = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2071&auto=format&fit=crop"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFacilityImage((prev) => (prev + 1) % facilityImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
        paddingBottom: '5rem'
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

            <img 
              src={doctorsImage} 
              alt="Medical Team" 
              style={{ borderRadius: '2rem', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 10, marginBottom: '2rem' }}>
        <div className="glass-panel" style={{ padding: '1rem 2rem', borderRadius: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-around' }}>
          {[
            { icon: <Users size={28} color="var(--primary-color)" />, count: "10,000+", label: "Happy Patients" },
            { icon: <Award size={28} color="var(--primary-color)" />, count: "50+", label: "Expert Doctors" },
            { icon: <Building2 size={28} color="var(--primary-color)" />, count: "15+", label: "Years Experience" },
            { icon: <Star size={28} color="var(--secondary-color)" />, count: "4.9/5", label: "Patient Rating" }
          ].map((stat, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '0.75rem', borderRadius: '50%', display: 'flex' }}>{stat.icon}</div>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.1rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>{stat.count}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600 }}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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

      {/* Top Specialties Section */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, var(--bg-color), #e0f2fe, var(--bg-color))', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Departments</span>
            <h2 className="section-title">Top Medical Specialties</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>We offer a wide range of specialized medical services designed to meet your every health need with precision and care.</p>
          </div>
          <div className="grid-3">
            {[
              { name: "Cardiology", icon: <HeartPulse size={40} strokeWidth={1.5}/>, desc: "Expert heart care and cardiovascular treatments." },
              { name: "Neurology", icon: <Activity size={40} strokeWidth={1.5}/>, desc: "Advanced diagnostics for nervous system disorders." },
              { name: "Pediatrics", icon: <Baby size={40} strokeWidth={1.5}/>, desc: "Compassionate healthcare for infants to young adults." },
              { name: "Orthopedics", icon: <Bone size={40} strokeWidth={1.5}/>, desc: "Treatment for bones, joints, and musculoskeletal issues." },
              { name: "Laboratory", icon: <Microscope size={40} strokeWidth={1.5}/>, desc: "Accurate and swift clinical testing and diagnostics." },
              { name: "Vaccination", icon: <Syringe size={40} strokeWidth={1.5}/>, desc: "Comprehensive immunization programs for all ages." },
            ].map((dept, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', background: 'rgba(255, 255, 255, 0.7)' }}>
                <div style={{ color: 'var(--primary-color)', background: 'var(--surface-color)', padding: '1.25rem', borderRadius: '1rem', boxShadow: 'var(--shadow-sm)' }}>
                  {dept.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{dept.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{dept.desc}</p>
                <Link to="/services" style={{ marginTop: 'auto', color: 'var(--primary-color)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.9rem' }}>
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section className="section" style={{ paddingTop: '0', paddingBottom: '1rem' }}>
        <div className="container">
          <div className="glass-panel" style={{ background: 'linear-gradient(135deg, var(--primary-dark), var(--primary-color))', color: 'var(--text-light)', border: 'none', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem', padding: '1.5rem 2.5rem' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h2 style={{ color: 'var(--text-light)', fontSize: '2rem', marginBottom: '0.5rem' }}>Need Emergency Medical Care?</h2>
              <p style={{ fontSize: '1rem', opacity: 0.9, maxWidth: '600px' }}>Our emergency department is open 24/7. Don't hesitate to contact us for immediate medical assistance. Your life is our priority.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="tel:+1234567890" className="btn" style={{ background: 'white', color: 'var(--primary-dark)', padding: '0.75rem 1.5rem', fontSize: '1rem', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <PhoneCall size={18} /> 1-800-MEDISTY
              </a>
              <Link to="/contact" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white', padding: '0.75rem 1.5rem', fontSize: '1rem', background: 'transparent' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Facility Image/Text Section */}
      <section className="section" style={{ paddingTop: '2rem' }}>
        <div className="container grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: '100%', height: '100%', background: 'var(--primary-light)', borderRadius: '2rem', opacity: 0.1, zIndex: 0 }}></div>
            <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '450px', borderRadius: '2rem', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              {facilityImages.map((imgUrl, idx) => (
                <img 
                  key={idx}
                  src={imgUrl} 
                  alt={`Modern Hospital Facility ${idx + 1}`} 
                  style={{ 
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover',
                    opacity: currentFacilityImage === idx ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }}
                />
              ))}
            </div>
            <div className="glass-panel" style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', zIndex: 2, padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: '1rem' }}>
              <div style={{ background: 'rgba(37, 99, 235, 0.1)', padding: '1rem', borderRadius: '50%' }}>
                <Stethoscope size={32} color="var(--primary-color)" />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>Modern Care</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 600 }}>Since 2008</p>
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: '1rem' }}>
            <span className="section-subtitle">About Our Facility</span>
            <h2 className="section-title" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>A Healing Environment Designed For You</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
              We believe that the environment plays a crucial role in patient recovery. Our facility is designed to bring in natural light and provide a calming, luxurious atmosphere that reduces stress and promotes healing.
            </p>
            <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                "Spacious, sunlit waiting areas",
                "Private, comfortable recovery rooms",
                "State-of-the-art sterile surgical suites",
                "Relaxing indoor green spaces"
              ].map((item, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.05rem', fontWeight: 500, color: 'var(--text-main)' }}>
                  <CheckCircle2 size={24} color="var(--secondary-color)" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about" className="btn btn-primary" style={{ padding: '0.875rem 2rem' }}>
              More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
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

      {/* Patient Testimonials Section */}
      <section className="section" style={{ background: 'linear-gradient(to top, var(--bg-color), #e0f2fe, var(--bg-color))', paddingTop: '0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Real Stories</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Don't just take our word for it. Read about the experiences of those who trusted us with their health.</p>
          </div>
          <div className="grid-3">
            {[
              { name: "Sarah Jenkins", text: "The care I received at Medisty was absolutely phenomenal. The doctors were attentive, the facility was pristine, and I felt completely safe.", rating: 5 },
              { name: "Michael Chang", text: "I was rushed into the emergency department and the speed and professionalism of the staff saved my life. I cannot thank them enough.", rating: 5 },
              { name: "Emily Rodriguez", text: "From the front desk to the surgical team, everyone was so compassionate. The private recovery rooms are comfortable and calming.", rating: 5 }
            ].map((review, idx) => (
              <div key={idx} className="glass-panel" style={{ position: 'relative', padding: '2.5rem 2rem' }}>
                <Quote size={40} color="var(--primary-light)" style={{ opacity: 0.2, position: 'absolute', top: '1.5rem', left: '1.5rem' }} />
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />)}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '1.05rem', fontStyle: 'italic', marginBottom: '1.5rem', position: 'relative', zIndex: 1, lineHeight: 1.7 }}>"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-light), var(--primary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {review.name.charAt(0)}
                  </div>
                  <h4 style={{ margin: 0, color: 'var(--primary-dark)', fontSize: '1.1rem' }}>{review.name}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
