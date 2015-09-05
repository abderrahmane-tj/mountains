///<reference path="typings/threejs/three.d.ts"/>

import "vendor/three"
import {EventManager} from 'event-manager'
// I am not sure this is the right way to do this.
// TODO: learn more about polymorphism in TS
export class Scene extends THREE.Scene{
    camera: THREE.PerspectiveCamera;
    update(events:EventManager,delta: number){}
    keyup(events:EventManager, delta: number){}
    keydown(events:EventManager, delta: number){}
}