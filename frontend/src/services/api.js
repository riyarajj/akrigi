import axios from "axios";

const url = 'http://localhost:5000/api';

export const createPost = async (data)=>{
    try{
        return await axios.post(`${url}/products`,data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    catch(err){
        console.log('error while posting ',err);
    }
};

export const createDonationPost = async (data)=>{
    try{
        return await axios.post(`${url}/donate`,data,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        })
    }
    catch(err){
        console.log('error while posting ',err);
    }
};

export const loginUser = async ({username,password})=>{
    try{
        await axios.post(`${url}/auth/login`,{username,password})
        .then(res =>{
            if(res.data.token){
                localStorage.setItem('token',res.data.token);
                localStorage.setItem('user',res.data.user);
            }
        }).catch(err => console.log('error in fetching token ',err))
    }catch(err){
        console.log('error while login ',err);
    }
};

export const registerUser = async ({username,email,password,firstName,lastName})=>{
    try{
        const response = await axios.post(`${url}/auth/register`,{firstName,lastName,username,email,password})
        console.log(response.data);
    }catch(err){
        console.log('error while registering user ',err);
    }
};
export const logoutUser =  ()=>{
    try{
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            return alert("Successfully logged out");
    }catch(err){
        console.log("error while logging out ",err);
    }
}

export const verifyToken = async () =>{
    try{
        const response = await axios.get(`${url}/auth/checkJwt`,{
            headers:{
                Authorization:`Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.data;
    }catch(err){
        console.log("error while checking ",err);
    }
};

export const registerNgo = async ({username,email,password,site,mob})=>{
    try{
        const response = await axios.post(`${url}/ngos/register`,{username,email,site,mob,password})
        console.log(response.data);
    }catch(err){
        console.log('error while registering ngo ',err);
    }
};
export const ngoList =async ()=>{
    try{
        const response = await axios.get(`${url}/ngos`);
        return response.data;

    }catch(err){
        console.log("error while fetching ngo list ",err);
    }
};