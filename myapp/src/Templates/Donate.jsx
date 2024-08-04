import React, { useState } from 'react'
import '../Styles/Donate.css';
import axios from 'axios';

export default function Donate() {

  const dname = React.useRef(null);
  const address = React.useRef(null);
  const mobile = React.useRef(null);
  const dtype = React.useRef(null);
  const message = React.useRef(null);

  const [donarForm, setDonarForm] = useState({dname:"",address:"",mobile:"",dtype:"",message:""})

  const handleChange =(e)=>{
    console.log(e.target.value)
    setDonarForm({...donarForm,[e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(donarForm.dname==="" || donarForm.address==="" || donarForm.mobile==="" || donarForm.dtype==="" || donarForm.message===""){
      alert("Please enter donar details!")
    }
    else{
      const response = await axios.post('http://localhost:5000/api/donardata',donarForm);
      alert(response.data)
      setDonarForm({dname:"",address:"",mobile:"",dtype:"",message:""})
    }
    }
    

  return (
    <>
    <div className="container paragraph mt-sm-0 my-lg-4 p-3 bg-body-secondary">
      <span className='fs-1'>Why should we donate?</span>
      <p>Donating to charity helps address critical needs in our communities and around the world. 
        Your contribution can provide food, shelter, education, and medical care to those who need it most, significantly improving their quality of life.
        Donating to charity allows you to support causes that are close to your heart. Whether it’s environmental conservation, animal welfare, medical research, 
        or education, your donation can help advance the work of organizations dedicated to these causes.
        </p>
    </div>
    <div className='container mt-5'>
      <p className='fs-2 text-center'>Details about Donation</p>
    <form className="form donate-form mt-0">
    
        <label>
            <input className="input" type="text" name="dname" value={donarForm.dname} onChange={handleChange} required="" ref={dname}/>
            <span>Full Name</span>
        </label>
            
    <label>
        <input className="input" type="text" name="address" value={donarForm.address} onChange={handleChange}  required="" ref={address}/>
        <span>Current Address</span>
    </label> 
        
    <label>
        <input className="input" name="mobile" value={donarForm.mobile} onChange={handleChange} type="tel" required="" ref={mobile}/>
        <span>Contact Number</span>
    </label>
     <div class="select">
      <select name="dtype" value={donarForm.dtype} onChange={handleChange} className='select-options' ref={dtype}>
         <option value="" disabled selected>-----What you can donate-----</option>
         <option value="Foods">Food</option>
         <option value="Cloths">Cloths</option>
         <option value="Grocery">Grocery</option>
         <option value="Medicines">Medicines</option>
         <option value="Blood">Blood</option>
      </select>
   </div>
    <label>
        <textarea className="input01" name="message" value={donarForm.message} onChange={handleChange} rows="3" required="" ref={message}></textarea>
        <span>Message</span>
    </label>
    
    <button type="submit" onClick={handleSubmit} className="fancy">
      <span className="top-key"></span>
      <span className="text">submit</span>
      <span className="bottom-key-1"></span>
      <span className="bottom-key-2"></span>
    </button>
</form>
</div>
</>
  )
}
