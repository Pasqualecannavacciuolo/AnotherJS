const express = require('express');
const customTemplateEngine = require('./template');
const path = require('path');

const app = express();

app.engine('ajs', customTemplateEngine);
app.set('views', path.join(__dirname, 'frontend', 'views')); // Imposta la cartella delle viste
app.set('view engine', 'ajs');
app.use("/static", express.static(path.join(__dirname, "frontend", "static")));

// Configura la gestione delle route per i file AJS
app.get("/views/:viewName.ajs", (req, res) => {
  const viewName = req.params.viewName;
  res.render(viewName, (err, html) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.send(html);
  });
});


// Configurazione del middleware per gestire il routing
app.get("/*", (req, res) => {
    // Usa il motore di rendering per inviare l'HTML della tua SPA
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => console.log("✅ Server running..."));



/*const express = require('express');
const customTemplateEngine = require('./template');

const app = express();

app.engine('ajs', customTemplateEngine);
app.set('views', 'frontend/static/js/views');
app.set('view engine', 'ajs');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.ajs"));
});

app.listen(3000, () => {
  console.log('✅ Server is running on http://localhost:3000');
});*/
