import { Star, Quote } from 'lucide-react';

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

      {/* Patient Testimonials Section */}
      <section className="section" style={{ background: 'linear-gradient(to top, var(--bg-color), #e0f2fe, var(--bg-color))' }}>
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
              { name: "Emily Rodriguez", text: "From the front desk to the surgical team, everyone was so compassionate. The private recovery rooms are comfortable and calming.", rating: 5 },
              { name: "David Thompson", text: "Best medical experience I've ever had. The staff is genuinely caring and the online booking system is so convenient.", rating: 5 },
              { name: "Linda Martinez", text: "I've been bringing my children here for years. The pediatricians are wonderful and always make my kids feel at ease.", rating: 5 },
              { name: "Robert Wilson", text: "State-of-the-art facilities and a very professional environment. Highly recommend to anyone looking for specialized care.", rating: 5 }
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

export default About;
