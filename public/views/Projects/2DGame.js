import AbstractView from "../AbstractView.js"

export default class Game extends AbstractView {
    constructor() {
        super();
        this.setTitle("2D-Game")
    }

    async getHtml() {
        return `
        
            <h1>2D Game</h1>
        
        `
    }
}