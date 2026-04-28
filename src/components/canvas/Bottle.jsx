import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function Bottle(props) {
  const group = useRef()
  
  // Since we are using external DOM scrolling (Lenis), we will manually track scroll position.
  useFrame((state, delta) => {
    // Get normalized scroll progress (0 to 1)
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0

    if (group.current) {
      // Rotate the bottle based on scroll
      const targetRotationY = progress * Math.PI * 4 // 2 full rotations
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.05)
      
      // Slightly move up and down based on scroll
      const targetPositionY = Math.sin(progress * Math.PI) * 0.5
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetPositionY, 0.05)
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5} floatingRange={[-0.1, 0.1]}>
      <group ref={group} {...props} dispose={null} position={[0, -0.5, 0]}>
        
        {/* Bottle Body (Glass) */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 3, 32]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={0.2}
            chromaticAberration={0.025}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.1}
            temporalDistortion={0.0}
            color="#E8F0E5"
            transmission={0.9}
            roughness={0.1}
            ior={1.5}
          />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 1.75, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.8, 0.5, 32]} />
          <MeshTransmissionMaterial 
            thickness={0.2}
            color="#E8F0E5"
            transmission={0.9}
            roughness={0.1}
            ior={1.5}
          />
        </mesh>

        {/* Inner Oil (Liquid) */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.92, 0.92, 2.8, 32]} />
          <meshPhysicalMaterial 
            color="#A8B050" /* Herbal Oil Color */
            transmission={0.5}
            opacity={0.9}
            transparent
            roughness={0.2}
            metalness={0.1}
          />
        </mesh>

        {/* Gold Cap */}
        <mesh position={[0, 2.2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.45, 0.45, 0.6, 32]} />
          <meshStandardMaterial 
            color="#D4AF37" 
            metalness={1} 
            roughness={0.2} 
            envMapIntensity={2}
          />
        </mesh>

        {/* Cap Rim Detailing */}
        <mesh position={[0, 2.45, 0]}>
          <cylinderGeometry args={[0.47, 0.47, 0.05, 32]} />
          <meshStandardMaterial color="#B08D2D" metalness={1} roughness={0.3} />
        </mesh>

        {/* Label (Premium Black/Gold) */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.02, 1.02, 1.8, 32, 1, true, -Math.PI / 2, Math.PI]} />
          <meshStandardMaterial 
            color="#0A1C11" 
            roughness={0.8}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Label Gold Border Top */}
        <mesh position={[0, 0.85, 0]}>
          <cylinderGeometry args={[1.03, 1.03, 0.05, 32, 1, true, -Math.PI / 2, Math.PI]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>

        {/* Label Gold Border Bottom */}
        <mesh position={[0, -0.85, 0]}>
          <cylinderGeometry args={[1.03, 1.03, 0.05, 32, 1, true, -Math.PI / 2, Math.PI]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}
