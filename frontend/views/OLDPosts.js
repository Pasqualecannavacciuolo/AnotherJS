import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
        <h1>Posts</h1>
        <p>
            Paragrafo contenuto all'interno della pagina Posts
        </p>
        `;
        return wrapper;
    }
}