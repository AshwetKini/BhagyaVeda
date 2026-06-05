import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
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

      // Framerate-independent rotation
      meshRef.current.rotation.x = THREE.MathUtils.damp(
        meshRef.current.rotation.x,
        meshRef.current.rotation.x + speed * 0.01,
        10,
        delta
      )
      meshRef.current.rotation.y += speed * delta * 0.5
      
      // Scroll-linked parallax with damping
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const rawProgress = maxScroll > 0 ? scrollY / maxScroll : 0
      smoothProgress.current = THREE.MathUtils.damp(smoothProgress.current, rawProgress, 2, delta)
      
      const p = smoothProgress.current
      meshRef.current.position.y = THREE.MathUtils.damp(
        meshRef.current.position.y,
        initialPos.current.y + (p * 4 * speed) - (p * 2),
        3,
        delta
      )

      // Add a gentle breathing scale pulse
      const pulse = 1 + Math.sin(elapsedRef.current * speed) * 0.08
      meshRef.current.scale.setScalar(scale * pulse)
    }
  })

  const getGeometry = () => {
    switch(type) {
      case 'amla': return <sphereGeometry args={[1, 32, 32]} />
      case 'neem': return <torusGeometry args={[0.8, 0.3, 16, 32]} />
      case 'coconut': return <sphereGeometry args={[1.2, 16, 16]} />
      default: return <dodecahedronGeometry args={[1, 0]} />
    }
  }

  return (
    <Float speed={speed * 1.5} rotationIntensity={speed * 0.8} floatIntensity={speed * 0.6}>
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
    </Float>
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
