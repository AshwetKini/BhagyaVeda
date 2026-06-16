import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const tips = [
  "Infused with Bhringraj, the 'King of Herbs' for natural hair rejuvenation.",
  "Amla nourishes your follicles with rich natural Vitamin C.",
  "Onion extracts are clinically proven to help reduce hair fall.",
  "Gentle warm scalp massages help improve root blood circulation.",
  "100% active Ayurvedic botanicals, free from harmful mineral oils."
]

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [tipIndex, setTipIndex] = useState(0)

  // Rotate tips every 2.5 seconds
  useEffect(() => {
    if (!isLoading) return
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 2800)
    return () => clearInterval(interval)
  }, [isLoading])

  useEffect(() => {
    let isMounted = true
    const start = performance.now()
    const minDisplayMs = 1200 // Slightly longer display to let users read tips/enjoy the loader
    const maxDisplayMs = 1800
    let rafId

    const finishLoading = () => {
      setProgress(100)
      setTimeout(() => {
        if (isMounted) setIsLoading(false)
      }, 250)
    }

    const animateProgress = (now) => {
      const elapsed = now - start
      const normalized = Math.min(elapsed / minDisplayMs, 1)
      const eased = 1 - Math.pow(1 - normalized, 3)
      setProgress(Math.min(95, eased * 95))

      if (elapsed < maxDisplayMs) {
        rafId = requestAnimationFrame(animateProgress)
      } else {
        finishLoading()
      }
    }

    rafId = requestAnimationFrame(animateProgress)

    const onWindowLoad = () => {
      const elapsed = performance.now() - start
      const remaining = Math.max(minDisplayMs - elapsed, 0)
      setTimeout(() => {
        if (isMounted) finishLoading()
      }, remaining)
    }

    if (document.readyState === 'complete') {
      onWindowLoad()
    } else {
      window.addEventListener('load', onWindowLoad, { once: true })
    }

    return () => {
      isMounted = false
      window.removeEventListener('load', onWindowLoad)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Animated Background Particles */}
          <div className="loader-particles">
            <div className="loader-particle"></div>
            <div className="loader-particle"></div>
            <div className="loader-particle"></div>
            <div className="loader-particle"></div>
            <div className="loader-particle"></div>
          </div>

          <motion.div 
            className="loading-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Logo with pulsating gold oil ripples */}
            <div className="logo-ripple-container">
              <motion.div 
                className="logo-ripple"
                animate={{ scale: [0.95, 1.8], opacity: [0.5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div 
                className="logo-ripple"
                animate={{ scale: [0.95, 1.8], opacity: [0.5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
              />
              <img src="/logo.png" alt="BhagyaVeda" className="loader-logo" />
            </div>

            {/* Brand Title and Subtitle */}
            <h2 className="loader-brand-title">BhagyaVeda</h2>
            <p className="loader-brand-subtitle">PREMIUM AYURVEDIC HAIR OIL</p>

            {/* Percentage Counter and Progress Bar */}
            <div className="loader-progress-section">
              <span className="loader-percentage">{Math.round(progress)}%</span>
              <div className="loading-bar-container">
                <motion.div 
                  className="loading-bar"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Rotating Educational Tips */}
            <div className="loader-tip-container">
              <AnimatePresence mode="wait">
                <motion.p 
                  key={tipIndex}
                  className="loader-tip"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 0.85, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {tips[tipIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

