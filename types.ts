import * as THREE from 'three';

export enum TreeState {
  SCATTERED = 'SCATTERED',
  TREE_SHAPE = 'TREE_SHAPE'
}

export interface DualPosition {
  scatterPos: THREE.Vector3;
  treePos: THREE.Vector3;
  rotation: THREE.Euler;
  scale: number;
  speed: number; // For floating animation speed
  phase: number; // For floating animation offset
}

export interface OrnamentData extends DualPosition {
  color: string;
  type: 'box' | 'bauble' | 'star';
}

export interface FoliageUniforms {
  uTime: { value: number };
  uProgress: { value: number };
  uColorPrimary: { value: THREE.Color };
  uColorSecondary: { value: THREE.Color };
}