import {Link} from "react-router-dom";
import "../App.css";

const LandingPage = ()=>{
    return(
        <div className = "containerlandingPage">
          <Link to = "/sellForm" className = "links">
            <div className = "box">
              <img src = "/images/boxImageSell.jpg" alt = "Sell" className = "boxImage"/>
                <span>Sell</span>
            </div>
          </Link>
          <Link to = "/homepage" className = "links">
            <div className = "box">
              <img src="/images/boxImagePurchase.jpg" alt = "Purchase" className = "boxImage"/>
              <span>Purchase</span>
            </div>
          </Link>
            <div className = "box">
              <img src="/images/boxImageDonate.jpg" alt = "Donate" className = "boxImage"/>
              <span>Donate</span>
            </div>
        </div>
        
    )
}

export default LandingPage;