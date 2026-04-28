import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

export default function Bottle(props) {
  const group = useRef()
  const oilRef = useRef()
  const capRef = useRef()

  // Smooth scroll tracking with damping
  const smoothProgress = useRef(0)

  useFrame((state, delta) => {
    // Get normalized scroll progress (0 to 1)
    const scrollY = window.scrollY
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const rawProgress = maxScroll > 0 ? scrollY / maxScroll : 0

    // Framerate-independent damping for buttery smooth transitions
    // damp(current, target, lambda, delta) — higher lambda = faster approach
    smoothProgress.current = THREE.MathUtils.damp(smoothProgress.current, rawProgress, 3, delta)
    const progress = smoothProgress.current

    if (group.current) {
      // Rotate the bottle based on scroll — smooth 2 full rotations
      const targetRotationY = progress * Math.PI * 4
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotationY, 4, delta)
      
      // Gentle tilt on scroll for cinematic feel
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        Math.sin(progress * Math.PI) * 0.15,
        3,
        delta
      )

      // Slightly move up and zoom based on scroll progress
      const targetY = Math.sin(progress * Math.PI) * 0.8
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 3, delta)

      // Subtle zoom: start at z=0, push closer at mid-scroll, pull back at end
      const targetZ = Math.sin(progress * Math.PI) * 1.5
      group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 3, delta)

      // Scale up slightly at the midpoint for dramatic effect
      const targetScale = 1 + Math.sin(progress * Math.PI) * 0.15
      group.current.scale.setScalar(
        THREE.MathUtils.damp(group.current.scale.x, targetScale, 3, delta)
      )
    }

    // Animate the oil inside with a subtle wobble
    if (oilRef.current) {
      oilRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.15} floatIntensity={0.3} floatingRange={[-0.08, 0.08]}>
      <group ref={group} {...props} dispose={null} position={[0, -0.5, 0]}>
        
        {/* Bottle Body (Glass) — slightly tapered for realism */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.95, 1.05, 3, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={6}
            thickness={0.3}
            chromaticAberration={0.04}
            anisotropy={0.2}
            distortion={0.15}
            distortionScale={0.15}
            temporalDistortion={0.02}
            color="#E8F0E5"
            transmission={0.92}
            roughness={0.05}
            ior={1.5}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Bottle Shoulder (Glass taper) */}
        <mesh position={[0, 1.7, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.4, 0.85, 0.45, 64]} />
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={0.2}
            color="#E8F0E5"
            transmission={0.92}
            roughness={0.05}
            ior={1.5}
          />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 2.05, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.35, 0.4, 0.25, 64]} />
          <MeshTransmissionMaterial 
            thickness={0.15}
            color="#E8F0E5"
            transmission={0.92}
            roughness={0.05}
            ior={1.5}
          />
        </mesh>

        {/* Inner Oil (Liquid) — animated glow */}
        <mesh ref={oilRef} position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.88, 0.88, 2.6, 64]} />
          <meshPhysicalMaterial 
            color="#8B9A30"
            transmission={0.4}
            opacity={0.85}
            transparent
            roughness={0.15}
            metalness={0.05}
            emissive="#4A5D23"
            emissiveIntensity={0.15}
          />
        </mesh>

        {/* Gold Cap — Premium */}
        <mesh ref={capRef} position={[0, 2.35, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.42, 0.42, 0.5, 64]} />
          <meshStandardMaterial 
            color="#D4AF37" 
            metalness={1} 
            roughness={0.15} 
            envMapIntensity={3}
          />
        </mesh>

        {/* Cap Top */}
        <mesh position={[0, 2.6, 0]}>
          <cylinderGeometry args={[0.38, 0.42, 0.05, 64]} />
          <meshStandardMaterial color="#C5A028" metalness={1} roughness={0.2} />
        </mesh>

        {/* Cap Rim Detailing — thin ring */}
        <mesh position={[0, 2.55, 0]}>
          <torusGeometry args={[0.42, 0.02, 8, 64]} />
          <meshStandardMaterial color="#B08D2D" metalness={1} roughness={0.25} />
        </mesh>

        {/* Cap Knurling Detail */}
        <mesh position={[0, 2.15, 0]}>
          <torusGeometry args={[0.43, 0.015, 8, 64]} />
          <meshStandardMaterial color="#B08D2D" metalness={1} roughness={0.3} />
        </mesh>

        {/* Label (Premium Dark Green/Gold) */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.06, 1.06, 1.6, 64, 1, true, -Math.PI * 0.6, Math.PI * 1.2]} />
          <meshStandardMaterial 
            color="#0A1C11" 
            roughness={0.7}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Label Gold Border Top */}
        <mesh position={[0, 0.78, 0]}>
          <cylinderGeometry args={[1.07, 1.07, 0.04, 64, 1, true, -Math.PI * 0.6, Math.PI * 1.2]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.15} side={THREE.DoubleSide} />
        </mesh>

        {/* Label Gold Border Bottom */}
        <mesh position={[0, -0.78, 0]}>
          <cylinderGeometry args={[1.07, 1.07, 0.04, 64, 1, true, -Math.PI * 0.6, Math.PI * 1.2]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.15} side={THREE.DoubleSide} />
        </mesh>

        {/* Label Gold Center Accent Line */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[1.065, 1.065, 0.02, 64, 1, true, -Math.PI * 0.6, Math.PI * 1.2]} />
          <meshStandardMaterial color="#D4AF37" metalness={1} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>

        {/* Bottle Bottom Rim */}
        <mesh position={[0, -1.5, 0]}>
          <torusGeometry args={[1.05, 0.03, 8, 64]} />
          <meshStandardMaterial color="rgba(200,200,200,0.3)" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}
