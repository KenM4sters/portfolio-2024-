import AbstractView from "../AbstractView.js"

export default class FBOParticles extends AbstractView {
    constructor() {
        super();
        this.title = "FBO Particles";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
        
            <h1>FBO Particles</h1>
        
        `
    }
}