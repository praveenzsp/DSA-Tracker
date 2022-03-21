import React, {useContext, useEffect, useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {Link, useHistory} from 'react-router-dom'
import './Arrays.css'
import {Button,ProgressBar} from 'react-bootstrap'
import {UserContext} from '../App'
import Navbar from './Navbar'

function Arrays() { //xxxxxx
  const [arrayQuestions,setArrayQuestions]=useState([]) //xxxxxx
  const history=useHistory()

  const [state,dispatch]=useContext(UserContext)
  const user=JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    fetch(`http://localhost:5000/home/${user._id}`,{
      method:'get',
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt"),
        "Content-Type":"application/json"
      }
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        toast.error(data.error)
      }
      else{
        setArrayQuestions(data.all450Questions[0].questions) //xxxxxxxxxxx data.all450Questions[i] is the ith object in the whole big 450 questions array  
      }
    })
  },[])






  const handleMarkAsDone=(e,questionId)=>{
    e.preventDefault()
    dispatch({type:'ARRAY-ADD',payload:[...state.solved_in_array,questionId]})//xxxxxxxxxxxxxx
    arrayQuestions[questionId-1].Done=true//xxxxxxxxxxxx
    fetch(`http://localhost:5000/add_to_solved_in_array/${user._id}`,{//xxxxxxxxxxxxxx
      method:"put",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt"),
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        questionId:questionId
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        toast.error('Something went wrong')
      } 
      else{
        toast.success('Solved Successfully 👍')
      }
    })
  }


  const handleMarkAsUndone=(e,questionId)=>{
    e.preventDefault()
    state.solved_in_array=state.solved_in_array.filter(item=>item!==questionId)//xxxxxxxxxxxxxx
    dispatch({type:'ARRAY-DELETE',payload:[...state.solved_in_array]})//xxxxxxxxxxxxxxxxx
    arrayQuestions[questionId-1].Done=false//xxxxxxxxxxxxxx
    fetch(`http://localhost:5000/remove_from_solved_in_array/${user._id}`,{//xxxxxxxxxxxxxxx
      method:"put",
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt"),
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        questionId:questionId
      })
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.error){
        toast.error('Something went wrong')
      } 
      else{
        toast.warning('Problem yet to be solved 😪')
      }
    })
  }

  const countSolved=()=>{
    let solved=0
    arrayQuestions.map(item=>{//xxxxxxxxxxxxxx
      if(item.Done){
        solved++
      }
    })
    return solved
  }






  return (
    <div className='Home-arrays'>
      <ToastContainer/>
      <h1>Topic : Arrays</h1>
      <div className="progress-arrays">
        <div className="progress-value-arrays" style={{width:[...new Set(state.solved_in_array)].length/arrayQuestions.length*100+"%"}}></div>  
      </div>
      <h3 id='hello'>{state.solved_in_array.length}/{arrayQuestions.length} solved</h3>
          {
            arrayQuestions.map(item=>{
              return(
                  <div className="card" key={item.question_no}>
                    <div className="box">
                      <div className="content">
                        <h2>{item.question_no}</h2>
                        <h3>{item.Topic}</h3>
                        <p id={item.difficulty}>{item.difficulty}</p>
                        <p>{item.Problem}</p>
                        <h6>Status: {state.solved_in_array.includes(item.question_no)?'Completed ✔️':'Pending ❌'}</h6>
                        <div className='button-grp'>
                        <a href={item.URL} id='Button1' target='_blank' >View Problem</a>
                        <a onClick={e=>history.push('/editor')}>Code Now</a>
                        <Button id='Button2' onClick={(e)=>state.solved_in_array.includes(item.question_no)?handleMarkAsUndone(e,item.question_no):handleMarkAsDone(e,item.question_no)}>{state.solved_in_array.includes(item.question_no)?'Mark As Undone':'Mark As Done'}</Button>
                        </div>
                      </div>
                    </div>
                  </div>
              )
            })
          }       
  </div>
)
}

export default Arrays//xxxxxxxxxxxxxxx