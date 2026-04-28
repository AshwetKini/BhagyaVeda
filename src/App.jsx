import { useEffect } from 'react'
import Lenis from 'lenis'
import Scene from './components/canvas/Scene'
import HeroSection from './components/ui/HeroSection'
import PromiseSection from './components/ui/PromiseSection'
import IngredientsSection from './components/ui/IngredientsSection'
import BenefitsSection from './components/ui/BenefitsSection'
import HowItWorksSection from './components/ui/HowItWorksSection'
import TestimonialsSection from './components/ui/TestimonialsSection'
import Footer from './components/ui/Footer'
import Navbar from './components/ui/Navbar'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
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
      <Navbar />
      
      {/* 3D Canvas layer fixed in background */}
      <div className="canvas-container">
        <Scene />
      </div>

      {/* UI Elements scroll normally on top */}
      <main className="ui-layer">
        <HeroSection />
        <PromiseSection />
        <IngredientsSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
      </main>
      
      <Footer className="ui-layer" />
    </>
  )
}

export default App
