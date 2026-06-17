import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Star, CheckCircle2, TrendingUp, Users, MessageCircle } from 'lucide-react'

const smoothEase = [0.16, 1, 0.3, 1]

const testimonialsRow1 = [
  {
    name: "Anjali Sharma",
    role: "Verified Buyer",
    text: "I've tried countless hair oils, but BhagyaVeda is something else. My hair fall reduced significantly within a month.",
    rating: 5,
    location: "Mumbai",
    avatar: "/reviews/avatar_f1.png"
  },
  {
    name: "Rohan Desai",
    role: "Verified Buyer",
    text: "The smell is divine, very natural. It doesn't feel sticky and washes off easily. Highly recommend!",
    rating: 5,
    location: "Bangalore",
    avatar: "/reviews/avatar_m1.png"
  },
  {
    name: "Priya Patel",
    role: "Verified Buyer",
    text: "My mother suggested Ayurvedic oils, and this one feels truly authentic. Added a beautiful shine to my dull hair.",
    rating: 5,
    location: "Ahmedabad",
    avatar: "/reviews/avatar_f2.png"
  },
  {
    name: "Vikram Singh",
    role: "Verified Buyer",
    text: "Noticeable difference in hair density. The herbs really work. I use it twice a week consistently.",
    rating: 5,
    location: "Delhi",
    avatar: "/reviews/avatar_m2.png"
  }
];

const testimonialsRow2 = [
  {
    name: "Meera Reddy",
    role: "Verified Buyer",
    text: "Postpartum hair loss was destroying my confidence. BhagyaVeda brought my baby hairs back in 3 months!",
    rating: 5,
    location: "Hyderabad",
    avatar: "/reviews/avatar_f3.png"
  },
  {
    name: "Arjun Nair",
    role: "Verified Buyer",
    text: "My receding hairline has visibly improved. It's the only product that delivered actual results without chemicals.",
    rating: 5,
    location: "Kochi",
    avatar: "/reviews/avatar_m3.png"
  },
  {
    name: "Sneha Gupta",
    role: "Verified Buyer",
    text: "Best investment for my hair. The texture is smoother, and I see less hair on my comb every morning.",
    rating: 5,
    location: "Pune",
    avatar: "/reviews/avatar_f4.png" 
  },
  {
    name: "Aditi Lad",
    role: "Verified Buyer",
    text: "I was dealing with severe thinning at the crown. After two months of BhagyaVeda, the difference is honestly unbelievable.",
    rating: 5,
    location: "Mumbai",
    avatar: "https://ui-avatars.com/api/?name=Aditi+Lad&background=D4AF37&color=fff&size=150&font-size=0.4"
  },
  {
    name: "Ruchi Patil",
    role: "Verified Buyer",
    text: "The absolute best oil for daily massage. My roots feel so much stronger and my scalp is no longer dry.",
    rating: 5,
    location: "Virar",
    avatar: "https://ui-avatars.com/api/?name=Ruchi+Patil&background=122f1f&color=fff&size=150&font-size=0.4"
  },
  {
    name: "Aditi Kini",
    role: "Verified Buyer",
    text: "The authentic Ayurvedic formulation really makes a difference. I've recommended this to all my friends and family.",
    rating: 5,
    location: "Nallasopara",
    avatar: "/reviews/adi.jpeg"
  },
  {
    name: "Darshana Bhamre",
    role: "Verified Buyer",
    text: "Visible results in hair density and shine. It's completely non-sticky and smells like pure, natural herbs.",
    rating: 5,
    location: "Vasai",
    avatar: "/reviews/bhamre.jpg"
  }
];

// Duplicate arrays for infinite scroll effect
const row1 = [...testimonialsRow1, ...testimonialsRow1];
const row2 = [...testimonialsRow2, ...testimonialsRow2];

function Counter({ from, to }) {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString())
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (inView) {
      animate(count, to, { 
        duration: 2.5, 
        ease: [0.16, 1, 0.3, 1] // Snappy but smooth "professional" easing
      })
    }
  }, [count, inView, to])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials-section">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-gold/10 blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.25, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gold/15 blur-[120px]" 
        />
      </div>

      <div className="container relative z-10">
        
        {/* Header Section */}
        <div className="testimonials-header text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 mb-6"
          >
            <Users size={16} className="text-gold" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">Community Trusted</span>
          </motion.div>

          <motion.h2 
            className="section-title mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: smoothEase }}
          >
            Loved by <span className="text-gold italic font-serif shimmer-text">Thousands</span>
          </motion.h2>

          {/* Social Proof Stats */}
          <motion.div 
            className="testimonials-stats"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
          >
            <div className="stat-item">
              <div className="stars flex justify-center text-gold mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <span className="stat-value">4.9/5</span>
              <span className="stat-label">Average Rating</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-icon-wrapper mb-2">
                <TrendingUp size={24} className="text-green-500 mx-auto" />
              </div>
              <span className="stat-value"><Counter from={8500} to={12500} />+</span>
              <span className="stat-label">Bottles Sold</span>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-icon-wrapper mb-2">
                <CheckCircle2 size={24} className="text-gold mx-auto" />
              </div>
              <span className="stat-value"><Counter from={50} to={96} />%</span>
              <span className="stat-label">Repurchase Rate</span>
            </div>
          </motion.div>

          {/* Interactive Button */}
          <motion.a
            href="https://wa.me/918369527382?text=Hi%20BhagyaVeda%2C%20I%20want%20to%20share%20my%20hair%20journey%20and%20review!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-glow mt-8 inline-flex"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Journey
          </motion.a>
        </div>
      </div>

      {/* Marquee Container (Full Width) */}
      <div className="marquee-wrapper relative z-10">
          {/* Row 1 (Moving Left) */}
          <div className="marquee-row">
            <div className="marquee-track track-left">
              {row1.map((item, index) => (
                <div key={`row1-${index}`} className="review-card glass-premium">
                  <div className="review-header">
                    <img src={item.avatar} alt={item.name} className="review-avatar" />
                    <div className="review-meta">
                      <h4 className="review-name">{item.name}</h4>
                      <div className="verified-badge-small">
                        <CheckCircle2 size={12} />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="stars flex text-gold mb-3">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="review-text">"{item.text}"</p>
                  <span className="review-location">{item.location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 (Moving Right) */}
          <div className="marquee-row mt-6">
            <div className="marquee-track track-right">
              {row2.map((item, index) => (
                <div key={`row2-${index}`} className="review-card glass-premium">
                  <div className="review-header">
                    <img src={item.avatar} alt={item.name} className="review-avatar" />
                    <div className="review-meta">
                      <h4 className="review-name">{item.name}</h4>
                      <div className="verified-badge-small">
                        <CheckCircle2 size={12} />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="stars flex text-gold mb-3">
                    {[...Array(item.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <p className="review-text">"{item.text}"</p>
                  <span className="review-location">{item.location}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
    </section>
  )
}
