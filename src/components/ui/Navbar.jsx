import { motion } from 'framer-motion'
import { Menu, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return (
    <motion.nav
      className="navbar glass-dark"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="BhagyaVeda" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
        </div>

        <div className="nav-links">
          <a href="#promise">Our Promise</a>
          <a href="#ingredients">Ingredients</a>
          <a href="#benefits">Benefits</a>
          <a href="#sizes">Sizes</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#testimonials">Reviews</a>
        </div>

        <div className="nav-actions">
          <a href="#sizes" className="icon-btn" aria-label="View available sizes" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ShoppingBag size={20} />
          </a>
          <button className="icon-btn mobile-only" aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
