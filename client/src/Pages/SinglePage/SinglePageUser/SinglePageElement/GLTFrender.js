import React, {Suspense, useEffect, useState} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";

const GltFrender = (props) => {

    function Box() {
        return (
            <mesh>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial attach="material"/>
            </mesh>
        )
    }

    const Model = () => {
        const {nodes, materials} = useGLTF("/uploads/" + props.path)
        return (
            <group dispose={null}>
                {props.butB === 0
                    ?
                    <mesh geometry={nodes.B_0.geometry} material={materials.B} visible={true}/>
                    :
                    <mesh geometry={nodes.B_0.geometry} material={materials.B} visible={false}/>
                }

                {props.butB === 1
                    ?
                    <mesh geometry={nodes.B_1.geometry} material={materials.B} visible={true}/>
                    :
                    <mesh geometry={nodes.B_1.geometry} material={materials.B} visible={false}/>
                }

                {props.butA === 0
                    ?
                    <mesh geometry={nodes.A_0.geometry} material={materials.B} visible={true}/>
                    :
                    <mesh geometry={nodes.A_0.geometry} material={materials.B} visible={false}/>
                }

                {props.butA === 1
                    ?
                    <mesh geometry={nodes.A_1.geometry} material={materials.B} visible={true}/>
                    :
                    <mesh geometry={nodes.A_1.geometry} material={materials.B} visible={false}/>
                }

                {props.butA === 2
                    ?
                    <mesh geometry={nodes.A_2.geometry} material={materials.B} visible={true}/>
                    :
                    <mesh geometry={nodes.A_2.geometry} material={materials.B} visible={false}/>
                }

                <mesh geometry={nodes.C.geometry} material={materials.C}/>
            </group>
        );
    };

    return (
        <div className={"absolute top-0 ml-44 w-10/12 h-screen"}>
            <Canvas camera={{position: [0, 0, 20]}}>
                <ambientLight intensity={0.4}/>
                <OrbitControls/>
                <spotLight intensity={0.3} angle={0.1} penumbra={1} position={[5, 25, 25]}/>
                <Suspense fallback={<Box/>}>
                    <Model/>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default GltFrender;