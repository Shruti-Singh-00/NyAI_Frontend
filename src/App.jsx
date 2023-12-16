import "./App.css";
import Home from "./pages/Home.jsx";
import Drafting from "./pages/Drafting.jsx";
import Advocates from "./pages/Advocates.jsx";
import AboutUs from "./pages/aboutUs";
import { Routes, Route } from "react-router-dom";

import Drafting1 from "./pages/Drafting/Drafting1.jsx";
import Drafting2 from "./pages/Drafting/Drafting2.jsx";
import Drafting3 from "./pages/Drafting/Drafting3.jsx";
import Drafting4 from "./pages/Drafting/Drafting4.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/drafting"} element={<Drafting />} />
      <Route path={"/drafting/browse"} element={<Drafting1 />} />
      <Route path={"/drafting/browse/generate"} element={<Drafting2/>} />
      <Route path={"/drafting/upload"} element={<Drafting3 />} />
      <Route path={"/advocates"} element={<Advocates />} />
      <Route path={"/about"} element={<AboutUs />} />
      <Route path={"/drafting/path4"} element={<Drafting4 />} />
    </Routes>
  );
}

export default App;
