import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Create from "./components/create";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserRequest, setIsLoading } from "./components/redux/actions";

export default function Router(){
    const dispatch = useDispatch()
    useEffect(function () {
        dispatch(fetchUserRequest());
        dispatch(setIsLoading(false));
      }, []);
    return (
        <BrowserRouter>
        <Routes> 
            <Route path="/" element={<App />} />
            <Route path="/create" element={<Create/>} />
        </Routes>
        </BrowserRouter>
    )
}