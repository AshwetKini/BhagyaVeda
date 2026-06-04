import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

// --- VINTAGE ENGRAVING-STYLE BOTANICAL SVGs ---

const AmlaSvg = ({ className }) => (
  <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vintageAmlaLeaf" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#7c8b55" />
        <stop offset="100%" stopColor="#414c27" />
      </linearGradient>
      <radialGradient id="vintageAmlaBerry" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#f3f5cf" />
        <stop offset="50%" stopColor="#c2ce80" />
        <stop offset="90%" stopColor="#768735" />
        <stop offset="100%" stopColor="#4f5c20" />
      </radialGradient>
      <linearGradient id="vintageAmlaWood" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe895" />
        <stop offset="100%" stopColor="#c59b27" />
      </linearGradient>
    </defs>
    
    {/* Twisting detailed wood stems */}
    <path d="M15,20 C35,28 75,60 110,95" stroke="url(#vintageAmlaWood)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M45,43 C55,30 80,15 95,12" stroke="url(#vintageAmlaWood)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M70,64 C85,55 105,40 115,35" stroke="url(#vintageAmlaWood)" strokeWidth="1.2" strokeLinecap="round" />

    {/* Compound pinnate leaflets with fine engraving hatching lines */}
    {/* Left Stem Leaves */}
    <g fill="url(#vintageAmlaLeaf)" stroke="url(#vintageAmlaWood)" strokeWidth="0.5">
      {/* Set of leaves on first branch */}
      <path d="M23,23 C21,11 11,8 9,19 C11,26 21,24 23,23 Z" />
      <path d="M35,31 C33,19 23,16 21,27 C23,34 33,32 35,31 Z" />
      <path d="M47,40 C45,28 35,25 33,36 C35,43 45,41 47,40 Z" />
      <path d="M59,50 C57,38 47,35 45,46 C47,53 57,51 59,50 Z" />
      <path d="M71,61 C69,49 59,46 57,57 C59,64 69,62 71,61 Z" />
      <path d="M83,72 C81,60 71,57 69,68 C71,75 81,73 83,72 Z" />
      <path d="M95,83 C93,71 83,68 81,79 C83,86 93,84 95,83 Z" />
      
      {/* Right side leaflets */}
      <path d="M27,29 C37,20 40,26 31,37 C25,39 21,33 27,29 Z" />
      <path d="M39,38 C49,29 52,35 43,46 C37,48 33,42 39,38 Z" />
      <path d="M51,47 C61,38 64,44 55,55 C49,57 45,51 51,47 Z" />
      <path d="M63,57 C73,48 76,54 67,65 C61,67 57,61 63,57 Z" />
      <path d="M75,68 C85,59 88,65 79,76 C73,78 69,72 75,68 Z" />
      
      {/* Second branch leaflets */}
      <path d="M55,27 C50,15 42,12 40,22 C42,28 50,28 55,27 Z" />
      <path d="M67,23 C62,11 54,8 52,18 C54,24 62,24 67,23 Z" />
      <path d="M79,19 C74,7 66,4 64,14 C66,20 74,20 79,19 Z" />
      <path d="M91,15 C86,3 78,0 76,10 C78,16 86,16 91,15 Z" />
    </g>

    {/* Fine Engraving Line Overlays for leaf veins */}
    <g stroke="rgba(255,255,255,0.15)" strokeWidth="0.5">
      <path d="M16,16 L12,20" />
      <path d="M28,24 L24,28" />
      <path d="M40,33 L36,37" />
      <path d="M52,43 L48,47" />
      <path d="M64,54 L60,58" />
      <path d="M76,65 L72,69" />
    </g>

    {/* Amla Berries - Ribbed 3D vintage watercolors */}
    <g filter="drop-shadow(0 4px 8px rgba(0,0,0,0.2))">
      {/* Berry 1 */}
      <circle cx="58" cy="68" r="14" fill="url(#vintageAmlaBerry)" stroke="url(#vintageAmlaWood)" strokeWidth="0.5" />
      {/* Fine Rib Lines */}
      <path d="M58,54 C54,58 54,78 58,82 M58,54 C62,58 62,78 58,82" stroke="#4f5c20" strokeWidth="0.5" strokeDasharray="1 1" />
      <path d="M44,68 C48,64 68,64 72,68" stroke="#4f5c20" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.6" />
      
      {/* Berry 2 */}
      <circle cx="88" cy="90" r="16" fill="url(#vintageAmlaBerry)" stroke="url(#vintageAmlaWood)" strokeWidth="0.5" />
      <path d="M88,74 C83,79 83,101 88,106 M88,74 C93,79 93,101 88,106" stroke="#4f5c20" strokeWidth="0.5" strokeDasharray="1 1" />
      <path d="M72,90 C77,85 99,85 104,90" stroke="#4f5c20" strokeWidth="0.5" strokeDasharray="1 1" opacity="0.6" />
      
      {/* Berry 3 */}
      <circle cx="106" cy="62" r="11" fill="url(#vintageAmlaBerry)" stroke="url(#vintageAmlaWood)" strokeWidth="0.5" />
      <path d="M106,51 C103,55 103,69 106,73 M106,51 C109,55 109,69 106,73" stroke="#4f5c20" strokeWidth="0.5" strokeDasharray="1 1" />
    </g>
  </svg>
)

