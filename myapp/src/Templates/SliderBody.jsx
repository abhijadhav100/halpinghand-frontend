import React from 'react'
import img1 from '../Images/image1.jpg';
import img2 from '../Images/image2.jpg';
import img3 from '../Images/image3.jpg';
import img5 from '../Images/image5.jpg';
import img4 from '../Images/image4.jpg';
import img6 from '../Images/image8.jpg';
import img7 from '../Images/image7.jpg';
import '../Styles/SliderBody.css';
import ExploreTrust from './ExploreTrust';

export default function SliderBody() {
  return (
    <>
    <div className='container-extend'>
      <div id="carouselExampleAutoplaying" className="carousel slide d-lg-none" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
           <img src={img1} className="slider-img d-block w-100" alt="Children image"/>
          </div>
          <div className="carousel-item">
            <img src={img2} className="slider-img d-block w-100" alt="Children image"/>
          </div>
         <div className="carousel-item">
            <img src={img3} className="slider-img d-block w-100" alt="Children image"/>
         </div>
         <div className="carousel-item">
            <img src={img4} className="slider-img d-block w-100" alt="Children image"/>
         </div>
         <div className="carousel-item">
            <img src={img6} className="slider-img d-block w-100" alt="Children image"/>
         </div>
         <div className="carousel-item">
            <img src={img7} className="slider-img d-block w-100" alt="Children image"/>
         </div>
        </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
        </button>
       <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
       </button>
      </div>
      <div className="img d-none d-lg-block">
        <p className='d-block'>"Give charity without delay, for it stands in the way of calamity"</p>
        <img src={img5} className="image1 d-block w-100" alt="" />
      </div>
    </div>
    <ExploreTrust/>
  </>
  )
}
