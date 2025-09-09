import React from "react";
import '../Styles/About.css'

export default function About() {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Welcome to HelpingHands - Your trusted partner in making a difference!</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a team of dedicated professionals committed to empowering charitable organizations by leveraging technology.
          Our mission is to make managing trust information, donations, and volunteer participation seamless and efficient.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To create a centralized hub where trusts can showcase their impact and inspire generosity by sharing their stories with a global audience.</p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <ul>
          <li><strong>Transparency:</strong> Ensure all data related to donations, trust activities, and operations are accessible and reliable.</li>
          <li><strong>Efficiency:</strong> Provide tools to manage donor information, trust bios, and operations smoothly.</li>
          <li><strong>Empowerment:</strong> Enable donors to contribute to causes they care about confidently.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Key Features</h2>
        <ul>
          <li>Trust Management: Comprehensive dashboards for managing trust profiles, including name, bio, and image uploads.</li>
          <li>Donor Collaboration: Securely store and manage donor information, ensuring smooth communication.</li>
          <li>OTP Authentication: Enhance security with OTP-based login and mobile authentication for all users.</li>
          <li>Real-Time Updates: Allow trusts to keep their contributors informed about ongoing projects.</li>
          <li>Image Uploads: Easily upload and display visual content related to trust activities.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Why Choose Us</h2>
        <p>
          Our platform is user-friendly, secure, and impact-driven. With HelpingHands, you can confidently showcase your initiatives 
          and attract meaningful contributions.
        </p>
      </section>

      <section className="about-section">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Sign Up:</strong> Create an account to manage trust information.</li>
          <li><strong>Build Trust Profile:</strong> Add key details, including bio and images, to introduce your organization to the world.</li>
          <li><strong>Donor Interaction:</strong> Engage with donors through updates and feedback mechanisms.</li>
          <li><strong>Secure Login:</strong> Use OTP-based authentication to access personalized dashboards.</li>
        </ol>
      </section>

      <section className="about-section">
        <h2>Our Team</h2>
        <p>
          We are proud to have a passionate team of developers, designers, and visionaries who work tirelessly to bring this platform to life. 
          Together, we aim to redefine the way charitable organizations connect with their supporters.
        </p>
      </section>

      <footer className="about-footer">
        <h2>Contact Us</h2>
        <p><strong>Email:</strong> support@helpinghands.com</p>
        <p><strong>Phone:</strong> +1-800-555-1234</p>
      </footer>
    </div>
  );
}