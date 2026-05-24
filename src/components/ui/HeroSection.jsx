import { motion } from 'framer-motion'

// Premium easing curve — fast start, gentle settle
const smoothEase = [0.16, 1, 0.3, 1]

export default function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
        >
          <motion.div className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35, ease: smoothEase }}
          >
            Premium Ayurvedic Hair Care
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: smoothEase }}
          >
            <span className="hero-title-word hero-title-word-primary">Bhagya</span>
            <span className="hero-title-word hero-title-word-accent">Veda</span>
            <br />
            <span className="hero-subtitle">The Science of Ancient Hair Healing</span>
          </motion.h1>
          
          <motion.p 
            className="hero-text"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: smoothEase }}
          >
            Stronger Roots. Less Hair Fall. Naturally Beautiful Hair.
          </motion.p>
          


        </motion.div>
      </div>
    </section>
  )
}
