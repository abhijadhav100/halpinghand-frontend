import React, { useEffect, useState } from 'react'
import '../Styles/Dashboard.css';

export default function Dashboard() {

  const [trust, setTrust] = useState([]);

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
        setTrust(JSON.parse(userData));
    } else {
        alert("Please log in first.");
        window.location.href = '/login';
    }
}, []);


  return (
    <div className="container tablecont mt-5">
     <h1 className='mx-auto'>Welcome {trust.trustname}</h1>
    </div>
  )
}
