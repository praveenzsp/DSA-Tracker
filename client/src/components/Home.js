import React,{useState,useEffect, useContext} from 'react'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import {UserContext} from '../App'

function Home() {
  const [state,dispatch]=useContext(UserContext)
  const user=JSON.parse(localStorage.getItem('user'))

  const overall_solved=state.solved_in_array.length+state.solved_in_string.length+state.solved_in_linked_list.length+state.solved_in_binary_trees.length+state.solved_in_bst.length+state.solved_in_greedy.length+state.solved_in_recursion.length+state.solved_in_stacks_and_queues.length+state.solved_in_graph.length+state.solved_in_trie.length+state.solved_in_dp.length+state.solved_in_binary_search.length

  // useEffect(()=>{
  //   fetch(`http://localhost:5000/home/${user._id}`,{
  //     method:'get',
  //     headers:{
  //       "Authorization":"Bearer "+localStorage.getItem("jwt"),
  //       "Content-Type":"application/json"
  //     }
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     if(data.error){
  //       toast.error(data.error)
  //     }
  //     else{
  //       console.log(data.all450Questions) //xxxxxxxxxxx data.all450Questions[i] is the ith object in the whole big 450 questions array  
  //       console.log(overall_solved.length)
  //     }
  //   })
  // },[user._id])

  

  return (
      <div className='Home'>
        <Navbar/>
        <h1>Welcome to DSA Tracker</h1>
        <h3>Your gateway to crack Data Structures and Algorithms</h3>
        <div className="progress-overall">
            <div className="progress-value" style={{width:(overall_solved/184*100)+"%"}}></div>  
        </div>
        <h6 id='overall-text'>{Math.round(overall_solved/184*100)}% solved</h6>

        <div className="container 1">

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>01</h2>
                  <h3>Arrays</h3>
                  <div className="progress">
                    <div className="progress-value" style={{width:[...new Set(state.solved_in_array)].length/28*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_array)].length/28*100)}% solved</h6>
                  <Link to='/arrays'>Solve Now</Link>
                </div>
              </div>
            </div>

            
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>02</h2>
                  <h3>Strings</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_string)].length/12*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_string)].length/12*100)}% solved</h6>
                  <Link to='/string'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>03</h2>
                  <h3>Recursion</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_recursion)].length/12*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_recursion)].length/12*100)}% solved</h6>
                  <Link to='/recursion'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>04</h2>
                  <h3>Binary Search</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_binary_search)].length/8*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_binary_search)].length/8*100)}% solved</h6>
                  <Link to='/binary-search'>Solve Now</Link>
                </div>
              </div>
            </div>


        </div>
        <div className="container 2">

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>05</h2>
                  <h3>Linked List</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_linked_list)].length/14*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_linked_list)].length/14*100)}% solved</h6>
                  <Link to='/linked-list'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>06</h2>
                  <h3>Binary Trees</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_binary_trees)].length/32*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_binary_trees)].length/32*100)}% solved</h6>
                  <Link to='/binary-trees'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>07</h2>
                  <h3>BST</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_bst)].length/15*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_bst)].length/15*100)}% solved</h6>
                  <Link to='/bst'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>08</h2>
                  <h3>Greedy</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_greedy)].length/6*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_greedy)].length/6*100)}% solved</h6>
                  <Link to='/greedy'>Solve Now</Link>
                </div>
              </div>
            </div>
        </div>

        <div className="container 3">

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>09</h2>
                  <h3>Stacks | Queues</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_stacks_and_queues)].length/17*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_stacks_and_queues)].length/17*100)}% solved</h6>
                  <Link to='/stacks-queues'>Solve Now</Link>
                </div>
              </div>
            </div>



            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>10</h2>
                  <h3>Graphs</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_graph)].length/18*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_graph)].length/18*100)}% solved</h6>
                  <Link to='/graph'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>11</h2>
                  <h3>Tries</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_trie)].length/7*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_trie)].length/7*100)}% solved</h6>
                  <Link to='/trie'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>12</h2>
                  <h3>Dynamic Programming</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_dp)].length/15*100+"%"}}></div>
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_dp)].length/15*100)}% solved</h6>
                  <Link to='/dp'>Solve Now</Link>
                </div>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Home

// import React from 'react'

// function Home() {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home