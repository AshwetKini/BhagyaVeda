import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Check } from 'lucide-react'

// --- BOTANICAL SVG DRAWINGS ---

const AmlaSvg = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="amlaGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#b4c278" />
        <stop offset="60%" stopColor="#8d9b4f" />
        <stop offset="100%" stopColor="#556024" />
      </linearGradient>
      <radialGradient id="amlaBerry" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#f4f6ce" />
        <stop offset="40%" stopColor="#cbd788" />
        <stop offset="85%" stopColor="#7a8b3d" />
        <stop offset="100%" stopColor="#4f5c20" />
      </radialGradient>
      <linearGradient id="goldStem" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe895" />
        <stop offset="100%" stopColor="#c59b27" />
      </linearGradient>
    </defs>
    <path d="M15,25 C35,30 75,65 105,95" stroke="url(#goldStem)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M23,23 C21,13 13,11 11,21 C13,27 21,25 23,23 Z" fill="url(#amlaGrad)" />
    <path d="M35,31 C33,21 25,19 23,29 C25,35 33,33 35,31 Z" fill="url(#amlaGrad)" />
    <path d="M47,40 C45,30 37,28 35,38 C37,44 45,42 47,40 Z" fill="url(#amlaGrad)" />
    <path d="M59,50 C57,40 49,38 47,48 C49,54 57,52 59,50 Z" fill="url(#amlaGrad)" />
    <path d="M71,61 C69,51 61,49 59,59 C61,65 69,63 71,61 Z" fill="url(#amlaGrad)" />
    <path d="M83,72 C81,62 73,60 71,70 C73,76 81,74 83,72 Z" fill="url(#amlaGrad)" />
    <path d="M95,83 C93,73 85,71 83,81 C85,87 93,85 95,83 Z" fill="url(#amlaGrad)" />
    <path d="M27,29 C35,21 39,27 31,37 C25,39 23,33 27,29 Z" fill="url(#amlaGrad)" />
    <path d="M39,38 C47,30 51,36 43,46 C37,48 35,42 39,38 Z" fill="url(#amlaGrad)" />
    <path d="M51,47 C59,39 63,45 55,55 C49,57 47,51 51,47 Z" fill="url(#amlaGrad)" />
    <path d="M63,57 C71,49 75,55 67,65 C61,67 59,61 63,57 Z" fill="url(#amlaGrad)" />
    <path d="M75,68 C83,60 87,66 79,76 C73,78 71,72 75,68 Z" fill="url(#amlaGrad)" />
    <path d="M87,79 C95,71 99,77 91,87 C85,89 83,83 87,79 Z" fill="url(#amlaGrad)" />
    <circle cx="50" cy="62" r="11" fill="url(#amlaBerry)" stroke="#a1b058" strokeWidth="0.5" />
    <path d="M50,51 Q52,56 50,73" stroke="#8d9b4f" strokeWidth="0.5" strokeDasharray="1 1" />
    <path d="M43,55 Q50,62 57,55" stroke="#8d9b4f" strokeWidth="0.5" strokeDasharray="1 1" />
    <circle cx="78" cy="82" r="13" fill="url(#amlaBerry)" stroke="#a1b058" strokeWidth="0.5" />
    <path d="M78,69 Q80,75 78,95" stroke="#8d9b4f" strokeWidth="0.5" strokeDasharray="1 1" />
    <path d="M70,75 Q78,82 86,75" stroke="#8d9b4f" strokeWidth="0.5" strokeDasharray="1 1" />
    <circle cx="95" cy="65" r="9" fill="url(#amlaBerry)" stroke="#a1b058" strokeWidth="0.5" />
    <path d="M95,56 Q96,60 95,74" stroke="#8d9b4f" strokeWidth="0.5" strokeDasharray="1 1" />
  </svg>
)

