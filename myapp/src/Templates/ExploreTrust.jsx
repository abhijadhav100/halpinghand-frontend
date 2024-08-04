import React from 'react'
import dogimg from '../Images/dogsimage.jpg';
import oldage from '../Images/oldage.jpg';
import sadboy from '../Images/sadboy.jpg';
import '../Styles/ExploreTrust.css';

export default function ExploreTrust() {
  return (
    <div className="album py-5 bg-body-secondary">
    <div className="container">

      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
        <div className="col">
          <div className="card shadow-sm">
             <img src={dogimg} className='imgaebox' alt="images" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={oldage} className='imgaebox' alt="images" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img src={sadboy} className='imgaebox' alt="images" />
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
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
