import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'

const steps = [
  {
    num: "01",
    phase: "Phase I: Preparation",
    title: "Apply Oil",
    desc: "Take oil on your palms. Warm the oil slightly by rubbing your palms together to activate the rich, cold-pressed herbs and release the soothing therapeutic aromas.",
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

  // Touch swipe gesture support for mobile
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 50

  const handleTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      handleNext()
    } else if (isRightSwipe) {
      handlePrev()
    }
  }

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
          <div 
            className="visualizer-pane"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="ritual-vessel">
              <div className="vessel-svg-wrapper">
                
                {/* Image 1: Apply Oil */}
                <div className={`ritual-svg ${activeStep === 0 ? 'active' : ''}`}>
                  <img 
                    src="/ritual_step_1.png" 
                    alt="Apply Oil" 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Image 2: Massage Scalp */}
                <div className={`ritual-svg ${activeStep === 1 ? 'active' : ''}`}>
                  <img 
                    src="/ritual_step_2.png" 
                    alt="Massage Scalp" 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Image 3: Deep Absorption */}
                <div className={`ritual-svg ${activeStep === 2 ? 'active' : ''}`}>
                  <img 
                    src="/ritual_step_3.png" 
                    alt="Deep Absorption" 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
                </div>

                {/* Image 4: Visible Results */}
                <div className={`ritual-svg ${activeStep === 3 ? 'active' : ''}`}>
                  <img 
                    src="/ritual_step_4.png" 
                    alt="Visible Results" 
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} 
                  />
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
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
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
