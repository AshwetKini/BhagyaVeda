import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Ingredient({ position, color, scale, speed, type, emissive }) {
  const meshRef = useRef()
  const initialPos = useRef(new THREE.Vector3(...position))
  const smoothProgress = useRef(0)
  const elapsedRef = useRef(0)
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Accumulate time locally to avoid deprecated THREE.Clock
      elapsedRef.current += delta

      // Scroll-linked parallax using cached progress (no layout thrashing)
      const rawProgress = window.__scrollProgress || 0
      smoothProgress.current = THREE.MathUtils.damp(smoothProgress.current, rawProgress, 2, delta)
      const p = smoothProgress.current

      // Calculate float behavior inline (replaces Drei's expensive <Float> wrapper)
      const floatTime = elapsedRef.current * speed * 1.5
      const floatOffsetY = Math.sin(floatTime) * (scale * 0.5)
      const floatRotX = Math.sin(floatTime * 0.7) * (speed * 0.15)
      const floatRotZ = Math.cos(floatTime * 0.7) * (speed * 0.15)

      // Apply coordinates (parallax + float)
      meshRef.current.position.y = THREE.MathUtils.damp(
        meshRef.current.position.y,
        initialPos.current.y + (p * 4 * speed) - (p * 2) + floatOffsetY,
        3,
        delta
      )
      
      // Apply rotation (continuous rotation + float wobble)
      meshRef.current.rotation.x = THREE.MathUtils.damp(
        meshRef.current.rotation.x,
        meshRef.current.rotation.x + speed * 0.01 + floatRotX,
        10,
        delta
      )
      meshRef.current.rotation.y += speed * delta * 0.5
      meshRef.current.rotation.z += floatRotZ * delta

      // Gentle breathing scale pulse
      const pulse = 1 + Math.sin(elapsedRef.current * speed) * 0.08
      meshRef.current.scale.setScalar(scale * pulse)
    }
  })

  const getGeometry = () => {
    switch(type) {
      case 'amla': return <sphereGeometry args={[1, 16, 16]} /> // Reduced segments for mobile performance
      case 'neem': return <torusGeometry args={[0.8, 0.3, 8, 16]} /> // Reduced segments
      case 'coconut': return <sphereGeometry args={[1.2, 12, 12]} /> // Reduced segments
      default: return <dodecahedronGeometry args={[1, 0]} />
    }
  }

  return (
    <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
      {getGeometry()}
      <meshPhysicalMaterial 
        color={color}
        roughness={type === 'coconut' ? 0.85 : 0.2}
        metalness={0.05}
        clearcoat={type === 'amla' ? 0.8 : 0.2}
        clearcoatRoughness={0.1}
        emissive={emissive || color}
        emissiveIntensity={0.05}
      />
    </mesh>
  )
}

export default function FloatingIngredients() {
  return (
    <group>
      {/* Amla - Light Green Sphere */}
      <Ingredient type="amla" position={[-3, 2, -2]} color="#8BB040" emissive="#6B9020" scale={0.4} speed={1.2} />
      <Ingredient type="amla" position={[4, -3, -4]} color="#8BB040" emissive="#6B9020" scale={0.3} speed={0.8} />
      
      {/* Neem - Darker Green Abstract */}
      <Ingredient type="neem" position={[3, 4, -5]} color="#2E4B31" emissive="#1E3B21" scale={0.5} speed={0.9} />
      <Ingredient type="neem" position={[-4, -1, -3]} color="#2E4B31" emissive="#1E3B21" scale={0.4} speed={1.1} />

      {/* Coconut - Brownish Rough Sphere */}
      <Ingredient type="coconut" position={[-4, 4, -4]} color="#5C4033" emissive="#3C2013" scale={0.6} speed={0.7} />
      
      {/* Bhringraj - Herbal Green Dodecahedron */}
      <Ingredient type="bhringraj" position={[5, 1, -3]} color="#4A5D23" emissive="#3A4D13" scale={0.45} speed={1.3} />

      {/* Extra small particles for depth */}
      <Ingredient type="amla" position={[-5, -4, -6]} color="#AAC060" scale={0.15} speed={1.5} />
      <Ingredient type="neem" position={[6, 3, -7]} color="#3E5B41" scale={0.2} speed={0.6} />
    </group>
  )
}
