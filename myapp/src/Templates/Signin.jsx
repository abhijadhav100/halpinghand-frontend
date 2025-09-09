import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../Context/AuthContext';
import '../Styles/Signin.css';
import axios from 'axios';
export default function Signin() {

    const { login } = useAuth();
    const [loginForm, setLoginForm] = useState({email:"",password:""});

    const navigate = useNavigate();

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const email = React.useRef(null);
    // const password = React.useRef(null);

    const handleForm = (e)=>{
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }
     
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(loginForm.email==="" || loginForm.password===""){
            alert("Please enter valid details")
        }
        else{
                    await axios.post('http://127.0.0.1:8000/login/',loginForm)
                    .then((res)=>{
                        login();
                        localStorage.setItem('user', JSON.stringify(res.data.user));
                        alert(res.data.message+" Welcome "+res.data.user.trustname)
                        navigate('/dashboard')
                        setLoginForm({email:"",password:""})
                        console.log(res.data)
                    }).catch ((error)=> {
                        alert(error.response.data.error)
                        setLoginForm({email:"",password:""})
                        console.error('Error posting data:', error.response.data);
                    });             
        }
    }
    return (
        <div>
            <div className="container text-center mt-4 mb-0">
                <p className="fs-1">Trust Login</p>
            </div>
            <form className="form" >
                <p className="form-title">Login to your account</p>
                <div className="input-container">
                    <input type="email" name="email" value={loginForm.email} onChange={handleForm} placeholder="Enter email"/>
                </div>
                <div className="input-container">
                    <input type="password" name="password" value={loginForm.password} onChange={handleForm} placeholder="Enter password"/>
                </div>
                <button type="submit" onClick={handleSubmit} className="submit" >
                    Login
                </button>
                <div className='sign-up-text d-flex justify-content-center gap-2'> 
                  <p>Create Account</p>
                  <Link to="/signup" className='sing-up-link text-decoration-none text-danger'>Signup</Link>
                </div>
                
            </form>

        </div>
    )
}
