import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
export default function Navbar() {
  return (
    <div>
     <nav className="navbar">
<div className="container-fluid">
   <Link className="navbar-brand "to="/"> <img src={logo} alt="" style={{width:"175px", height:'55px', alignContent:'center'}} /> </Link>
  <div className="dropdown">
<button className="btn btn-info dropdown-toggle my-0 mx-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
Category
</button>
   <ul className="dropdown-menu dropdown-menu-dark">
   <li> <Link className="dropdown-item "to="/"><b>General</b> </Link></li>
   <li> <Link className="dropdown-item "to="/entertainment"><b>Entertainment</b> </Link></li>
   <li> <Link className="dropdown-item "to="/health"><b>Health</b> </Link></li>
   <li> <Link className="dropdown-item "to="/science"><b>Science</b> </Link></li>
   <li> <Link className="dropdown-item "to="/sports"><b>Sports</b> </Link></li>
   <li> <Link className="dropdown-item "to="/tecnology"><b>Tecnology</b> </Link></li>
 </ul>
</div>
</div>
</nav>
</div>
  )
}
