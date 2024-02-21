import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
  <div className="container-fluid">
  <Link to={"/"} className="navbar-brand text-light" href="#" > Lucky solution : The Loan Holder Information Management Systems</Link>
   <Link to={"/holder"} className="btn btn-warning rounded-0">Add Loan Holder </Link> 
  </div>
 
</nav>
  )
}

export default Navbar
