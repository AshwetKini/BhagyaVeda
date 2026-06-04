import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, PerspectiveCamera } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import Bottle from './Bottle'
import FloatingIngredients from './FloatingIngredients'
import Particles from './Particles'

// Mouse-reactive camera parallax component
function CameraRig() {
  const { camera } = useThree()
  const mousePos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  // react-three-fiber expects camera updates inside useFrame.
  // eslint-disable-next-line react-hooks/immutability
  useFrame((state, delta) => {
    // Subtle camera sway following the mouse — framerate independent
    const targetX = mousePos.current.x * 0.4
    const targetY = -mousePos.current.y * 0.3 + 0.2

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 3, delta) // eslint-disable-line react-hooks/immutability
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 3, delta)

    // Always look at center of the scene
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function Scene({ isVisible = true }) {
  const isLowPowerDevice = useMemo(() => {
    if (typeof window === 'undefined') return false
    return (
      window.innerWidth < 1024 ||
      window.devicePixelRatio > 1.5 ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 6)
    )
  }, [])

  const canvasDpr = isLowPowerDevice ? [1, 1] : [1, 2]
  const particleCount = isLowPowerDevice ? 260 : 520
  const shadowMapSize = isLowPowerDevice ? 512 : 1024

  return (
    <Canvas 
      shadows 
      dpr={canvasDpr}
      performance={{ min: 0.6 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
      
      <color attach="background" args={['transparent']} />

      {/* Soft ambient fill */}
      <ambientLight intensity={0.4} color="#FDFBF7" />

      {/* Main key light — warm ivory */}
      <directionalLight 
        position={[8, 12, 5]} 
        intensity={1.2} 
        color="#FFF8E7" 
        castShadow 
        shadow-bias={-0.0001}
        shadow-mapSize-width={shadowMapSize}
        shadow-mapSize-height={shadowMapSize}
      />

      {/* Gold accent rim light */}
      <spotLight 
        position={[-8, 8, -8]} 
        intensity={2.5} 
        color="#D4AF37" 
        angle={0.4} 
        penumbra={1} 
        decay={2}
      />

      {/* Subtle green fill light from below */}
      <pointLight position={[0, -5, 3]} intensity={0.5} color="#2E4B31" />

      {/* Back rim light for depth */}
      <spotLight 
        position={[5, -3, -8]} 
        intensity={1} 
        color="#E8F0E5" 
        angle={0.6} 
        penumbra={1} 
      />

      <Suspense fallback={null}>
        <CameraRig />
        {isVisible && (
          <>
            <Bottle />
            <FloatingIngredients />
            <Particles count={particleCount} />
          </>
        )}
        <Environment preset="city" blur={isLowPowerDevice ? 0.5 : 0.8} />

        {/* Post-processing effects */}
        {!isLowPowerDevice && isVisible && (
          <EffectComposer>
            <Bloom 
              intensity={0.35}
              luminanceThreshold={0.75}
              luminanceSmoothing={0.85}
              mipmapBlur
            />
            <Vignette 
              offset={0.3}
              darkness={0.45}
              eskil={false}
            />
          </EffectComposer>
        )}
      </Suspense>
    </Canvas>
  )
}
