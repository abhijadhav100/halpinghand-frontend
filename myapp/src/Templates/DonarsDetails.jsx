import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Styles/DonarsDetails.css'

export default function DonarsDetails() {

    const [donar, setDonar] = useState([]);

    useEffect(()=>{
       axios.get('http://127.0.0.1:8000/donardata/')
       .then(donars=>setDonar(donars.data))
       .catch(err=>console.log(err))
    },[])


  return (
    <div className="container tablecont mt-5">
       <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">Sr.No</th> */}
              <th scope="col">Donar Name</th>
              <th scope="col">Address</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Donation Type</th>
              <th scope="col">Message</th>
              <th scope="col">Date of Post</th>
            </tr>
          </thead>
          <tbody>
          {
            donar.map(donars=>{
               return <tr>
                    <td>{donars.donarname}</td>
                    <td>{donars.donaraddress}</td>
                    <td>{donars.donarcontact}</td>
                    <td>{donars.donationtype}</td>
                    <td>{donars.message}</td>
                    <td>{donars.posted_date}</td>
                </tr>
            })
           }
          </tbody>
        </table>
    </div>
  )
}
