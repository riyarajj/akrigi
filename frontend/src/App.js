import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import Navbartask from "./components/Navbar.js";
import Footer from "./components/footer.js";
import Home from './pages/Home';

import { Animation } from './pages/Animation';
import LandingPage from "./pages/landingPage";
import Register from "./pages/Register";
import {useEffect} from "react";
import {logoutUser, verifyToken} from "./services/api";
import SellingForm from "./pages/SellForm";

function App() {
  useEffect(()=>{
    const checkToken = async()=>{
      if(localStorage.getItem("token")!==null){
        let data = await verifyToken();
        if(!data.success){
          await logoutUser();
          window.location.reload();
        }
      }
    }
    checkToken()
  },[])
  return (
  <Router>
    <Navbartask/>
      <Routes>
        <Route exact path="/" element = {<Animation/>}></Route>
        <Route path="/landingPage" element = {<LandingPage/>}></Route>
        <Route path="/homepage" element = {<Home/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
        <Route path="/sellForm" element = {<SellingForm/>}></Route>
      </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
