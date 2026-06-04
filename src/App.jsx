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

  useEffect(() => {
    const activeSectionSelectors = [
      '.hero-section',
      '.promise-section',
      '.ingredients-section',
      '.results-section',
      '.how-it-works-section',
      '.faq-section'
    ]

    const elements = activeSectionSelectors.map(selector => document.querySelector(selector)).filter(Boolean)
    if (elements.length === 0) return

    const visibilityMap = new Map()

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        visibilityMap.set(entry.target, entry.isIntersecting)
      })

      // Check if at least one active section is visible
      let isAnyVisible = false
      elements.forEach(el => {
        if (visibilityMap.get(el)) {
          isAnyVisible = true
        }
      })

      setShowCanvas(isAnyVisible)
    }, { threshold: 0, rootMargin: '0px' })

    elements.forEach(el => observer.observe(el))

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
