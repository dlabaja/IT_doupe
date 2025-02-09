const express = require("express");
const path = require("node:path");

const app = express();
const port = 8080;
const dist = (p) => path.resolve(__dirname, "..", "dist", p)
app.use(express.static(dist("../dist")));

app.get('*', (req, res) => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Epický web</title>
      </head>
      <body style=
          "font-family: Biennale, serif;
          background: aliceblue;
          color: navy;"
        >
        <div id="root"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});