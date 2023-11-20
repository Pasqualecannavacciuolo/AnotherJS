import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Post View");
    }

    async getHtml() {
        const id = this.params.id;
        const titolo = decodeURI(this.params.title);

        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
        <h1>Post #${id}</h1>
        <p>
            ${titolo}
        </p>
        `;
        
        return wrapper;
    }
}