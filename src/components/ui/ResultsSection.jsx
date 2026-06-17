import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, TrendingUp, Sparkles, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'

const smoothEase = [0.16, 1, 0.3, 1]

const results = [
  {
    id: 1,
    title: "Female Pattern Baldness",
    subtitle: "Partition Widening",
    stats: "+42% Density",
    day0: "/results/indian_hair_part_day0.png",
    day90: "/results/indian_hair_part_day90.png"
  },
  {
    id: 2,
    title: "Hairline Receding",
    subtitle: "Temple Area",
    stats: "+38% Regrowth",
    day0: "/results/indian_hair_temple_day0.png",
    day90: "/results/indian_hair_temple_day90.png"
  },
  {
    id: 3,
    title: "Overall Thinning",
    subtitle: "Crown Area",
    stats: "+50% Volume",
    day0: "/results/indian_hair_crown_day0.png",
    day90: "/results/indian_hair_crown_day90.png"
  },
  {
    id: 4,
    title: "Postpartum Hair Loss",
    subtitle: "Frontal Hairline",
    stats: "+60% New Baby Hairs",
    day0: "/results/indian_female_postpartum_day0.png",
    day90: "/results/indian_female_postpartum_day90.png"
  }
]

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [touchStartX, setTouchStartX] = useState(0)
  const [touchEndX, setTouchEndX] = useState(0)

  // Autoplay functionality
  useEffect(() => {
    if (isHovering) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % results.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isHovering])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
  }

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return
    const diffX = touchStartX - touchEndX
    const swipeThreshold = 50 // Minimum distance in pixels
    if (diffX > swipeThreshold) {
      nextSlide()
    } else if (diffX < -swipeThreshold) {
      prevSlide()
    }
    // reset
    setTouchStartX(0)
    setTouchEndX(0)
  }

  return (
    <section id="results" className="section results-section">
      {/* Animated Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-gold/10 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-gold/10 blur-[100px]" 
        />
      </div>

      <div className="container relative z-10">
        <div className="results-layout">
          
          {/* Left Content */}
          <div className="results-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="clinically-proven-badge"
            >
              <Sparkles size={16} className="text-gold" />
              <span className="clinically-proven-text">Clinically Proven</span>
            </motion.div>

            <motion.h2 
              className="results-title"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              WHAT <span className="results-title-highlight">90 Days</span> OF <span className="results-title-bold">CONSISTENT</span> USE LOOKS LIKE
            </motion.h2>
             <motion.p
              className="results-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: smoothEase }}
            >
              Experience the transformative power of Ayurvedic science. Watch your hair regain its natural density, strength, and vibrant health.
            </motion.p>
          </div>

          {/* Right Carousel Content */}
          <div 
            className="results-carousel-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="results-carousel-viewport">
              <motion.div 
                className="results-carousel-track"
                onPanEnd={(e, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    nextSlide();
                  } else if (info.offset.x > swipeThreshold) {
                    prevSlide();
                  }
                }}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {results.map((item) => (
                  <div key={item.id} className="results-slide">
                    <div className="result-card glass-premium">
                      
                      {/* Premium Card Header */}
                      <div className="result-card-header">
                        <div>
                          <h3 className="result-card-title">{item.title}</h3>
                          <p className="result-card-subtitle">{item.subtitle}</p>
                        </div>
                        <div className="verified-badge">
                          <CheckCircle2 size={14} />
                          <span className="verified-text">Verified</span>
                        </div>
                      </div>
                      
                      <div className="result-images">
                        {/* Day 0 Image */}
                        <div className="result-image-wrapper">
                          <img 
                            src={item.day0} 
                            alt="Day 0 Result" 
                            className="result-image"
                            draggable="false"
                          />
                          <div className="result-image-overlay" />
                          <div className="result-image-badge">
                            <Calendar size={14} style={{ opacity: 0.7 }} />
                            <span>Day 0</span>
                          </div>
                        </div>

                        {/* Day 90 Image */}
                        <div className="result-image-wrapper" style={{ marginTop: '1rem' }}>
                          <img 
                            src={item.day90} 
                            alt="Day 90 Result" 
                            className="result-image"
                            draggable="false"
                          />
                          <div className="result-image-overlay-glow" />
                          
                          {/* High-tech Scanning Reticle */}
                          <div className="result-target-circle">
                            <div className="reticle-line-h"></div>
                            <div className="reticle-line-v"></div>
                          </div>
                          
                          <div className="result-image-badge highlight">
                            <Calendar size={14} style={{ opacity: 0.9 }} />
                            <span>90 Days</span>
                          </div>

                          {/* Floating Stat Chip */}
                          <motion.div 
                            className="floating-stat-chip"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                          >
                            <TrendingUp size={16} className="stat-icon" />
                            <span className="floating-stat-text">{item.stats}</span>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Pagination Indicators */}
            <div className="results-pagination">
              {results.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`pagination-dot ${idx === currentIndex ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
