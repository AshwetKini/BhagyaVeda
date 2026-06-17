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
            <span className="text-gold">BhagyaVeda</span>
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
            <h3 className="footer-logo">BhagyaVeda</h3>
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
            <div className="social-links flex gap-4 mt-4">
              <a 
                href="https://www.instagram.com/bhagyaveda__0115/" 
                className="icon-link" 
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 1.9A3.9 3.9 0 0 0 3.9 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.4a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9H7.8Zm8.95 1.45a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z"
                  />
                </svg>
              </a>
              <a 
                href="https://www.facebook.com/share/1Cm4mR58qL/" 
                className="icon-link" 
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.6c0-.9.3-1.6 1.7-1.6h1.8V4.1c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7v2h-3v3.2h3V22h3.7Z"
                  />
                </svg>
              </a>
              <a href="#" className="icon-link" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M18.9 3h2.9l-6.3 7.2L23 21h-6l-4.7-6.2L6.8 21H3.9l6.7-7.7L1 3h6.1l4.2 5.6L18.9 3Zm-1 16.2h1.6L6.2 4.7H4.5l13.4 14.5Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BhagyaVeda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
