import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <h1>Home</h1>
            <p>
                Paragrafo contenuto all'interno della Homepage
            </p>
            <p>
                Per andare ai posts clicca qui <a href="/posts" data-link>Posts</a>
            </p>
        `;
        return wrapper;
    }
}