import { useState } from 'react';
import { Heart, Brain, Baby, Bone, Eye, Syringe, ArrowRight, ChevronDown, Calendar, ClipboardList, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { question: "Do I need a referral to see a specialist?", answer: "In most cases, you do not need a referral to book a consultation with our specialists. However, some insurance providers require it for coverage. We recommend checking with your insurance provider first." },
    { question: "What should I bring to my first appointment?", answer: "Please bring a valid photo ID, your insurance card, a list of current medications, and any relevant previous medical records or test results." },
    { question: "Do you offer telehealth or virtual consultations?", answer: "Yes! We offer secure video consultations for many of our departments. You can select 'Virtual Visit' when booking your appointment online." },
    { question: "How long does it typically take to get lab results?", answer: "Most routine blood work and lab results are available within 24-48 hours. Your doctor will discuss the results with you via our secure patient portal or during a follow-up visit." }
  ];

  const services = [
    { 
      icon: <Heart size={32} color="var(--primary-color)"/>, 
      title: 'Cardiology', 
      desc: 'Comprehensive care for your heart, from prevention to advanced treatments and rehabilitation.',
      img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      icon: <Brain size={32} color="var(--primary-color)"/>, 
      title: 'Neurology', 
      desc: 'Expert diagnosis and cutting-edge treatment of disorders affecting the nervous system and brain.',
      img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=1931&auto=format&fit=crop'
    },
    { 
      icon: <Baby size={32} color="var(--primary-color)"/>, 
      title: 'Pediatrics', 
      desc: 'Compassionate, specialized medical care tailored for infants, children, and young adolescents.',
      img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      icon: <Bone size={32} color="var(--primary-color)"/>, 
      title: 'Orthopedics', 
      desc: 'Specialized surgical and rehabilitative care for bones, joints, ligaments, and muscles.',
      img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
    },
    { 
      icon: <Eye size={32} color="var(--primary-color)"/>, 
      title: 'Ophthalmology', 
      desc: 'Complete eye care services including laser surgery, vision correction, and preventative care.',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop'
    },
    { 
      icon: <Syringe size={32} color="var(--primary-color)"/>, 
      title: 'Vaccination', 
      desc: 'Comprehensive immunization programs designed to protect your family from infectious diseases.',
      img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2069&auto=format&fit=crop'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ 
        position: 'relative',
        padding: '10rem 0 6rem', 
        textAlign: 'center',
        background: 'url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop) center/cover no-repeat'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(191,219,254,0.85), rgba(224,242,254,0.95))' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '4rem', margin: 0, color: 'var(--primary-dark)' }}>Our Services</h1>
          <p style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginTop: '1rem', fontWeight: '600', maxWidth: '600px', margin: '1rem auto 0' }}>
            Comprehensive Healthcare Solutions Tailored to Your Unique Needs
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Specialized Departments</h2>
          </div>

          <div className="grid-3">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={service.img} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', bottom: '-24px', right: '24px', 
                    background: 'white', padding: '1rem', borderRadius: '50%',
                    boxShadow: '0 10px 25px rgba(37,99,235,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: '4px solid var(--bg-color)'
                  }}>
                    {service.icon}
                  </div>
                </div>
                
                <div style={{ padding: '2.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary-dark)', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', flexGrow: 1, marginBottom: '1.5rem' }}>
                    {service.desc}
                  </p>
                  <Link to="/appointment" className="btn btn-outline" style={{ display: 'inline-flex', justifyContent: 'center', padding: '0.75rem 1.5rem' }}>
                    Book Appointment <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="section" style={{ padding: '2rem 0 2rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">How It Works</span>
            <h2 className="section-title">Your Path to Better Health</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>We've streamlined our medical process to ensure you get the right care as quickly and smoothly as possible.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '3rem', justifyContent: 'center', marginTop: '4rem' }}>
            {[
              { icon: <Calendar size={36} color="white"/>, title: '1. Book Visit', desc: 'Schedule your appointment easily online or via our 24/7 hotline.' },
              { icon: <ClipboardList size={36} color="white"/>, title: '2. Consultation', desc: 'Meet with our experts to discuss your medical history and concerns.' },
              { icon: <Stethoscope size={36} color="white"/>, title: '3. Treatment', desc: 'Receive a personalized, state-of-the-art care plan tailored to you.' }
            ].map((step, idx) => (
              <div key={idx} style={{ flex: '1 1 250px', maxWidth: '320px', textAlign: 'center', padding: '3rem 2rem 2rem', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(16px)', borderRadius: '1.5rem', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(255,255,255,0.8)', position: 'relative' }}>
                <div style={{ 
                  width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-light), var(--primary-color))', 
                  boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)'
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--primary-dark)', marginTop: '1rem', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'linear-gradient(to top, var(--bg-color), #f0f9ff)', paddingTop: '1rem' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Got Questions?</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Find quick answers to common questions about our medical services and patient processes.</p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ padding: '1.5rem 2rem', cursor: 'pointer', transition: 'all 0.3s' }}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--primary-dark)', margin: 0 }}>{faq.question}</h3>
                  <ChevronDown 
                    size={20} 
                    color="var(--primary-color)" 
                    style={{ 
                      transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)', 
                      transition: 'transform 0.3s ease' 
                    }} 
                  />
                </div>
                <div style={{ 
                  maxHeight: activeFaq === idx ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'max-height 0.3s ease-in-out',
                  opacity: activeFaq === idx ? 1 : 0
                }}>
                  <p style={{ color: 'var(--text-main)', marginTop: '1rem', marginBottom: 0, lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
