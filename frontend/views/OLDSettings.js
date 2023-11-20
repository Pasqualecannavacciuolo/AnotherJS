import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    updateCounter() {
        const spanElement = document.getElementById("counterNumber");
        let number = parseInt(spanElement.innerHTML);
        number += 1;
        spanElement.innerHTML = number.toString()
    }

    async getHtml() {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <h1>Settings</h1>
            <p>
                Paragrafo contenuto all'interno della Settings
            </p>
            <button id="button1">Button1</button>
            <p>Counter: <span id="counterNumber">0</span></p>
        `;

        // Aggiungi un gestore di eventi per l'evento di click sul pulsante
        const button = wrapper.querySelector("#button1");
        button.addEventListener("click", () => this.updateCounter());

        // Restituisci l'elemento DOM invece della sua rappresentazione HTML
        return wrapper;
    }
}
