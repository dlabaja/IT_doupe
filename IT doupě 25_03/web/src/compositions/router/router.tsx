import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Homepage} from "../../pages/homepage/homepage";
import {DashboardPage} from "../../pages/dashboard-page/dashboard-page";
import {NotFoundPage} from "../../pages/not-found-page/not-found-page";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
}