import AbstractView from "../AbstractView.js"

export default class FBOParticles extends AbstractView {
    constructor() {
        super();
        this.setTitle("FBO-Particles");
    }

    async getHtml() {
        return `
        
            <h1>FBO Particles</h1>
        
        `
    }
}