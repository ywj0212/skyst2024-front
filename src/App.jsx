import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Gallery from "./pages/Gallery";
import Upload from "./pages/Upload";
import Player from "./pages/Player"

function App() {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/upload" element={<Upload />}></Route>
          <Route path="/player" element={<Player />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
