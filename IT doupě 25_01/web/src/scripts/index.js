import "./script.js";
import "./scramble-text.js";
import "./utils.js";

function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('../styles', false, /\.css$/));