import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


  return (
    <>
        
            
         
         <section className='rootSec'>
            <section id="left">

<h1>Career Management System </h1>
  <div>

    <div className='loginDiv'>
    <h1>Login</h1>
    </div>
    

  <div className='emailDiv'>
     <h4>Username/Email</h4>
      <input type="text" />
  </div>
    
    <div className ='passwordDiv'> 
    <h4>Password</h4>
    <input type="password" />
   
    </div>

    <p>Need to Sign Up <a href="">Click Here</a></p>

  </div>
  <button
    type="button"
    className="loginBtn"
  >
    Log in 
  </button>

            </section> 

            <section id='right'>
  <div>
    <h1>IMAGE</h1>
  </div>
            </section>

         </section>
  

    
    </>
  )
}

export default App
