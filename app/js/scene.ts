///<reference path="typings/threejs/three.d.ts"/>

import "vendor/three"

// I am not sure this is the right way to do this.
// TODO: learn more about polymorphism in TS
export class Scene extends THREE.Scene{
    camera: THREE.PerspectiveCamera;
    update(events,delta:any){

    }
}