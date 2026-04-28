import { motion } from 'framer-motion'

const smoothEase = [0.16, 1, 0.3, 1]

export default function Footer() {
  return (
    <footer className="footer ui-layer glass-dark">
      <div className="container">
        <div id="footer-cta" className="footer-cta text-center mb-16">
          <motion.h2 
            className="section-title text-bg mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: smoothEase }}
          >
            Experience the Power of <br />
            <span className="text-gold">Bhagya Veda</span>
          </motion.h2>
          <motion.a
            href="#ingredients"
            className="btn btn-primary btn-glow btn-large"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Shop Now
          </motion.a>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Bhagya Veda</h3>
            <p>Ancient Wisdom. Modern Luxury.</p>
          </div>
          
          <div className="footer-links">
            <h4>Shop</h4>
            <a href="#">Hair Oil</a>
            <a href="#">Bundles</a>
            <a href="#">Gift Sets</a>
          </div>

          <div className="footer-links">
            <h4>About</h4>
            <a href="#">Our Story</a>
            <a href="#">Ingredients</a>
            <a href="#">Sustainability</a>
          </div>

          <div className="footer-socials">
            <h4>Follow Us</h4>
            <div className="flex gap-4 mt-4">
              <a href="#" className="icon-link">IG</a>
              <a href="#" className="icon-link">FB</a>
              <a href="#" className="icon-link">X</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Bhagya Veda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
