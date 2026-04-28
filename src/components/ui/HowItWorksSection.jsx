import { motion } from 'framer-motion'
import { useRef } from 'react'

const smoothEase = [0.16, 1, 0.3, 1]

const steps = [
  { num: "01", title: "Apply Oil", desc: "Take a few drops of Bhagya Veda oil on your palms." },
  { num: "02", title: "Massage Scalp", desc: "Gently massage into the scalp using circular motions for 10 mins." },
  { num: "03", title: "Deep Absorption", desc: "Leave it overnight or at least 2 hours for maximum nutrient absorption." },
  { num: "04", title: "Visible Results", desc: "Wash with a mild cleanser and experience softer, stronger hair." }
]

export default function HowItWorksSection() {
  const containerRef = useRef(null)
  
  return (
    <section id="how-it-works" className="section how-it-works-section" ref={containerRef}>
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: smoothEase }}
        >
          The Ritual of <span className="text-gold">Healing</span>
        </motion.h2>

        <div className="steps-container">
          {/* Animated progress line */}
          <motion.div
            className="steps-progress-line"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: smoothEase, delay: 0.3 }}
          />
          
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.15, ease: smoothEase }}
            >
              <motion.div 
                className="step-num text-gold"
                whileInView={{ scale: [0.5, 1.15, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              >
                {step.num}
              </motion.div>
              <motion.div 
                className="step-content glass"
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
