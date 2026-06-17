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
    features: [
      'Perfect for testing scalp & formula compatibility',
      'Travel-friendly, lightweight design',
      'Leak-proof cap prevents accidental spills',
      'Perfect entry point to try the Ayurvedic formula'
    ],
    whatsappMsg: 'Hi BhagyaVeda, I would like to order the 50ml Travel & Trial pack of Premium Ayurvedic Hair Oil.',
    badge: 'Starter'
  },
  {
    id: '100ml',
    size: '100ml',
    name: 'Daily Nourishment Pack',
    description: 'Our signature and most popular size. Carefully measured to complete a full 30-day hair restoration cycle.',
    features: [
      'Recommended standard course for active hair fall control',
      'Infused with premium Bhringraj, Amla & Neem',
      'Precision dropper ensures direct-to-root absorption',
      'Highly recommended by hair care specialists'
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
    features: [
      'Best value pack with maximum savings',
      'Ideal for severe hair fall regimes',
      'Perfect for shared family use',
      'Ensures uninterrupted consistency for best results'
    ],
    whatsappMsg: 'Hi BhagyaVeda, I would like to order the 200ml Family & Deep Therapy pack of Premium Ayurvedic Hair Oil.',
    badge: 'Best Value',
    bestValue: true
  }
]

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -12, filter: "blur(2px)" },
  show: { 
    opacity: 1, 
    x: 0, 
    filter: "blur(0px)",
    transition: { type: 'spring', stiffness: 180, damping: 20 } 
  }
}

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
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 700 }}>Select Your Regimen</span>
            <div style={{ height: '2px', width: '40px', background: 'var(--color-accent)' }}></div>
          </motion.div>
          
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
          >
            Sizes Tailored to Your <span className="text-gold">Hair Goals</span>
          </motion.h2>
          
          <motion.p 
            className="section-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: smoothEase }}
            style={{ margin: '0 auto' }}
          >
            From initial compatibility trial to comprehensive hair restoration therapy, select the perfect size to support your consistent hair growth journey.
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
              <motion.div 
                className="size-highlight-overlay"
                initial={false}
                animate={{ 
                  left: selectedSize === '50ml' ? '26%' : selectedSize === '100ml' ? '50%' : '74%',
                  x: '-50%'
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 25 }}
              >
                <span className="highlight-tag">{activeSize.size} - {activeSize.badge}</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column: Size Selector & Details */}
          <div className="sizes-selector-details">
            <div className="details-bg-glow"></div>
            
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
                </div>
                
                <p className="size-description">{activeSize.description}</p>
                
                <div className="features-list">
                  <h4 className="features-title">Highlights</h4>
                  <motion.ul 
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {activeSize.features.map((feature, index) => (
                      <motion.li key={index} variants={itemVariants}>
                        <div className="highlight-icon-wrapper">
                          <Check size={11} className="highlight-check" />
                        </div>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
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
                    <span>Order Now</span>
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
