import React, { useState } from 'react'
import '../Styles/VeterinaryFound.css'
import img1 from '../Images/veterinary1.jpg';

export default function VeterinaryFound() {
  return (
    <div className="vet-foundation">
      {/* Header Section */}
      <header className="vet-header">
        <h1 className="vet-title">Welcome to the Veterinary Foundation</h1>
        <p className="vet-tagline">
          Empowering animal welfare with compassion and innovation.
        </p>
        <img
          src={img1}
          alt="Foundation Banner"
          className="vet-banner"
        />
      </header>

      {/* Mission Section */}
      <section className="vet-section mission">
        <h2>Our Mission</h2>
        <p>
          We strive to ensure the well-being of animals by providing medical
          care, shelter, and advocacy. Our mission is to foster a world where
          animals are treated with respect and compassion.
        </p>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Mission"
          className="vet-image"
        />
      </section>

      {/* Services Section */}
      <section className="vet-section services">
        <h2>Our Services</h2>
        <div className="vet-services-grid">
          <div className="service">
            <img
              src="https://via.placeholder.com/150"
              alt="Medical Care"
              className="service-image"
            />
            <h3>Medical Care</h3>
            <p>Comprehensive veterinary services for injured and sick animals.</p>
          </div>
          <div className="service">
            <img
              src="https://via.placeholder.com/150"
              alt="Shelter"
              className="service-image"
            />
            <h3>Animal Shelter</h3>
            <p>A safe haven for abandoned and stray animals.</p>
          </div>
          <div className="service">
            <img
              src="https://via.placeholder.com/150"
              alt="Adoption"
              className="service-image"
            />
            <h3>Adoption</h3>
            <p>Finding loving homes for rescued animals.</p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="vet-section donation">
        <h2>Support Our Cause</h2>
        <p>
          Help us make a difference in the lives of animals by donating or
          volunteering your time.
        </p>
        <button className="donate-button">Donate Now</button><br/>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Donation"
          className="vet-image"
        />
      </section>

      {/* Contact Section */}
      <section className="vet-section contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or want to get involved? Reach out to us via email or
          phone.
        </p>
        <p>Email: contact@vetfoundation.org</p>
        <p>Phone: +1-800-ANIMALS</p>
        <img
          src="https://via.placeholder.com/600x300"
          alt="Contact"
          className="vet-image"
        />
      </section>
    </div>
  );
}
