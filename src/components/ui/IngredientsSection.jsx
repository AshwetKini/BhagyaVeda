import { motion } from 'framer-motion'
import { Leaf, Droplets, Sun, Sparkles } from 'lucide-react'

const ingredients = [
  {
    name: "Amla (Indian Gooseberry)",
    desc: "Boosts scalp health with Vitamin C and antioxidants.",
    icon: <Sun size={24} />
  },
  {
    name: "Bhringraj",
    desc: "Known as the King of Hair Growth, prevents premature greying.",
    icon: <Leaf size={24} />
  },
  {
    name: "Neem",
    desc: "Purifies and protects the scalp from dandruff and infections.",
    icon: <Sparkles size={24} />
  },
  {
    name: "Coconut Oil",
    desc: "Deep nourishment and conditioning from root to tip.",
    icon: <Droplets size={24} />
  }
]

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="section ingredients-section">
      <div className="container">
        <div className="ingredients-layout">
          <motion.div 
            className="ingredients-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Nature's Best<br/>Kept Secrets</h2>
            <p className="section-text">
              Each drop is infused with cold-pressed oils and sun-dried herbs.
            </p>
            
            <motion.div 
              className="ingredients-list"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {ingredients.map((item, index) => (
                <motion.div key={index} className="ingredient-item" variants={itemVariants}>
                  <div className="ingredient-icon glass">
                    {item.icon}
                  </div>
                  <div className="ingredient-info">
                    <h3>{item.name}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right side is empty here because the 3D canvas is showing the bottle & floating ingredients */}
          <div className="ingredients-spacer"></div>
        </div>
      </div>
    </section>
  )
}
