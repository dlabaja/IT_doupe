import {createRoot} from "react-dom/client";
import {App} from "../compositions/app/app";

const root = createRoot(document.getElementById("root"));

root.render(<App/>);