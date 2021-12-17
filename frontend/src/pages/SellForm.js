import { Button, Container, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {BiImageAdd} from "react-icons/bi";
import {useState, useEffect} from "react";
import {createPost} from "../services/api";

const SellingForm = ()=>{
    const [name,setName] = useState('');
    const [desc,setDesc] = useState('');
    const [price,setPrice] = useState(0);
    const [category,setCategory] = useState('');
    const [files, setFiles] = useState();
    const [image,setImage] = useState();
    const handleChange =(e)=>{
        if(!e.target.files || e.target.files.length === 0) {
            setFiles(undefined);
            return
        }
        setFiles(e.target.files);
    };

    useEffect(()=>{
            if(!files) {
                setImage(undefined);
                return
            };
            const newImgUrl = [];
            for(let i =0; i< files.length;i++) {
                newImgUrl.push(URL.createObjectURL(files[i]));
            }
            console.log(newImgUrl)
            setImage(newImgUrl);
    },[files]);

    
    const publishPost = async()=>{
       const formData = new FormData()
       formData.append('name',name);
       formData.append('category',category);
       formData.append('price',price);
       formData.append('desc',desc);
       for(let i =0; i< files.length;i++){
           formData.append('images',files[i]);
       }
       if( name !== ''&& price !== 0 && category !==''  && desc !=='' && image !==''){
        console.log(formData);
        await createPost(formData)
        alert("Post created!")
        window.location.replace("/landingpage");
       }else{
           alert('Insert data in all the fields');
       }
        
    };
    return(
        <div>
             
            <Form>
                <Container style={{
                    width:"600px",
                }}>
                <h1 style={{
                    textAlign:"center",
                    margin:"18px",
                    padding:"10px",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight:"bold",
                    fontSize:"2.5rem",
                    color:"brown"}}>Create Your Post!</h1>
                    <Row className="align-items-center">
                     { files && image &&  image.map((imgsrc)=>
                    (<img src={imgsrc} alt="error" style={{
                        height:'250px',
                        width:"250px",
                        margin:"auto",
                        padding:"10px"}}
                    />))}   
                        
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Name of your Product'
                                        type ='text' 
                                        name='name'
                                        onChange={(e)=>setName(e.target.value)}
                                         required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Price in INR'
                                        type ='number'
                                        name='price'
                                        onChange={(e)=>setPrice(e.target.value)}
                                        required/>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <Form.Select onChange={(e)=>setCategory(e.target.value)}>
                                <option>Choose from Category:</option>
                                <option value="Women">Women</option>
                                <option value="Men">Men</option>
                                <option value="Kids">Kids</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Bags">Bags</option>
                                <option value="Books">Books</option>
                                <option value="Shoes">Shoes</option>
                            </Form.Select>
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="inlineFormInputGroup" 
                                        placeholder='Description for the product'
                                        as ='textarea'
                                        name='desc'
                                        onChange={(e)=>setDesc(e.target.value)}
                                        rows={4}
                                         required/>
                        </InputGroup>
                        <input type="file" id = "images"  onChange={(e)=>handleChange(e)}
                        name="images" style = {{display:"none"}} multiple required/>
                        <label htmlFor="images" style={{margin:"10px",padding:"7"}}>Add Files (max 6 allowed):<BiImageAdd size={40} style={{marginLeft:"10px"}}/></label>

                    </Row>
                    <div className="d-grid gap-2 mb-4" style={{margin:"10px"}}>
                        {localStorage.getItem("token")!==null?
                        (<Button variant="primary" size="lg" onClick={()=>publishPost()}>Post</Button>)
                    :(<Button variant="primary" size="lg" onClick={()=>{alert("Please Login first!")}}>Post</Button>)}    
                    </div>
                </Container>
            </Form>
        </div>
 
    )
}

export default SellingForm;