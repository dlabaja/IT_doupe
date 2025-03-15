import {createRoot} from "react-dom/client";
import {App} from "../compositions/app/app";
import {Router} from "../compositions/router/router";

const root = document.getElementById("root");

if (root) {
    createRoot(root).render(<App><Router/></App>);
}