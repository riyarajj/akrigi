import React from 'react'
import {InputGroup, Form, Button} from 'react-bootstrap';
import { MdEmail, MdWork } from "react-icons/md"
import {ImLocation2 } from "react-icons/im"
import { BsFillTelephoneFill, BsFillPersonFill} from "react-icons/bs";
import {  MDBContainer,MDBRow, MDBCol, MDBCardBody } from "mdb-react-ui-kit";

const Contactus = () => {
    return (
        <div className='us'>
            <MDBContainer>
    <section className="contact-section my-5">
      
        <MDBRow>
          <MDBCol lg="8">
            <MDBCardBody className="form text-center  ">
              <h3 className="mt-4 mb-4">
                 Write to us:
              </h3>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><BsFillPersonFill/></InputGroup.Text>
                  <Form.Control placeholder="Name"/>
                  </InputGroup>

                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
                  <Form.Control placeholder="Email"/>
                  </InputGroup>

                    
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><BsFillTelephoneFill/></InputGroup.Text>
                  <Form.Control placeholder="Your Phone"/>
                  </InputGroup>

                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                  <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1"><MdWork/></InputGroup.Text>
                  <Form.Control placeholder="Your Company"/>
                  </InputGroup>

                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <textarea class="form-control" type="textarea" placeholder="Your message"></textarea>
                    
                  </div><br/>
                  <div className="d-grid"><Button class="btn btn-primary " >Send</Button></div>
                  
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCol>
          <MDBCol lg="4">
            <MDBCardBody className="contact text-center h-100 white-text">
              <h3 className="my-4 pb-2">Contact information</h3>
              <ul className="text-lg-left list-unstyled ml-4">
                <li>
                  <p>
                  <div className="pr-2"><ImLocation2/> </div>
                  
                    India, 243122 U.P.
                  </p>
                </li>
                <li>
                  <p>
                  <div className="pr-2"> <BsFillTelephoneFill/></div>
                    + 91 234 567 89
                  </p>
                </li>
                <li>
                  <p>
                  <div className="pr-2"> <MdEmail/></div>
                    
                        Contactus@akrigi.com
                  </p>
                </li>
              </ul>
              <hr className="hr-light my-4" />
              
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
     
    </section>
    </MDBContainer>
  

        </div>
    )
}

export default Contactus;
