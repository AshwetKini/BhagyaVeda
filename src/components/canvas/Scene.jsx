import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'
import Bottle from './Bottle'
import FloatingIngredients from './FloatingIngredients'
import Particles from './Particles'

export default function Scene() {
  return (
    <Canvas shadows dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
      
      <color attach="background" args={['transparent']} />

      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        color="#FDFBF7" 
        castShadow 
        shadow-bias={-0.0001}
      />
      <spotLight 
        position={[-10, 10, -10]} 
        intensity={2} 
        color="#D4AF37" 
        angle={0.5} 
        penumbra={1} 
      />

      <Suspense fallback={null}>
        <Bottle />
        <FloatingIngredients />
        <Particles />
        <Environment preset="city" blur={0.8} />
      </Suspense>

    </Canvas>
  )
}
