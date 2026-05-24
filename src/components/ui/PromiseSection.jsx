import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const smoothEase = [0.16, 1, 0.3, 1]

export default function PromiseSection() {
  return (
    <section id="promise" className="section promise-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: smoothEase }}
        >
          <motion.div
            className="promise-content"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="promise-divider"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: smoothEase }}
            />
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
            >
              Crafted with Time-Tested <br />
              <span className="text-gold-gradient">Ayurvedic Formulas</span>
            </motion.h2>
            <motion.p 
              className="section-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: smoothEase }}
              style={{ margin: '0 auto 2rem auto' }}
            >
              For thousands of years, Ayurveda has held the secrets to natural beauty and wellness. 
              BhagyaVeda brings these ancient recipes back to life, blending potent botanicals 
              to restore your hair's natural strength and shine without harsh chemicals.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.5, ease: smoothEase }}
            >
              <a href="#how-it-works" className="btn btn-primary" style={{ padding: '0.9rem 2rem', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 600 }}>
                Discover the Secret 
                <ArrowRight size={18} style={{ transition: 'transform 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(4px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'} />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
