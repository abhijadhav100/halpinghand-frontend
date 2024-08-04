import React from "react";
import { useState ,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Styles/Signin.css';

export default function Signup() {

  const name = React.useRef(null);
  const email = React.useRef(null);
  const mobile = React.useRef(null);
  const password = React.useRef(null);
  // const conpassword = React.useRef(null);

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
    mobile:"",
    password: ""
  });
  
  const [conpassword, setConpassword] = useState('');
  const [nameMess ,setNameMess] = useState('');
  const [emailMess ,setEmailMess] = useState('');
  const [mobileMess, setMobileMess] = useState('');
  const [passMess ,setPassMess] = useState('');

  const nameRegex = /^[a-zA-Z\s]*$/;
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  const passRegex = /^(?:([A-Z])*([a-z])*(\d)*(\W)*){8,12}$/;
  const mobRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/;

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    });
  }

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userForm.name)
    if(userForm.name==="" || userForm.email==="" || userForm.mobile==="" || userForm.password==="" || conpassword===""){
         alert("Fill the data!")
        //  setUserForm({ name: "", email: "", password: "", conpassword: "" });
    }
    else if(userForm.password!==conpassword)
      {
        alert("Password does not match!")
      }
    else{
    const response = await fetch("http://localhost:5000/api", {
      method: "POST",
      body: JSON.stringify(userForm),
      headers: {
        "Content-Type": "application/json",
      }
    });
    const resData = await response.text();
    console.log(resData);
    alert('Register Successfully, Login your account!');
    setUserForm({ name: "", email: "", mobile:"", password: "", conpassword: "" });
    navigate('/signin')
   }
  }

  useEffect(()=>{
     if(nameRegex.test(userForm.name)){
       setNameMess('')
     }
     else{
       setNameMess('Name required only a-z or A-Z characters!')
     }
  },[userForm.name])

  useEffect(()=>{
    if(userForm.email==="" || emailRegex.test(userForm.email)){
       setEmailMess('')
    }
    else{
      setEmailMess('Please enter valid email address!')
    }
  },[userForm.email])

  useEffect(()=>{
    console.log(userForm.password)
    if(userForm.password==="" || passRegex.test(userForm.password)){
       setPassMess('')
    }
    else{
      setPassMess('Please enter strong password include Character, Symbol and Number!')
    }
  },[userForm.password])

  useEffect(()=>{
    if(userForm.mobile==="" || mobRegex.test(userForm.mobile)){
      setMobileMess('')
    }
    else{
      setMobileMess('Mobile no should be 10 digits only')
    }
  },[userForm.mobile])

  return (
    <div>
      {/* <p>{JSON.stringify(userForm)}</p> */}
      <form className="form">
        <p className="form-title">Trust Registration
        </p>
        <div className="input-container">
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={userForm.name}
            placeholder="Trust Name"
            ref={name}
          />
          {nameMess && <p style={{color:'red'}}>{nameMess}</p>}
        </div>
        <div className="input-container">
          <input
            type="email"
            onChange={handleChange}
            name="email"
            value={userForm.email}
            placeholder="Email"
            ref={email}
          />
          {emailMess && <p style={{color:'red'}}>{emailMess}</p>}
        </div>
        <div className="input-container">
          <input
            type="mobile"
            onChange={handleChange}
            name="mobile"
            value={userForm.mobile}
            placeholder="Contact"
            ref={mobile}
          />
          {mobileMess && <p style={{color:'red'}}>{mobileMess}</p>}
        </div>
        <div className="input-container">
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={userForm.password}
            placeholder="Password"
            ref={password}
          />
          {passMess && <p style={{color:'red'}}>{passMess}</p>}
        </div>
        <div className="input-container">
          <input
            type="password"
            onChange={(e)=>setConpassword(e.target.value)}
            name="conpassword"
            value={conpassword}
            placeholder="Confirm Password"
            // ref={conpassword}
          />
        </div>
        <button type="submit" onClick={handleSubmit} className="submit">
          Sign Up
        </button>
        <div className="sign-in-text d-flex justify-content-center gap-2">
          <p>Already have an account?</p>
          <Link to="/signin" className="singinlink text-decoration-none text-danger">
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}
