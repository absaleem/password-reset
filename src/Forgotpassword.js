import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Forgotpassword() {
const navigate = useNavigate();
let formValues={
  email:"",
}
const [formData,setFormdata]=useState(formValues); 

useEffect(() => {

},[]);

const handleChange =(e)=>{
  
  setFormdata({...formData, [e.target.name]:e.target.value});
}

const handleSubmit= async (e)=>{
  e.preventDefault();
  console.log(formData);

    try {
      const response = await axios.post("http://localhost:3001/forgotpassword/checkUser",{...formData});
      console.log(response);
      if(response){
        toast(response.data.msg); 
        setFormdata({...formValues});
      }
     } catch (error) {
        toast(error.response.data.msg);            
    }
 }

 const signup = () => {
    navigate('/Signup');
}


    return (
    <>    
   
   <div className=" h-100 d-flex justify-content-center align-items-center">
   <div>
    <ToastContainer />
      <Form onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>
    
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="enter your email address"  name="email" value={formData.email}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group>
      <Button type="submit" variant="primary">Save</Button> <Button type="button" onClick={signup} variant="primary">Sign up</Button>
  
     </Form>
     </div>
    </div>
    </>
  );
}

export default Forgotpassword;