import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Dashboard() {

  const [donar, setDonar] = useState([]);

  useEffect(()=>{
     axios.get('http://localhost:5000/api/donardata')
     .then(donars=>setDonar(donars.data))
     .catch(err=>console.log(err))
  },[])


  return (
    <div className="container mt-5">
       <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">Sr.No</th> */}
              <th scope="col">Donar Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Donation Type</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
          {
            donar.map(donars=>{
               return <tr>
                    <td>{donars.dname}</td>
                    <td>{donars.address}</td>
                    <td>{donars.mobile}</td>
                    <td>{donars.dtype}</td>
                    <td>{donars.message}</td>
                </tr>
            })
           }
          </tbody>
        </table>
    </div>
  )
}
