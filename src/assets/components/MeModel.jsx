import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useAnimations,
} from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const group = useRef();
  const { scene } = useGLTF("/models/me.glb");
  const idle = useFBX("/animations/Idle.fbx");
  const mixer = useRef();

  const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
  idleAnimation[0].name = "Idle";

  const { actions } = useAnimations(idleAnimation, group);

  useEffect(() => {
    if (actions["Idle"]) {
      actions["Idle"].reset().play();
    }
  }, [actions]);

  // useEffect(() => {
  //   if (!idle.animations || idle.animations.length === 0) return;
  //   mixer.current = new THREE.AnimationMixer(scene);
  //   const action = mixer.current.clipAction(idle.animations[0], scene);
  //   action.reset().play();
  //   action.setLoop(THREE.LoopRepeat);
  //   return () => {
  //     mixer.current?.stopAllAction();
  //   };
  //   // eslint-disable-next-line
  // }, [scene, idle]);

  useFrame((state, delta) => {
    mixer.current?.update(delta);

    const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
    group.current.getObjectByName("Head").lookAt(target);
  });

  return (
    <primitive ref={group} object={scene} scale={1} position={[0, -1.5, 0]} />
  );
}

export default function MeModel() {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: 220,
        height: 320,
        zIndex: 20,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 1, 3], fov: 20 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        {/* Optionally enable controls for debugging: <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

// Preload the model and animation for better performance
useGLTF.preload("/models/me.glb");
useFBX.preload("/animations/idle.fbx");
