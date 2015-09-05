import {RenderManager} from 'render-manager'
import {Game} from 'game'

export class EventManager{
    event: KeyboardEvent;
    downKeys: Object;
    game: Game;
    constructor(game:Game){
        this.game = game;
        this.downKeys = {};
        document.addEventListener('keyup',(event)=>this.keyup(event),false);
        document.addEventListener('keydown',(event)=>this.keydown(event),false);
        window.addEventListener( 'resize', () => this.onWindowResize(), false );
    }
    isDown(key:number){
        return this.downKeys[key] !== undefined && this.downKeys[key] == true;
    }
    setKey(key:number, value:boolean){
        this.downKeys[key] = value;
    }
    keyup(event){
        event.preventDefault();
        this.event = event;
        let key = event.keyCode;
        if(this.isDown(key)){
            this.setKey(key,false);
        }
        this.game.scenes.currentScene.keyup(this,this.game.renderManager.clock.getDelta());
    }
    keydown(event){
        event.preventDefault();
        this.event = event;
        let key = event.keyCode;
        if(!this.isDown(key)){
            this.setKey(key,true);
        }
        this.game.scenes.currentScene.keydown(this,this.game.renderManager.clock.getDelta());
    }
    onWindowResize(){
        let currentScene = this.game.scenes.currentScene;
        if(currentScene !== null){
            currentScene.camera.aspect = window.innerWidth / window.innerHeight;
            currentScene.camera.updateProjectionMatrix();
            this.game.renderManager.renderer.setSize( window.innerWidth, window.innerHeight);
        }

    }
}