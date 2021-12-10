import {Link} from "react-router-dom";
import "../App.css";

const LandingPage = ()=>{
    return(
        <div className = "container" style={{
          margin: "auto",
          width: "max-content"
        }}>
           <div className = "box">
              <img src = "https://media.istockphoto.com/photos/mature-man-running-online-store-picture-id1281476617?b=1&k=20&m=1281476617&s=170667a&w=0&h=gzcJ_9EIpmpX48hHsh-N2sB9TS_UMrUclhKejsu69uo=" alt = "Sell" className = "image"/>
                <span>Sell</span>
            </div>
            <Link to = "/homepage" className = "links">
            <div className = "box">
              <img src="https://media.istockphoto.com/photos/woman-holding-sale-shopping-bags-consumerism-shopping-lifestyle-picture-id1254508881?b=1&k=20&m=1254508881&s=170667a&w=0&h=e8irxc-knpSghyK9ZI19uOOHv0QDEWscs2O4BwGRcLA=" alt = "Purchase" className = "image"/>
              <span>
              Purchase
             </span>
            </div>
            </Link>
            <div className = "box">
              <img src="https://media.istockphoto.com/photos/boxes-with-clothes-for-donation-in-home-interior-picture-id1321296846?b=1&k=20&m=1321296846&s=170667a&w=0&h=CZq1VC0HkUIF0-bikwYoWlzwpQVzkZ_BlrVS-3_OlV8=" alt = "Donate" className = "image"/>
              <span>Donate</span>
            </div>
        </div>
        
    )
}

export default LandingPage;