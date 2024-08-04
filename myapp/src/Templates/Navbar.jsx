import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import '../Styles/Navbar.css';
import { useAuth } from '../AuthContext';


export default function Navbar() {

  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async (e)=>{
    e.preventDefault();
     logout(navigate);
  }

  useEffect(() => {
    const handleLinkClick = () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        new window.bootstrap.Collapse(navbarCollapse).hide();
      }
    };

    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.addEventListener('click', handleLinkClick));

    const button = document.querySelectorAll('.btn');
    button.forEach(butt => butt.addEventListener('click', handleLinkClick));

    const brandName = document.querySelectorAll('.navbar-brand');
    brandName.forEach(brand => brand.addEventListener('click', handleLinkClick));

    // Cleanup function to remove event listeners
    return () => {
      links.forEach(link => link.removeEventListener('click', handleLinkClick));
      button.forEach(butt => butt.removeEventListener('click', handleLinkClick));
      brandName.forEach(brand => brand.removeEventListener('click', handleLinkClick));
    };
  }, []);
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid mx-1">
    <Link className="navbar-brand" to="/">HelpingHands</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-5">
        {isAuthenticated?(
          <>
           <li className="nav-item mx-lg-3">
             <Link className="nav-link" aria-current="page" to="/dashboard">Dashboard</Link>
          </li>
          </>
        ):(
          <>
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item mx-lg-3">
          <Link className="nav-link" to="/donate">Donate</Link>
        </li>
        </>
        )}
      </ul>
        <div className="ms-auto">
          {isAuthenticated?(
            <>
              <Link className="btn btn-outline-success" onClick={handleLogout}>Logout</Link>
            </>
          ):(
            <>
            <Link className="btn btn-outline-success" to="/signin">Login</Link>
            </>
          )}
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}
