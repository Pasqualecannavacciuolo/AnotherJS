import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("NotFound");
    }

    async getHtml() {
        
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <h1><bold>404 NotFound</bold></h1>
            <a href="/" data-link>Ritorna alla home</a>
        `;
        return wrapper;
    }
}