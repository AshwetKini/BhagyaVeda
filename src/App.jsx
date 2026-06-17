import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import HeroSection from './components/ui/HeroSection'
import PromiseSection from './components/ui/PromiseSection'
import IngredientsSection from './components/ui/IngredientsSection'
import BenefitsSection from './components/ui/BenefitsSection'
import ProductSizesSection from './components/ui/ProductSizesSection'
import ResultsSection from './components/ui/ResultsSection'
import HowItWorksSection from './components/ui/HowItWorksSection'
import TestimonialsSection from './components/ui/TestimonialsSection'
import Footer from './components/ui/Footer'
import Navbar from './components/ui/Navbar'
import LoadingScreen from './components/ui/LoadingScreen'
import FloatingWhatsAppButton from './components/ui/FloatingWhatsAppButton'
import HaveQuestionsSection from './components/ui/HaveQuestionsSection'

// Lazy-loaded components (heavy 3D elements and secondary pages)
const Scene = lazy(() => import('./components/canvas/Scene'))
const FAQPage = lazy(() => import('./components/ui/FAQPage'))
const AboutPage = lazy(() => import('./components/ui/AboutPage'))

function HomePage() {
  const [showCanvas, setShowCanvas] = useState(true)

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
      '.sizes-section',
      '.results-section',
      '.how-it-works-section',
      '.testimonials-section',
      '.have-questions-section',
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

  return (
    <>
      <Navbar />
      
      {/* 3D Canvas layer fixed in background */}
      <div className="canvas-container" style={{ display: showCanvas ? 'block' : 'none' }}>
        <Suspense fallback={null}>
          <Scene isVisible={showCanvas} />
        </Suspense>
      </div>

      {/* UI Elements scroll normally on top */}
      <main className="ui-layer">
        <HeroSection />
        <PromiseSection />
        <IngredientsSection />
        <BenefitsSection />
        <ProductSizesSection />
        <ResultsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <HaveQuestionsSection />
      </main>
      
      <Footer className="ui-layer" />
      <FloatingWhatsAppButton />
    </>
  )
}

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Single optimized scroll progress tracker (prevents R3F layout thrashing)
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      window.__scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0
    }

    updateScrollProgress()

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [])


  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App

