import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const smoothEase = [0.16, 1, 0.3, 1]

const faqs = [
  {
    question: "How long does it take to see results?",
    answer: "Most users notice reduced hair fall within 2-3 weeks of consistent use. Visible improvements in hair thickness, strength, and new growth typically become apparent after 8-12 weeks of regular application."
  },
  {
    question: "Is BhagyaVeda safe for chemically treated or colored hair?",
    answer: "Yes, our 100% natural Ayurvedic formulation is entirely safe for color-treated and chemically processed hair. It actually helps repair the damage caused by harsh chemical treatments by deeply nourishing the hair shaft."
  },
  {
    question: "How often should I apply the hair oil?",
    answer: "For optimal results, we recommend applying BhagyaVeda hair oil 2-3 times a week. Gently massage it into your scalp for 5-10 minutes and leave it on for at least 2 hours, or preferably overnight, before washing."
  },
  {
    question: "What makes BhagyaVeda different from regular hair oils?",
    answer: "BhagyaVeda isn't just an oil; it's a clinically formulated Ayurvedic treatment. We use a proprietary slow-infusion process that extracts the maximum potency from herbs like Bhringraj, Amla, and Brahmi without using any synthetic additives, mineral oils, or artificial fragrances."
  },
  {
    question: "Is this the best Ayurvedic hair oil for severe hair fall?",
    answer: "Yes, BhagyaVeda is specifically formulated using ancient Ayurvedic principles to target the root causes of severe hair fall. Our blend of Bhringraj, Amla, and Brahmi strengthens hair follicles from within, making it one of the most effective natural treatments available."
  },
  {
    question: "Can men use BhagyaVeda hair oil too?",
    answer: "Absolutely. BhagyaVeda is highly effective for both men and women experiencing hair thinning, receding hairlines, or general hair loss. The natural herbs stimulate dormant follicles regardless of gender."
  },
  {
    question: "Does it help with dandruff and dry scalp?",
    answer: "Yes, the potent antimicrobial properties of Neem and the deep hydration of our cold-pressed base oils effectively combat dandruff, soothe itchy scalps, and prevent flakiness."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null)
  const navigate = useNavigate()

  // Generate FAQ Schema dynamically from visible content only
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="faq-page">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Banner */}
      <div className="faq-page-hero">
        <div className="faq-page-hero-overlay" />
        <img src="/faqimage.png" alt="BhagyaVeda Premium Hair Oil" className="faq-page-hero-img" />
        <div className="faq-page-hero-content">
          <motion.button
            className="faq-back-btn"
            onClick={() => navigate('/')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Home
          </motion.button>
          <motion.h1
            className="faq-page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
          >
            Frequently Asked<br />
            <span className="text-gold">Questions</span>
          </motion.h1>
          <motion.p
            className="faq-page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: smoothEase }}
          >
            Everything you need to know about our premium Ayurvedic hair healing process.
          </motion.p>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="faq-page-body">
        <div className="container">
          <div className="faq-page-container">
            <div className="faq-page-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <motion.div
                    key={index}
                    className={`faq-page-item ${isOpen ? 'active' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.06 * index, ease: smoothEase }}
                  >
                    <button
                      className="faq-page-question"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <div className="faq-page-q-left">
                        <span className="faq-page-q-number">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span>{faq.question}</span>
                      </div>
                      <div className="faq-page-icon">
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          +
                        </motion.span>
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="faq-page-answer-wrapper"
                        >
                          <div className="faq-page-answer">
                            <p>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA at the bottom */}
            <motion.div
              className="faq-page-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: smoothEase }}
            >
              <p>Still have questions?</p>
              <div className="faq-page-cta-actions">
                <a href="tel:+919763567410" className="btn btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Call Us
                </a>
                <button className="btn btn-outline" onClick={() => navigate('/')}>
                  Back to Home
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
