import Experience from '../Experience.js'
import Page from './Page.js'
import PreLoader from './PreLoader.js'



export default class World
{
    constructor()
    {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.preLoadListener = this.experience.viewListener;
    
        this.listenToPreLoader();
    }

    listenToPreLoader() {
        this.resources.on('ready', () => {
            console.log('resources are ready');
            this.preLoader = new PreLoader();
            this.preLoadListener.on('EnteringExperience', () => {
                this.page = new Page();
                this.preLoader.destroy();
            })
        })
    }

    resize() {
        this.page.resize();
    }

    update() {
        if(this.page !== undefined)
            this.page.update();
        else 
            this.preLoader.update();

    }

}