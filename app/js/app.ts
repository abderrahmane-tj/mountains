import 'vendor/three'
import {RenderManager} from 'render-manager'
import {EventManager} from 'event-manager'
import {Mountain} from 'mountain'
import {Scene} from 'scene'

export class App {
    renderManager:RenderManager;
    constructor(){
        let renderManager = this.renderManager = new RenderManager('canvas');
        let mountain:Mountain = new Mountain();
        renderManager.scenes.add('mountain',mountain);
        renderManager.start('mountain');
    }
}

export default new App();