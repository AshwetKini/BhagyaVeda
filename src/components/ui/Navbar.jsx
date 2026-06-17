import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <motion.nav
      className="navbar glass-dark"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav-container">
        <a 
          href="/" 
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="nav-logo"
        >
          <img src="/logo.png" alt="BhagyaVeda" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
        </a>

        <div className="nav-links">
          <a href="/#promise">Our Promise</a>
          <a href="/#ingredients">Ingredients</a>
          <a href="/#benefits">Benefits</a>
          <a href="/#sizes">Sizes</a>
          <a href="/#how-it-works">How It Works</a>
          <a href="/#testimonials">Reviews</a>
        </div>

        <div className="nav-actions">
          <a href="/#sizes" className="icon-btn" aria-label="View available sizes" style={{ display: 'inline-flex', alignItems: 'center' }}>
            <ShoppingBag size={20} />
          </a>
          <button 
            className="icon-btn mobile-only" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-links">
              <a href="/#promise" onClick={() => setIsOpen(false)}>Our Promise</a>
              <a href="/#ingredients" onClick={() => setIsOpen(false)}>Ingredients</a>
              <a href="/#benefits" onClick={() => setIsOpen(false)}>Benefits</a>
              <a href="/#sizes" onClick={() => setIsOpen(false)}>Sizes</a>
              <a href="/#how-it-works" onClick={() => setIsOpen(false)}>How It Works</a>
              <a href="/#testimonials" onClick={() => setIsOpen(false)}>Reviews</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
