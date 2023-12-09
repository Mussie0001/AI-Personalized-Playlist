import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Spotify from "./pages/Spotify";
import AI from "./pages/AI";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/register" element={<Registration />} />
        <Route path = "/spotify-auth" element={<Spotify />} />
        <Route path = "/ai" element={<AI/>} />
        <Route path = "/playlist" element={<Playlist/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;