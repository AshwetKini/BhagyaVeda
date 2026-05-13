import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

function pseudoRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export default function Particles({ count = 800 }) {
  const pointsRef = useRef()
  const tickRef = useRef(0)

  // Generate random positions for particles in a cylindrical volume
  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const sz = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      const r1 = pseudoRandom(i + 1)
      const r2 = pseudoRandom(i + 1001)
      const r3 = pseudoRandom(i + 2001)
      const r4 = pseudoRandom(i + 3001)
      const r = 3 + r1 * 8
      const theta = 2 * Math.PI * r2
      const y = (r3 - 0.5) * 25

      pos[i * 3] = r * Math.cos(theta)
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = r * Math.sin(theta)

      // Vary sizes for depth perception
      sz[i] = 0.02 + r4 * 0.06
    }
    return [pos, sz]
  }, [count])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      tickRef.current += 1
      const frameStep = count > 400 ? 2 : 1
      if (tickRef.current % frameStep !== 0) return

      // Slow ambient rotation
      pointsRef.current.rotation.y += delta * 0.03

      // Gentle float upward with reset
      const posArray = pointsRef.current.geometry.attributes.position.array
      const elapsed = state.clock.elapsedTime * 0.5
      for (let i = 0; i < count; i++) {
        posArray[i * 3 + 1] += delta * (0.1 + sizes[i] * 2)
        if (posArray[i * 3 + 1] > 12) {
          posArray[i * 3 + 1] = -12
        }

        // Subtle horizontal drift using sine wave
        posArray[i * 3] += Math.sin(elapsed + i) * delta * 0.02
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}
