import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Aboutus = () => {
    return (
        <div className='us'>
        <Container >
            <Row>
                <Col >
                    <img src="/images/aboutusimg.jpg" alt="logo" height={400} style={{display:"flex", margin:"30px "}} />
                </Col>
                <Col lg={6}>
                    <br/>
                    <center><h1>ABOUT US</h1></center><br/>
                    <div>
                        <p >Akrigi is India's Online Thrift-Shopping Site for Sustainable Fashion & Lifestyle in India. Buy Clothing, Footwear and Fashion Accessories for women below retail prices. 

                        We put together regular and premium clothing contribution from regular folks as well as influencers closet taking care of everything, right from curating a product to delivering it to the buyer. Our entire process is hassle free and our products are always in great condition!

                        The team at Akrigi has an approved list of brands which are a mix of domestic as well as international brands including every day high street brands like Zara, Mango, Vero Moda, H&M and many more…

                        Our major goal is to make the art of thrifting a regular phenomenon. We aim to balance online thrifting with the element of shopping choice for regular people like us and the profits derived to be directly proportional to charity.</p>
                    </div>
                    {/* <div class="text-center">
                        <button type='button' class="btn btn-danger " onClick={"document.getElementById('readmore').scrollIntoView()"}>Read More...</button>
                    </div> */}
                </Col>
            </Row>
            <br/>
            <Row className='px-5 py-5 textreponsive'>
            
                <div id="readmore" className=' justify-content-md-center'>
                    <p>If you've ever heard someone say they're going to go thrifting, you might be wondering what they mean. Simply put, thrifting means to go shopping at a thrift store, garage sale, or flea market where you'll find gently used items at discounted prices. Thrift-shopping is a great way to buy resale high-end clothing and accessories well below retail prices.​</p>

                    <p>In today's era, fast fashion has taken the trend. Fast fashion is the practice of making inexpensive clothes very quickly so retailers can be up-to-date with all the latest trends. It's a highly disruptive industry for many reasons. Producing mass amounts of clothing requires tons of water, pollutes our natural waterways and puts microfibers into our oceans that eventually enter our bodies when we eat seafood. Additionally, it produces tons of textile waste, generates greenhouse gas emissions and deposits chemicals into our soil.</p>

                    <p>Shopping in thrift stores is a significantly more sustainable way to shop. When you choose second-hand over fast fashion, it decreases the demand and as a result, causes less pollution. Second-hand items don't require more resources to produce- they're already made! More and more people are giving pre-loved clothing a second chance at life and for a good reason. In short, Thrifting is cheaper, sustainable & thrifting gives back to the community.</p>
                </div>
                <div className='text-center'>
                    <p style={{fontWeight:'bold',fontSize:"25"}}>TOGETHER, LET'S TAKE AN EXTRA MILE FORWARD TOWARDS SUSTAINING <br/>HUMANITY AND SHEILDING OUR VERY OWN MOTHER EARTH</p>
                </div>
                
            </Row>
        </Container>
        </div>
    )
}

export default Aboutus;
