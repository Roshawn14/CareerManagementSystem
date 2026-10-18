import React from 'react'
import  './Pages/Stylesheets/Sidebar.css'
import logo from '../assets/CareerManagelogo.png'; 

import { sidebarData } from './sidebarData'

function Sidebar() {
  return (

  
    <div className='sidebar'>

      <div className='logo'>
      <img src={logo} alt="Company Logo" />
        <p>Apply. Track. Suceed.</p>
      </div>
      <ul className='sidebarList'>

      {sidebarData.map((value, key)=>{
        return(

            <li key = {key} className='row' onClick={()=>{window.location.pathname = value.link}} >
            <div id='icon'>{value.icon}</div>
            <div id='title'>{value.title}</div>
          </li>

         
           
        )
      })}
       </ul>
    </div>

   
  )
}

export default Sidebar