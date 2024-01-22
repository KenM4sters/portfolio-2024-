import AbstractView from "../AbstractView.js"

export default class Game extends AbstractView {
    constructor() {
        super();
        this.title = "2D-Game";
        this.setTitle(this.title);
    }

    async getHtml() {
        return `
            <div class="unique-project-wrapper">
                <h1 class="unique-project-header"> ${this.title} </h1>
                <div class="unique-project-info-wrapper">
                    <div class="unique-project-info">
                        <div class="unique-project-details">
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Role </h1>
                                <p class="unique-project-details-item-description"> [details...] </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Role </h1>
                                <p class="unique-project-details-item-description"> [details...] </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Role </h1>
                                <p class="unique-project-details-item-description"> [details...] </p>
                            </div>
                            <div class="unique-project-details-item">  
                                <h1 class="unique-project-details-item-header"> Role </h1>
                                <p class="unique-project-details-item-description"> [details...] </p>
                            </div>
                        </div>
                        <div class="unique-project-summary">
                            <p class="unique-project-summary-details"> [details...] </p>
                            <p class="unique-project-summary-details"> [details...] </p>
                            <p class="unique-project-summary-details"> [details...] </p>
                            <p class="unique-project-summary-details"> [details...] </p>
                        </div>
                    </div>
                </div>
            </div>

        
        `
    }
}