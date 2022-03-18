import React,{useContext} from 'react'
import './Navbar.css'
import {UserContext} from '../App'
import {useHistory} from 'react-router-dom'

function Navbar() {
  const history=useHistory()
  const [state,dispatch]=useContext(UserContext)
    const handleLogout=(e)=>{
        e.preventDefault()
        dispatch({type:'CLEAR'})
        localStorage.clear()
        console.log('Logged out')
        history.push('/signin')
    }
  return (
    <div className='Navbar'>
      <h3>DSA Tracker</h3>
      <button className='nav-button' onClick={(e)=>handleLogout(e)}>Logout</button>
    </div>
    )
}

export default Navbar