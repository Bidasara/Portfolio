import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import scene from '../assets/3d/windmill_stylized.glb'

const windmill=({speed,...props})=> {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(scene)
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    if(speed===1){
        actions['Move'].timeScale=speed
        actions['Move'].play()
        console.log(actions)
    }
    else if(speed===5){
        actions['Move'].timeScale=speed
        actions['Move'].play()
    }
    else{
        actions['Move'].timeScale=speed
        actions['Move'].play()
    }
  }, [actions,speed])
  
  
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="f88bb45d0ffd44169cd3801ec428acb1fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube040"
                  position={[0, 10.851, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Circle013"
                  position={[33.907, 408.227, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Cube045"
                  position={[85.353, 70.016, -32.644]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Cube045_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube045_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Cube051"
                  position={[91.943, 34.782, -39.284]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Cube051_Material_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube051_Material_0.geometry}
                    material={materials.Material}
                  />
                </group>
                <group
                  name="Armature"
                  position={[0, 10.851, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_11">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_14"
                      geometry={nodes.Object_14.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_14.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      geometry={nodes.Object_16.geometry}
                      material={materials.Material}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <group
                      name="Object_13"
                      position={[0, 10.851, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                    <group
                      name="Object_15"
                      position={[33.907, 408.227, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

export default windmill