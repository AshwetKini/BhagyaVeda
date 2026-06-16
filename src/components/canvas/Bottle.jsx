import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float, Decal, useTexture } from '@react-three/drei'
import * as THREE from 'three'

export default function Bottle(props) {
  const group = useRef()
  const bottleRef = useRef()
  const oilRef = useRef()
  const capRef = useRef()
  const { gl, size } = useThree()
  const isMobile = size.width < 768
  const baseYOffset = isMobile ? -1.08 : -0.8
  const baseXOffset = isMobile ? 0 : 0
  const ySwing = isMobile ? 0.24 : 0.45
  const baseScale = isMobile ? 0.72 : 0.92
  const scaleSwing = isMobile ? 0.05 : 0.1
  const rotationSpan = isMobile ? Math.PI * 2.2 : Math.PI * 4
  const labelTexture = useTexture('/bottle-label-reference.png')

  labelTexture.colorSpace = THREE.SRGBColorSpace
  labelTexture.wrapS = THREE.ClampToEdgeWrapping
  labelTexture.wrapT = THREE.ClampToEdgeWrapping
  labelTexture.flipY = true
  labelTexture.needsUpdate = true
  labelTexture.anisotropy = isMobile ? 2 : gl.capabilities.getMaxAnisotropy()

  const bottleProfile = useMemo(() => {
    const points = []
    points.push(new THREE.Vector2(0, -1.5))

    // Bottom fillet (radius 0.1)
    for (let i = 0; i <= 10; i++) {
      const angle = (i / 10) * (Math.PI / 2)
      const x = 0.75 + Math.sin(angle) * 0.1
      const y = -1.4 - Math.cos(angle) * 0.1
      points.push(new THREE.Vector2(x, y))
    }

    // Straight body (taller for elegant look)
    points.push(new THREE.Vector2(0.85, 1.2))

    // Shoulder (Smooth natural curve, preventing deep shadows)
    const neckRadius = 0.44;
    for (let i = 0; i <= 20; i++) {
      const t = i / 20 // 0 to 1
      const x = neckRadius + (0.85 - neckRadius) * Math.pow(1 - t, 1.5) // Tapers naturally to 0.44
      const y = 1.2 + t * 0.4 // Reaches 1.6
      points.push(new THREE.Vector2(x, y))
    }
    
    const neckBaseY = 1.6

    // 1. The Thick Ring (Prominent, but not an overhang to avoid deep shadows)
    for (let i = 0; i <= 10; i++) {
      const angle = (i / 10) * Math.PI
      const x = 0.44 + Math.sin(angle) * 0.02 // out to 0.46
      const y = neckBaseY + 0.03 - Math.cos(angle) * 0.03 // up to 1.66
      points.push(new THREE.Vector2(x, y))
    }
    
    const ringTopY = neckBaseY + 0.06 // 1.66
    
    // 2. The Indentation
    points.push(new THREE.Vector2(0.44, ringTopY))
    points.push(new THREE.Vector2(0.44, ringTopY + 0.02)) // vertical indent
    
    const lipBaseY = ringTopY + 0.02 // 1.68
    
    // 3. The Thin Top Lip
    points.push(new THREE.Vector2(0.44, lipBaseY))
    points.push(new THREE.Vector2(0.45, lipBaseY + 0.01)) // sharply out to 0.45
    points.push(new THREE.Vector2(0.45, lipBaseY + 0.02)) // straight edge
    points.push(new THREE.Vector2(0.44, lipBaseY + 0.03)) // back to 0.44
    
    const topOfNeckY = lipBaseY + 0.03 // 1.71

    // Straight inner Neck (hidden inside cap)
    points.push(new THREE.Vector2(neckRadius, topOfNeckY))
    points.push(new THREE.Vector2(neckRadius, topOfNeckY + 0.2))
    points.push(new THREE.Vector2(0, topOfNeckY + 0.2))

    return points
  }, [])

  // Smooth scroll tracking with damping
  const smoothProgress = useRef(0)
  const elapsedRef = useRef(0)

  useFrame((state, delta) => {
    // Accumulate time locally to avoid deprecated THREE.Clock
    elapsedRef.current += delta

    // Read from optimized cached scroll progress (no layout thrashing)
    const rawProgress = window.__scrollProgress || 0

    // Framerate-independent damping for buttery smooth transitions
    // damp(current, target, lambda, delta) — higher lambda = faster approach
    smoothProgress.current = THREE.MathUtils.damp(smoothProgress.current, rawProgress, 3, delta)
    const progress = smoothProgress.current

    if (group.current) {
      // Rotate the bottle based on scroll — smooth 2 full rotations
      const targetRotationY = progress * rotationSpan
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotationY, 4, delta)

      // Gentle tilt on scroll for cinematic feel
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        Math.sin(progress * Math.PI) * 0.15,
        3,
        delta
      )

      // Keep bottle lower overall, then add subtle scroll motion
      const targetY = baseYOffset + Math.sin(progress * Math.PI) * ySwing
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 3, delta)
      group.current.position.x = THREE.MathUtils.damp(group.current.position.x, baseXOffset, 3, delta)

      // Subtle zoom: start at z=0, push closer at mid-scroll, pull back at end
      const targetZ = Math.sin(progress * Math.PI) * 1.5
      group.current.position.z = THREE.MathUtils.damp(group.current.position.z, targetZ, 3, delta)

      // Scale up slightly at the midpoint for dramatic effect
      const targetScale = baseScale + Math.sin(progress * Math.PI) * scaleSwing
      group.current.scale.setScalar(
        THREE.MathUtils.damp(group.current.scale.x, targetScale, 3, delta)
      )
    }

    // Animate the oil inside with a subtle wobble
    if (oilRef.current) {
      oilRef.current.rotation.y = elapsedRef.current * 0.3
    }
  })

  return (
    <Float
      speed={isMobile ? 1 : 1.5}
      rotationIntensity={isMobile ? 0.08 : 0.15}
      floatIntensity={isMobile ? 0.16 : 0.3}
      floatingRange={isMobile ? [-0.04, 0.04] : [-0.08, 0.08]}
    >
      <group ref={group} {...props} dispose={null} position={[baseXOffset, baseYOffset, 0]}>

        {/* Glossy Green Ayurvedic Bottle */}
        <mesh ref={bottleRef} castShadow receiveShadow>
          <latheGeometry args={[bottleProfile, isMobile ? 32 : 64]} />
          <meshStandardMaterial
            color="#2c3a22"
            roughness={0.15}
            metalness={0.1}
            envMapIntensity={2.5}
          />
        </mesh>

        {/* Label projected directly onto bottle surface */}
        <Decal
          mesh={bottleRef}
          position={[0, -0.15, 0.85]}
          rotation={[0, 0, 0]}
          scale={[1.55, 1.85, 1]}
          map={labelTexture}
        >
          <meshStandardMaterial
            map={labelTexture}
            transparent
            depthWrite={false}
            polygonOffset
            polygonOffsetFactor={-1}
            roughness={0.15}
            metalness={0.1}
            envMapIntensity={2.5}
          />
        </Decal>

        {/* Sleek Solid Gold Cap - Refined natural proportions */}
        <group ref={capRef} position={[0, 1.709, 0]}>
          {/* Main Cap Cylinder */}
          <mesh position={[0, 0.16, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.46, 0.46, 0.32, isMobile ? 32 : 64]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} envMapIntensity={2} />
          </mesh>

          {/* Smooth Rounded Top Edge */}
          <mesh position={[0, 0.32, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.4, 0.06, 16, isMobile ? 32 : 64]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} envMapIntensity={2} />
          </mesh>

          {/* Flat Top Cap */}
          <mesh position={[0, 0.35, 0]}>
            <cylinderGeometry args={[0.4, 0.4, 0.06, isMobile ? 32 : 64]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} envMapIntensity={2} />
          </mesh>
        </group>

      </group>
    </Float>
  )
}