const BhringrajSvg = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="neemGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#3d6f46" />
        <stop offset="100%" stopColor="#193a20" />
      </linearGradient>
      <linearGradient id="goldAccent" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe895" />
        <stop offset="100%" stopColor="#c59b27" />
      </linearGradient>
    </defs>
    <path d="M30,105 C45,85 70,50 85,20" stroke="url(#goldAccent)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M53,68 C35,63 20,53 10,48 C22,54 30,64 45,71 Q50,72 53,68 Z" fill="url(#neemGrad)" stroke="url(#goldAccent)" strokeWidth="0.5" />
    <path d="M43,62 Q31,58 20,52 M40,66 Q30,61 24,57" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    <path d="M68,50 C86,45 101,35 111,30 C99,36 91,46 76,53 Q71,54 68,50 Z" fill="url(#neemGrad)" stroke="url(#goldAccent)" strokeWidth="0.5" />
    <path d="M78,44 Q90,39 101,33 M75,49 Q86,44 94,39" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
    <path d="M72,35 C60,25 45,20 35,18 C45,24 53,34 65,41 Q68,42 72,35 Z" fill="url(#neemGrad)" stroke="url(#goldAccent)" strokeWidth="0.5" />
    
    <g transform="translate(48, 52)">
      <path d="M-2,-12 L2,-12 L1,-2 L-1,-2 Z M-10,-8 L-8,-10 L-1,-1 L-2,1 Z M-12,-2 L-12,2 L-2,1 L-2,-1 Z M-10,8 L-8,10 L-1,1 L-2,-1 Z M-2,12 L2,12 L1,2 L-1,2 Z M8,10 L10,8 L1,1 L2,-1 Z M12,2 L12,-2 L2,-1 L2,1 Z M8,-10 L10,-8 L1,-1 L2,1 Z" fill="#ffffff" />
      <circle cx="0" cy="0" r="4.5" fill="#f1c40f" stroke="#c59b27" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
    </g>
    
    <g transform="translate(85, 25)">
      <path d="M-2,-12 L2,-12 L1,-2 L-1,-2 Z M-10,-8 L-8,-10 L-1,-1 L-2,1 Z M-12,-2 L-12,2 L-2,1 L-2,-1 Z M-10,8 L-8,10 L-1,1 L-2,-1 Z M-2,12 L2,12 L1,2 L-1,2 Z M8,10 L10,8 L1,1 L2,-1 Z M12,2 L12,-2 L2,-1 L2,1 Z M8,-10 L10,-8 L1,-1 L2,1 Z" fill="#ffffff" />
      <circle cx="0" cy="0" r="4.5" fill="#f1c40f" stroke="#c59b27" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
    </g>
  </svg>
)

const HibiscusSvg = ({ className }) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="hibiscusGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e74c3c" />
        <stop offset="50%" stopColor="#c0392b" />
        <stop offset="100%" stopColor="#781c12" />
      </linearGradient>
      <linearGradient id="hibiscusLeaf" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#27ae60" />
        <stop offset="100%" stopColor="#145a32" />
      </linearGradient>
      <radialGradient id="flowerCenter" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f39c12" />
        <stop offset="40%" stopColor="#e74c3c" />
        <stop offset="100%" stopColor="#781c12" />
      </radialGradient>
    </defs>
    
    <path d="M30,35 C15,25 20,8 35,12 C50,16 40,28 30,35 Z" fill="url(#hibiscusLeaf)" stroke="#113f23" strokeWidth="0.5" />
    <path d="M85,85 C100,95 105,80 95,65 C85,50 78,70 85,85 Z" fill="url(#hibiscusLeaf)" stroke="#113f23" strokeWidth="0.5" />
    
    <g transform="translate(60, 60)">
      <path d="M0,0 C-25,-25 -40,-10 -30,10 C-20,30 -5,15 0,0 Z" fill="url(#hibiscusGrad)" stroke="#5c110a" strokeWidth="0.5" />
      <path d="M0,0 C20,-25 35,-15 25,10 C15,35 5,20 0,0 Z" fill="url(#hibiscusGrad)" stroke="#5c110a" strokeWidth="0.5" />
      <path d="M0,0 C-15,25 -5,45 15,35 C35,25 20,10 0,0 Z" fill="url(#hibiscusGrad)" stroke="#5c110a" strokeWidth="0.5" />
      <path d="M0,0 C-35,10 -45,-10 -25,-20 C-5,-30 -10,-10 0,0 Z" fill="url(#hibiscusGrad)" stroke="#5c110a" strokeWidth="0.5" />
      <path d="M0,0 C5,-35 -15,-45 -25,-25 C-35,-5 -15,5 0,0 Z" fill="url(#hibiscusGrad)" stroke="#5c110a" strokeWidth="0.5" />
      
      <circle cx="0" cy="0" r="14" fill="url(#flowerCenter)" opacity="0.85" />
      
      <path d="M0,0 Q25,-20 42,-35" stroke="#f1c40f" strokeWidth="3" strokeLinecap="round" />
      <path d="M0,0 Q25,-20 42,-35" stroke="#e67e22" strokeWidth="1" strokeLinecap="round" />
      
      <circle cx="42" cy="-35" r="2.5" fill="#f1c40f" />
      <circle cx="38" cy="-38" r="1.5" fill="#f39c12" />
      <circle cx="44" cy="-31" r="1.5" fill="#f39c12" />
      <circle cx="35" cy="-32" r="1.5" fill="#f1c40f" />
      <circle cx="40" cy="-35" r="1.5" fill="#f1c40f" />
    </g>
  </svg>
)

