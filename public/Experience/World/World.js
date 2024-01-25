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
        this.routerListener = this.experience.routerListener;
    
        this.listenToPreLoader();
    }

    listenToPreLoader() {
        this.preLoader = new PreLoader();
        this.resources.on('ready', () => {
            console.log('resources are ready');

            // Add button to enter the 'experience'
            document.querySelector('.preload-btn-wrapper').innerHTML = `
                <a class="preloader-btn" data-link> Enter </a>
            `;
            document.querySelector('.preloader-icon').classList.add('preload-finished');

            // Callback for clicking the previously appended button
            this.routerListener.on('EnteringExperience', () => {
                this.page = new Page();
                this.preLoader.destroy();
            })
        })
    }

    resize() {
        if(this.page !== undefined) 
            this.page.resize();
        else
            return;
    }

    update() {
        if(this.page !== undefined)
            this.page.update();
        else 
            this.preLoader.update();

    }

}