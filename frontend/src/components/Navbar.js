/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useState } from "react";
import {Nav ,Navbar,Container,Row,Col,Modal,Button,Form,InputGroup} from 'react-bootstrap';
import {  MDBCol} from 'mdb-react-ui-kit';
import { BsFacebook} from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FiLogIn} from "react-icons/fi";
import { FiUserPlus} from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import '../App.css'



const Navbartask = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Register modal

  const [Regshow, RegsetShow] = useState(false);

  const ReghandleClose = () => RegsetShow(false);
  const ReghandleShow = () => RegsetShow(true);

  return (
    <div className="navbarstyle">
    <Container >
      <Navbar collapseOnSelect expand="lg"  >
  <Navbar.Brand className="brandname" href="#home" >Akrigi</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link className="text-dark linkstyle " onClick={handleShow} ><FiLogIn className="mx-1" />Login</Nav.Link>

      {/* LOGIN MODAL */}
      <Modal show={show} onHide={handleClose} className="modalback">
        <Modal.Header closeButton className="modallook modalfont">
          <Modal.Title>SignIn</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modallook">
        <Form>
        <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
    <Form.Control placeholder="Email"/>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><FaLock/></InputGroup.Text>
    <Form.Control placeholder="Password"/>
  </InputGroup>
  <Row className="mb-3">
    
    <Form.Group as={Col} className="mb-3" >
    <Form.Check type="checkbox" label="Remember me" />
  </Form.Group>

  <Form.Group as={Col} className="mb-3 " >
  <a href="#" className="ps-5 ps-5">Forget Password?</a>
  </Form.Group>
   
  </Row>
  
  
  <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    SignIn
  </Button>
  <div className="text-center">
  <MDBCol  className='mb-4 mb-md-0'>
            <h5 className='text-small linkstyle mb-3'>or Signin with</h5>
              <a href="#" className="text-white mx-2 "><BsFacebook size={40} color="#3b5998" /></a>
              <a href="#" className="text-white mx-2" ><FcGoogle size={40} color="black" /></a>
              
          </MDBCol>
</div>
</div>
</Form>

        </Modal.Body>
        <Modal.Footer className="modallook">
          <p>Already a member?</p>
          <a onClick={ReghandleShow}><Button variant="primary">Register</Button></a>
        </Modal.Footer>
      </Modal>

      {/* END OF LOGIN MODAL */}
      
      <Nav.Link className="text-dark linkstyle " onClick={ReghandleShow}><FiUserPlus className="mx-1" />Register</Nav.Link>

      {/* REGISTER MODAL */}


      <Modal show={Regshow} onHide={ReghandleClose} className="modalback">
        <Modal.Header closeButton className="modallook modalfont">
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modallook">
        <Form>
        <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><MdEmail/></InputGroup.Text>
    <Form.Control placeholder="Email"/>
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1"><FaLock/></InputGroup.Text>
    <Form.Control placeholder="Password"/>
  </InputGroup>
  
  <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Register
  </Button>
  <div className="text-center">
  <MDBCol  className='mb-4 mb-md-0'>
            <h5 className='text-small linkstyle mb-3'>or Signin with</h5>
              <a href="#" className="text-white mx-2 "><BsFacebook size={40} color="#3b5998" /></a>
              <a href="#" className="text-white mx-2" ><FcGoogle size={40} color="black" /></a>
              
          </MDBCol>
</div>
</div>
</Form>

        </Modal.Body>
        <Modal.Footer className="modallook">
          <p>Already a member?</p>
          <Button variant="primary">Register</Button>
        </Modal.Footer>
      </Modal>

      {/* END OF REGISTER MODAL */}
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
    </Container>
    </div>
  
    
  )
}

export default Navbartask 