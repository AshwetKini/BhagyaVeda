import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import Scene from './components/canvas/Scene'
import HeroSection from './components/ui/HeroSection'
import PromiseSection from './components/ui/PromiseSection'
import IngredientsSection from './components/ui/IngredientsSection'
import BenefitsSection from './components/ui/BenefitsSection'
import ResultsSection from './components/ui/ResultsSection'
import HowItWorksSection from './components/ui/HowItWorksSection'
import TestimonialsSection from './components/ui/TestimonialsSection'
import Footer from './components/ui/Footer'
import Navbar from './components/ui/Navbar'
import LoadingScreen from './components/ui/LoadingScreen'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton'
import FAQSection from './components/ui/FAQSection'

function App() {
  const [showCanvas, setShowCanvas] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Bottle renders ONLY during these early sections
    const activeSectionSelectors = [
      '.hero-section',
      '.promise-section',
      '.ingredients-section'
    ]

    // Bottle is explicitly hidden for all sections after Ingredients
    const hideCanvasSelectors = [
      '.benefits-section',
      '.results-section',
      '.how-it-works-section',
      '.testimonials-section',
      '.faq-section',
      'footer'
    ]

    const activeElements = activeSectionSelectors.map(selector => document.querySelector(selector)).filter(Boolean)
    const hideElements = hideCanvasSelectors.map(selector => document.querySelector(selector)).filter(Boolean)
    
    if (activeElements.length === 0 && hideElements.length === 0) return

    const visibilityMap = new Map()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        visibilityMap.set(entry.target, entry.isIntersecting)
      })

      // Check if any hide-canvas section is visible
      let shouldHide = false
      hideElements.forEach(el => {
        if (visibilityMap.get(el)) {
          shouldHide = true
        }
      })

      // Check if at least one active section is visible
      let isAnyActiveVisible = false
      activeElements.forEach(el => {
        if (visibilityMap.get(el)) {
          isAnyActiveVisible = true
        }
      })

      // Canvas is visible ONLY if an active section is visible AND we are not in a hide section
      setShowCanvas(isAnyActiveVisible && !shouldHide)
    }, { 
      threshold: 0.05, 
      rootMargin: '-5% 0px -5% 0px' 
    })

    activeElements.forEach(el => observer.observe(el))
    hideElements.forEach(el => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      return undefined
    }

    const lenis = new Lenis({
      duration: 0.9,
      easing: (t) => 1 - Math.pow(1 - t, 2.2),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <LoadingScreen />
      <Navbar />
      
      {/* 3D Canvas layer fixed in background */}
      <div className="canvas-container" style={{ display: showCanvas ? 'block' : 'none' }}>
        <Scene isVisible={showCanvas} />
      </div>

      {/* UI Elements scroll normally on top */}
      <main className="ui-layer">
        <HeroSection />
        <PromiseSection />
        <IngredientsSection />
        <BenefitsSection />
        <ResultsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      
      <Footer className="ui-layer" />
      <FloatingWhatsAppButton />
    </>
  )
}

export default App
