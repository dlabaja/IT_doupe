import {createRoot} from "react-dom/client";
import {App} from "../compositions/app/app";

const root = document.getElementById("root");

if (root) {
    createRoot(root).render(<App/>);
}