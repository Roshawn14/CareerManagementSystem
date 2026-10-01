import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {


    const [isLogin, setIsLogin] = useState(true);
    
  
  return (
     
         <section className='rootSec'>
            <section id="left">


                  {isLogin ? (<>
                    <div>
                      <div className='loginDiv'>
                        <h2>Career Management System </h2>
                        <h1>Login</h1>
                      </div>
              

                    <div className='formField'>
                      <h4>Username/Email</h4>
                       <input type="text" />
                    </div>
              
                    <div className ='formField'> 
                      <h4>Password</h4>
                      <input type="password" />
          
                    </div>

                    <p>  To Sign up <button className="link-button" onClick={() => setIsLogin(false) }>
                        Click Here
                        </button>
                    </p>

                    </div>
                      <button
                      type="button"
                      className="loginBtn"
                              >
                        Log in 
                      </button>

            </>):(
              <>
               <div className='container'>
                  <div className='loginDiv'>
                     <h2>Career Management System </h2>
                    <h1>Sign Up</h1>
                  </div>
              

                  <div className ='formField'> 
                    <h4>First Name</h4>
                    <input type="text" />
                  </div>

                  <div className ='formField'> 
                    <h4>Last Name</h4>
                    <input type="text" />
                  </div>

                  <div className='formField'>
                    <h4>Username/Email</h4>
                    <input type="text" />
                  </div>
              
                  <div className ='formField'> 
                    <h4>Password</h4>
                    <input type="password" />
                  </div>

                  <div className ='formField'> 
                    <h4> Confirm Password</h4>
                    <input type="password" />
                  </div>

                  <p> Already have a account? 
                    <button className="link-button" onClick={() => setIsLogin(true)}> Click here</button>
                  </p>

                  <button
                      type="button"
                      className="signUpBtn"
                              >
                      Sign Up 
                    </button>

                  </div>
                  
                        
                        </>
                      ) }

       

            </section> 
            <section id='right'>
  <div>
    <h1>IMAGE</h1>
  </div>
            </section>

         </section> 
  
                    
  )

}


export default App
