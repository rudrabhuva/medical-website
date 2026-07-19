import React from 'react';
import { Pill, Search, ShoppingCart, Filter, ArrowRight } from 'lucide-react';

const Medicines = () => {
  const medicines = [
    { name: 'Amoxicillin', category: 'Antibiotics', price: '$12.99', desc: 'Used to treat a wide variety of bacterial infections.', img: 'https://images.unsplash.com/photo-1584308666744-24d5e4b10468?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Ibuprofen', category: 'Pain Relief', price: '$8.50', desc: 'Nonsteroidal anti-inflammatory drug used for treating pain.', img: 'https://images.unsplash.com/photo-1550572017-edb9815aceb9?q=80&w=1969&auto=format&fit=crop' },
    { name: 'Lisinopril', category: 'Cardiovascular', price: '$15.00', desc: 'Used to treat high blood pressure and heart failure.', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Metformin', category: 'Diabetes', price: '$10.25', desc: 'First-line medication for the treatment of type 2 diabetes.', img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop' },
    { name: 'Cetirizine', category: 'Allergy', price: '$9.99', desc: 'Antihistamine used to relieve allergy symptoms.', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop' },
    { name: 'Atorvastatin', category: 'Cardiovascular', price: '$18.50', desc: 'Statin medication used to prevent cardiovascular disease.', img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop' },
  ];

  return (
    <div className="animate-fade-in">
      <section className="section" style={{ background: 'linear-gradient(to bottom, #bfdbfe 0%, #e0f2fe 100%)', paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-subtitle">Online Pharmacy</span>
          <h1 style={{ fontSize: '3.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
            Genuine Medicines, <br/> Delivered to You
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Browse our extensive catalog of certified medications. Order online with your prescription and get fast, secure delivery.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
              <input type="text" placeholder="Search for medicines..." className="form-input" style={{ paddingLeft: '3rem', borderRadius: '2rem' }} />
              <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
            </div>
            <button className="btn btn-primary" style={{ borderRadius: '2rem', padding: '0.75rem 2rem' }}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Available Medications</h2>
            <button className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
              <Filter size={18} /> Filter
            </button>
          </div>

          <div className="grid-3">
            {medicines.map((med, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <img src={med.img} alt={med.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--primary-color)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>{med.category}</span>
                      <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)', margin: '0.25rem 0' }}>{med.name}</h3>
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>{med.price}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>{med.desc}</p>
                  <button className="btn btn-primary" style={{ width: '100%', padding: '0.75rem', justifyContent: 'center' }}>
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medicines;
