import React, { useState } from 'react'
import '../Styles/Donate.css';
import axios from 'axios';

export default function Donate() {

  const donarname = React.useRef(null);
  const donaraddress = React.useRef(null);
  const donarcontact = React.useRef(null);
  const donationtype = React.useRef(null);
  const message = React.useRef(null);

  const [donarForm, setDonarForm] = useState({donarname:"",donaraddress:"",donarcontact:"",donationtype:"",message:""})

  const handleChange =(e)=>{
    console.log(e.target.value)
    setDonarForm({...donarForm,[e.target.name]: e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(donarForm.donarname==="" || donarForm.donaraddress==="" || donarForm.donarcontact==="" || donarForm.donationtype==="" || donarForm.message===""){
      alert("Please enter donar details!")
    }
    else{
      try {
        const response = await axios.post('http://127.0.0.1:8000/donardata/', donarForm, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Data posted successfully:', response.data);
        alert('Data send Successfully');
        setDonarForm({donarname:"",donaraddress:"",donarcontact:"",donationtype:"",message:""})
      } catch (error) {
        console.error('Error posting data:', error.response.data); // Improved error logging
      }
      
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
            <input className="input" type="text" name="donarname" value={donarForm.donarname} onChange={handleChange} required="" ref={donarname}/>
            <span>Full Name</span>
        </label>
            
    <label>
        <input className="input" type="text" name="donaraddress" value={donarForm.donaraddress} onChange={handleChange}  required="" ref={donaraddress}/>
        <span>Current Address</span>
    </label> 
        
    <label>
        <input className="input" name="donarcontact" value={donarForm.donarcontact} onChange={handleChange} type="tel" required="" ref={donarcontact}/>
        <span>Contact Number</span>
    </label>
    <button
        type="button"
        className="otp-btn"
    >
        Send OTP
    </button>
        <label> 
            <input
                className="input"
                name="otp"
                type="number"
                required=""
            />
            <span>Enter OTP</span>
        </label>

    <button
        type="button"
       
        className="otp-btn"
    >
        Verify OTP
    </button>
     <div class="select">
      <select name="donationtype" value={donarForm.donationtype} onChange={handleChange} className='select-options' ref={donationtype}>
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
