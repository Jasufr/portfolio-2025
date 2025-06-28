import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function HeroThreeBg({ onLoadingProgress }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0); // transparent
    mount.appendChild(renderer.domElement);

    // --- LoadingManager for progress ---
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const percent = Math.round((itemsLoaded / itemsTotal) * 100);
      console.log(percent);

      if (onLoadingProgress) onLoadingProgress(percent);
    };
    loadingManager.onLoad = () => {
      if (onLoadingProgress) onLoadingProgress(100);
    };
    // -----------------------------------

    const loader = new GLTFLoader(loadingManager);
    let models = [];
    // Detect if on smartphone (e.g., width < 640px)
    const isMobile = window.innerWidth < 640;
    // Set model configs based on device
    const modelConfigs = isMobile
      ? [
          {
            url: "/models/scone1.glb",
            position: [0.8, -1.2, 0],
            rotation: [0.3, 0.1, -0.2],
            scale: [0.5, 0.5, 0.5],
            color: 0x714949,
            animate: (model) => {
              model.rotation.x += 0.0005;
              model.rotation.y += 0.0003;
            },
          },
          {
            url: "/models/scone2.glb",
            position: [0.4, 1, 0],
            rotation: [0.6, 0.2, -1.1],
            scale: [0.5, 0.5, 0.5],
            color: 0x6c786e,
            animate: (model) => {
              model.rotation.x -= 0.0004;
              model.rotation.z += 0.0002;
            },
          },
          {
            url: "/models/scone3.glb",
            position: [-0.9, -0.3, 0],
            rotation: [0.3, -0.2, 0.5],
            scale: [0.5, 0.5, 0.5],
            color: 0x708ba7,
            animate: (model) => {
              model.rotation.z += 0.0002;
              model.rotation.y -= 0.0003;
              model.rotation.x += 0.0005;
            },
          },
        ]
      : [
          {
            url: "/models/scone1.glb",
            position: [1.5, -0.5, 0],
            rotation: [0.3, 0.1, -0.2],
            scale: [0.65, 0.65, 0.65],
            color: 0x714949,
            animate: (model) => {
              model.rotation.x += 0.0005;
              model.rotation.y += 0.0003;
            },
          },
          {
            url: "/models/scone2.glb",
            position: [0.5, 0.7, 0],
            rotation: [0.6, 0.2, -1.1],
            scale: [0.7, 0.7, 0.7],
            color: 0x6c786e,
            animate: (model) => {
              model.rotation.x -= 0.0004;
              model.rotation.z += 0.0002;
            },
          },
          {
            url: "/models/scone3.glb",
            position: [-1.5, 0, 0],
            rotation: [0.3, -0.2, 0.5],
            scale: [0.65, 0.7, 0.65],
            color: 0x708ba7,
            animate: (model) => {
              model.rotation.z += 0.0002;
              model.rotation.y -= 0.0003;
              model.rotation.x += 0.0005;
            },
          },
        ];

    modelConfigs.forEach((cfg, i) => {
      loader.load(
        cfg.url,
        (gltf) => {
          const model = gltf.scene;
          model.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              child.material = new THREE.MeshStandardMaterial({
                color: cfg.color,
              });
            }
          });
          model.scale.set(...cfg.scale);
          model.position.set(...cfg.position);
          model.rotation.set(...cfg.rotation);
          model.userData.animate = cfg.animate;
          scene.add(model);
          models[i] = model;
        },
        undefined,
        (error) => {
          console.error(`Error loading GLB model ${cfg.url}:`, error);
        }
      );
    });

    // Light
    const light = new THREE.DirectionalLight(0xe4dbd3, 4);
    light.position.set(0, 1, 2);
    scene.add(light);

    // Add ambient light for softer overall illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    camera.position.z = 3;

    let frameId;
    const animate = () => {
      models.forEach((model) => {
        if (model && model.userData.animate) model.userData.animate(model);
      });
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [onLoadingProgress]);

  return (
    <div
      ref={mountRef}
      className="w-screen h-full -mx-5 sm:-mx-16 pointer-events-none absolute z-0 inset-0"
      aria-hidden="true"
    />
  );
}
