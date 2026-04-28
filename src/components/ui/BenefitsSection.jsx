import { motion } from 'framer-motion'
import { ShieldCheck, Activity, Feather, Sparkle } from 'lucide-react'

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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            The Bhagya Veda <span className="text-gold">Advantage</span>
          </motion.h2>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="benefit-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            >
              <div className="benefit-icon-wrapper mb-6">
                {benefit.icon}
              </div>
              <h3 className="benefit-title">{benefit.title}</h3>
              <p className="benefit-text">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
