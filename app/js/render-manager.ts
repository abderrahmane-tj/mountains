///<reference path="typings/threejs/three.d.ts"/>
import 'vendor/three'
import {ScenesManager} from 'scenes-manager'
import {EventManager} from 'event-manager'

export class RenderManager{
    clock:THREE.Clock;
    scenes:ScenesManager;
    events:EventManager;
    renderer:THREE.WebGLRenderer;
    canvas:HTMLElement;
    constructor(canvasID='canvas'){
        this.clock = new THREE.Clock();
        this.scenes = new ScenesManager();
        this.events = new EventManager(this);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        ////this.renderer.setClearColor(0xffffff,0);
        this.canvas = document.getElementById(canvasID);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.canvas.appendChild(this.renderer.domElement);
        window.addEventListener( 'resize', () => this.onWindowResize(), false );
    }
    start(name){
        this.scenes.setCurrentScene(name);
        this.clock.start();
        this.render();
    }
    render() {
        let currentScene = this.scenes.currentScene;
        if(currentScene.update){
            currentScene.update(this.events,this.clock.getDelta());
        }
        this.renderer.render( this.scenes.currentScene,
            this.scenes.currentScene.camera );
        requestAnimationFrame( ()=> this.render() );
    }
    onWindowResize(){
        let currentScene = this.scenes.currentScene;
        if(currentScene !== null){
            currentScene.camera.aspect = window.innerWidth / window.innerHeight;
            currentScene.camera.updateProjectionMatrix();
            this.renderer.setSize( window.innerWidth, window.innerHeight);
        }

    }
}