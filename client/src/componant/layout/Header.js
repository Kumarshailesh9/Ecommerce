import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiFlipkart } from "react-icons/si";
import { useAuth } from '../../context/auth.js';
import toast from 'react-hot-toast';

const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ''
    })
    localStorage.removeItem('auth');
    toast.success("Logout Successfully!")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/"><SiFlipkart /> Flipkart</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link text-white " to="/" end>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="/category">
                Category
              </NavLink>
            </li>
           
            {
              !auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/Register">
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-white" to="/Login">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <div className='mb-3'>

                <li className="nav-item">
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle text-white" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      {auth?.user.name}
                    </NavLink>
                    <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                      <li><NavLink  to = {`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className="dropdown-item bg-light text-dark" >Dashboard</NavLink></li>
                      <li><hr className="dropdown-divider" /></li>
                      <NavLink className="nav-link text-dark" onClick={handleLogout} to="/Login">
                        Logout
                      </NavLink>
                    </ul>
                  </li>
                </li>
                </div>
                
              )
            
            }
              <li className="nav-item">
              <NavLink className="nav-link text-white " to="/Error404">
                Cart (0)
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;




