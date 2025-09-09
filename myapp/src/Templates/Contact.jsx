import React from 'react'
import axios from 'axios';
import { useState ,useEffect } from "react";

export default function Contact() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/trustdata/")
      .then((user) => setUsers(user.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1 align="center"className='mt-2'>Trust Details</h1>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user=>{
                return <tr>
                      <td>{user.trustname}</td>
                      <td>{user.email}</td>
                      <td>{user.contact}</td>
                  </tr>
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}
