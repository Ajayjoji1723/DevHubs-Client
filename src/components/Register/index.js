import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'
import axios from 'axios';



function Register() {
    const [fullname,setFullName] = useState('')
    const [email,setEmail] = useState('')
    const [mobile,setMobile] = useState('')
    const [skills,setSkills] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    let navigate = useNavigate()
    

    const userData = {
        fullname:fullname,
        email:email,
        mobile:mobile,
        skilss:skills,
        password:password,
        confirmPassword:confirmPassword
    }

    const [data,setData]= useState([])

    const onSubmitForm=e=>{
        e.preventDefault();
        if(fullname && email && mobile && skills && password && confirmPassword !== ''){
            axios.post('https://devhubs-server.onrender.com/register', userData)
            .then(response=>{
                setData(response.data)
                if(response.status === 200){
                    navigate("/registrationsuccess")   
                }
            })
            .catch(error=>{
                console.log(error.response.data) 
            })
        }else{
            alert('Enter Required details')
        }
        
       
    }
  return (
    <div className='register-container'>
        <Form className='form-container' onSubmit={onSubmitForm}>
            <Form.Group className="mb-1" controlId="fullname" onChange={(e)=>setFullName(e.target.value)} value={fullname}>
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter full name" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="email" onChange={(e)=>setEmail(e.target.value)} value={email}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-1" controlId="mobile" onChange={(e)=>setMobile(e.target.value)} value={mobile}>
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter mobile number" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="skills" onChange={(e)=>setSkills(e.target.value)} value={skills}>
                <Form.Label>Skills</Form.Label>
                <Form.Control type="text" placeholder="Enter skills" />
            </Form.Group>
            
            <Form.Group className="mb-1" controlId="password" onChange={(e)=>setPassword(e.target.value)} value={password}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-1" controlId="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
        <div>
            <img src="https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=900&t=st=1677759359~exp=1677759959~hmac=b71482252ffdb062a38e6f389666a6e4136ec1f962db1593f69f952df2f3108f" alt="register logo" className='reg-logo'/>
        </div>
    </div>
  );
}

export default Register;