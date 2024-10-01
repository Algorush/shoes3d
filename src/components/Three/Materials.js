import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ref } from 'valtio';
import { state } from './store';


export function ThreeSceneMaterials() {

  const loader = new GLTFLoader();
  state.materials.startedLoading = true;

  loader.load(
    `${state.assetsPath}/assets/matplane_1024.glb`,
    (gltf) => {
      let mats = {};
      gltf.scene.traverse(function (child) {
        if (child.isMesh) {
          mats[child.material.name] = ref(child.material);
        }
      });
      if (!state.materials.loaded) {
        state.materials.loaded = true;
        state.materialSet = mats;
      }
    },
    (progress) => {
      let loaded = Math.floor((progress.loaded / progress.total) * 100);
      state.materials.prog = loaded; 
    },
  );
}
