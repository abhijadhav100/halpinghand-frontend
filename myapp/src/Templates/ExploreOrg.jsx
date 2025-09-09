import React from 'react'
import { Link } from 'react-router-dom'
import dogimg from '../Images/dogsimage.jpg';
import oldage from '../Images/oldage.jpg';
import sadboy from '../Images/sadboy.jpg';
import '../Styles/ExploreOrg.css';

export default function ExploreOrg() {
  return (
    <div className="album py-4 bg-body-secondary">
    <div className="container">
      <p className='fs-1'>Explore Organizations</p>
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
             <img src={dogimg} className='imgaebox' alt="images" />
            <div className="card-body">
              <p className='fs-2'>Veterinary Foundation</p>
              <p className="card-text">{'The Veterinary Foundation aims to support and advance animal health and welfare through various programs, research, and services. It serves as a hub for veterinary professionals, researchers, and the public to collaborate on initiatives that improve the well-being of animals and their integration into human lives.'.slice(0,110)+'....'}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <Link className="btn btn-sm btn-outline-secondary" to="/veterinary-foundation">View More{'>>'}</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={oldage} className='imgaebox' alt="images" />
            <div className="card-body">
              <p className='fs-2'>Old Age Home</p>
              <p className="card-text">{'Old age homes provide a safe and secure place for older adults who may not have other options. They can help seniors feel less isolated and lonely, which can have negative effects on their mental and physical health.'.slice(0,110)+'....'}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View More{'>>'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={sadboy} className='imgaebox' alt="images" />
            <div className="card-body">
              <p className='fs-2'>Orphanage</p>
              <p className="card-text">{'An orphanage is an institution that takes care of orphans. An orphanage will care for tiny babies and also older children without parents. Orphanages care for children until they can be placed in homes and adopted.'.slice(0,110)+'....'}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View More{'>>'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