const BhringrajSvg = ({ className }) => (
  <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vintageNeem" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#326038" />
        <stop offset="100%" stopColor="#14341b" />
      </linearGradient>
      <linearGradient id="vintageWood" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe895" />
        <stop offset="100%" stopColor="#c59b27" />
      </linearGradient>
    </defs>
    
    {/* Fine organic stems */}
    <path d="M25,115 C45,95 70,55 85,20" stroke="url(#vintageWood)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M52,70 C70,62 95,50 110,45" stroke="url(#vintageWood)" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38,88 C25,82 15,75 10,72" stroke="url(#vintageWood)" strokeWidth="1.2" strokeLinecap="round" />

    {/* Neem Leaves with serrated edges & etching shadow lines */}
    {/* Left Leaf */}
    <path d="M53,68 C33,63 18,50 8,42 C20,49 29,62 45,71 C49,72 52,70 53,68 Z" fill="url(#vintageNeem)" stroke="url(#vintageWood)" strokeWidth="0.5" />
    {/* Hatching lines inside leaf */}
    <path d="M46,65 C34,60 22,53 12,46 M42,67 C32,62 24,57 16,51 M36,68 C28,63 21,58 15,53" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />

    {/* Right Leaf */}
    <path d="M72,50 C92,44 108,30 118,22 C105,30 96,42 78,51 C74,52 72,50 72,50 Z" fill="url(#vintageNeem)" stroke="url(#vintageWood)" strokeWidth="0.5" />
    <path d="M82,43 C93,37 105,29 114,23 M80,48 C90,42 99,35 106,29 M76,50 C84,45 92,39 98,34" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />

    {/* Top Leaf */}
    <path d="M72,35 C60,23 42,16 30,12 C44,20 52,32 66,41 C70,42 72,39 72,35 Z" fill="url(#vintageNeem)" stroke="url(#vintageWood)" strokeWidth="0.5" />
    <path d="M64,30 C53,23 41,17 31,13 M60,33 C50,27 40,21 32,16 M54,35 C46,29 39,24 33,20" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />

    {/* Bhringraj Daisy Flowers - realistic detailed engraving */}
    <g transform="translate(56, 56)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
      {/* 16 distinct ray petals with fine lines */}
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * 360) / 16
        return (
          <g key={i} transform={`rotate(${angle})`}>
            <path d="M-1.5,-14 C-1,-14 1,-14 1.5,-14 L1,-2 L-1,-2 Z" fill="#ffffff" stroke="#c2c7ae" strokeWidth="0.3" />
            <line x1="0" y1="-3" x2="0" y2="-12" stroke="#cbd0b9" strokeWidth="0.4" />
          </g>
        )
      })}
      {/* Golden center disk with cross-hatch shading */}
      <circle cx="0" cy="0" r="5" fill="#f3bc18" stroke="#bd8d07" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="3" fill="#d09d0b" />
      <circle cx="-1" cy="-1" r="1" fill="#fff" opacity="0.6" />
    </g>

    <g transform="translate(92, 28)" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))">
      {/* Smaller flower */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 360) / 12
        return (
          <g key={i} transform={`rotate(${angle})`}>
            <path d="M-1,-11 C-0.7,-11 0.7,-11 1,-11 L0.8,-2 L-0.8,-2 Z" fill="#ffffff" stroke="#c2c7ae" strokeWidth="0.3" />
            <line x1="0" y1="-2" x2="0" y2="-9" stroke="#cbd0b9" strokeWidth="0.4" />
          </g>
        )
      })}
      <circle cx="0" cy="0" r="4.2" fill="#f3bc18" stroke="#bd8d07" strokeWidth="0.5" />
      <circle cx="0" cy="0" r="2" fill="#d09d0b" />
    </g>
  </svg>
)

