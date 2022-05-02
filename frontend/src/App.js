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
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import DonationForm from "./pages/Donate";
import NGORegisterationForm from "./pages/NGORegistrationForm";

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
    <Routes><Route exact path="/" element = {<Animation/>}></Route></Routes>
    <Navbartask/>
      <Routes>
        <Route path="/landingPage" element = {<LandingPage/>}></Route>
        <Route path="/homepage" element = {<Home/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
        <Route path="/aboutus" element = {<Aboutus/>}></Route>
        <Route path="/contactus" element = {<Contactus/>}></Route>
        <Route path="/sellForm" element = {<SellingForm/>}></Route>
        <Route path="/donateForm" element = {<DonationForm/>}></Route>
        <Route path="/registerngo" element = {<NGORegisterationForm/>}></Route>
        <Route path="/donate" element = {<Donate/>}></Route>
        <Route path="/termsandcondition" element = {<TC/>}></Route>
        <Route path="/returnpolicy" element={<Returnpolicy/>}></Route>
        <Route path="/MainContent" element= {<MainContent/>}></Route>
        <Route path="/faqs" element={<FAQs/>}></Route>
      </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
