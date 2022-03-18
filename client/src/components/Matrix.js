import React, {useContext, useEffect, useState} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import {Link,useHistory} from 'react-router-dom'
import './Arrays.css'
import {Button,ProgressBar} from 'react-bootstrap'
import {UserContext} from '../App'

function Matrix() { //xxxxxx
  const [matrixQuestions,setMatrixQuestions]=useState([]) //xxxxxx
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
        setMatrixQuestions(data.all450Questions[1].questions) //xxxxxxxxxxx data.all450Questions[i] is the ith object in the whole big 450 questions array  
      }
    })
  },[])






  const handleMarkAsDone=(e,questionId)=>{
    e.preventDefault()
    dispatch({type:'MATRIX-ADD',payload:[...state.solved_in_matrix,questionId]})//xxxxxxxxxxxxxx
    matrixQuestions[questionId-1].Done=true//xxxxxxxxxxxx
    fetch(`http://localhost:5000/add_to_solved_in_matrix/${user._id}`,{//xxxxxxxxxxxxxx
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
    state.solved_in_matrix=state.solved_in_matrix.filter(item=>item!==questionId)//xxxxxxxxxxxxxx
    dispatch({type:'MATRIX-DELETE',payload:[...state.solved_in_matrix]})//xxxxxxxxxxxxxxxxx
    matrixQuestions[questionId-1].Done=false//xxxxxxxxxxxxxx
    fetch(`http://localhost:5000/remove_from_solved_in_matrix/${user._id}`,{//xxxxxxxxxxxxxxx
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
    matrixQuestions.map(item=>{//xxxxxxxxxxxxxx
      if(item.Done){
        solved++
      }
    })
    return solved
  }






  return (
    <div className='Home-arrays'>
      <ToastContainer/>
      <h1>Topic : Matrices</h1>
      <div className="progress-arrays">
        <div className="progress-value-arrays" style={{width:[...new Set(state.solved_in_matrix)].length/matrixQuestions.length*100+"%"}}></div>  
      </div>
      <h3 id='hello'>{state.solved_in_matrix.length}/{matrixQuestions.length} solved</h3>
          {
            matrixQuestions.map(item=>{
              return(
                  <div className="card" key={item.question_no}>
                    <div className="box">
                      <div className="content">
                        <h2>{item.question_no}</h2>
                        <h3>{item.Topic}</h3>
                        <p>{item.Problem}</p>
                        <h6>Status: {state.solved_in_matrix.includes(item.question_no)?'Completed ✔️':'Pending ❌'}</h6>
                        <div className='button-grp'>
                        <a href={item.URL} id='Button1'>Solution</a>
                        <a onClick={e=>history.push('/editor')}>Code Now</a>
                        <Button id='Button2' onClick={(e)=>state.solved_in_matrix.includes(item.question_no)?handleMarkAsUndone(e,item.question_no):handleMarkAsDone(e,item.question_no)}>{state.solved_in_matrix.includes(item.question_no)?'Mark As Undone':'Mark As Done'}</Button>
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

export default Matrix//xxxxxxxxxxxxxxx