import React, { useState, useMemo, useEffect } from 'react';
import { Search, ShoppingCart, Filter, Upload, X, CheckCircle, Plus, Minus, Info, Heart, Shield, Droplet, Activity, FileText, Package, Users, Headset, Pill, Leaf, ShieldPlus } from 'lucide-react';

const medicinesData = [
  { id: 1, name: 'Amoxicillin 500mg', category: 'Antibiotics', price: 12.99, desc: 'Used to treat a wide variety of bacterial infections.', img: 'https://images.unsplash.com/photo-1584308666744-24d5e4b10468?q=80&w=2070&auto=format&fit=crop', requiresRx: true, stock: 45, ingredients: 'Amoxicillin trihydrate', dosage: 'One capsule every 8 hours', sideEffects: 'Nausea, vomiting, diarrhea, rash' },
  { id: 2, name: 'Ibuprofen 400mg', category: 'Pain Relief', price: 8.50, desc: 'Nonsteroidal anti-inflammatory drug used for treating pain.', img: 'https://images.unsplash.com/photo-1550572017-edb9815aceb9?q=80&w=1969&auto=format&fit=crop', requiresRx: false, stock: 120, ingredients: 'Ibuprofen', dosage: 'One tablet every 4-6 hours as needed', sideEffects: 'Stomach upset, mild heartburn' },
  { id: 3, name: 'Lisinopril 10mg', category: 'Cardiovascular', price: 15.00, desc: 'ACE inhibitor used to treat high blood pressure.', img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=2070&auto=format&fit=crop', requiresRx: true, stock: 30, ingredients: 'Lisinopril', dosage: 'One tablet daily', sideEffects: 'Dizziness, dry cough' },
  { id: 4, name: 'Metformin 500mg', category: 'Diabetes', price: 10.25, desc: 'First-line medication for the treatment of type 2 diabetes.', img: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop', requiresRx: true, stock: 85, ingredients: 'Metformin hydrochloride', dosage: 'One tablet twice daily with meals', sideEffects: 'Nausea, upset stomach' },
  { id: 5, name: 'Cetirizine 10mg', category: 'Allergy', price: 9.99, desc: 'Antihistamine used to relieve allergy symptoms.', img: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=2069&auto=format&fit=crop', requiresRx: false, stock: 200, ingredients: 'Cetirizine hydrochloride', dosage: 'One tablet daily', sideEffects: 'Drowsiness, dry mouth' },
  { id: 6, name: 'Atorvastatin 20mg', category: 'Cardiovascular', price: 18.50, desc: 'Statin medication used to prevent cardiovascular disease.', img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop', requiresRx: true, stock: 5, ingredients: 'Atorvastatin calcium', dosage: 'One tablet daily at bedtime', sideEffects: 'Muscle or joint pain' },
  { id: 7, name: 'Omeprazole 20mg', category: 'Digestive', price: 14.20, desc: 'Proton pump inhibitor used to treat GERD.', img: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=2080&auto=format&fit=crop', requiresRx: false, stock: 60, ingredients: 'Omeprazole', dosage: 'One capsule daily before meal', sideEffects: 'Headache, stomach pain' },
  { id: 8, name: 'Vitamin D3 1000 IU', category: 'Supplements', price: 11.00, desc: 'Essential supplement for bone health.', img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=2069&auto=format&fit=crop', requiresRx: false, stock: 150, ingredients: 'Cholecalciferol', dosage: 'One softgel daily with a meal', sideEffects: 'Rare when taken as directed' },
  { id: 9, name: 'Azithromycin 250mg', category: 'Antibiotics', price: 22.50, desc: 'Macrolide antibiotic used to treat bacterial infections.', img: 'https://images.unsplash.com/photo-1584308666744-24d5e4b10468?q=80&w=2070&auto=format&fit=crop', requiresRx: true, stock: 0, ingredients: 'Azithromycin', dosage: 'Two tablets on day 1, then one daily', sideEffects: 'Diarrhea, nausea' }
];

const categories = ['All', 'Antibiotics', 'Pain Relief', 'Cardiovascular', 'Diabetes', 'Allergy', 'Digestive', 'Supplements'];

const conditions = [
  { name: 'Heart Health', icon: Heart, color: '#ef4444' },
  { name: 'Immunity', icon: Shield, color: '#3b82f6' },
  { name: 'Skin Care', icon: Droplet, color: '#06b6d4' },
  { name: 'General', icon: Activity, color: '#22c55e' }
];

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [toast, setToast] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    if (selectedMedicine) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMedicine]);

  const filteredMedicines = useMemo(() => {
    let result = medicinesData;
    
    if (selectedCategory !== 'All') {
      result = result.filter(m => m.category === selectedCategory);
    }
    
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(m => m.name.toLowerCase().includes(lower) || m.desc.toLowerCase().includes(lower));
    }
    
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    else if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    else if (sortBy === 'name-a-z') result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    
    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  const updateQuantity = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta)
    }));
  };

  const getQuantity = (id) => quantities[id] || 1;

  const handleAddToCart = (e, med) => {
    e.stopPropagation();
    const qty = getQuantity(med.id);
    setCartCount(prev => prev + qty);
    setToast(`Added ${qty}x ${med.name} to cart`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <div className="animate-fade-in" style={{ paddingBottom: '100px' }}>
      {/* Hero Section */}
      <section className="section" style={{ 
        backgroundImage: 'radial-gradient(rgba(59, 130, 246, 0.15) 2px, transparent 2px), linear-gradient(to bottom, #bfdbfe 0%, #e0f2fe 100%)',
        backgroundSize: '30px 30px, 100% 100%',
        paddingTop: '8rem', 
        paddingBottom: '5rem', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '300px', height: '300px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '400px', height: '400px', background: 'rgba(6, 182, 212, 0.2)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
        
        {/* Floating Background Icons */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
          <div className="floating-icon-1" style={{ position: 'absolute', top: '20%', left: '10%', opacity: 0.5 }}>
            <Pill size={48} color="var(--primary-color)" />
          </div>
          <div className="floating-icon-2" style={{ position: 'absolute', top: '60%', left: '15%', opacity: 0.4 }}>
            <Activity size={56} color="var(--secondary-color)" />
          </div>
          <div className="floating-icon-3" style={{ position: 'absolute', top: '15%', right: '12%', opacity: 0.5 }}>
            <ShieldPlus size={40} color="#16a34a" />
          </div>
          <div className="floating-icon-4" style={{ position: 'absolute', top: '65%', right: '10%', opacity: 0.3 }}>
            <Leaf size={64} color="#10b981" />
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="section-subtitle">Online Pharmacy</span>
            <h1 style={{ fontSize: '3.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>
              Genuine Medicines, <br/> Delivered to You
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
              Browse our extensive catalog of certified medications. Order online with your prescription and get fast, secure delivery.
            </p>
            
            <div style={{ position: 'relative', width: '100%', maxWidth: '500px', display: 'flex', gap: '0.5rem' }}>
              <div style={{ position: 'relative', flexGrow: 1 }}>
                <input 
                  type="text" 
                  placeholder="Search for medicines..." 
                  className="form-input" 
                  style={{ paddingLeft: '3rem', borderRadius: '2rem', height: '100%', border: '2px solid rgba(255,255,255,0.8)', background: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(10px)' }} 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search size={20} color="var(--primary-color)" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
              </div>
              <button className="btn btn-primary" style={{ borderRadius: '2rem' }}>
                Search
              </button>
            </div>
            
            {/* Stats Row */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '3.5rem', flexWrap: 'wrap', width: '100%', maxWidth: '900px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', padding: '1rem 1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.05)', flex: '1 1 220px' }}>
                <div style={{ background: '#dbeafe', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Package size={24} color="#2563eb" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.25rem', lineHeight: 1.1 }}>5,000+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Products</div>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', padding: '1rem 1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.05)', flex: '1 1 220px' }}>
                <div style={{ background: '#dbeafe', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Users size={24} color="#2563eb" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.25rem', lineHeight: 1.1 }}>1M+</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Happy Customers</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,0.5)', backdropFilter: 'blur(12px)', padding: '1rem 1.5rem', borderRadius: '1.5rem', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 10px 30px rgba(59, 130, 246, 0.05)', flex: '1 1 220px' }}>
                <div style={{ background: '#dbeafe', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Headset size={24} color="#2563eb" />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.25rem', lineHeight: 1.1 }}>24/7</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Support</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Shop by Condition */}
      <section style={{ padding: '3rem 0', background: 'var(--surface-color)' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-muted)', fontWeight: 500 }}>Shop by Health Condition</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {conditions.map((cond, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', transition: 'transform 0.3s' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: `${cond.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <cond.icon size={30} color={cond.color} />
                </div>
                <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-main)' }}>{cond.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title" style={{ margin: 0 }}>Available Medications</h2>
              <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Showing {filteredMedicines.length} results</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Sort by:</span>
                <select className="form-input" style={{ width: 'auto', padding: '0.5rem 2rem 0.5rem 1rem', borderRadius: '2rem' }} value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="default">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name-a-z">Name: A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Chips */}
          <div style={{ display: 'flex', gap: '0.75rem', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '1.5rem', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{ 
                  padding: '0.5rem 1.25rem', 
                  borderRadius: '2rem', 
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--primary-color)' : 'var(--border-color)',
                  background: selectedCategory === cat ? 'var(--primary-color)' : 'var(--surface-color)',
                  color: selectedCategory === cat ? 'white' : 'var(--text-main)',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-4">
            {filteredMedicines.map(med => (
              <div key={med.id} className="glass-card" onClick={() => setSelectedMedicine(med)} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* Badges */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.5rem', zIndex: 2 }}>
                  {med.requiresRx && (
                    <span style={{ background: '#ef4444', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.25rem 0.6rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '0.25rem', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}><FileText size={12} /> Rx Required</span>
                  )}
                </div>
                
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={med.img} alt={med.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="med-img" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem 1rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: med.stock > 0 ? '#4ade80' : '#ef4444', boxShadow: `0 0 8px ${med.stock > 0 ? '#4ade80' : '#ef4444'}` }}></span>
                      {med.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>{med.category}</span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', margin: '0 0 0.5rem', lineHeight: 1.3 }}>{med.name}</h3>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>${med.price.toFixed(2)}</span>
                  
                  <div style={{ flexGrow: 1 }}></div>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }} onClick={e => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                      <button style={{ padding: '0.5rem', background: 'var(--surface-color)', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => updateQuantity(med.id, -1)} disabled={med.stock === 0} onMouseOver={(e) => e.currentTarget.style.background='#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background='var(--surface-color)'}><Minus size={16} /></button>
                      <span style={{ width: '2rem', textAlign: 'center', fontWeight: 600 }}>{getQuantity(med.id)}</span>
                      <button style={{ padding: '0.5rem', background: 'var(--surface-color)', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => updateQuantity(med.id, 1)} disabled={med.stock === 0} onMouseOver={(e) => e.currentTarget.style.background='#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background='var(--surface-color)'}><Plus size={16} /></button>
                    </div>
                    <button 
                      className="btn btn-primary" 
                      style={{ flexGrow: 1, padding: '0', opacity: med.stock === 0 ? 0.5 : 1, cursor: med.stock === 0 ? 'not-allowed' : 'pointer' }} 
                      onClick={(e) => med.stock > 0 && handleAddToCart(e, med)}
                      disabled={med.stock === 0}
                    >
                      {med.stock > 0 ? <><ShoppingCart size={16} /> Add</> : 'Out'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredMedicines.length === 0 && (
            <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '500px', margin: '2rem auto' }}>
              <Search size={48} color="var(--border-color)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>No medicines found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search term or category filter.</p>
            </div>
          )}
        </div>
      </section>



      <style>{`
        .med-img:hover {
          transform: scale(1.08);
        }
        .form-input option {
          color: var(--text-main);
        }
      `}</style>
    </div>

    {/* Floating Cart Button */}
    {cartCount > 0 && (
      <div className="animate-fade-in" style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 90 }}>
        <button className="btn btn-primary" style={{ padding: '1rem 1.75rem', borderRadius: '3rem', boxShadow: '0 10px 25px rgba(37,99,235,0.5)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <ShoppingCart size={24} />
            <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: '#ef4444', color: 'white', fontSize: '0.8rem', fontWeight: 800, width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', border: '2px solid white' }}>{cartCount}</span>
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>Checkout</span>
        </button>
      </div>
    )}

    {/* Toast Notification */}
    {toast && (
      <div className="animate-fade-in" style={{ position: 'fixed', bottom: cartCount > 0 ? '6.5rem' : '2rem', right: '2rem', background: '#16a34a', color: 'white', padding: '1rem 1.5rem', borderRadius: '0.75rem', boxShadow: '0 10px 25px rgba(22, 163, 74, 0.4)', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 99, transition: 'all 0.3s' }}>
        <CheckCircle size={22} />
        <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>{toast}</span>
      </div>
    )}

    {/* Medicine Detail Modal */}
    {selectedMedicine && (
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }} onClick={() => setSelectedMedicine(null)}>
        <div className="animate-fade-in" style={{ background: 'var(--surface-color)', borderRadius: '1.5rem', maxWidth: '900px', width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'column', maxHeight: '90vh', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }} onClick={e => e.stopPropagation()}>
          <button onClick={() => setSelectedMedicine(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: 'var(--shadow-sm)', transition: 'transform 0.2s' }} onMouseOver={(e) => e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e) => e.currentTarget.style.transform='scale(1)'}>
            <X size={20} color="var(--text-main)" />
          </button>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, overflowY: 'auto' }}>
            <div style={{ flex: '1 1 300px', background: 'var(--bg-color)', position: 'relative' }}>
              <img src={selectedMedicine.img} alt={selectedMedicine.name} style={{ width: '100%', height: '100%', minHeight: '200px', objectFit: 'cover' }} />
              {selectedMedicine.requiresRx && (
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: '#ef4444', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.3rem', boxShadow: '0 4px 10px rgba(239, 68, 68, 0.4)' }}>
                  <FileText size={14} /> Prescription Required
                </div>
              )}
            </div>
            <div style={{ flex: '1.5 1 350px', padding: '1.5rem' }}>
              <span style={{ background: 'rgba(37, 99, 235, 0.1)', color: 'var(--primary-color)', padding: '0.2rem 0.8rem', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{selectedMedicine.category}</span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--primary-dark)', marginBottom: '0.25rem', lineHeight: 1.2 }}>{selectedMedicine.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <p style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>${selectedMedicine.price.toFixed(2)}</p>
                <span style={{ padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 600, background: selectedMedicine.stock > 0 ? '#dcfce7' : '#fee2e2', color: selectedMedicine.stock > 0 ? '#166534' : '#991b1b' }}>
                  {selectedMedicine.stock > 0 ? `In Stock (${selectedMedicine.stock} available)` : 'Out of Stock'}
                </span>
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1rem', lineHeight: 1.5 }}>{selectedMedicine.desc}</p>
              
              <div className="grid-2" style={{ gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'var(--bg-color)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', marginBottom: '0.25rem', fontSize: '0.9rem' }}><Info size={16} /> Active Ingredients</h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>{selectedMedicine.ingredients}</p>
                </div>
                <div style={{ background: 'var(--bg-color)', padding: '0.75rem', borderRadius: '0.75rem' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-dark)', marginBottom: '0.25rem', fontSize: '0.9rem' }}><CheckCircle size={16} /> Dosage Info</h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 500, margin: 0 }}>{selectedMedicine.dosage}</p>
                </div>
              </div>
              
              <div style={{ padding: '0.75rem', background: '#fffbeb', borderLeft: '4px solid #f59e0b', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#b45309', margin: '0 0 0.25rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Activity size={16} /> Possible Side Effects</h4>
                <p style={{ color: '#d97706', fontSize: '0.85rem', margin: 0 }}>{selectedMedicine.sideEffects}</p>
              </div>
              
              <div style={{ display: 'flex', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid var(--border-color)', borderRadius: '0.75rem', overflow: 'hidden', height: '54px' }}>
                  <button style={{ padding: '0 1rem', background: 'var(--surface-color)', border: 'none', cursor: 'pointer', height: '100%', transition: 'background 0.2s' }} onClick={() => updateQuantity(selectedMedicine.id, -1)} onMouseOver={(e) => e.currentTarget.style.background='#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background='var(--surface-color)'}><Minus size={20} /></button>
                  <span style={{ width: '3.5rem', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem' }}>{getQuantity(selectedMedicine.id)}</span>
                  <button style={{ padding: '0 1rem', background: 'var(--surface-color)', border: 'none', cursor: 'pointer', height: '100%', transition: 'background 0.2s' }} onClick={() => updateQuantity(selectedMedicine.id, 1)} onMouseOver={(e) => e.currentTarget.style.background='#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background='var(--surface-color)'}><Plus size={20} /></button>
                </div>
                <button className="btn btn-primary" style={{ flexGrow: 1, height: '54px', fontSize: '1.15rem', borderRadius: '0.75rem', opacity: selectedMedicine.stock === 0 ? 0.5 : 1, cursor: selectedMedicine.stock === 0 ? 'not-allowed' : 'pointer' }} onClick={(e) => { selectedMedicine.stock > 0 && handleAddToCart(e, selectedMedicine); selectedMedicine.stock > 0 && setSelectedMedicine(null); }} disabled={selectedMedicine.stock === 0}>
                  <ShoppingCart size={22} /> {selectedMedicine.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
  );
};

export default Medicines;

