import './App.css'
import Home from "./pages/Home.jsx"
import Drafting from "./pages/Drafting.jsx"
import Advocates from "./pages/Advocates.jsx"
import AboutUs from "./pages/aboutUs";
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/drafting"} element={<Drafting/>}/>
    <Route path={"/advocates"} element={<Advocates/>}/>
    <Route path={"/about"} element={<AboutUs/>}/>
    </Routes>
  )
}

export default App
