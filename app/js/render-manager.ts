///<reference path="typings/threejs/three.d.ts"/>
import 'vendor/three'
import {ScenesManager} from 'scenes-manager'
import {EventManager} from 'event-manager'
import {Game} from 'game'

export class RenderManager{
    clock:THREE.Clock;
    renderer:THREE.WebGLRenderer;
    canvas:HTMLElement;
    game:Game;
    constructor(game:Game,canvasID='canvas'){
        this.game = game;
        this.clock = new THREE.Clock();
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        ////this.renderer.setClearColor(0xffffff,0);
        this.canvas = document.getElementById(canvasID);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.canvas.appendChild(this.renderer.domElement);

    }
    start(name){
        this.game.scenes.setCurrentScene(name);
        this.clock.start();
        this.render();
    }
    render() {
        let game = this.game;
        let currentScene = game.scenes.currentScene;
        if(currentScene.update){
            currentScene.update(game.events,this.clock.getDelta());
        }
        this.renderer.render( game.scenes.currentScene,
                game.scenes.currentScene.camera );
        requestAnimationFrame( ()=> this.render() );
    }

}