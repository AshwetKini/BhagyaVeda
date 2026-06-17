import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Check } from 'lucide-react'

const smoothEase = [0.16, 1, 0.3, 1]

const bottleSizes = [
  {
    id: '50ml',
    size: '50ml',
    name: 'Travel & Trial Pack',
    description: 'Perfect for first-time users looking to experience our traditional formula, or as a compact companion for your travels.',
    duration: 'Lasts approx. 10-15 days',
    features: [
      'TSA-friendly travel size',
      'Perfect for testing scalp compatibility',
      'Leak-proof flip-cap design',
      'Ideal for active, on-the-go lifestyles'
    ],
    whatsappMsg: 'Hi BhagyaVeda, I would like to order the 50ml Travel & Trial pack of Premium Ayurvedic Hair Oil.',
    badge: 'Starter'
  },
  {
    id: '100ml',
    size: '100ml',
    name: 'Daily Nourishment Pack',
    description: 'Our signature and most popular size. Carefully measured to complete a full 30-day hair restoration cycle.',
    duration: 'Lasts approx. 25-30 days',
    features: [
      'Standard restoration course size',
      'Gold foil premium detailing',
      'Optimized dropper compatibility',
      'Most recommended by hair specialists'
    ],
    whatsappMsg: 'Hi BhagyaVeda, I would like to order the 100ml Daily Nourishment pack of Premium Ayurvedic Hair Oil.',
    badge: 'Most Popular',
    popular: true
  },
  {
    id: '200ml',
    size: '200ml',
    name: 'Family & Deep Therapy Pack',
    description: 'The ultimate value pack designed for long-term consistency. Perfect for advanced therapies or family use.',
    duration: 'Lasts approx. 50-60 days',
    features: [
      'Best value per ml',
      'Ideal for severe hair fall regimes',
      'Perfect for shared family use',
      'Saves packaging waste'
    ],
    whatsappMsg: 'Hi BhagyaVeda, I would like to order the 200ml Family & Deep Therapy pack of Premium Ayurvedic Hair Oil.',
    badge: 'Best Value',
    bestValue: true
  }
]

export default function ProductSizesSection() {
  const [selectedSize, setSelectedSize] = useState('100ml')
  const activeSize = bottleSizes.find(b => b.id === selectedSize)

  return (
    <section id="sizes" className="section sizes-section">
      <div className="container">
        
        {/* Header */}
        <div className="section-header text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: smoothEase }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
          >
            <div style={{ height: '2px', width: '40px', background: 'var(--color-accent)' }}></div>
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 700 }}>Choose Your Size</span>
            <div style={{ height: '2px', width: '40px', background: 'var(--color-accent)' }}></div>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
          >
            Sizes Tailored to Your <span className="text-gold">Lifestyle</span>
          </motion.h2>
          
          <motion.p 
            className="section-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            style={{ margin: '0 auto' }}
          >
            From your travel kit to your vanity counter, discover the perfect BhagyaVeda size for your hair care routine.
          </motion.p>
        </div>

        {/* Layout Grid */}
        <div className="sizes-grid">
          
          {/* Left Column: Image Showcase */}
          <motion.div 
            className="sizes-image-showcase"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: smoothEase }}
          >
            <div className="image-frame">
              <img 
                src="/bottles.jpg" 
                alt="BhagyaVeda Ayurvedic Hair Oil Bottle Sizes: 50ml, 100ml, 200ml" 
                className="bottles-image"
              />
              <div className="gold-vignette"></div>
              
              {/* Highlight Overlay/Badge corresponding to selected size */}
              <div className="size-highlight-overlay">
                <span className="highlight-tag">{activeSize.size} - {activeSize.badge}</span>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Size Selector & Details */}
          <div className="sizes-selector-details">
            
            {/* Size Tabs Selector */}
            <div className="size-selector-tabs">
              {bottleSizes.map((bottle) => (
                <button
                  key={bottle.id}
                  className={`size-tab-btn ${selectedSize === bottle.id ? 'active' : ''}`}
                  onClick={() => setSelectedSize(bottle.id)}
                >
                  <span className="tab-size-label">{bottle.size}</span>
                  <span className="tab-badge-label">{bottle.badge}</span>
                </button>
              ))}
            </div>

            {/* Selected Size Details Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSize}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: smoothEase }}
                className="size-details-card glass"
              >
                <div className="card-header">
                  <div className="title-row">
                    <span className="size-label-large">{activeSize.badge}</span>
                    <h3 className="size-name">{activeSize.name}</h3>
                  </div>
                  <span className="duration-tag">{activeSize.duration}</span>
                </div>
                
                <p className="size-description">{activeSize.description}</p>
                
                <div className="features-list">
                  <h4 className="features-title">Highlights:</h4>
                  <ul>
                    {activeSize.features.map((feature, index) => (
                      <li key={index}>
                        <Check size={16} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-cta">
                  <a
                    href={`https://wa.me/919763567410?text=${encodeURIComponent(activeSize.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-glow w-full animate-hover"
                    style={{ width: '100%', gap: '0.75rem' }}
                  >
                    <MessageCircle size={20} />
                    <span>Order {activeSize.size} on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  )
}
