import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Verified Buyer",
    text: "I've tried countless hair oils, but Bhagya Veda is something else. My hair fall reduced significantly within a month.",
    rating: 5
  },
  {
    name: "Rohan Desai",
    role: "Verified Buyer",
    text: "The smell is divine, very natural. It doesn't feel sticky and washes off easily. Highly recommend!",
    rating: 5
  },
  {
    name: "Priya Patel",
    role: "Verified Buyer",
    text: "My mother suggested Ayurvedic oils, and this one feels truly authentic. Added a beautiful shine to my dull hair.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Loved by <span className="text-gold">Thousands</span>
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              className="testimonial-card glass"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="stars flex mb-4 text-gold">
                {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="testimonial-text">"{item.text}"</p>
              <div className="testimonial-author mt-6">
                <h4>{item.name}</h4>
                <span className="text-sm opacity-70">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
