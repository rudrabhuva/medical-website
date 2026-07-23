import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, Heart, Shield, Activity, Users, Award, MapPin, CheckCircle, Zap, Clock } from 'lucide-react';

const About = () => {
  const timelineRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const { top, height } = timelineRef.current.getBoundingClientRect();
        const windowHalf = window.innerHeight / 2;
        let progress = ((windowHalf - top) / height) * 100;
        progress = Math.max(0, Math.min(progress, 100));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const stats = [
    { icon: Clock, value: "10+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Medical Partners" },
    { icon: MapPin, value: "50+", label: "Cities Covered" },
    { icon: Heart, value: "1M+", label: "Lives Touched" }
  ];

  const values = [
    { icon: Heart, title: "Compassion", desc: "We treat every patient like our own family, ensuring care with empathy." },
    { icon: Shield, title: "Integrity", desc: "100% genuine medicines and strictly verified medical professionals." },
    { icon: Zap, title: "Innovation", desc: "Leveraging state-of-the-art technology to make healthcare seamless." },
    { icon: CheckCircle, title: "Excellence", desc: "Committed to delivering the highest quality of medical service." }
  ];

  const leaders = [
    { name: "Dr. Sarah Jenkins", role: "Chief Medical Officer", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" },
    { name: "Michael Chang", role: "Co-Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
    { name: "Dr. Emily Rodriguez", role: "Head of Pharmacy", img: "https://images.unsplash.com/photo-1594824436998-d50d0322c366?q=80&w=1974&auto=format&fit=crop" },
    { name: "David Thompson", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
  ];

  const timeline = [
    { year: "2015", title: "The Beginning", desc: "Medisty was founded with a simple vision: to make quality healthcare accessible to everyone." },
    { year: "2018", title: "Digital Transformation", desc: "Launched our first telemedicine platform and online pharmacy delivery system." },
    { year: "2021", title: "Nationwide Expansion", desc: "Expanded our services to over 50 cities, partnering with top hospitals." },
    { year: "2024", title: "1 Million Milestone", desc: "Successfully served over 1 million patients, setting new standards in health-tech." }
  ];

  const awards = [
    { title: "ISO 9001:2015", subtitle: "Quality Certified" },
    { title: "Best Health Tech", subtitle: "Startup Awards 2023" },
    { title: "Top Pharmacy", subtitle: "National Health Board" },
    { title: "Excellence in Care", subtitle: "Medical Council" }
  ];

  return (
    <div className="animate-fade-in">
      {/* 1. Mission & Vision Hero Section */}
      <div style={{ 
        position: 'relative', 
        padding: '10rem 0 6rem', 
        textAlign: 'center', 
        background: 'url(https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop) center/cover no-repeat' 
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(191,219,254,0.9), rgba(224,242,254,0.95))' }}></div>
        
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <span style={{ background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', padding: '0.5rem 1.5rem', borderRadius: '2rem', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'inline-block' }}>Our Mission</span>
          <h1 style={{ fontSize: '3.25rem', margin: '0 0 1.5rem', lineHeight: 1.1, fontWeight: 800, color: 'var(--primary-dark)' }}>Accessible & Reliable Healthcare</h1>
          <p style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginTop: '1rem', fontWeight: '600', maxWidth: '600px', margin: '1rem auto 0' }}>Combining advanced technology with compassionate service to revolutionize your health management.</p>
        </div>
      </div>

      {/* 2. Company Impact & Stats */}
      <section style={{ padding: '4rem 0 1rem', background: 'var(--surface-color)', marginTop: '-3rem', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ flex: '1 1 200px', background: 'white', padding: '2rem', borderRadius: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', textAlign: 'center', transform: 'translateY(0)', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '60px', height: '60px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <stat.icon size={30} color="#2563eb" />
                </div>
                <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', margin: '0 0 0.5rem', fontWeight: 800 }}>{stat.value}</h3>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Core Values */}
      <section className="section" style={{ background: '#f8fafc', paddingTop: '3rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-subtitle">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid-4" style={{ gap: '2rem' }}>
            {values.map((val, i) => (
              <div key={i} style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', border: '1px solid var(--border-color)', transition: 'all 0.3s' }} onMouseOver={e => {e.currentTarget.style.borderColor = 'var(--primary-color)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(37,99,235,0.1)'}} onMouseOut={e => {e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.boxShadow = 'none'}}>
                <div style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)', width: '50px', height: '50px', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <val.icon size={24} color="white" />
                </div>
                <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem', color: 'var(--primary-dark)' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="section" style={{ background: 'var(--surface-color)', paddingTop: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-subtitle">The Minds Behind Medisty</span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
          </div>
          <div className="grid-4">
            {leaders.map((leader, i) => (
              <div key={i} style={{ background: '#f8fafc', borderRadius: '1.5rem', overflow: 'hidden', textAlign: 'center', transition: 'transform 0.3s' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-10px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <img src={leader.img} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', color: 'var(--primary-dark)' }}>{leader.name}</h3>
                  <p style={{ margin: 0, color: 'var(--primary-color)', fontWeight: 600, fontSize: '0.9rem' }}>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Journey / Timeline */}
      <section className="section timeline-bg" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Animated Floating Blobs */}
        <div className="floating-blob" style={{ background: 'rgba(59, 130, 246, 0.06)', top: '-10%', left: '-10%', width: '400px', height: '400px', animationDelay: '0s' }}></div>
        <div className="floating-blob" style={{ background: 'rgba(16, 185, 129, 0.05)', bottom: '-10%', right: '-10%', width: '500px', height: '500px', animationDelay: '2s' }}></div>
        <div className="floating-blob" style={{ background: 'rgba(139, 92, 246, 0.06)', top: '40%', left: '60%', width: '300px', height: '300px', animationDelay: '4s' }}></div>
        
        <div className="container" style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}>
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">The Medisty Journey</h2>
          </div>
          
          <div ref={timelineRef} style={{ position: 'relative', padding: '2rem 0' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '4px', background: 'var(--border-color)', transform: 'translateX(-50%)', borderRadius: '4px' }}></div>
            <div style={{ position: 'absolute', left: '50%', top: 0, height: `${scrollProgress}%`, width: '4px', background: 'var(--primary-color)', transform: 'translateX(-50%)', borderRadius: '4px', transition: 'height 0.1s ease-out' }}></div>
            
            {timeline.map((item, i) => {
              const itemProgressThreshold = (i / (timeline.length - 1)) * 100;
              const isActive = scrollProgress >= (itemProgressThreshold - 10);
              
              return (
                <div key={i} style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', width: '100%', marginBottom: i === timeline.length - 1 ? '0' : '3rem', position: 'relative' }}>
                  <div style={{ width: '50%', padding: i % 2 === 0 ? '0 3rem 0 0' : '0 0 0 3rem', textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                    
                    <div style={{ 
                      position: 'absolute', 
                      top: '0', 
                      left: '50%', 
                      width: '24px', 
                      height: '24px', 
                      background: isActive ? 'var(--primary-color)' : 'white', 
                      borderRadius: '50%', 
                      transform: 'translate(-50%, 0)', 
                      border: `4px solid ${isActive ? '#bfdbfe' : 'var(--border-color)'}`, 
                      zIndex: 2,
                      transition: 'all 0.3s ease'
                    }}></div>
                    
                    <div style={{ 
                      opacity: isActive ? 1 : 0.4, 
                      transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                      transition: 'all 0.5s ease',
                    }}>
                      <h3 style={{ color: 'var(--primary-color)', fontSize: '2rem', margin: '0 0 0.5rem', fontWeight: 800 }}>{item.year}</h3>
                      <h4 style={{ fontSize: '1.3rem', margin: '0 0 1rem', color: 'var(--primary-dark)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Awards & Certifications */}
      <section className="section" style={{ background: 'var(--surface-color)', paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
            <span className="section-subtitle">Recognized for Excellence</span>
            <h2 className="section-title">Awards & Certifications</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {awards.map((award, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'white', padding: '1.5rem 2.5rem', borderRadius: '1rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <Award size={40} color="#f59e0b" />
                <div>
                  <h4 style={{ margin: '0 0 0.25rem', color: 'var(--primary-dark)', fontSize: '1.1rem' }}>{award.title}</h4>
                  <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem' }}>{award.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Patient Testimonials Section (Kept from original) */}
      <section className="section" style={{ background: 'linear-gradient(to top, var(--bg-color), #e0f2fe, var(--bg-color))', paddingTop: '2rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center' }}>
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

      <style>{`
        .timeline-bg {
          background: linear-gradient(-45deg, #f1f5f9, #e2e8f0, #f8fafc, #eff6ff);
          background-size: 400% 400%;
          animation: gradientBg 15s ease infinite;
        }
        
        .floating-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          animation: floatBlob 10s infinite ease-in-out alternate;
          z-index: 0;
        }

        @keyframes gradientBg {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes floatBlob {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.1); }
          100% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @media (max-width: 768px) {
          .timeline-container > div {
            justify-content: flex-start !important;
          }
          .timeline-container > div > div {
            width: 100% !important;
            padding: 0 0 0 3rem !important;
            text-align: left !important;
          }
          .timeline-container > div > div > div {
            left: 0 !important;
            transform: translate(0, 0) !important;
          }
          .timeline-line {
            left: 10px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
