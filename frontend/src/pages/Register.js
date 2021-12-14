/* eslint-disable jsx-a11y/anchor-is-valid */
import {MDBCol} from "mdb-react-ui-kit";
import {useState} from "react";
import {Button, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {BsFacebook} from "react-icons/bs";
import {FcGoogle} from "react-icons/fc";
import {registerUser} from "../services/api";


const Register = ()=>{
    const [username,setusername]= useState('');
    const [firstName,setfirstName]= useState('');
    const [lastName,setlastName]= useState('');
    const [email,setemail]= useState('');
    const [password,setpass]= useState('');
    const [cPassword,setCpass]= useState('');

//const [data,setData]=useState({});

const handleSubmitRegister = async ()=>{
    // console.log(data)
    if(username !== '' && email !=='' && password!==""  && firstName!=="" && lastName!==""){
        if(password===cPassword){
            await registerUser({username,email,password,firstName,lastName});
            window.location.replace("/")
        }else{
            alert("Password and confirm password are not same!")
        }
        
    }else{
        alert("All fields are required")
    }
    
}
    return(
        <div>
            <Form>
                <Container style={{
                    width:"500px",
                }}>
                <h1 style={{
                    textAlign:"center",
                    margin:"18px",
                    padding:"10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight:"bold",
                    fontSize:"2.5rem",
                    color:"brown"}}>Register</h1>
                    <Row className="align-items-center">
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='First name'
                                        type ='text' 
                                        name='firstName'
                                        onChange = {(e)=>setfirstName(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Last name'
                                        type ='text'
                                        name='lastName'
                                        onChange = {(e)=>setlastName(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Username'
                                        type ='email'
                                        name='username'
                                        onChange = {(e)=>setusername(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Email'
                                        name='email'
                                        onChange = {(e)=>setemail(e.target.value)} required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Password'
                                        name='password'
                                        onChange = {(e)=>setpass(e.target.value)} 
                                        type='password' required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup"
                                        placeholder='Confirm Password'
                                        name='cPassword'
                                        onChange = {(e)=>setCpass(e.target.value)}
                                        type='password' required/>
                        </InputGroup> 
                    </Row>
                    <div className="d-grid gap-2" style={{marginTop:"10px"}}>
                        <Button variant="primary" size="lg"  onClick = {()=>handleSubmitRegister()}>Register</Button>
                        <div className="text-center">
                            <MDBCol  className='mb-4 '>
                                <h5 className='text-small linkstyle mb-3'>or Signin with</h5>
                                <a href="#" className="text-white mx-2 "><BsFacebook size={40} color="#3b5998" /></a>
                                <a href="#" className="text-white mx-2" ><FcGoogle size={40} color="black" /></a>
                            </MDBCol>
                        </div>
                    </div>
                </Container>
            </Form>
        </div>
    )
}

export default Register;