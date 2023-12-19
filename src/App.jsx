import "./App.css";
import Home from "./pages/Home.jsx";
import Drafting from "./pages/Drafting.jsx";
import Advocates from "./pages/Advocates.jsx";
import AboutUs from "./pages/aboutUs";
import Help from "./pages/Help.jsx"
import { Routes, Route } from "react-router-dom";

import Drafting1 from "./pages/Drafting/Drafting1.jsx";
import Drafting2 from "./pages/Drafting/Drafting2.jsx";
import Drafting3 from "./pages/Drafting/Drafting3.jsx";
import Drafting4 from "./pages/Drafting/Drafting4.jsx";

import Login from "./pages/Auth/Login.jsx";
import Register from "./pages/Auth/Register.jsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.jsx";
import CardRegisterView from "./pages/Auth/CardRegisterView.jsx";
import CardRegister from "./pages/Auth/cardRegister.jsx";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/register"} element={<CardRegisterView />} />
      <Route path={"/register/panCard"} element={<CardRegister name= "Pan Card" idType="panCard"/>}/>
      <Route path={"/register/voterId"} element={<CardRegister name= "Voter ID" idType="voterId"/>}/>
      <Route path={"/forget-Password"} element={<ForgotPassword />} />
      <Route path={"/drafting"} element={<Drafting />} />
      <Route path={"/drafting/browse"} element={<Drafting1 />} />
      <Route path={"/drafting/browse/generate/:id"} element={<Drafting2/>} />
      <Route path={"/drafting/upload/:id"} element={<Drafting3 />} />
      <Route path={"/drafting/path4"} element={<Drafting4 />} />
      <Route path={"/advocates"} element={<Advocates />} />
      <Route path={"/about"} element={<AboutUs />} />
      <Route path={"/help"} element={<Help/>} />
    </Routes>
  );
}

export default App;
