import React, { useState, useMemo, useEffect } from 'react';
import { Search, ShoppingCart, Filter, Upload, X, CheckCircle, Plus, Minus, Info, Heart, Shield, Droplet, Activity, FileText, Package, Users, Headset, Pill, Leaf, ShieldPlus, ChevronDown, ChevronUp, ChevronRight, ChevronLeft, CreditCard, Truck, UploadCloud } from 'lucide-react';

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

const healthcareData = [
  { id: 101, name: 'Dettol Antiseptic', category: 'Hygiene', price: 5.99, desc: 'First aid antiseptic liquid for cleaning wounds and cuts.', img: 'https://images.unsplash.com/photo-1584483756881-44755106b0d9?q=80&w=2070&auto=format&fit=crop', requiresRx: false, stock: 150, ingredients: 'Chloroxylenol', dosage: 'Use as directed', sideEffects: 'Skin irritation (rare)' },
  { id: 102, name: 'Antibacterial Soap', category: 'Hygiene', price: 2.50, desc: 'Gentle antibacterial soap for daily use.', img: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=2089&auto=format&fit=crop', requiresRx: false, stock: 200, ingredients: 'Benzalkonium chloride', dosage: 'Use as directed', sideEffects: 'None' },
  { id: 103, name: 'Hand Sanitizer 500ml', category: 'Hygiene', price: 4.25, desc: '70% alcohol-based hand sanitizer.', img: 'https://images.unsplash.com/photo-1584483756816-2917719602a8?q=80&w=2070&auto=format&fit=crop', requiresRx: false, stock: 100, ingredients: 'Isopropyl Alcohol 70%', dosage: 'Apply small amount to hands', sideEffects: 'Dry skin' },
  { id: 104, name: 'First Aid Bandages', category: 'First Aid', price: 3.99, desc: 'Pack of 50 sterile adhesive bandages.', img: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=2062&auto=format&fit=crop', requiresRx: false, stock: 80, ingredients: 'N/A', dosage: 'Apply to clean, dry wound', sideEffects: 'None' },
  { id: 105, name: 'Mint Mouthwash', category: 'Oral Care', price: 6.50, desc: 'Antiseptic mouthwash for long-lasting fresh breath.', img: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=2071&auto=format&fit=crop', requiresRx: false, stock: 120, ingredients: 'Eucalyptol, Menthol', dosage: 'Rinse twice daily', sideEffects: 'None' },
  { id: 106, name: 'Moisturizing Body Wash', category: 'Personal Care', price: 7.99, desc: 'Hydrating body wash for sensitive skin.', img: 'https://images.unsplash.com/photo-1556228578-8d89f6aca8d5?q=80&w=1974&auto=format&fit=crop', requiresRx: false, stock: 90, ingredients: 'Glycerin, Aloe Vera', dosage: 'Use daily in shower', sideEffects: 'None' },
  { id: 107, name: 'Cotton Swabs', category: 'Hygiene', price: 2.99, desc: '100% pure cotton swabs, pack of 200.', img: 'https://images.unsplash.com/photo-1627914856006-03dbde7718e0?q=80&w=2069&auto=format&fit=crop', requiresRx: false, stock: 250, ingredients: 'Cotton', dosage: 'Use as needed', sideEffects: 'None' },
  { id: 108, name: 'Vitamin C Serum', category: 'Skin Care', price: 15.50, desc: 'Brightening vitamin C serum for daily skincare routine.', img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1974&auto=format&fit=crop', requiresRx: false, stock: 40, ingredients: 'Vitamin C, Hyaluronic Acid', dosage: 'Apply few drops daily', sideEffects: 'Mild tingling' }
];

const faqs = [
  { q: "How long does delivery take?", a: "Most orders are delivered within 2-4 hours in metro areas, and 1-2 business days for other locations." },
  { q: "Can I return medicines?", a: "For safety reasons, we do not accept returns on prescription medications. However, unopened non-prescription items can be returned within 7 days." },
  { q: "Are my prescriptions secure?", a: "Yes, we use end-to-end encryption to ensure your medical data and prescriptions remain completely confidential and are only accessed by certified pharmacists." },
  { q: "Do you offer discounts for regular customers?", a: "Yes, we have a subscription model for chronic medications that offers up to 15% off on monthly refills." }
];

const steps = [
  { icon: Search, title: "Search & Select", desc: "Find your required medicines or healthcare products." },
  { icon: UploadCloud, title: "Upload Rx", desc: "Upload a valid prescription for Rx-only medications." },
  { icon: CreditCard, title: "Secure Checkout", desc: "Pay securely using multiple payment options available." },
  { icon: Truck, title: "Fast Delivery", desc: "Get your order delivered safely to your doorstep." }
];

const brands = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Johnson_and_Johnson_Logo.svg/1024px-Johnson_and_Johnson_Logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pfizer_%282021%29.svg/1024px-Pfizer_%282021%29.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/GSK_logo_2022.svg/1024px-GSK_logo_2022.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bayer_Cross.svg/1024px-Bayer_Cross.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Novartis_logo.svg/1024px-Novartis_logo.svg.png"
];

const Medicines = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('default');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [quantities, setQuantities] = useState({});
  const [toast, setToast] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [showAllMedicines, setShowAllMedicines] = useState(false);
  const [showAllHealthcare, setShowAllHealthcare] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);

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
        paddingBottom: '2rem', 
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
              <button 
                className="btn btn-primary" 
                style={{ borderRadius: '2rem' }}
                onClick={() => document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Search
              </button>
            </div>
            


          </div>
        </div>
      </section>


      <section style={{ padding: '1rem 0', background: 'var(--surface-color)' }}>
        <div className="container">
          {/* Stats Row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--bg-color)', padding: '1.5rem 2rem', borderRadius: '1.5rem', flex: '1 1 250px' }}>
              <div style={{ background: '#dbeafe', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Package size={28} color="#2563eb" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.5rem', lineHeight: 1.1 }}>5,000+</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>Products</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--bg-color)', padding: '1.5rem 2rem', borderRadius: '1.5rem', flex: '1 1 250px' }}>
              <div style={{ background: '#dbeafe', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={28} color="#2563eb" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.5rem', lineHeight: 1.1 }}>1M+</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>Happy Customers</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: 'var(--bg-color)', padding: '1.5rem 2rem', borderRadius: '1.5rem', flex: '1 1 250px' }}>
              <div style={{ background: '#dbeafe', width: '56px', height: '56px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Headset size={28} color="#2563eb" />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.5rem', lineHeight: 1.1 }}>24/7</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: 600 }}>Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Main Products Section */}
      <section id="products-section" className="section" style={{ background: '#f8fafc', paddingTop: '1rem', paddingBottom: '2rem' }}>
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
            {(showAllMedicines ? filteredMedicines : filteredMedicines.slice(0, 4)).map(med => (
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

          {filteredMedicines.length > 4 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
              <button 
                className="btn btn-outline" 
                onClick={() => setShowAllMedicines(!showAllMedicines)}
                style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
              >
                {showAllMedicines ? 'View Less' : 'See All Medicines'}
              </button>
            </div>
          )}
          
          {filteredMedicines.length === 0 && (
            <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 0', maxWidth: '500px', margin: '2rem auto' }}>
              <Search size={48} color="var(--border-color)" style={{ margin: '0 auto 1rem' }} />
              <h3 style={{ color: 'var(--primary-dark)', marginBottom: '0.5rem' }}>No medicines found</h3>
              <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search term or category filter.</p>
            </div>
          )}
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


      {/* Healthcare Products Section */}
      <section className="section" style={{ background: 'var(--surface-color)', paddingTop: '1rem', paddingBottom: '1rem' }}>
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Healthcare & Everyday Essentials</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Personal care, hygiene, and first-aid items</p>
          </div>

          <div className="grid-4">
            {(showAllHealthcare ? healthcareData : healthcareData.slice(0, 4)).map(item => (
              <div key={item.id} className="glass-card" onClick={() => setSelectedMedicine(item)} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', background: '#f8fafc' }}>
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} className="med-img" />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '0.75rem 1rem', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 600 }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.stock > 0 ? '#4ade80' : '#ef4444', boxShadow: `0 0 8px ${item.stock > 0 ? '#4ade80' : '#ef4444'}` }}></span>
                      {item.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--primary-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>{item.category}</span>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', margin: '0 0 0.5rem', lineHeight: 1.3 }}>{item.name}</h3>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '1rem' }}>${item.price.toFixed(2)}</span>
                  
                  <div style={{ flexGrow: 1 }}></div>

                  <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }} onClick={e => e.stopPropagation()}>
                    <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--border-color)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                      <button style={{ padding: '0.5rem', background: 'var(--surface-color)', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => updateQuantity(item.id, -1)} disabled={item.stock === 0} onMouseOver={(e) => e.currentTarget.style.background='#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background='var(--surface-color)'}><Minus size={16} /></button>
                      <span style={{ width: '2rem', textAlign: 'center', fontWeight: 600 }}>{getQuantity(item.id)}</span>
                      <button style={{ padding: '0.5rem', background: 'var(--surface-color)', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onClick={() => updateQuantity(item.id, 1)} disabled={item.stock === 0} onMouseOver={(e) => e.currentTarget.style.background='#f1f5f9'} onMouseOut={(e) => e.currentTarget.style.background='var(--surface-color)'}><Plus size={16} /></button>
                    </div>
                    <button 
                      className="btn btn-primary" 
                      style={{ flexGrow: 1, padding: '0', opacity: item.stock === 0 ? 0.5 : 1, cursor: item.stock === 0 ? 'not-allowed' : 'pointer' }} 
                      onClick={(e) => item.stock > 0 && handleAddToCart(e, item)}
                      disabled={item.stock === 0}
                    >
                      {item.stock > 0 ? <><ShoppingCart size={16} /> Add</> : 'Out'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {healthcareData.length > 4 && (
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
              <button 
                className="btn btn-outline" 
                onClick={() => setShowAllHealthcare(!showAllHealthcare)}
                style={{ padding: '0.75rem 2rem', fontSize: '1rem' }}
              >
                {showAllHealthcare ? 'View Less' : 'See All Products'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How it Works */}
      <section style={{ padding: '3rem 0 4rem 0', background: 'var(--surface-color)' }}>
        <div className="container">
          <h3 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--primary-dark)', fontSize: '2rem', fontWeight: 700 }}>How It Works</h3>
          <div className="grid-4" style={{ gap: '2rem' }}>
            {steps.map((step, i) => (
               <div key={i} style={{ textAlign: 'center', position: 'relative' }}>
                 <div style={{ width: '80px', height: '80px', background: '#eff6ff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <step.icon size={36} color="#2563eb" />
                 </div>
                 <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text-main)', fontWeight: 700 }}>{step.title}</h4>
                 <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{step.desc}</p>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section style={{ padding: '4rem 0', background: '#f8fafc', borderTop: '1px solid var(--border-color)' }}>
         <div className="container">
            <h3 style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '3rem', fontWeight: 600 }}>Trusted by Leading Brands</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', opacity: 0.6 }}>
               {brands.map((brand, i) => (
                  <img key={i} src={brand} alt="Brand Logo" style={{ height: '40px', objectFit: 'contain', filter: 'grayscale(100%)', transition: 'all 0.3s', cursor: 'pointer' }} onMouseOver={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }} onMouseOut={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.6'; }} />
               ))}
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '5rem 0', background: 'var(--surface-color)' }}>
         <div className="container" style={{ maxWidth: '800px' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
               <h2 className="section-title">Frequently Asked Questions</h2>
               <p style={{ color: 'var(--text-muted)' }}>Everything you need to know about ordering medicines online.</p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               {faqs.map((faq, i) => (
                  <div key={i} style={{ border: '1px solid var(--border-color)', borderRadius: '1rem', overflow: 'hidden' }}>
                     <button 
                        style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem', background: openFaq === i ? '#eff6ff' : 'var(--surface-color)', border: 'none', cursor: 'pointer', textAlign: 'left', transition: 'background 0.3s' }}
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     >
                        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-dark)' }}>{faq.q}</span>
                        {openFaq === i ? <ChevronUp size={20} color="#2563eb" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                     </button>
                     {openFaq === i && (
                        <div style={{ padding: '0 1.5rem 1.5rem', background: '#eff6ff', color: 'var(--text-main)', lineHeight: 1.6 }}>
                           {faq.a}
                        </div>
                     )}
                  </div>
               ))}
            </div>
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

