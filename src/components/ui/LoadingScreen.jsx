import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let isMounted = true
    const start = performance.now()
    const minDisplayMs = 900
    const maxDisplayMs = 1400
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
          <motion.div 
            className="loading-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="loading-logo">Bhagya Veda</h1>
            <p className="loading-tagline">Ancient Wisdom. Modern Luxury.</p>
            <div className="loading-bar-container">
              <motion.div 
                className="loading-bar"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
