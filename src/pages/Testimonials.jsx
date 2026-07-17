import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: 'Alice Smith', text: 'The care I received at Medisty was exceptional. The staff is incredibly friendly and professional.', rating: 5 },
    { name: 'John Doe', text: 'State of the art facilities! The doctors took the time to explain everything clearly to me.', rating: 5 },
    { name: 'Maria Garcia', text: 'I felt so comfortable during my stay. The nurses are angels. Highly recommend Medisty.', rating: 5 },
    { name: 'Robert Williams', text: 'Quick emergency response and amazing treatment. They truly saved my life.', rating: 4 }
  ];

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', padding: '8rem 0 4rem', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', margin: 0, color: 'var(--primary-dark)' }}>Patient Testimonials</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginTop: '1rem', fontWeight: '500' }}>What Our Patients Say About Us</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {reviews.map((review, idx) => (
              <div key={idx} className="glass-card" style={{ position: 'relative' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill={i < review.rating ? "#f59e0b" : "none"} color={i < review.rating ? "#f59e0b" : "#d1d5db"} />
                  ))}
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{review.text}"
                </p>
                <h4 style={{ color: 'var(--primary-dark)', margin: 0 }}>- {review.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
