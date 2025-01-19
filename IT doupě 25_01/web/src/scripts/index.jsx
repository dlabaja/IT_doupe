import {createRoot} from "react-dom/client";
import {App} from "../compositions/app/app";
import styles from "../styles/style.css" // nechat pro webpack

const root = createRoot(document.getElementById("root"));

root.render(<App/>);