// Esporta un oggetto contenente le funzioni specifiche per Home
export const homeFunctions = {
  listen: () => {
    document.body.addEventListener("click", e => {
      if (e.target.id === "homeAlertButton") {
          homeFunctions.showAlert();
      };
    });
  },
  showAlert: () => {
      alert('Button clicked in Home Page!');
  },
  // Aggiungi altre funzioni specifiche per la vista Home
};