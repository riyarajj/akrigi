import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import './App.css';
import Navbartask from "./components/Navbar.js";
import Footer from "./components/footer.js";
import Home from './pages/Home';

import { Landing } from './Landing';
import LandingPage from "./pages/landingPage";

function App() {
  return (
  <Router>
    <Navbartask/>
      <Routes>
        <Route exact path="/" element = {<Landing/>}></Route>
        <Route exact path="/LandingPage" element = {<LandingPage/>}></Route>
        <Route path="/homepage" element = {<Home/>}></Route>
      </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
