import React from 'react'
import { Canvas } from '@react-three/fiber'

const Fog = () => {
    return (
        <div>
            <Canvas>
    <pointLight position={[10, 10, 10]} />
    
    <scene>
    <perspectiveCamera view position={[]} rotation={[1.16,-0.12,0.27]} />
    <ambientLight color={0x555555} />
    <fogExp2 color={'red'} />
    
    </scene>
  </Canvas>,
        </div>
    )
}

export default Fog
