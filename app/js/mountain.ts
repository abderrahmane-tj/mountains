///<reference path="typings/threejs/three.d.ts"/>
import 'vendor/three'
import {Scene} from 'scene'
import {EventManager} from 'event-manager'
import {KeyCodes} from 'constants'
import {Game} from 'game'

export class Mountain extends Scene {
    name:string;
    camera:THREE.PerspectiveCamera;
    model:THREE.Mesh;
    light:THREE.DirectionalLight;
    game:Game;
    constructor(game:Game){
        super();
        this.game = game;
        this.name = "mountains";
        this.camera = new THREE.PerspectiveCamera(
                75, window.innerWidth / window.innerHeight, 0.1, 10000);

        let skyGeometry = new THREE.SphereGeometry(75,32,16,0,6.28,0,Math.PI);
        let skyMaterial = new THREE.MeshPhongMaterial({
            shininess: 25,
            color: 0x0a637c,
            emissive: 0x0e8fb6,
            specular: 0xfff791,
            side: THREE.BackSide
        });

        let sky = new THREE.Mesh(skyGeometry,skyMaterial);
        sky.scale.set(100,100,100);
        this.add(sky);

        let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
        let knotGeometry = new THREE.TorusKnotGeometry(100, 20, 50, 50);
        let knotMaterial = new THREE.MeshLambertMaterial({
            //color: 0xffefff,
            emissive: 0xccabcc,
            shininess: 30
        });
        this.model = new THREE.Mesh(knotGeometry, knotMaterial);
        this.add(this.model);


        this.camera.position.z = 500;
        let skyLight = new THREE.DirectionalLight(0x5bebff,0.4);
        skyLight.position.set(0, -525, -75);
        let sunFlairLight = new THREE.DirectionalLight(0xf5f986,0.18);
        sunFlairLight.position.set(0, -400, 500);
        //let ambientLight = new THREE.AmbientLight( 0x404040 ); // soft white light
        //this.add( ambientLight    );
        this.add(skyLight);
        this.add(sunFlairLight);
        /////////
        // SKY //
        /////////
        // recommend either a skybox or fog effect (can't use both at the same time)
        // without one of these, the scene's background color is determined by webpage background
        // make sure the camera's "far" value is large enough so that it will render the skyBox!
        //let skyBoxGeometry = new THREE.BoxGeometry(10000, 10000, 10000);
        //// BackSide: render faces from inside of the cube, instead of from outside (default).
        //let skyBoxMaterial = new THREE.MeshBasicMaterial({color: 0x9999ff, side: THREE.BackSide});
        //let skyBox = new THREE.Mesh(skyBoxGeometry, skyBoxMaterial);
        //this.add(skyBox);
        // fog must be added to scene before first render
        //this.fog = new THREE.FogExp2( 0x9999ff, 0.00025 );
    }

    update(e:EventManager,delta:any){

        let rSpeed = Math.PI / 5;
        let tSpeed = 1000;

        this.model.rotation.x += delta * rSpeed;
        this.model.rotation.y += delta * rSpeed;

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
            this.game.scenes.setCurrentScene('plains');
        }
    }
}