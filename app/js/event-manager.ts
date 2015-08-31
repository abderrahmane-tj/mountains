import {RenderManager} from 'render-manager'

export class EventManager{
    renderManager: RenderManager;
    downKeys: Object;
    constructor(renderManager:RenderManager){
        this.renderManager = renderManager;
        this.downKeys = {};
        //let canvasID = renderManager.canvas.id;
        document.addEventListener('keyup',(event)=>this.keyup(event),false);
        document.addEventListener('keydown',(event)=>this.keydown(event),false);
    }
    isDown(key:number){
        return this.downKeys[key] !== undefined && this.downKeys[key] == true;
    }
    setKey(key:number, value:boolean){
        this.downKeys[key] = value;
    }
    keyup(event){
        event.preventDefault();
        let key = event.keyCode;
        if(this.isDown(key)){
            this.setKey(key,false);
        }

    }
    keydown(event){
        event.preventDefault();
        let key = event.keyCode;
        if(!this.isDown(key)){
            this.setKey(key,true);
        }
    }
}