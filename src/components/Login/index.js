import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';


function Login(){
    let navigate = useNavigate()
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const userData = {
        email:email,
        password: password
    }

    const onSubmitBtn = e =>{
        e.preventDefault();
        if(email && password !== ''){
            axios.post("https://devhubs-server.onrender.com/login/", userData)
            .then(response=>{
                if(response.status === 200){
                    let jwtToken = response.data.token
                    localStorage.setItem('token', jwtToken)
                    navigate("/home")
                }
            })
            .catch(error=>{
                console.log(error.response.data)
                window.alert(error.response.data)
            })
        }else{
            window.alert("Please enter req details")
        }
    }

    return(
        <div className='login-container'>
            <div>
            <Form onSubmit={onSubmitBtn}>
                <p>Doesn't have an account yet? <Link to="/register">Sign Up</Link></p>
                <Form.Group className="mb-3" controlId="email" onChange={(e)=>setEmail(e.target.value)}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password" onChange={(e)=>setPassword(e.target.value)}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </div>
            <img src="https://thumbs.dreamstime.com/b/login-businesswoman-hand-pressing-virtual-button-virtual-screen-44615280.jpg" alt='login-img' className='login-img'/>
        </div>
    )
}

export default Login;