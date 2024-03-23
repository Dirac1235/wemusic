import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Create from "./components/create";

export default function Router(){
    return (
        <BrowserRouter>
        <Routes> 
            <Route path="/" element={<App />} />
            <Route path="/create" element={<Create/>} />
        </Routes>
        </BrowserRouter>
    )
}