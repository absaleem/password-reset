import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
const navigate = useNavigate();
let formValues={
  email:"",
  username:"",
  mobile_no:"",
  password:"",
  confirm_password:"",
  password_token:"",
  token_expiry:""
}
const [formData,setFormdata]=useState(formValues); 

useEffect(() => {

},[]);

const handleChange =(e)=>{
  
  setFormdata({...formData, [e.target.name]:e.target.value});
}

const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3001/forgotpassword/signup",{...formData});
        console.log(response);
        if(response){
            toast(response.data.msg); 
            setFormdata(formValues);
          }
       } catch (error) {
        toast(error.response.data.msg);            
      }
};

const forgotpassword = () => {
        navigate('/Forgotpassword');
 }

    return (
    <>    
   
   <div className=" h-100 d-flex justify-content-center align-items-center">
   <div>
    <ToastContainer />
      <Form onSubmit={handleSubmit}>
      <h1>Signup</h1>
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label>User name</Form.Label>
            <Form.Control type="text" placeholder="enter your user name"  name="username" value={formData.username}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group>
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label>Mobile no</Form.Label>
            <Form.Control type="text" placeholder="enter your mobile no"  name="mobile_no" value={formData.mobile_no}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group>  
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="enter your email address"  name="email" value={formData.email}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group>
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="enter your password"  name="password" value={formData.password}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group> 
        <Form.Group  controlId="exampleForm.ControlInput1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="enter your confirm password"  name="confirm_password" value={formData.confirm_password}  onChange={(e) => handleChange(e)}  required /><br/>
        </Form.Group>  
      <Button type="submit" variant="primary">Save</Button> <Button type="button" onClick={forgotpassword} variant="primary">Forgot password</Button>
  
     </Form>
     </div>
    </div>
    </>
  );
}

export default Signup;