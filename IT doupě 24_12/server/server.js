const server = require("server")
const {render} = require("server/reply");
const path = require("path");
const { get, post } = server.router;

server({ port: 8080 }, [
    get('/', ctx => render(path.resolve(__dirname, "../web/dist/index.html"))),
]);