import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const smoothEase = [0.16, 1, 0.3, 1]

const results = [
  {
    id: 1,
    title: "Female Pattern Baldness - Partition Widening",
    day0: "/results/hair_day_0.png",
    day90: "/results/hair_day_90.png"
  },
  {
    id: 2,
    title: "Hairline Receding - Temple Area",
    day0: "/results/hair_day_0.png",
    day90: "/results/hair_day_90.png"
  },
  {
    id: 3,
    title: "Overall Thinning - Crown Area",
    day0: "/results/hair_day_0.png",
    day90: "/results/hair_day_90.png"
  }
]

export default function ResultsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % results.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + results.length) % results.length)
  }

  return (
    <section id="results" className="section results-section">
      <div className="container">
        <div className="results-layout">
          
          {/* Left Content */}
          <div className="results-content">
            <motion.h2 
              className="results-title"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              WHAT <span className="text-gold">90 DAYS</span> OF<br />
              <span className="text-gold">CONSISTENT</span> USE<br />
              LOOKS LIKE
            </motion.h2>
            <motion.p
              className="results-text"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: smoothEase }}
            >
              Real people, real results. See the transformative power of our Ayurvedic formulation with consistent application over 3 months.
            </motion.p>
            
            <motion.div 
              className="results-nav"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            >
              <button 
                onClick={prevSlide}
                className="carousel-btn"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={nextSlide}
                className="carousel-btn"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          </div>

          {/* Right Carousel Content */}
          <div className="results-carousel-container">
            <div className="results-carousel-viewport">
              <motion.div 
                className="results-carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {results.map((item) => (
                  <div key={item.id} className="results-slide">
                    <div className="result-card glass">
                      <h3 className="result-card-title">
                        {item.title}
                      </h3>
                      
                      <div className="result-images">
                        {/* Day 0 Image */}
                        <div className="result-image-wrapper">
                          <img 
                            src={item.day0} 
                            alt="Day 0 Result" 
                            className="result-image"
                          />
                          <div className="result-image-overlay" />
                          <div className="result-image-label">
                            <span>Day 0</span>
                          </div>
                        </div>

                        {/* Day 90 Image */}
                        <div className="result-image-wrapper">
                          <img 
                            src={item.day90} 
                            alt="Day 90 Result" 
                            className="result-image"
                          />
                          <div className="result-image-overlay" />
                          <div className="result-target-circle"></div>
                          <div className="result-image-label">
                            <span>90 Days</span>
                          </div>
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
