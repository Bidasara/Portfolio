import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/island'
import Sky from '../models/Sky'
import { useState } from 'react'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [CurrentStage, setCurrentStage] = useState(1)

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -25, -56]
    let rotation = [0.2, 0.2, 0]

    if (window.innerWidth < 768) {
      screenScale = [361, 361, 361]
    }
    else {
      screenScale = [491, 491, 491]
    }

    return [screenScale, screenPosition, rotation]
  }

  const [islandScale, islandPosition, rotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center" >
        {CurrentStage && <HomeInfo CurrentStage={CurrentStage}/>}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home
