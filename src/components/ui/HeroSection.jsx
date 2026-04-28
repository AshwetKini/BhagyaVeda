import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="section hero-section">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Bhagya Veda <br />
            <span className="hero-subtitle">The Science of Ancient Hair Healing</span>
          </motion.h1>
          
          <motion.p 
            className="hero-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Stronger Roots. Less Hair Fall. Naturally Beautiful Hair.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button className="btn btn-primary btn-glow">
              Shop Now
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
