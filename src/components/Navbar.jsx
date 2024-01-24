import React, { useContext, useState } from "react"
import './components.css'
import { Link } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import logo from '../imdb.png'
import { MovieContext } from "./SearchContext";
function Navbar(){
    const {setSearch} = useContext(MovieContext)
    return(
        <nav className="navbar">
            <div className="nav-heading">
             <Link to='/'><img className="logo" src={logo} alt="" /></Link>
            </div>
            <form>
              <input type="text"  placeholder='Search movies...' onChange={((e)=>setSearch(e.target.value))} />
            <Link to='/search'><button><RiSearch2Line size={18} /></button></Link> 
            </form>
            <div className="nav-links">
           <li><Link to ="/" style={{color: '#fff'}}>Home</Link></li>
           <li><Link to = "/popular" style={{color: '#fff'}}>Popular</Link></li>
           <li><Link to = "/toprated" style={{color: '#fff'}}>Top Rated</Link></li>
           </div>
        </nav>
    )
}

export default Navbar;