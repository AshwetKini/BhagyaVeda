import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const steps = [
  {
    num: "01",
    phase: "Phase I: Preparation",
    title: "Apply Oil",
    desc: "Take a few drops of BhagyaVeda oil on your palms. Warm the oil slightly by rubbing your palms together to activate the rich, cold-pressed herbs and release the soothing therapeutic aromas.",
    tip: "Warm the oil slightly by placing the bottle in warm water or rubbing your palms together. This opens up the herbal essences and enhances deep absorption."
  },
  {
    num: "02",
    phase: "Phase II: Stimulation",
    title: "Massage Scalp",
    desc: "Gently massage into the scalp using circular, upward motions for 10 minutes. Focus on key pressure points to relieve tension, stimulate follicles, and accelerate microcirculation.",
    tip: "Always use the soft pads of your fingertips, never your nails. Move in small circular patterns to increase blood flow and activate dormant roots."
  },
  {
    num: "03",
    phase: "Phase III: Nourishment",
    title: "Deep Absorption",
    desc: "Leave the oil overnight or for at least 2 hours. This gives the cold-pressed active ingredients ample time to deeply penetrate the hair shafts and repair the cuticle layer.",
    tip: "Wrap your hair in a warm, damp towel or a silk wrap. The trapped warmth opens up scalp pores and accelerates the infusion of active nutrients."
  },
  {
    num: "04",
    phase: "Phase IV: Restoration",
    title: "Visible Results",
    desc: "Wash thoroughly with a mild, sulfate-free cleanser. Witness immediate restoration of hair texture, reduced frizz, improved elasticity, and a natural, healthy shine.",
    tip: "Finish your wash with a splash of cool water. This seals the hair cuticles, trapping the moisture and nutrients for a brilliant, glossy finish."
  }
]

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  // Autoplay progression ticking
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((step) => (step + 1) % steps.length)
          return 0
        }
        return prev + 1
      })
    }, 60) // 60ms * 100 = 6000ms (6 seconds)

    return () => clearInterval(interval)
  }, [isPlaying])

  // Handle user interaction
  const handleStepSelect = (index) => {
    setActiveStep(index)
    setProgress(0)
    setIsPlaying(false) // Pause autoplay when user interacts
  }

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length)
    setProgress(0)
    setIsPlaying(false)
  }

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)
    setProgress(0)
    setIsPlaying(false)
  }

  const active = steps[activeStep]

  return (
    <section id="how-it-works" className="section how-it-works-section">
      <div className="container">
        
        {/* Title Block with Fade-in Animation */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <div style={{ height: '2px', width: '40px', background: 'var(--color-accent)' }}></div>
            <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 700 }}>HOW TO USE</span>
            <div style={{ height: '2px', width: '40px', background: 'var(--color-accent)' }}></div>
          </div>
          <h2 className="section-title">
            The Ritual of <span className="text-gold">Healing</span>
          </h2>
        </div>

        <div className="ritual-visualizer-layout">
          
          {/* Left Column: Visualizer Vessel with Active SVG */}
          <div className="visualizer-pane">
            <div className="ritual-vessel">
              <div className="vessel-svg-wrapper">
                
                {/* SVG 1: Apply Oil */}
                <div className={`ritual-svg ${activeStep === 0 ? 'active' : ''}`}>
                  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="dropperGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#fff" />
                        <stop offset="100%" stopColor="#d5dcd6" />
                      </linearGradient>
                      <linearGradient id="dropperGold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffe795" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>
                    <circle cx="70" cy="70" r="58" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
                    <circle cx="70" cy="70" r="48" stroke="rgba(212, 175, 55, 0.04)" strokeWidth="1" />
                    
                    {/* Dropper */}
                    <g transform="translate(10, 10)">
                      <path d="M42,22 C37,17 32,22 32,27 C32,32 37,35 42,35 C47,35 52,32 52,27 C52,22 47,17 42,22 Z" fill="#2c3e30" stroke="#d4af37" strokeWidth="0.8" />
                      <path d="M40,35 L40,65 C40,67 41,68 42,70 L43,73 L45,73 L46,70 C47,68 48,67 48,65 L48,35 Z" fill="url(#dropperGrad)" stroke="rgba(10,28,17,0.2)" strokeWidth="0.8" />
                      <line x1="42" y1="38" x2="42" y2="60" stroke="#fff" strokeWidth="0.5" opacity="0.6" />
                      <path d="M41,50 L41,65 C41,66.5 42,67.5 43,69 L45,69 C46,67.5 47,66.5 47,65 L47,50 Z" fill="url(#dropperGold)" opacity="0.85" />
                    </g>

                    {/* Droplets Anim */}
                    <path className="drop-anim-1" d="M64,88 C64,91.3 61.3,94 58,94 C54.7,94 52,91.3 52,88 C52,82 58,74 58,74 C58,74 64,82 64,88 Z" fill="url(#dropperGold)" />
                    <path className="drop-anim-2" d="M64,88 C64,91.3 61.3,94 58,94 C54.7,94 52,91.3 52,88 C52,82 58,74 58,74 C58,74 64,82 64,88 Z" fill="url(#dropperGold)" />
                    <path className="drop-anim-3" d="M64,88 C64,91.3 61.3,94 58,94 C54.7,94 52,91.3 52,88 C52,82 58,74 58,74 C58,74 64,82 64,88 Z" fill="url(#dropperGold)" />

                    {/* Palms / Pool representation */}
                    <g className="oil-float" transform="translate(0, 0)">
                      <path d="M35,110 C50,118 90,118 105,110 C109,107.8 111,105 109,103 C105,99.5 88,103 70,103 C52,103 35,99.5 31,103 C29,105 31,107.8 35,110 Z" fill="url(#dropperGold)" opacity="0.2" />
                      <path d="M42,108 C54,113 86,113 98,108 C100,106.8 90,109 70,109 C50,109 40,106.8 42,108 Z" fill="url(#dropperGold)" stroke="url(#dropperGold)" strokeWidth="0.5" opacity="0.85" />
                      <ellipse cx="70" cy="103" rx="8" ry="2" stroke="#d4af37" strokeWidth="0.5" opacity="0.4" />
                      <ellipse cx="70" cy="103" rx="14" ry="3.5" stroke="#d4af37" strokeWidth="0.5" opacity="0.2" />
                    </g>
                  </svg>
                </div>

                {/* SVG 2: Massage Scalp */}
                <div className={`ritual-svg ${activeStep === 1 ? 'active' : ''}`}>
                  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70" cy="70" r="58" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
                    <g transform="translate(0, -3)">
                      {/* Head Outline */}
                      <path d="M45,115 C43,105 38,98 38,90 C38,80 43,77 41,70 C39,63 32,60 35,50 C38,40 50,30 70,30 C90,30 102,42 102,62 C102,75 97,88 95,100 C93,110 95,115 95,115" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
                      <path d="M50,42 C60,35 75,34 85,38 C95,42 99,52 99,62 C99,72 96,82 94,92 C92,102 93,112 93,115" stroke="#d4af37" strokeWidth="0.75" strokeDasharray="2 3" opacity="0.5" />
                      
                      {/* Massage circle waves pulsing */}
                      <circle class="wave-pulse" cx="70" cy="55" r="8" stroke="#d4af37" strokeWidth="0.75" fill="none" />
                      <circle class="wave-pulse wave-delay-1" cx="70" cy="55" r="8" stroke="#d4af37" strokeWidth="0.75" fill="none" />
                      <circle class="wave-pulse wave-delay-2" cx="70" cy="55" r="8" stroke="#d4af37" strokeWidth="0.75" fill="none" />
                      
                      <circle class="wave-pulse" cx="88" cy="72" r="6" stroke="#d4af37" strokeWidth="0.5" fill="none" />
                      <circle class="wave-pulse wave-delay-1" cx="88" cy="72" r="6" stroke="#d4af37" strokeWidth="0.5" fill="none" />
                      
                      <path d="M66,51 A5,5 0 0 1 74,51" stroke="#d4af37" strokeWidth="0.75" strokeLinecap="round" />
                      <path d="M68,57 A3,3 0 0 1 72,57" stroke="#d4af37" strokeWidth="0.75" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>

                {/* SVG 3: Deep Absorption */}
                <div className={`ritual-svg ${activeStep === 2 ? 'active' : ''}`}>
                  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="70" cy="70" r="58" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
                    <g>
                      <path class="star-twinkle-1" d="M25,35 L26,38 L29,39 L26,40 L25,43 L24,40 L21,39 L24,38 Z" fill="#d4af37" />
                      <path class="star-twinkle-2" d="M115,40 L116,42 L118,43 L116,44 L115,46 L114,44 L112,43 L114,42 Z" fill="#d4af37" />
                      <path class="star-twinkle-3" d="M105,105 L106,107 L108,108 L106,109 L105,111 L104,109 L102,108 L104,107 Z" fill="#d4af37" />
                    </g>
                    <path class="moon-pulse" d="M42,42 C50,42 62,48 64,58 C65,63 62,69 57,72 C50,76 40,73 37,66 C35,61 36,53 42,42 C32,50 33,68 45,74 C57,80 72,70 69,54 C67,46 54,39 42,42 Z" fill="#d4af37" opacity="0.85" />
                    <g transform="translate(0, 10)">
                      <line x1="25" y1="90" x2="115" y2="90" stroke="var(--color-primary)" strokeWidth="0.8" opacity="0.2" />
                      <path d="M70,45 C69,60 69,75 70,90" stroke="var(--color-primary)" strokeWidth="1.2" opacity="0.4" />
                      <path d="M70,90 C70,95 68,98 67,103 C66,106 67,109 70,109 C73,109 74,106 73,103 C72,98 70,95 70,90 Z" fill="none" stroke="var(--color-primary)" strokeWidth="1" />
                      <circle cx="70" cy="106" r="2.2" fill="#d4af37" />
                      <path class="absorb-path" d="M68,107 Q63,108 58,104" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" fill="none" />
                      <path class="absorb-path" d="M72,107 Q77,108 82,104" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" fill="none" />
                      <path class="absorb-path" d="M70,109 Q70,115 70,119" stroke="#d4af37" strokeWidth="1" strokeLinecap="round" fill="none" />
                    </g>
                  </svg>
                </div>

                {/* SVG 4: Visible Results */}
                <div className={`ritual-svg ${activeStep === 3 ? 'active' : ''}`}>
                  <svg viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="dropperGold" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ffe795" />
                        <stop offset="100%" stopColor="#d4af37" />
                      </linearGradient>
                    </defs>
                    <path class="sparkle-1" d="M35,55 L37,58 L42,60 L37,62 L35,65 L33,62 L28,60 L33,58 Z" fill="#d4af37" />
                    <path class="sparkle-2" d="M105,75 L107,78 L112,80 L107,82 L105,85 L103,82 L98,80 L103,78 Z" fill="#d4af37" />
                    <path class="sparkle-3" d="M65,25 L67,28 L72,30 L67,32 L65,35 L63,32 L58,30 L63,28 Z" fill="#d4af37" />
                    <circle cx="70" cy="70" r="58" stroke="rgba(212, 175, 55, 0.08)" strokeWidth="1" strokeDasharray="3 3" />
                    <g>
                      <path d="M45,120 C45,100 95,70 95,70 C95,70 45,40 45,20" stroke="var(--color-primary)" strokeWidth="2.5" strokeLinecap="round" />
                      <path d="M50,120 C50,103 90,70 90,70 C90,70 50,37 50,20" stroke="#d4af37" strokeWidth="1.2" strokeLinecap="round" />
                      <path class="hair-shimmer" d="M50,120 C50,103 90,70 90,70 C90,70 50,37 50,20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.85" />
                      <ellipse cx="70" cy="70" rx="35" ry="35" stroke="url(#dropperGold)" strokeWidth="0.5" opacity="0.2" strokeDasharray="4 8" />
                    </g>
                  </svg>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: details Panel */}
          <div className="details-pane">
            
            {/* Stepper tabs row */}
            <div className="ritual-stepper-row" role="tablist" aria-label="Ritual of Healing steps">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  role="tab"
                  aria-selected={activeStep === idx}
                  aria-controls={`ritual-panel-${idx}`}
                  id={`ritual-tab-${idx}`}
                  className={`stepper-tab-btn ${activeStep === idx ? 'active' : ''}`}
                  onClick={() => handleStepSelect(idx)}
                >
                  <span className="tab-num">{step.num}</span>
                  <span className="tab-title">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Step Card Deck */}
            <div 
              key={activeStep} // Changing key triggers CSS re-entry animation natively
              id={`ritual-panel-${activeStep}`}
              role="tabpanel"
              aria-labelledby={`ritual-tab-${activeStep}`}
              className="ritual-step-card"
            >
              <div className="ritual-card-content">
                <span className="step-phase-badge">{active.phase}</span>
                <h3 className="step-title-serif">{active.title}</h3>
                <p className="step-desc-text">{active.desc}</p>
                
                {/* Ayurvedic Tip Box */}
                <div className="ritual-tip-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.2rem' }}>
                    <Sparkles size={13} color="#c09e32" style={{ animation: 'starTwinkle 2s infinite ease-in-out' }} />
                    <span className="ritual-tip-title">Ayurvedic Tip</span>
                  </div>
                  <p className="ritual-tip-text">{active.tip}</p>
                </div>
              </div>
            </div>

            {/* Stepper Controls Row (Prev/Next/Progress) */}
            <div className="ritual-controls-row">
              
              {/* Autoplay progress line */}
              <div className="autoplay-progress-container">
                <div 
                  className="autoplay-progress-bar" 
                  style={{ width: `${progress}%` }} 
                />
              </div>

              {/* Navigation button circles */}
              <div className="nav-buttons-row">
                <button 
                  className="nav-circle-btn" 
                  onClick={handlePrev} 
                  aria-label="Previous step"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className="nav-circle-btn" 
                  onClick={handleNext} 
                  aria-label="Next step"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