const HibiscusSvg = ({ className }) => (
  <svg viewBox="0 0 140 140" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="vintageHibiscusGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e25848" />
        <stop offset="50%" stopColor="#bc291b" />
        <stop offset="100%" stopColor="#7a1208" />
      </linearGradient>
      <linearGradient id="vintageHibiscusLeaf" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#2c854c" />
        <stop offset="100%" stopColor="#144d27" />
      </linearGradient>
      <radialGradient id="vintageFlowerCenter" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#f39c12" />
        <stop offset="40%" stopColor="#d35400" />
        <stop offset="100%" stopColor="#7a1208" />
      </radialGradient>
      <linearGradient id="vintageHibiscusWood" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#ffe895" />
        <stop offset="100%" stopColor="#c59b27" />
      </linearGradient>
    </defs>
    
    {/* Background detailed leaves */}
    <path d="M30,35 C12,22 18,3 35,8 C52,13 42,28 30,35 Z" fill="url(#vintageHibiscusLeaf)" stroke="url(#vintageHibiscusWood)" strokeWidth="0.5" />
    {/* Veins */}
    <path d="M22,23 Q28,18 35,8 M26,27 Q32,23 34,16 M28,31 Q34,29 33,24" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
    
    <path d="M92,92 C108,102 112,85 102,70 C92,55 83,75 92,92 Z" fill="url(#vintageHibiscusLeaf)" stroke="url(#vintageHibiscusWood)" strokeWidth="0.5" />
    <path d="M96,81 Q102,83 102,70 M95,85 Q101,89 104,80 M93,89 Q98,95 101,90" stroke="rgba(255,255,255,0.18)" strokeWidth="0.5" />
    
    {/* Overlapping Petals with detailed line engraving work */}
    <g transform="translate(68, 68)" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.25))">
      {/* Petal 1 (Bottom Left) */}
      <path d="M0,0 C-30,-25 -50,-5 -35,20 C-20,40 -5,20 0,0 Z" fill="url(#vintageHibiscusGrad)" stroke="#500701" strokeWidth="0.5" />
      <path d="M-10,8 C-18,12 -28,12 -33,6 M-8,14 C-15,20 -24,22 -28,16" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
      
      {/* Petal 2 (Bottom Right) */}
      <path d="M0,0 C25,-30 45,-15 32,15 C20,40 5,20 0,0 Z" fill="url(#vintageHibiscusGrad)" stroke="#500701" strokeWidth="0.5" />
      <path d="M8,10 C16,18 25,20 28,12 M10,6 C20,10 28,8 28,0" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
      
      {/* Petal 3 (Right) */}
      <path d="M0,0 C35,15 45,35 25,45 C5,55 10,25 0,0 Z" fill="url(#vintageHibiscusGrad)" stroke="#500701" strokeWidth="0.5" />
      <path d="M12,18 C18,28 20,38 12,42 M6,14 C10,24 10,34 2,38" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
      
      {/* Petal 4 (Top Left) */}
      <path d="M0,0 C-40,5 -45,-20 -25,-30 C-5,-40 -10,-15 0,0 Z" fill="url(#vintageHibiscusGrad)" stroke="#500701" strokeWidth="0.5" />
      <path d="M-14,-10 C-24,-16 -32,-14 -32,-6 M-10,-12 C-18,-22 -24,-24 -20,-16" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
      
      {/* Petal 5 (Top Right) */}
      <path d="M0,0 C5,-40 -15,-50 -30,-30 C-45,-10 -20,5 0,0 Z" fill="url(#vintageHibiscusGrad)" stroke="#500701" strokeWidth="0.5" />
      <path d="M-12,-18 C-18,-28 -28,-30 -30,-20 M-6,-15 C-8,-25 -16,-32 -22,-28" stroke="rgba(255,255,255,0.15)" strokeWidth="0.4" />
      
      {/* Center Deep Color Hole */}
      <circle cx="0" cy="0" r="16" fill="url(#vintageFlowerCenter)" opacity="0.9" />
      
      {/* Hand-drawn style engraving details for central core */}
      <path d="M-12,-5 A13,13 0 0 1 12,-5" stroke="#bc291b" strokeWidth="0.5" />
      <path d="M-8,5 A9,9 0 0 1 8,5" stroke="#bc291b" strokeWidth="0.5" />

      {/* Elegant Curved Stamen */}
      <path d="M0,0 Q28,-22 46,-38" stroke="url(#vintageHibiscusWood)" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M0,0 Q28,-22 46,-38" stroke="#d35400" strokeWidth="1" strokeLinecap="round" />
      
      {/* Hand-drawn Pollen branches */}
      <line x1="32" y1="-23" x2="38" y2="-21" stroke="#f1c40f" strokeWidth="0.8" />
      <circle cx="38" cy="-21" r="2.2" fill="#f1c40f" stroke="#bd8d07" strokeWidth="0.4" />
      
      <line x1="38" y1="-29" x2="44" y2="-28" stroke="#f1c40f" strokeWidth="0.8" />
      <circle cx="44" cy="-28" r="2.2" fill="#f39c12" stroke="#bd8d07" strokeWidth="0.4" />

      <line x1="42" y1="-33" x2="48" y2="-36" stroke="#f1c40f" strokeWidth="0.8" />
      <circle cx="48" cy="-36" r="2.2" fill="#f1c40f" stroke="#bd8d07" strokeWidth="0.4" />
      
      <circle cx="42" cy="-38" r="1.5" fill="#f39c12" />
      <circle cx="35" cy="-31" r="1.5" fill="#f1c40f" />
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
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 45, damping: 14 })

  // Map scroll progress to SVG path lengths
  // 1. Trunk grows first (from 15% scroll to 42% scroll)
  const trunkLength = useTransform(smoothScroll, [0.15, 0.42], [0, 1])
  // 2. Branches sprout sequentially as the trunk grows past them
  const branch1Length = useTransform(smoothScroll, [0.25, 0.37], [0, 1]) // Bottom Left (Luminous Vitality)
  const branch2Length = useTransform(smoothScroll, [0.33, 0.45], [0, 1]) // Middle Right (Root-to-Tip Repair)
  const branch3Length = useTransform(smoothScroll, [0.41, 0.53], [0, 1]) // Top Left (Ancient Wisdom)

  // Map scroll progress to info card opacity & scale
  const card1Opacity = useTransform(smoothScroll, [0.45, 0.52], [0, 1])
  const card1Scale = useTransform(smoothScroll, [0.45, 0.52], [0.93, 1])

  const card2Opacity = useTransform(smoothScroll, [0.35, 0.42], [0, 1])
  const card2Scale = useTransform(smoothScroll, [0.35, 0.42], [0.93, 1])

  const card3Opacity = useTransform(smoothScroll, [0.25, 0.32], [0, 1])
  const card3Scale = useTransform(smoothScroll, [0.25, 0.32], [0.93, 1])

  return (
    <section ref={sectionRef} id="benefits" className="section benefits-section advantage-dark-theme">
      {/* Soft background glow accents */}
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
                {/* Real Gold Leaf metallic gradient */}
                <linearGradient id="realGoldLeaf" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FFEAA2" />
                  <stop offset="30%" stopColor="#F5D061" />
                  <stop offset="60%" stopColor="#D4AF37" />
                  <stop offset="90%" stopColor="#A8811A" />
                  <stop offset="100%" stopColor="#70530A" />
                </linearGradient>
                {/* Secondary wood wrapping vine gradient */}
                <linearGradient id="twistingVineGold" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFF2C4" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8A640F" />
                </linearGradient>
                {/* Luxury Soft Shadow/Glow */}
                <filter id="luxuryVineGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3.5" result="blur" />
                  <feComponentTransfer in="blur" result="glow">
                    <feFuncA type="linear" slope="0.45" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="glow" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* WATERMARK AYURVEDIC LABELS LAYERING DEPTH (Exactly matches reference screenshot) */}
              <text x="530" y="110" className="tree-watermark-text">Jasmine</text>
              <text x="240" y="230" className="tree-watermark-text">Amalaki</text>
              <text x="560" y="420" className="tree-watermark-text">Bhringraj</text>
              <text x="210" y="520" className="tree-watermark-text">Ashwagandha</text>

              {/* 1. Main Tree Trunk Vine - Winding double-layered structure for natural hand-drawn look */}
              <motion.path
                d="M 400,580 C 400,480 430,420 395,350 C 360,280 440,210 405,140 C 385,100 410,60 400,55"
                stroke="url(#realGoldLeaf)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#luxuryVineGlow)"
                style={{ pathLength: trunkLength }}
              />
              {/* Secondary wrapping vine for wood detail */}
              <motion.path
                d="M 400,580 C 408,530 388,480 418,430 C 388,380 418,330 388,280 C 418,230 388,180 415,130 C 385,80 408,60 400,55"
                stroke="url(#twistingVineGold)"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.75"
                style={{ pathLength: trunkLength }}
              />

              {/* 2. Bottom Left Branch (Luminous Vitality) with curves & secondary wrapping vine */}
              <motion.path
                d="M 397,420 C 370,410 330,425 290,440 Q 270,448 250,470"
                stroke="url(#realGoldLeaf)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#luxuryVineGlow)"
                style={{ pathLength: branch1Length }}
              />
              <motion.path
                d="M 397,420 C 365,415 340,435 295,430"
                stroke="url(#twistingVineGold)"
                strokeWidth="1"
                opacity="0.6"
                style={{ pathLength: branch1Length }}
              />
              
              {/* 3. Middle Right Branch (Root-to-Tip Repair) */}
              <motion.path
                d="M 401,280 C 440,270 480,285 515,305 Q 535,315 550,325"
                stroke="url(#realGoldLeaf)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#luxuryVineGlow)"
                style={{ pathLength: branch2Length }}
              />
              <motion.path
                d="M 401,280 C 445,285 470,270 515,312"
                stroke="url(#twistingVineGold)"
                strokeWidth="1"
                opacity="0.6"
                style={{ pathLength: branch2Length }}
              />

              {/* 4. Top Left Branch (Ancient Wisdom) */}
              <motion.path
                d="M 404,140 C 370,130 330,135 290,140 Q 270,145 250,155"
                stroke="url(#realGoldLeaf)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#luxuryVineGlow)"
                style={{ pathLength: branch3Length }}
              />
              <motion.path
                d="M 404,140 C 365,135 340,145 295,138"
                stroke="url(#twistingVineGold)"
                strokeWidth="1"
                opacity="0.6"
                style={{ pathLength: branch3Length }}
              />

              {/* Spiral organic tendrils winding off */}
              <motion.path
                d="M 418,430 Q 435,420 440,405 T 430,395 T 420,405 T 425,415"
                stroke="url(#twistingVineGold)"
                strokeWidth="1"
                opacity="0.5"
                style={{ pathLength: trunkLength }}
              />
              <motion.path
                d="M 388,280 Q 365,290 355,275 T 365,260 T 375,270"
                stroke="url(#twistingVineGold)"
                strokeWidth="1"
                opacity="0.5"
                style={{ pathLength: trunkLength }}
              />
              <motion.path
                d="M 415,130 Q 435,120 440,105 T 430,95 T 420,105"
                stroke="url(#twistingVineGold)"
                strokeWidth="1"
                opacity="0.5"
                style={{ pathLength: trunkLength }}
              />

              {/* Detailed Dual-Toned Olive & Gold Leaves sprouting along the vine */}
              <g opacity="0.88">
                {/* Leaf 1 (Bottom Right) */}
                <path d="M 405,480 C 418,474 422,465 420,458 C 411,460 405,470 405,480" fill="#90a068" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 407,476 Q 413,472 419,462" stroke="#fff" strokeWidth="0.3" opacity="0.4" />
                {/* Leaf 2 (Mid Left) */}
                <path d="M 385,320 C 372,314 365,316 358,322 C 362,328 372,328 385,320" fill="#90a068" stroke="#D4AF37" strokeWidth="0.5" />
                <path d="M 381,319 Q 373,317 362,321" stroke="#fff" strokeWidth="0.3" opacity="0.4" />
                {/* Leaf 3 (Upper Right) */}
                <path d="M 412,190 C 425,188 430,180 428,172 C 418,175 412,182 412,190" fill="#90a068" stroke="#D4AF37" strokeWidth="0.5" />
                {/* Leaf 4 (Top Left) */}
                <path d="M 390,95 C 378,92 370,95 365,102 C 370,107 380,105 390,95" fill="#90a068" stroke="#D4AF37" strokeWidth="0.5" />
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
                <h3 className="native-card-title-serif">ANCIENT WISDOM</h3>
              </div>
              <p className="native-card-text-centered">
                Harmonizing centuries-old Ayurvedic formulations with nature&apos;s purest herbs for holistic hair health.
              </p>
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
                <h3 className="native-card-title-serif">ROOT-TO-TIP REPAIR</h3>
              </div>
              <p className="native-card-text-centered">
                Deeply nourishes and strengthens follicles, stimulating growth and preventing hair fall.
              </p>
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
                <h3 className="native-card-title-serif">LUMINOUS VITALITY</h3>
              </div>
              <p className="native-card-text-centered">
                Restores natural shine, moisture, and smoothness, reviving tired hair with botanical brilliance.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
