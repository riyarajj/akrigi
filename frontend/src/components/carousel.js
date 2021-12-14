import {Carousel} from "react-bootstrap";
import "../App.css";

const Slider = ()=>{
    return(
        <Carousel style={{height:"70vh"}}>
            <Carousel.Item>
                <div className = "slide" style={{backgroundColor:"#e6e0e3"}} >
                    <img src = "/images/slide1.jpg" alt="first slide" className="slideImg"/>
                    <div className="text">
                        <h1 className = "slideTitle">Shop like no other</h1>
                        <p className="slideDesc">'cause Thrifting is the new Trending!</p>
                    </div>
                </div>      
            </Carousel.Item>
            <Carousel.Item>
            <div className = "slide"  style={{backgroundColor:"#d6d4d5"}}>
                <div className="text">
                    <h1 className = "slideTitle">Spread Smiles by Donating!</h1>
                    <p className="slideDesc">Donate for a better world</p>
                </div>
                <img src = "/images/slide2.jpg" alt="second slide" className="slideImg"/>
                </div>   
            </Carousel.Item>
            <Carousel.Item>
            <div className = "slide" style={{backgroundColor:"#F2EFEA"}}>
                    <img src = "/images/slide3.jpg" alt="third slide" className="slideImg" width="550px" height="500px"/>
                    <div className="text">
                        <h1 className = "slideTitle">Sell your stuff here!</h1>
                        <p className="slideDesc">How 'bout some side income</p>
                    </div>
                </div>      
            </Carousel.Item>

        </Carousel>
    )
}

export default Slider;