// Esporta un oggetto contenente le funzioni specifiche per Home
export const settingFunctions = {
    listen: () => {
      document.body.addEventListener("click", e => {
        if (e.target.id === "settingAlertButton") {
            settingFunctions.showAlert();
        };
      });
    },
    showAlert: () => {
        alert('Button clicked in Settings Page!');
    },
    // Aggiungi altre funzioni specifiche per la vista Home
  };