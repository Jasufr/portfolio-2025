import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function MeGLBModel() {
  // Mouse position for 3D model
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const isMobile = window.innerWidth < 640;
  // Track mouse globally for 3D model
  useEffect(() => {
    function handleMouseMove(e) {
      // Normalize mouse position to [-1, 1] for both axes
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setMouse({ x, y });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  function Model() {
    const group = useRef();
    const { scene } = useGLTF("/models/me.glb");
    const mixer = useRef();
    const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
    idleAnimation[0].name = "Idle";
    const { actions } = useAnimations(idleAnimation, group);
    const { size, camera } = useThree();

    useEffect(() => {
      if (actions["Idle"]) {
        actions["Idle"].reset().play();
      }
    }, [actions]);

    useEffect(() => {
      // Recalculate position whenever screen size changes
      function updateModelPosition() {
        group.current.rotation.set(0, Math.PI / 4, 0);

        // Convert screen (bottom-left) to NDC (-1, -1)
        const ndc = new THREE.Vector3(-0.7, -1.5, -0.5); // z = 0.5 means middle of clip depth
        ndc.unproject(camera); // converts NDC to world coordinates

        group.current.position.copy(ndc);
        // group.current.rotation.y = -Math.PI;

        // group.current.lookAt(camera.position);
      }

      updateModelPosition();
      window.addEventListener("resize", updateModelPosition);
      return () => window.removeEventListener("resize", updateModelPosition);
    }, [camera, size]);

    useFrame((state, delta) => {
      mixer.current?.update(delta);
      const target = new THREE.Vector3(mouse.x, mouse.y, -1);
      target.unproject(state.camera);
      group.current.getObjectByName("Head").lookAt(target);
    });

    const modelScale = isMobile
      ? {
          scale: 0.016,
        }
      : { scale: 0.018 };

    return (
      <primitive
        ref={group}
        object={scene}
        // scale={modelPosition.scale}
        // position={modelPosition.position}
        scale={modelScale.scale}
      />
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 999,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 1, 3], fov: 20 }}
        style={{ pointerEvents: "none", width: "100vw", height: "100vh" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
      <style>{`
        /* Ensure all children of the overlay ignore pointer events */
        .r3f-overlay * {
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
}
