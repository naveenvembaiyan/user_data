import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (

    <div className='navbar' >
                <h3>Logo</h3>
               <ul className='list'>
                    <li><a href="#">profile</a></li> 
                    <li><a href="#">Home</a></li> 
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li> 
                </ul>
              
            </div> 
  )
}

export default Navbar