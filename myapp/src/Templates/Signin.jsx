import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../AuthContext';
import '../Styles/Signin.css';
import axios from 'axios';
export default function Signin() {

    const { login } = useAuth();
    // const [loginForm, setLoginForm] = useState({email:"",password:""});

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const email = React.useRef(null);
    // const password = React.useRef(null);

    // const handleForm = (e)=>{
    //     setLoginForm({
    //         ...loginForm,
    //         [e.target.name]: e.target.value
    //     })
    // }
     
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(email==="" || password===""){
            alert("Please enter valid details")
            console.log('fill form')
        }
        else{
            await axios.post('http://localhost:5000/api/login',{email, password})
            .then(result=>{
                console.log(result)
                if(result.data==="success"){
                    alert('Login Successful')
                    login();
                    navigate('/dashboard')
                    setEmail('');
                    setPassword('')
                }
                else{
                    alert(result.data);
                    
                }
            }).catch(err=>{
                console.log(err)
            })
                
                
           

    //     // const data = await response.text();
    //     // console.log(data);

    //     // const request = await fetch('http://localhost:5000/api/login',{
    //     //     method:'POST',
    //     //     body: JSON.stringify(form),
    //     //     headers:{
    //     //         'Content-Type':'application/json'
    //     //     }
    //     // })
    //     // const data = await request.json();
    //     // console.log(data)
        }
    }
    return (
        <div>
            <div className="container text-center my-2">
                <p className="fs-1">Trust Login</p>
            </div>
            <form className="form" >
                <p className="form-title">Login to your account</p>
                <div className="input-container">
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                </div>
                <div className="input-container">
                    <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
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
