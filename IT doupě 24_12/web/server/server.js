const express = require("express");
const path = require("path");

const app = express();
const port = 8080;
const dist = (p) => path.resolve(__dirname, "..", "dist", p)

app.get('/', (req, res) => {
    res.sendFile(dist("index.html"));
});

app.get('/public/bundle.js', (req, res) => {
    res.sendFile(dist("public/bundle.js"));
});

app.get('*', (req, res) => {
    res.sendFile(dist("error.html"));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});