const { readFileSync } = require('fs');

function customTemplateEngine(filePath, options, callback) {
  try {
    const content = readFileSync(filePath, 'utf-8');

    // Trasformazione del contenuto per gestire la sintassi @click=function()
    const transformedContent = content
      .replace(/@click=([\w\d]+)\(\)/g, (_, functionName) => {
        // Aggiungi la funzione al contesto globale (window)
        return `onclick="${functionName}()"`;
      })
      .replace(/@for\(([\w\d]+) of ([\w\d]+)\)/g, (match, item, array) => {
        console.log(array);
        return `<% ${array}.forEach(function(${item}) { %>`.replace(/@/g, '$');
      })
      .replace(/@endfor/g, '<% }); %>');


    return callback(null, transformedContent);
  } catch (error) {
    return callback(error);
  }
}

module.exports = customTemplateEngine;
