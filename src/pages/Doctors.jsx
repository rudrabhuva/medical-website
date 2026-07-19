import { useState } from 'react';
import { Search, MapPin, Calendar, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hoveredCat, setHoveredCat] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const doctorImages = [
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1594824436998-d70cb9e261d7?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1582750433449-648ed127d09e?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1638202361625-f4581f1e9c20?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551076805-e16760c2643a?q=80&w=500&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1584432810605-856185bb81d8?q=80&w=500&auto=format&fit=crop'
  ];

  const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'Cardiology', img: doctorImages[0], exp: '15+ Years', rating: '4.9', location: 'Main Wing, Rm 204' },
    { name: 'Dr. Michael Chen', specialty: 'Neurology', img: doctorImages[1], exp: '12+ Years', rating: '4.8', location: 'East Wing, Rm 102' },
    { name: 'Dr. Emily Davis', specialty: 'Pediatrics', img: doctorImages[2], exp: '10+ Years', rating: '5.0', location: 'Kids Ward, Rm 301' },
    { name: 'Dr. James Wilson', specialty: 'Orthopedics', img: doctorImages[3], exp: '20+ Years', rating: '4.9', location: 'West Wing, Rm 405' },
    { name: 'Dr. Anita Patel', specialty: 'Dermatology', img: doctorImages[4], exp: '8+ Years', rating: '4.7', location: 'Main Wing, Rm 205' },
    { name: 'Dr. Robert Fox', specialty: 'Oncology', img: doctorImages[5], exp: '18+ Years', rating: '4.9', location: 'West Wing, Rm 406' },
    { name: 'Dr. Olivia Martinez', specialty: 'Psychiatry', img: doctorImages[6], exp: '14+ Years', rating: '4.8', location: 'East Wing, Rm 105' },
    { name: 'Dr. William Brown', specialty: 'Urology', img: doctorImages[7], exp: '9+ Years', rating: '4.9', location: 'Kids Ward, Rm 302' },
    { name: 'Dr. Sophia Garcia', specialty: 'Gastroenterology', img: doctorImages[8], exp: '22+ Years', rating: '5.0', location: 'Main Wing, Rm 210' },
    { name: 'Dr. Alexander Lee', specialty: 'Endocrinology', img: doctorImages[9], exp: '11+ Years', rating: '4.7', location: 'West Wing, Rm 408' },
    { name: 'Dr. Mia Robinson', specialty: 'Rheumatology', img: doctorImages[0], exp: '7+ Years', rating: '4.8', location: 'East Wing, Rm 108' },
    { name: 'Dr. Benjamin Clark', specialty: 'Pulmonology', img: doctorImages[1], exp: '25+ Years', rating: '4.9', location: 'Kids Ward, Rm 305' },
    { name: 'Dr. Charlotte Lewis', specialty: 'Ophthalmology', img: doctorImages[2], exp: '13+ Years', rating: '4.9', location: 'Main Wing, Rm 212' },
    { name: 'Dr. Henry Walker', specialty: 'Otolaryngology', img: doctorImages[3], exp: '16+ Years', rating: '4.8', location: 'West Wing, Rm 410' },
    { name: 'Dr. Amelia Hall', specialty: 'Nephrology', img: doctorImages[4], exp: '10+ Years', rating: '5.0', location: 'East Wing, Rm 112' },
    { name: 'Dr. Daniel Allen', specialty: 'Gynecology', img: doctorImages[5], exp: '14+ Years', rating: '4.7', location: 'Kids Ward, Rm 308' },
    { name: 'Dr. Harper Young', specialty: 'Hematology', img: doctorImages[6], exp: '19+ Years', rating: '4.9', location: 'Main Wing, Rm 215' },
    { name: 'Dr. Matthew King', specialty: 'Immunology', img: doctorImages[7], exp: '21+ Years', rating: '4.8', location: 'West Wing, Rm 412' },
    { name: 'Dr. Evelyn Wright', specialty: 'Infectious Disease', img: doctorImages[8], exp: '12+ Years', rating: '4.9', location: 'East Wing, Rm 115' },
    { name: 'Dr. Joseph Scott', specialty: 'Internal Medicine', img: doctorImages[9], exp: '8+ Years', rating: '4.8', location: 'Kids Ward, Rm 310' },
    { name: 'Dr. Abigail Green', specialty: 'Medical Genetics', img: doctorImages[0], exp: '17+ Years', rating: '5.0', location: 'Main Wing, Rm 218' },
    { name: 'Dr. Samuel Baker', specialty: 'Pathology', img: doctorImages[1], exp: '15+ Years', rating: '4.7', location: 'West Wing, Rm 415' },
    { name: 'Dr. Avery Adams', specialty: 'Plastic Surgery', img: doctorImages[2], exp: '9+ Years', rating: '4.9', location: 'East Wing, Rm 118' },
    { name: 'Dr. David Nelson', specialty: 'Radiology', img: doctorImages[3], exp: '23+ Years', rating: '4.8', location: 'Kids Ward, Rm 312' },
    { name: 'Dr. Ella Carter', specialty: 'General Surgery', img: doctorImages[4], exp: '11+ Years', rating: '4.9', location: 'Main Wing, Rm 220' },
    { name: 'Dr. John Mitchell', specialty: 'Anesthesiology', img: doctorImages[5], exp: '18+ Years', rating: '4.8', location: 'West Wing, Rm 418' },
    { name: 'Dr. Grace Perez', specialty: 'Sports Medicine', img: doctorImages[6], exp: '16+ Years', rating: '5.0', location: 'East Wing, Rm 120' },
    { name: 'Dr. Luke Roberts', specialty: 'Geriatrics', img: doctorImages[7], exp: '13+ Years', rating: '4.7', location: 'Kids Ward, Rm 315' },
    { name: 'Dr. Chloe Turner', specialty: 'Allergy', img: doctorImages[8], exp: '20+ Years', rating: '4.9', location: 'Main Wing, Rm 222' },
    { name: 'Dr. Isaac Phillips', specialty: 'Hepatology', img: doctorImages[9], exp: '14+ Years', rating: '4.8', location: 'West Wing, Rm 420' },
    { name: 'Dr. Lily Campbell', specialty: 'Podiatry', img: doctorImages[0], exp: '10+ Years', rating: '4.9', location: 'East Wing, Rm 122' }
  ];

  // Dynamically generate filter categories based on unique specializations
  const categories = ['All', ...Array.from(new Set(doctors.map(doc => doc.specialty))).sort()];

  const filteredDoctors = doctors.filter(doc => {
    const matchesCategory = filter === 'All' || doc.specialty === filter;
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedDoctors = showAll ? filteredDoctors : filteredDoctors.slice(0, 5);

  return (
    <div className="animate-fade-in">
       {/* Premium Hero */}
       <div style={{ 
        position: 'relative',
        padding: '10rem 0 6rem', 
        textAlign: 'center',
        background: 'url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop) center/cover no-repeat'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(191,219,254,0.9), rgba(224,242,254,0.95))' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '4rem', margin: 0, color: 'var(--primary-dark)' }}>Meet Our Specialists</h1>
          <p style={{ color: 'var(--text-main)', fontSize: '1.25rem', marginTop: '1rem', fontWeight: '600', maxWidth: '600px', margin: '1rem auto 0' }}>
            World-class medical experts dedicated to your health and well-being.
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--bg-color)', paddingBottom: '2rem' }}>
        <div className="container">
          {/* Top Doctors Title & See All Button */}
          <div style={{ marginTop: '-4rem', position: 'relative', zIndex: 2, marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', background: 'white', padding: '0.6rem 1.5rem', borderRadius: '2rem', boxShadow: '0 8px 20px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.25rem', color: 'var(--primary-dark)', margin: 0, fontWeight: '700' }}>
                Top doctors available
              </h2>
            </div>
            
            {filteredDoctors.length > 5 && (
              <button 
                className="btn btn-primary" 
                onClick={() => setShowAll(!showAll)}
                style={{ padding: '0.6rem 1.5rem', fontSize: '0.95rem', boxShadow: '0 8px 20px rgba(37, 99, 235, 0.2)' }}
              >
                {showAll ? 'View Less' : 'See All Doctors'}
              </button>
            )}
          </div>

          {/* Doctors Grid */}
          <div className="grid-5" style={{ position: 'relative', zIndex: 2 }}>
            {displayedDoctors.map((doctor, idx) => (
              <div key={idx} className="glass-card doctor-card" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
                <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={doctor.img} 
                    alt={doctor.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Rating Badge */}
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(5px)', padding: '0.2rem 0.4rem', borderRadius: '2rem', display: 'flex', alignItems: 'center', gap: '0.2rem', boxShadow: 'var(--shadow-md)', fontWeight: 'bold', color: 'var(--primary-dark)', fontSize: '0.75rem' }}>
                    <Star size={12} color="#f59e0b" fill="#f59e0b" /> {doctor.rating}
                  </div>
                </div>
                
                <div style={{ padding: '1rem', textAlign: 'center', background: 'white' }}>
                  <p style={{ color: 'var(--primary-color)', fontWeight: '700', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '1px', margin: '0 0 0.4rem 0' }}>{doctor.specialty}</p>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--primary-dark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{doctor.name}</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}><Calendar size={12} /> {doctor.exp}</div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}><MapPin size={12} /> {doctor.location.split(',')[0]}</div>
                  </div>

                  <Link to="/appointment" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', padding: '0.5rem 0.75rem', fontSize: '0.8rem' }}>
                    Book Consult
                  </Link>
                </div>
              </div>
            ))}
          </div>


          
          {filteredDoctors.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-dark)' }}>No doctors found</h3>
              <p>Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Popular Conditions Section */}
      <section className="section" style={{ background: 'linear-gradient(to top, var(--bg-color), #e0f2fe)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Expertise</span>
            <h2 className="section-title">Popular Conditions Treated</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Our specialists have extensive experience diagnosing and treating a wide variety of medical conditions.</p>
          </div>

          <div className="grid-4">
            {[
              { title: "Hypertension & Heart", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=500&auto=format&fit=crop" },
              { title: "Migraines & Neurology", img: "https://images.unsplash.com/photo-1559757175-9b93540ce976?q=80&w=500&auto=format&fit=crop" },
              { title: "Childhood Asthma", img: "https://images.unsplash.com/photo-1584362917165-526a968579e8?q=80&w=500&auto=format&fit=crop" },
              { title: "Joint Pain & Arthritis", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=500&auto=format&fit=crop" },
              { title: "Diabetes Management", img: "https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=500&auto=format&fit=crop" },
              { title: "Sleep Disorders", img: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=500&auto=format&fit=crop" },
              { title: "Thyroid Conditions", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=500&auto=format&fit=crop" },
              { title: "Sports Injuries", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop" }
            ].map((condition, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ padding: 0, overflow: 'hidden', transition: 'all 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <div style={{ height: '160px', overflow: 'hidden' }}>
                  <img src={condition.img} alt={condition.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center', background: 'white' }}>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--primary-dark)', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--primary-color)" /> {condition.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section style={{ background: 'white', padding: '2rem 0 6rem 0' }}>
        <div className="container">
          
          {/* What is Online Consultation */}
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-dark)', marginBottom: '1.5rem' }}>What is Online Doctor Consultation?</h2>
            <p style={{ color: 'var(--text-main)', fontSize: '1.15rem', marginBottom: '1rem', lineHeight: '1.8' }}>
              Online doctor consultation allows individuals to connect with qualified healthcare professionals through video calls, chat or voice services.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
              It offers access to medical advice, diagnosis and follow-up care when in-person visit is not feasible due to distance or time constraints. Anyone with a phone or internet connection can use it, including people seeking routine care, follow-up consultations or help for common conditions like allergies, acne, infections, digestive issues and more.
            </p>
          </div>

          {/* Specialists Available */}
          <div style={{ marginBottom: '4rem' }}>
            <div className="section-header">
              <h2 className="section-title">Specialists Available for Consultation</h2>
            </div>
            <div className="grid-3" style={{ gap: '2rem' }}>
              {[
                { title: 'Dermatologist', desc: 'Expert for Skin, hair and nail concerns such as acne, rashes, pigmentation, infections.' },
                { title: 'General Medicine', desc: 'Specialised to manage Fever, infections, lifestyle diseases, routine medical advice.' },
                { title: 'Pediatrician', desc: 'Specialist in diagnosing and treating medical conditions in infants, children, and adolescents.' },
                { title: 'Gynecologist', desc: 'Expert in women’s reproductive health, managing menstrual disorders, pregnancy-related issues.' },
                { title: 'Psychiatrist', desc: 'Specialist in diagnosing and treating mental health conditions such as depression and anxiety.' },
                { title: 'ENT', desc: 'Expert in treating conditions related to the ear, nose, and throat, including infections and hearing.' },
                { title: 'Cardiologist', desc: 'Specialist in diagnosing and managing heart-related conditions such as hypertension and heart disease.' },
                { title: 'Endocrinologist', desc: 'Expert in hormonal disorders including diabetes, PCOD, thyroid diseases, metabolic disorders etc.' },
                { title: 'Gastroenterologist', desc: 'Specialist in managing digestive system disorders affecting the stomach, intestines, and liver.' },
                { title: 'Orthopedic', desc: 'Expert in diagnosing and treating conditions related to bones, joints, muscles, ligaments, and spine.' },
                { title: 'Neurologist', desc: 'Specialist in treating disorders of the brain, spinal cord, and nervous system.' },
                { title: 'Pulmonologist', desc: 'Expert in diagnosing and managing lung and respiratory conditions such as asthma.' }
              ].map((spec, i) => (
                <div key={i} className="glass-card" style={{ padding: '1.5rem', background: 'rgba(240, 249, 255, 0.4)', border: '1px solid rgba(37, 99, 235, 0.1)', transition: 'transform 0.3s ease', cursor: 'default' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <h4 style={{ color: 'var(--primary-color)', fontSize: '1.2rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <CheckCircle2 size={18} /> {spec.title}
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', margin: 0, lineHeight: '1.6' }}>{spec.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div>
            <div className="section-header">
              <h2 className="section-title">Online Consultation vs. In-Person Visit</h2>
            </div>
            <div style={{ overflowX: 'auto', borderRadius: '1rem', boxShadow: 'var(--shadow-lg)', border: '1px solid #e2e8f0' }}>
              <table style={{ width: '100%', minWidth: '800px', borderCollapse: 'collapse', background: 'white' }}>
                <thead>
                  <tr style={{ background: 'linear-gradient(90deg, var(--primary-color), var(--primary-dark))', color: 'white' }}>
                    <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem', fontWeight: '600' }}>Features</th>
                    <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem', fontWeight: '600' }}>Online Consultation</th>
                    <th style={{ padding: '1.5rem', textAlign: 'left', fontSize: '1.1rem', fontWeight: '600' }}>In-Person Visit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Convenience', 'Attend from home, no travel, flexible scheduling', 'Requires travel, fixed timing'],
                    ['Waiting Time', 'Usually short, instant or same-day slots available', 'Often longer wait required due to clinic queues'],
                    ['Best For', 'Routine issues, follow-ups, mild symptoms, second opinions', 'Conditions needing physical exam, procedures, emergencies'],
                    ['Privacy', 'High levels because the consult happens from private space', 'Moderate, clinic setting involves frequent staff movement'],
                    ['Access to Specialists', 'Wide choice regardless of location', 'Limited to specialists available locally'],
                    ['Documentation', 'Digital prescriptions, ability to store records easily', 'Paper files, user must organise manually'],
                    ['Examination Limits', "Visual assessment only, relies on photos or patient description", 'Full physical exam and diagnostic tools available'],
                    ['Comfort', 'Ideal for anxious patients or those unable to travel', 'Better for those who prefer direct interaction'],
                    ['Cost', 'Often lower consultation fees', 'May include additional clinic charges']
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #f1f5f9', background: i % 2 === 0 ? '#f8fafc' : 'white', transition: 'background 0.2s ease' }} onMouseEnter={(e) => e.currentTarget.style.background = '#f1f5f9'} onMouseLeave={(e) => e.currentTarget.style.background = i % 2 === 0 ? '#f8fafc' : 'white'}>
                      <td style={{ padding: '1.25rem 1.5rem', fontWeight: '700', color: 'var(--primary-dark)' }}>{row[0]}</td>
                      <td style={{ padding: '1.25rem 1.5rem', color: 'var(--primary-color)', fontWeight: '500' }}>{row[1]}</td>
                      <td style={{ padding: '1.25rem 1.5rem', color: 'var(--text-muted)' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Doctors;
