import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage} from "../../pages/homepage/homepage";
import {DashboardPage} from "../../pages/dashboard-page/dashboard-page";
import {NotFoundPage} from "../../pages/not-found-page/not-found-page";
import * as styles from "./app.module.scss";

export const App = () => {
    return <div className={styles.layout}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    </div>
}