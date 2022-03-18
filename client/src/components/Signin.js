import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Signin.css'


function Signin() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory()

    const postData=(e)=>{
        e.preventDefault()
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            toast.warning('Invalid email')
            return
        }
        fetch('http://localhost:5000/signin',{
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
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                toast.success('SignIn success')
                history.push('/home')
            }
         })
     }


  return (
    <div className='signin-screen'>
      <ToastContainer />
      <div className="container">
         <div className='welcome-container'>
            <h1>Welcome</h1>
            <h1>To</h1>
            <h1>DSA Tracker</h1>
          </div> 
            <div className="screen">
                <div className="screen__content">
                    <h1>Sign In</h1>
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
                        </div>
                        <button className="button login__submit" onClick={(e)=>{postData(e)}}>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                <Link to='/signup'><h4>Create Account</h4></Link>
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
  )
}

export default Signin;




// import React from 'react'

// function Signin() {
//   return (
//     <div>Signin</div>
//   )
// }

// export default Signin
