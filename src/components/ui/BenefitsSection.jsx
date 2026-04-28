import { motion } from 'framer-motion'
import { ShieldCheck, Activity, Feather, Sparkle } from 'lucide-react'

const smoothEase = [0.16, 1, 0.3, 1]

const benefits = [
  {
    title: "Reduces Hair Fall",
    text: "Strengthens hair follicles from within to significantly reduce shedding.",
    icon: <ShieldCheck size={32} className="text-gold" />
  },
  {
    title: "Boosts Hair Growth",
    text: "Stimulates dormant follicles to encourage new, healthy hair growth.",
    icon: <Activity size={32} className="text-gold" />
  },
  {
    title: "Strengthens Roots",
    text: "Deep penetration nourishes the scalp and fortifies roots.",
    icon: <Feather size={32} className="text-gold" />
  },
  {
    title: "Adds Natural Shine",
    text: "Smooths the hair cuticle for a vibrant, lustrous finish.",
    icon: <Sparkle size={32} className="text-gold" />
  }
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section benefits-section">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: smoothEase }}
          >
            The Bhagya Veda <span className="text-gold">Advantage</span>
          </motion.h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card glass"
              initial={{ opacity: 0, y: 60, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: smoothEase }}
              whileHover={{ 
                y: -12, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <motion.div 
                className="benefit-icon-wrapper mb-6"
                whileHover={{ scale: 1.15, rotate: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {benefit.icon}
              </motion.div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-text">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
