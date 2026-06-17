import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

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
                    <svg
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      fill="currentColor"
                      style={{ display: 'inline-block' }}
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
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