export default function BenefitsSection() {
  const sectionRef = useRef(null)

  // Scroll tracking for tree growth
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Smooth out scroll values for high-fidelity path drawing
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 50, damping: 15 })

  // Map scroll progress to SVG path lengths
  // 1. Trunk grows first (from 15% scroll to 40% scroll)
  const trunkLength = useTransform(smoothScroll, [0.15, 0.40], [0, 1])
  // 2. Branches sprout sequentially as the trunk grows past them
  const branch1Length = useTransform(smoothScroll, [0.26, 0.38], [0, 1]) // Bottom Left (Luminous Vitality)
  const branch2Length = useTransform(smoothScroll, [0.34, 0.46], [0, 1]) // Middle Right (Root-to-Tip Repair)
  const branch3Length = useTransform(smoothScroll, [0.42, 0.54], [0, 1]) // Top Left (Ancient Wisdom)

  // Map scroll progress to info card opacity & scale
  const card1Opacity = useTransform(smoothScroll, [0.44, 0.52], [0, 1])
  const card1Scale = useTransform(smoothScroll, [0.44, 0.52], [0.92, 1])

  const card2Opacity = useTransform(smoothScroll, [0.36, 0.44], [0, 1])
  const card2Scale = useTransform(smoothScroll, [0.36, 0.44], [0.92, 1])

  const card3Opacity = useTransform(smoothScroll, [0.28, 0.36], [0, 1])
  const card3Scale = useTransform(smoothScroll, [0.28, 0.36], [0.92, 1])

  return (
    <section ref={sectionRef} id="benefits" className="section benefits-section advantage-dark-theme">
      {/* Background glow accents */}
      <div className="bg-glow bg-glow-left" />
      <div className="bg-glow bg-glow-right" />
      
      <div className="container">
        <div className="text-center mb-16">
          <motion.span 
            className="advantage-tag"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            THE ART OF AYURVEDA
          </motion.span>
          <motion.h2 
            className="section-title text-white mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            The BhagyaVeda <span className="text-gold">Advantage</span>
          </motion.h2>
          <motion.p
            className="advantage-section-subtitle mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Experience the growing path of natural healing. As you scroll, the golden branches of vitality emerge to connect you with nature&apos;s most potent botanical remedies.
          </motion.p>
        </div>

        {/* NATIVE TREE CONTAINER */}
        <div className="advantage-tree-wrapper">
          <div className="advantage-tree-container">
            {/* CENTRAL SVG TREE VIEWPORT */}
            <svg className="advantage-native-tree-svg" viewBox="0 0 800 600" fill="none">
              <defs>
                <linearGradient id="treeGoldGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFF4B8" />
                  <stop offset="40%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8A640F" />
                </linearGradient>
                <filter id="vineGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. Main Tree Trunk Vine (winding up from bottom center 400,580 to top 400,60) */}
              <motion.path
                d="M 400,580 C 400,480 430,420 395,350 C 360,280 440,210 405,140 C 385,100 410,60 400,55"
                stroke="url(#treeGoldGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#vineGlow)"
                style={{ pathLength: trunkLength }}
              />

              {/* 2. Bottom Left Branch (Luminous Vitality) */}
              <motion.path
                d="M 397,420 C 340,430 300,450 250,470"
                stroke="url(#treeGoldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#vineGlow)"
                style={{ pathLength: branch1Length }}
              />
              
              {/* 3. Middle Right Branch (Root-to-Tip Repair) */}
              <motion.path
                d="M 401,280 C 450,290 500,310 550,325"
                stroke="url(#treeGoldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#vineGlow)"
                style={{ pathLength: branch2Length }}
              />

              {/* 4. Top Left Branch (Ancient Wisdom) */}
              <motion.path
                d="M 404,140 C 350,140 300,150 250,155"
                stroke="url(#treeGoldGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#vineGlow)"
                style={{ pathLength: branch3Length }}
              />

              {/* Decorative extra golden leaves sprouting from trunk/branches */}
              <g opacity="0.85">
                {/* Leaf bottom right */}
                <path d="M 405,480 C 418,474 422,465 420,458 C 411,460 405,470 405,480" fill="#D4AF37" />
                {/* Leaf mid-left */}
                <path d="M 385,320 C 372,314 365,316 358,322 C 362,328 372,328 385,320" fill="#D4AF37" />
                {/* Leaf upper-right */}
                <path d="M 412,190 C 425,188 430,180 428,172 C 418,175 412,182 412,190" fill="#D4AF37" />
                {/* Leaf top-left */}
                <path d="M 390,95 C 378,92 370,95 365,102 C 370,107 380,105 390,95" fill="#D4AF37" />
              </g>
            </svg>

            {/* THREE ORGANIC NATIVE CARDS POSITIONED AROUND THE TREE */}

            {/* Card 1: Ancient Wisdom (Top Left) */}
            <motion.div 
              style={{ opacity: card1Opacity, scale: card1Scale }}
              className="advantage-native-card card-pos-top-left glass-dark-premium"
            >
              {/* Botanical Illustration floating above */}
              <div className="card-botanical-decor">
                <AmlaSvg className="native-botanical-svg" />
              </div>
              <div className="native-card-header">
                <span className="native-card-badge">AMLA & BRAHMI</span>
                <h3 className="text-gold mt-1">Ancient Wisdom</h3>
              </div>
              <p className="native-card-text">
                Rooted in sacred Ayurvedic texts, this formulation restores balance by combining slow-infused traditional herbs to revive the scalp&apos;s natural intelligence.
              </p>
              <ul className="native-card-list">
                <li>
                  <Check size={12} className="text-gold" />
                  <span>Balances Tridoshas on scalp</span>
                </li>
                <li>
                  <Check size={12} className="text-gold" />
                  <span>Uses wild-harvested herbs</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 2: Root-to-Tip Repair (Middle Right) */}
            <motion.div 
              style={{ opacity: card2Opacity, scale: card2Scale }}
              className="advantage-native-card card-pos-middle-right glass-dark-premium"
            >
              <div className="card-botanical-decor decoration-right">
                <BhringrajSvg className="native-botanical-svg" />
              </div>
              <div className="native-card-header">
                <span className="native-card-badge">BHRINGRAJ & NEEM</span>
                <h3 className="text-gold mt-1">Root-to-Tip Repair</h3>
              </div>
              <p className="native-card-text">
                Penetrates deeply to strengthen follicle roots, stimulate dormant growth cells, purify the scalp, and reduce shedding dramatically.
              </p>
              <ul className="native-card-list">
                <li>
                  <Check size={12} className="text-gold" />
                  <span>Reduces breakage by 94%</span>
                </li>
                <li>
                  <Check size={12} className="text-gold" />
                  <span>Deeply fortifies hair shafts</span>
                </li>
              </ul>
            </motion.div>

            {/* Card 3: Luminous Vitality (Bottom Left) */}
            <motion.div 
              style={{ opacity: card3Opacity, scale: card3Scale }}
              className="advantage-native-card card-pos-bottom-left glass-dark-premium"
            >
              <div className="card-botanical-decor">
                <HibiscusSvg className="native-botanical-svg" />
              </div>
              <div className="native-card-header">
                <span className="native-card-badge">HIBISCUS & JASMINE</span>
                <h3 className="text-gold mt-1">Luminous Vitality</h3>
              </div>
              <p className="native-card-text">
                Locks in moisture, smooths outer cuticles, and provides a brilliant, light-reflecting glass finish accompanied by a delicate natural floral fragrance.
              </p>
              <ul className="native-card-list">
                <li>
                  <Check size={12} className="text-gold" />
                  <span>Weightless moisture shield</span>
                </li>
                <li>
                  <Check size={12} className="text-gold" />
                  <span>Vibrant, silky hair finish</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
