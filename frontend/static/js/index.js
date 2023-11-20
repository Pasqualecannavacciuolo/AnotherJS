import { router, navigateTo } from "./router.js";
import { homeFunctions } from "./Home.js";
import { settingFunctions } from "./Settings.js";

// Permette di caricare l'history del browser quando si naviga con le 2 frecce destra(avanti) e sinistra(indietro)
window.addEventListener("popstate", router);

// Aspetto che carichi la pagina
document.addEventListener("DOMContentLoaded", () => {
    homeFunctions.listen();
    settingFunctions.listen();
    
    // Al click devo controllare se e' un click su un elemento che contien il tag data-link
    document.body.addEventListener("click", e => {

        /*if (e.target.id === "alertButton") {
            homeFunctions.showAlert();
        }*/
        
        // Se lo contiene (data-link) devo navigare verso quell'url senza ricaricare la pagina
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }

        // Se il click contiene (with-state) riferendosi ad un button
        /*if (e.target.matches("[with-state]")) {
            e.preventDefault();
            console.log("Button cliccato")
        }*/
    });

    router();
});