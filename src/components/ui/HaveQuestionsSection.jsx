import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const smoothEase = [0.16, 1, 0.3, 1]

const cards = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: 'FAQs',
    description: 'Find answers to your questions.',
    action: 'navigate',
    target: '/faq'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: 'About us',
    description: 'Know more about BhagyaVeda',
    action: 'navigate',
    target: '/about'
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Call Us',
    description: 'Call us for quick assistance.',
    action: 'link',
    target: 'tel:+918369527382'
  }
]

export default function HaveQuestionsSection() {
  const navigate = useNavigate()

  const handleCardClick = (card) => {
    if (card.action === 'navigate') {
      navigate(card.target)
    } else if (card.action === 'scroll') {
      const el = document.querySelector(card.target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    } else if (card.action === 'link') {
      window.location.href = card.target
    }
  }

  return (
    <section className="section have-questions-section" id="questions">
      <div className="container">
        <div className="have-questions-layout">
          {/* Left Content */}
          <div className="have-questions-content">
            <motion.h2
              className="have-questions-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
            >
              HAVE ANY QUESTIONS?
            </motion.h2>
            <motion.p
              className="have-questions-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
            >
              Find all the information you need, gathered in one convenient spot.
            </motion.p>

            <div className="question-cards">
              {cards.map((card, index) => (
                <motion.button
                  key={index}
                  className="question-card"
                  onClick={() => handleCardClick(card)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * (index + 1), ease: smoothEase }}
                  whileHover={{ x: 4, backgroundColor: 'rgba(243, 239, 230, 0.8)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="question-card-left">
                    <div className="question-card-icon">{card.icon}</div>
                    <div className="question-card-text">
                      <span className="question-card-title">{card.title}</span>
                      <span className="question-card-desc">{card.description}</span>
                    </div>
                  </div>
                  <div className="question-card-arrow">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <motion.div
            className="have-questions-image"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: smoothEase }}
          >
            <img src="/faqimage.png" alt="BhagyaVeda Premium Hair Oil" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
