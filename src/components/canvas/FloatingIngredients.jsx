import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function Ingredient({ position, color, scale, speed, type }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += speed * 0.01
      meshRef.current.rotation.y += speed * 0.01
      
      // Subtle parallax on scroll
      const scrollY = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0
      
      meshRef.current.position.y = position[1] + (progress * 5 * speed) - (progress * 2)
    }
  })

  const getGeometry = () => {
    switch(type) {
      case 'amla': return <sphereGeometry args={[1, 32, 32]} />
      case 'neem': return <torusGeometry args={[0.8, 0.3, 16, 32]} /> // Abstract leaf-ish
      case 'coconut': return <sphereGeometry args={[1.2, 16, 16]} />
      default: return <dodecahedronGeometry args={[1, 0]} />
    }
  }

  return (
    <Float speed={speed * 2} rotationIntensity={speed} floatIntensity={speed}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
        {getGeometry()}
        <meshPhysicalMaterial 
          color={color}
          roughness={type === 'coconut' ? 0.9 : 0.3}
          metalness={0.1}
          clearcoat={type === 'amla' ? 0.5 : 0}
        />
      </mesh>
    </Float>
  )
}

export default function FloatingIngredients() {
  return (
    <group>
      {/* Amla - Light Green Sphere */}
      <Ingredient type="amla" position={[-3, 2, -2]} color="#8BB040" scale={0.4} speed={1.2} />
      <Ingredient type="amla" position={[4, -3, -4]} color="#8BB040" scale={0.3} speed={0.8} />
      
      {/* Neem - Darker Green Abstract */}
      <Ingredient type="neem" position={[3, 4, -5]} color="#2E4B31" scale={0.5} speed={0.9} />
      <Ingredient type="neem" position={[-4, -1, -3]} color="#2E4B31" scale={0.4} speed={1.1} />

      {/* Coconut - Brownish Rough Sphere */}
      <Ingredient type="coconut" position={[-4, 4, -4]} color="#5C4033" scale={0.6} speed={0.7} />
      
      {/* Bhringraj - Herbal Green Dodecahedron */}
      <Ingredient type="bhringraj" position={[5, 1, -3]} color="#4A5D23" scale={0.45} speed={1.3} />
    </group>
  )
}
