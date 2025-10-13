import { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function MeGLBModel() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);
  const initialScale = useRef(0);
  const finalScale = useRef(window.innerWidth < 640 ? 0.016 : 0.018);
  const startTime = useRef(null);

  // Check for touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);

  // Track mouse globally for 3D model only on non-touch devices
  useEffect(() => {
    if (!isTouch) {
      // Only add mouse tracking on non-touch devices
      function handleMouseMove(e) {
        // Normalize mouse position to [-1, 1] for both axes
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -((e.clientY / window.innerHeight) * 2 - 1);
        setMouse({ x, y });
      }
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isTouch]);

  function Model() {
    const group = useRef();
    const { scene } = useGLTF("/models/me.glb");
    const mixer = useRef();
    const { animations: idleAnimation } = useFBX("/animations/Idle.fbx");
    idleAnimation[0].name = "Idle";
    const { actions } = useAnimations(idleAnimation, group);
    const { size, camera } = useThree();

    // Initialize animation start time
    useEffect(() => {
      if (startTime.current === null) {
        startTime.current = Date.now();
        group.current.scale.setScalar(0); // Start with scale 0
      }
    }, []);

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

      // Animation
      if (startTime.current !== null && group.current) {
        const elapsed = Date.now() - startTime.current;
        const duration = 2000; // 2 seconds duration
        const progress = Math.min(elapsed / duration, 1);

        // Use easeOutElastic for a bouncy effect
        const easeOutElastic = (x) => {
          const c4 = (2 * Math.PI) / 3;
          return x === 0
            ? 0
            : x === 1
            ? 1
            : Math.pow(4, -10 * x) * Math.sin((x * 1 - 0.75) * c4) + 1;
        };

        if (progress < 1) {
          const scale = easeOutElastic(progress);
          const currentScale = finalScale.current * scale;
          group.current.scale.setScalar(currentScale);
        } else if (
          progress === 1 &&
          group.current.scale.x !== finalScale.current
        ) {
          // Ensure we set the final scale exactly
          group.current.scale.setScalar(finalScale.current);
        }
      }

      // Head tracking - only on non-touch devices
      if (!isTouch) {
        const target = new THREE.Vector3(mouse.x, mouse.y, -1);
        target.unproject(state.camera);
        group.current.getObjectByName("Head")?.lookAt(target);
      } else {
        // On touch devices, look at center point slightly above
        const centerTarget = new THREE.Vector3(0.75, -0.25, -0.75);
        centerTarget.unproject(state.camera);
        group.current.getObjectByName("Head")?.lookAt(centerTarget);
      }
    });

    return <primitive ref={group} object={scene} />;
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
