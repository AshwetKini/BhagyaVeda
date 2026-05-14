import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const smoothEase = [0.16, 1, 0.3, 1]

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Verified Buyer",
    text: "I've tried countless hair oils, but BhagyaVeda is something else. My hair fall reduced significantly within a month.",
    rating: 5,
    location: "Mumbai"
  },
  {
    name: "Rohan Desai",
    role: "Verified Buyer",
    text: "The smell is divine, very natural. It doesn't feel sticky and washes off easily. Highly recommend!",
    rating: 5,
    location: "Bangalore"
  },
  {
    name: "Priya Patel",
    role: "Verified Buyer",
    text: "My mother suggested Ayurvedic oils, and this one feels truly authentic. Added a beautiful shine to my dull hair.",
    rating: 5,
    location: "Ahmedabad"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <motion.h2 
          className="section-title text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: smoothEase }}
        >
          Loved by <span className="text-gold">Thousands</span>
        </motion.h2>

        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 50, scale: 0.92, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: smoothEase }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">{item.text}</p>
              <div className="stars flex mb-4 text-gold mt-6">
                {[...Array(item.rating)].map((_, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + i * 0.05 + 0.3, type: "spring", stiffness: 500 }}
                  >
                    <Star size={16} fill="currentColor" />
                  </motion.span>
                ))}
              </div>
              <div className="testimonial-author mt-6">
                <h4>{item.name}</h4>
                <span className="testimonial-location">{item.location}</span>
                <span className="testimonial-role">{item.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
