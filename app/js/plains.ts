///<reference path="typings/threejs/three.d.ts"/>
import 'vendor/three'
import {Scene} from 'scene'
import {EventManager} from 'event-manager'
import {KeyCodes} from 'constants'
import {Game} from 'game'

export class Plains extends Scene {
    name:string;
    camera:THREE.PerspectiveCamera;
    model:THREE.Mesh;
    light:THREE.DirectionalLight;
    game:Game;
    constructor(game:Game){
        super()
        this.game = game;
        this.name = "planes";
        this.camera = new THREE.PerspectiveCamera(
                75, window.innerWidth / window.innerHeight, 0.1, 10000);

        let planeGeometry = new THREE.PlaneGeometry(200,200);
        let planeMaterial = new THREE.MeshPhongMaterial({
            emissive: 0x7bcb41
        });
        this.model = new THREE.Mesh(planeGeometry, planeMaterial);
        this.add(this.model);

        this.camera.position.z = 500;
    }

    update(e:EventManager,delta:any){

        let rSpeed = Math.PI / 5;
        let tSpeed = 1000;

        //this.model.rotation.x += delta * rSpeed;
        //this.model.rotation.y += delta * rSpeed;

        if(e.isDown(KeyCodes.W)){
            this.camera.position.z -= tSpeed * delta;
        }
        if(e.isDown(KeyCodes.S)){
            this.camera.position.z += tSpeed * delta;
        }
        if(e.isDown(KeyCodes.D)){
            this.camera.position.x += tSpeed * delta;
        }
        if(e.isDown(KeyCodes.A)){
            this.camera.position.x -= tSpeed * delta;
        }
    }

    keyup(eventManager:EventManager, delta){
        let event = eventManager.event;
        if(event.keyCode === KeyCodes.SPACE){
            this.game.scenes.setCurrentScene('mountain');
        }
    }
}