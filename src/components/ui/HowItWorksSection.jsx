import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  { num: "01", title: "Apply Oil", desc: "Take a few drops of Bhagya Veda oil on your palms." },
  { num: "02", title: "Massage Scalp", desc: "Gently massage into the scalp using circular motions for 10 mins." },
  { num: "03", title: "Deep Absorption", desc: "Leave it overnight or at least 2 hours for maximum nutrient absorption." },
  { num: "04", title: "Visible Results", desc: "Wash with a mild cleanser and experience softer, stronger hair." }
]

export default function HowItWorksSection() {
  const containerRef = useRef(null)
  
  return (
    <section className="section how-it-works-section" ref={containerRef}>
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The Ritual of <span className="text-gold">Healing</span>
        </motion.h2>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="step-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="step-num text-gold">{step.num}</div>
              <div className="step-content glass">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
