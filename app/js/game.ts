import 'vendor/three'
import {RenderManager} from 'render-manager'
import {ScenesManager} from 'scenes-manager'
import {EventManager} from 'event-manager'
import {Scene} from 'scene'

import {Mountain} from 'mountain'
import {Plains} from 'plains'

export class Game {
    renderManager:RenderManager;
    scenes:ScenesManager;
    events:EventManager;
    constructor(){
        this.renderManager = new RenderManager(this,'canvas');
        this.scenes = new ScenesManager(this);
        this.events = new EventManager(this);

        this.boot();
    }
    boot(){
        let mountain:Mountain = new Mountain(this);
        let plains:Plains = new Plains(this);

        this.scenes.add('mountain',mountain);
        this.scenes.add('plains',plains);
        this.renderManager.start('plains');
    }
}

export default new Game();