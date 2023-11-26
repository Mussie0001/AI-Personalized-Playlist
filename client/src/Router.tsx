import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Registration";
import Spotify from "./pages/Spotify";
import AI from "./pages/AI";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/login" element={<Login />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "/spotify" element={<Spotify />} />
        <Route path = "/AI" element={<AI/>} />
        <Route path = "/home" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;