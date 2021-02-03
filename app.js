const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send("E ai mundo? Esse e o primero passo dessa porra."));

app.listen(port);
console.log(`App running on http://localhost:${port}`);