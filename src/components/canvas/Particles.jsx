import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { PointMaterial, Points } from '@react-three/drei'
import * as THREE from 'three'

export default function Particles({ count = 500 }) {
  const pointsRef = useRef()

  // Generate random positions for particles
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      // Create a volume around the bottle
      const r = 4 + Math.random() * 6 // radius
      const theta = 2 * Math.PI * Math.random() // angle
      const y = (Math.random() - 0.5) * 20 // height
      
      pos[i * 3] = r * Math.cos(theta)
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = r * Math.sin(theta)
    }
    return pos
  }, [count])

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05
      
      // Subtle float up
      const positions = pointsRef.current.geometry.attributes.position.array
      for(let i = 0; i < count; i++) {
        positions[i*3 + 1] += delta * 0.2
        if (positions[i*3 + 1] > 10) {
            positions[i*3 + 1] = -10
        }
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#D4AF37"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}
