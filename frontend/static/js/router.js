import { homeFunctions } from "./Home.js";
import { postsFunctions } from "./Posts.js";
import { settingFunctions } from "./Settings.js";


export const navigateTo = (url) => {
    history.pushState(null, null, url);
    router();
};

export const router = () => {
    const path = window.location.pathname;
    
    switch (path) {
        case '/':
            renderView('Home');
            break;
        case '/posts':
            renderView('Posts');
            break;
        case '/settings':
            renderView('Settings');
            break;
        default:
            renderView('NotFound');
    }
}

const loadViewFile = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load ${url}`);
        }
        return response.text();
    } catch (error) {
        console.error(error);
    }
};

const renderView = async (viewName) => {
    const container = document.getElementById('app');
    const viewUrl = `views/${viewName}.ajs`;

    try {
        const html = await loadViewFile(viewUrl);
        container.innerHTML = html;
        initializeView(viewName);
    } catch (error) {
        console.error(error);
    }
};

const initializeView = async (viewName) => {
    // Aggiungi logica di inizializzazione specifica per ciascuna vista qui
    switch (viewName) {
        case 'Home':
            window['homeFunctions'] = homeFunctions;
            break;
        case 'Posts':
            window['items'] = postsFunctions.listen();
            break;
        case 'Settings':
            window['settingFunctions'] = settingFunctions
            break;
        // ... altre viste ...
    }
};


