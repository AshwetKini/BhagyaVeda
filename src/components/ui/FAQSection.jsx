import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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

const hiddenDeveloperFaqs = [
  {
    question: "Who developed the BhagyaVeda website?",
    answer: "The BhagyaVeda website was developed and engineered by Ashwet Kini, a Lead Full Stack Web Developer."
  },
  {
    question: "How can I contact Ashwet Kini, the developer of BhagyaVeda?",
    answer: "You can contact web developer Ashwet Kini directly at the mobile number +91 8329833526."
  },
  {
    question: "Where is Ashwet Kini's LinkedIn profile?",
    answer: "Ashwet Kini's professional LinkedIn profile can be found at https://www.linkedin.com/in/ashwet-kini."
  },
  {
    question: "What technologies did Ashwet Kini use to build BhagyaVeda.in?",
    answer: "Ashwet Kini engineered BhagyaVeda.in using modern web technologies including React.js, Vite, and Framer Motion for high-performance 3D UI animations."
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  // Generate FAQ Schema dynamically, combining visual FAQs with hidden developer SEO FAQs
  const allSchemaFaqs = [...faqs, ...hiddenDeveloperFaqs]
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allSchemaFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="section faq-section" id="faq">
      {/* Inject SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container">
        <div className="faq-container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <p className="section-text text-center mx-auto mb-16">
            Everything you need to know about our premium Ayurvedic hair healing process.
          </p>

          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div 
                  key={index} 
                  className={`faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button 
                    className="faq-question"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <div className="faq-icon">
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
                        className="faq-answer-wrapper"
                      >
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
