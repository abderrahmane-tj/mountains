///<reference path="typings/threejs/three.d.ts"/>
import 'vendor/three'
import {Scene} from "scene"
import {Game} from "game"

export class ScenesManager {
    scenes;
    currentScene: Scene;
    game: Game;
    constructor(game:Game){
        this.game = game;
        this.scenes = {};
    }
    add(name, scene){
        this.scenes[name] = scene;
    }
    setCurrentScene(name){
        this.currentScene = this.scenes[name];
    }
}