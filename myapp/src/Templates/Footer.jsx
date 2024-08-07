import React from 'react'
import '../Styles/Footer.css';
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <footer className="footer py-3">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Home</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Features</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">Pricing</Link></li>
        <li className="nav-item"><Link to="#" className="nav-link px-2 text-body-secondary">FAQs</Link></li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 HelpingHands</p>
    </footer>
    </>
  )
}
