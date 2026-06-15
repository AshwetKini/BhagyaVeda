import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const smoothEase = [0.16, 1, 0.3, 1]

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: '100% Natural',
    description: 'Every ingredient is sourced directly from nature — no chemicals, no synthetic additives, no compromise.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: 'Customer First',
    description: 'We listen, we learn, and we create products that genuinely solve real hair concerns.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: 'Ancient Wisdom',
    description: 'Rooted in centuries-old Ayurvedic texts and time-tested formulations passed down through generations.'
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'Made with Love',
    description: 'Each bottle is crafted with care using our proprietary slow-infusion process for maximum potency.'
  }
]

const milestones = [
  { year: '2023', title: 'The Seed', description: 'Ashwini Tandel began researching ancient Ayurvedic hair remedies, driven by a personal quest for natural solutions.' },
  { year: '2024', title: 'The Formula', description: 'After months of research and testing, the signature BhagyaVeda formulation was perfected using cold-pressed oils and rare herbs.' },
  { year: '2024', title: 'The Launch', description: 'BhagyaVeda launched with a single product — a premium Ayurvedic hair oil — and received overwhelming love from its first customers.' },
  { year: '2025', title: 'Growing Trust', description: 'Over 1,200+ happy customers and counting. BhagyaVeda became a trusted name in natural hair care across India.' }
]

export default function AboutPage() {
  const navigate = useNavigate()

  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay" />
        <img src="/faqimage.png" alt="BhagyaVeda" className="about-hero-img" />
        <div className="about-hero-content">
          <motion.button
            className="about-back-btn"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </motion.button>
          <motion.h1
            className="about-hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
          >
            Our <span className="text-gold">Story</span>
          </motion.h1>
          <motion.p
            className="about-hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
          >
            Where ancient Ayurvedic wisdom meets modern hair science.
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-mission-layout">
            <motion.div
              className="about-mission-content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              <span className="about-label">Our Mission</span>
              <h2 className="about-section-title">
                Bringing the Power of <span className="text-gold">Ayurveda</span> to Every Home
              </h2>
              <p className="about-text">
                At BhagyaVeda, we believe that the answer to modern hair problems lies in ancient wisdom. 
                Our mission is to make authentic, premium-quality Ayurvedic hair care accessible to everyone — 
                without the synthetic chemicals, without the false promises.
              </p>
              <p className="about-text">
                Every drop of BhagyaVeda oil is a tribute to the timeless knowledge of Indian herbalism, 
                carefully crafted to nourish your hair from root to tip, the way nature intended.
              </p>
            </motion.div>
            <motion.div
              className="about-mission-stats"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            >
              <div className="about-stat">
                <span className="about-stat-number">1,200+</span>
                <span className="about-stat-label">Happy Customers</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">100%</span>
                <span className="about-stat-label">Natural Ingredients</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">4.9★</span>
                <span className="about-stat-label">Average Rating</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">15+</span>
                <span className="about-stat-label">Ayurvedic Herbs</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="about-section about-section-alt">
        <div className="container">
          <div className="about-founder-layout">
            <motion.div
              className="about-founder-image"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              <img 
                src="/ashwini-tandel.png" 
                alt="Ashwini Tandel" 
                className="about-founder-img"
                style={{ display: 'none' }}
                onLoad={(e) => {
                  e.target.style.display = 'block';
                  const placeholder = e.target.nextElementSibling;
                  if (placeholder) {
                    placeholder.style.setProperty('display', 'none', 'important');
                  }
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = e.target.nextElementSibling;
                  if (placeholder) {
                    placeholder.style.setProperty('display', 'flex', 'important');
                  }
                }}
              />
              <div className="about-founder-placeholder">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span className="founder-initials">AT</span>
              </div>
            </motion.div>
            <motion.div
              className="about-founder-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: smoothEase }}
            >
              <span className="about-label">Meet the Founder</span>
              <h2 className="about-section-title">Ashwini Tandel</h2>
              <p className="about-founder-role">Founder &amp; Visionary, BhagyaVeda</p>
              <p className="about-text">
                Growing up surrounded by the rich traditions of Indian herbalism, Ashwini Tandel witnessed firsthand 
                how natural remedies could transform hair health. After years of seeing people struggle with hair fall, 
                thinning, and damage caused by chemical-laden products, she decided to create something different.
              </p>
              <p className="about-text">
                BhagyaVeda was born from Ashwini's deep passion for Ayurveda and her unwavering commitment to purity. 
                She personally oversees the sourcing of every herb, the cold-pressing of every oil, and the formulation 
                of every batch — ensuring that each bottle lives up to the promise of authentic, premium Ayurvedic care.
              </p>
              <blockquote className="about-quote">
                "I didn't just want to create another hair oil. I wanted to bring back the ancient healing wisdom 
                that our grandmothers trusted — in a form that's pure, powerful, and made for today."
                <cite>— Ashwini Tandel</cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="about-values-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <span className="about-label">What We Stand For</span>
            <h2 className="about-section-title text-center">Our Core Values</h2>
          </motion.div>
          <div className="about-values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="about-value-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index, ease: smoothEase }}
              >
                <div className="about-value-icon">{value.icon}</div>
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-desc">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="about-section about-section-alt">
        <div className="container">
          <motion.div
            className="about-values-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <span className="about-label">Our Journey</span>
            <h2 className="about-section-title text-center">The BhagyaVeda Timeline</h2>
          </motion.div>
          <div className="about-timeline">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                className="about-timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 * index, ease: smoothEase }}
              >
                <div className="about-timeline-marker">
                  <span className="about-timeline-year">{item.year}</span>
                  <div className="about-timeline-dot" />
                </div>
                <div className="about-timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-section">
        <div className="container">
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
          >
            <h2 className="about-cta-title">
              Experience the <span className="text-gold">BhagyaVeda</span> Difference
            </h2>
            <p className="about-cta-text">
              Join thousands who have already discovered the power of authentic Ayurvedic hair care.
            </p>
            <div className="about-cta-actions">
              <a href="/#ingredients" className="btn btn-primary btn-glow">
                Explore Our Ingredients
              </a>
              <button className="btn btn-outline" onClick={() => navigate('/')}>
                Back to Home
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
