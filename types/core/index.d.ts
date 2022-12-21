import * as THREE from "three";
import { resetPolygonOffset } from "./utils/ResetMaterial";
import { downloadAnimation, loadAnimationData } from "./utils/downloadAnimation";
import Convert from "./utils/convert";
declare function loadGLTFModel(url: string): Promise<THREE.Group>;
declare function parseGLTFModel(buffer: ArrayBuffer): Promise<THREE.Group>;
declare function loadTTSTeethAnimation(url: string): Promise<THREE.AnimationClip>;
declare function loadTTSEmoAnimation(url: string): Promise<THREE.AnimationClip>;
declare function loadGLTFAnimation(url: string): Promise<THREE.AnimationClip>
export { Convert, loadAnimationData, downloadAnimation, loadGLTFModel, parseGLTFModel, loadTTSTeethAnimation, loadTTSEmoAnimation, resetPolygonOffset ,loadGLTFAnimation};
