import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate,useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Resetpassword() {
const navigate = useNavigate();
const params = useParams();
let formValues={
  password:"",
}
const [formData,setFormdata]=useState(formValues); 

useEffect(() => {
    const token=params.token;  setFormdata({...formData, password_token:token}); //console.log(token); console.log(formData);
    async function getData(token){
       try{
        var res= await axios.get(`http://localhost:3001/forgotpassword/checKTokenexists/${token}`); 
        console.log(res);
       }
       catch(error){
        alert('Password link expired');
       // navigate('/Forgotpassword');
       } 
    }    
    
        var res=  getData(token);//call user data when loading the file   
        
   
 },[]);
 
const handleChange =(e)=>{
  setFormdata({...formData, [e.target.name]:e.target.value});
}

const handleSubmit= async (e)=>{
  e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/forgotpassword/resetPassword",{...formData});
      if(response){
            toast(response.data.msg); 
            alert('Password reset successful!');
            navigate("/Forgotpassword")
      }
     } catch (error) {
      toast(error.response.data.msg);            
  } 
}
    return (
    <>    
   
   <div className=" h-100 d-flex justify-content-center align-items-center">
   <div>
   <h1>Reset Password</h1>
    <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="password" placeholder="enter your password"  name="password" value={formData.password}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group>
      <Button type="submit" variant="primary">Save</Button>
  
     </Form>
    </div>
    </div>
    </>
  );
}

export default Resetpassword;