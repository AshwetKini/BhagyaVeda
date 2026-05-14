import { motion } from 'framer-motion'

const smoothEase = [0.16, 1, 0.3, 1]

export default function PromiseSection() {
  return (
    <section id="promise" className="section promise-section">
      <div className="container">
        <motion.div 
          className="promise-content"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: smoothEase }}
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
            <span className="text-gold">Ayurvedic Formulas</span>
          </motion.h2>
          <motion.p 
            className="section-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: smoothEase }}
          >
            For thousands of years, Ayurveda has held the secrets to natural beauty and wellness. 
            BhagyaVeda brings these ancient recipes back to life, blending potent botanicals 
            to restore your hair's natural strength and shine without harsh chemicals.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
