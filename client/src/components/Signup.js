import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'

function Signup() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const history=useHistory()

  const postData=(e)=>{
    e.preventDefault()
    fetch('http://localhost:5000/signup',{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        toast.error(data.error)
      }
      else{
        history.push('/signin')
        toast.success(data.message)
      }
    })
  }
  return <div className='signup-screen'>
      <ToastContainer />
      <div className="container">
         <div className='welcome-container'>
            <h1>Create</h1>
            <h1>Your</h1>
            <h1>Account</h1>
          </div> 
            <div className="screen">
                <div className="screen__content">
                    <h1>Sign Up</h1>
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <button className="button login__submit" onClick={(e)=>{postData(e)}}>
                            <span className="button__text">Sign Up Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                <Link to='/signin'><h4>Login</h4></Link>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
</div>
</div>
}

export default Signup

