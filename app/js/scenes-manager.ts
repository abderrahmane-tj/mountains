///<reference path="typings/threejs/three.d.ts"/>
import 'vendor/three'
import {Scene} from "scene"

export class ScenesManager {
    scenes:Object;
    currentScene: Scene;
    constructor(){
        this.scenes = {};
    }
    add(name, scene){
        this.scenes[name] = scene;
    }
    setCurrentScene(name){
        this.currentScene = this.scenes[name];
    }
}