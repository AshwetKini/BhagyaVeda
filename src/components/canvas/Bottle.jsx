import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float, Decal, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Bottle(props) {
  const baseYOffset = -0.8
  const group = useRef()
  const bottleRef = useRef()
  const oilRef = useRef()
  const capRef = useRef()
  const { gl } = useThree()
  const labelTexture = useTexture('/bottle-label-reference.png')

  labelTexture.colorSpace = THREE.SRGBColorSpace
  labelTexture.wrapS = THREE.ClampToEdgeWrapping
  labelTexture.wrapT = THREE.ClampToEdgeWrapping
  labelTexture.flipY = true
  labelTexture.needsUpdate = true
  labelTexture.anisotropy = gl.capabilities.getMaxAnisotropy()

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

      // Keep bottle lower overall, then add subtle scroll motion
      const targetY = baseYOffset + Math.sin(progress * Math.PI) * 0.45
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 3, delta)

      // Subtle zoom: start at z=0, push closer at mid-scroll, pull back at end
      const targetZ = Math.sin(progress * Math.PI) * 1.5
      group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 3, delta)

      // Scale up slightly at the midpoint for dramatic effect
      const targetScale = 0.92 + Math.sin(progress * Math.PI) * 0.1
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
      <group ref={group} {...props} dispose={null} position={[0, baseYOffset, 0]}>
        
        {/* Bottle Body (dark glass like the product shot) */}
        <mesh ref={bottleRef} position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.9, 0.98, 3.05, 64]} />
          <MeshTransmissionMaterial 
            samples={6}
            thickness={0.55}
            color="#1c140b"
            transmission={0.22}
            roughness={0.2}
            ior={1.5}
            envMapIntensity={1.2}
            attenuationColor="#3f2e1a"
            attenuationDistance={1.2}
          />
        </mesh>

        {/* Label projected directly onto bottle surface */}
        <Decal
          mesh={bottleRef}
          position={[0, -0.08, 0.92]}
          rotation={[0, 0, 0]}
          scale={[1.72, 2.05, 1]}
          map={labelTexture}
        >
          <meshStandardMaterial
            map={labelTexture}
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
            roughness={0.85}
            metalness={0}
          />
        </Decal>

        {/* Bottle Shoulder (Glass taper) */}
        <mesh position={[0, 1.7, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.35, 0.78, 0.55, 64]} />
          <MeshTransmissionMaterial 
            samples={4}
            thickness={0.25}
            color="#1c140b"
            transmission={0.22}
            roughness={0.2}
            ior={1.5}
          />
        </mesh>

        {/* Bottle Neck */}
        <mesh position={[0, 2.05, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.3, 0.35, 0.3, 64]} />
          <MeshTransmissionMaterial 
            thickness={0.15}
            color="#1a120a"
            transmission={0.2}
            roughness={0.2}
            ior={1.5}
          />
        </mesh>

        {/* Inner Oil (Liquid) — animated glow */}
        <mesh ref={oilRef} position={[0, -0.15, 0]}>
          <cylinderGeometry args={[0.82, 0.82, 2.55, 64]} />
          <meshPhysicalMaterial 
            color="#978833"
            transmission={0.2}
            opacity={0.88}
            transparent
            roughness={0.2}
            metalness={0.05}
            emissive="#443918"
            emissiveIntensity={0.1}
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

      </group>
    </Float>
  )
}
