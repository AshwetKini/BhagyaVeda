import { motion } from 'framer-motion'

export default function PromiseSection() {
  return (
    <section id="promise" className="section promise-section">
      <div className="container">
        <motion.div 
          className="promise-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="section-title">
            Crafted with Time-Tested <br />
            <span className="text-gold">Ayurvedic Formulas</span>
          </h2>
          <p className="section-text">
            For thousands of years, Ayurveda has held the secrets to natural beauty and wellness. 
            Bhagya Veda brings these ancient recipes back to life, blending potent botanicals 
            to restore your hair's natural strength and shine without harsh chemicals.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
