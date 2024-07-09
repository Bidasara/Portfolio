import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/Landscape.glb'

const Island = ({ setIsRotating, isRotating,setCurrentStage, ...props }) => {
    const islandRef = useRef()
    const { gl, viewport } = useThree();

    const { nodes, materials } = useGLTF(islandScene)
    const lastX = useRef(0)  
    const rotationSpeed = useRef(0)
    const dampingFactor = 0.95

    const handlePointerDown = (e) => {
       e.stopPropagation()
        e.preventDefault()
        setIsRotating(true)

        const clientX = e.touches ? e.touches[0].clientX : e.clientX
        lastX.current = clientX
    }
    const handlePointerUp = (e) => {
        e.stopPropagation()
        e.preventDefault()
        setIsRotating(false)
    }
    const handlePointerMove = (e) => {
        e.stopPropagation()
        e.preventDefault()  
        if (isRotating){
            const clientX = e.touches ? e.touches[0].clientX : e.clientX
        const delta = (clientX - lastX.current) / viewport.width
        islandRef.current.rotation.y += delta * 0.05 * Math.PI
        lastX.current = clientX
        rotationSpeed.current = delta * 0.05 * Math.PI
        }
    }

    const handleKeyDown=(e)=>{
        if(e.key==='ArrowLeft'){
            if(!isRotating) setIsRotating(true)
            islandRef.current.rotation.y+=0.01*Math.PI
        rotationSpeed.current=0.005*Math.PI
    }else if(e.key==='ArrowRight'){
        if(!isRotating) setIsRotating(true)
        islandRef.current.rotation.y-=0.01*Math.PI
        rotationSpeed.current=-0.005*Math.PI
        }
    }
    const handleKeyUp=(e)=>{
        if(e.key==='ArrowLeft' || e.key==='ArrowRight'){
            setIsRotating(false)
        }
    }
 
    useFrame(()=>{
        if(!isRotating){
            rotationSpeed.current*=dampingFactor

            if(Math.abs(rotationSpeed.current)<0.001){
                rotationSpeed.current=0
            }
            islandRef.current.rotation.y+=rotationSpeed.current
        }
        else{
            const rotation=islandRef.current.rotation.y;
            const normalizedRotation=((rotation%(2*Math.PI))+2*Math.PI)%(2*Math.PI)
            switch(true){
                case normalizedRotation >=0 && normalizedRotation<=0.3:
                    setCurrentStage(1);
                    break;
                case normalizedRotation >=1.5 && normalizedRotation<=1.95:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >=3 && normalizedRotation<=3.3:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >=4.5 && normalizedRotation<=4.8:
                    setCurrentStage(4);
                    break;
                    default:
                    setCurrentStage(null);

            }
        }
    })

    useEffect(() => {
        const canvas=gl.domElement
        canvas.addEventListener('pointerdown', handlePointerDown)
        canvas.addEventListener('pointerup', handlePointerUp)
        canvas.addEventListener('pointermove', handlePointerMove)
        document.addEventListener('keydown',handleKeyDown)
        document.addEventListener('keyup',handleKeyUp)

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown)
            canvas.removeEventListener('pointerup', handlePointerUp)
            canvas.removeEventListener('pointermove', handlePointerMove)
            document.addEventListener('keydown',handleKeyDown)
            document.addEventListener('keyup',handleKeyUp)
        }
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove,handleKeyDown,handleKeyUp,isRotating])
 
    return (
        <a.group ref={islandRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        position={[0.003, 0, 0.016]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
        position={[0.003, 0, 0.016]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2.geometry}
        material={nodes.mesh_2.material}
        position={[0.003, 0, 0.016]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3.geometry}
        material={nodes.mesh_3.material}
        position={[0.062, 0.068, -0.005]}
        rotation={[-1.741, 0.151, -2.288]}
        scale={0.017}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_4.geometry}
        material={nodes.mesh_4.material}
        position={[-0.045, 0.06, -0.009]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_5.geometry}
        material={nodes.mesh_5.material}
        position={[0.01, 0.064, -0.06]}
        rotation={[-Math.PI / 2, -0.55, -Math.PI / 2]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_6.geometry}
        material={nodes.mesh_6.material}
        position={[0.01, 0.064, -0.06]}
        rotation={[-Math.PI / 2, -0.55, -Math.PI / 2]}
        scale={0.023}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_7.geometry}
        material={nodes.mesh_7.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_8.geometry}
        material={materials['Male_Athletic:male_athletic_bipeds_geo_bipeds_geo_lambert5SG118467']}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_9.geometry}
        material={nodes.mesh_9.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_10.geometry}
        material={nodes.mesh_10.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_11.geometry}
        material={nodes.mesh_11.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_12.geometry}
        material={nodes.mesh_12.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_13.geometry}
        material={nodes.mesh_13.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_14.geometry}
        material={nodes.mesh_14.material}
        position={[-0.014, 0.057, 0.056]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </a.group>
    )
}

export default Island
