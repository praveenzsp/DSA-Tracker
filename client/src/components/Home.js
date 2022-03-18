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

  const overall_solved=state.solved_in_array.length+state.solved_in_backtracking.length+state.solved_in_binary_trees.length+state.solved_in_bit_manipulation.length+state.solved_in_bst.length+state.solved_in_dp.length+state.solved_in_graph.length+state.solved_in_greedy.length+state.solved_in_heap.length+state.solved_in_linked_list.length+state.solved_in_matrix.length+state.solved_in_search_and_sort.length+state.solved_in_stacks_and_queues.length+state.solved_in_string.length+state.solved_in_trie.length

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
        console.log(data.all450Questions) //xxxxxxxxxxx data.all450Questions[i] is the ith object in the whole big 450 questions array  
      }
    })
  },[user._id])

  

  return (
      <div className='Home'>
        <Navbar/>
        <h1>Welcome to DSA Tracker</h1>
        <h3>Your gateway to crack Data Structures and Algorithms</h3>
        <div className="progress-overall">
            <div className="progress-value" style={{width:(overall_solved/450*100)+"%"}}></div>  
        </div>
        <h6 id='overall-text'>{Math.round(overall_solved/450*100)}% solved</h6>
        <div className="container 1">
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>01</h2>
                  <h3>Arrays</h3>
                  <div className="progress">
                    <div className="progress-value" style={{width:[...new Set(state.solved_in_array)].length/36*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_array)].length/36*100)}% solved</h6>
                  <Link to='/arrays'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>02</h2>
                  <h3>Matrices</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_matrix)].length/10*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_matrix)].length/10*100)}% solved</h6>
                  <Link to='/matrix'>Solve Now</Link>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>03</h2>
                  <h3>Strings</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_string)].length/43*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_string)].length/43*100)}% solved</h6>
                  <Link to='/string'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>04</h2>
                  <h3>Search | Sort</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_search_and_sort)].length/36*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_search_and_sort)].length/36*100)}% solved</h6>
                  <Link to='/search-sort'>Solve Now</Link>
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
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_linked_list)].length/36*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_linked_list)].length/36*100)}% solved</h6>
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
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_binary_trees)].length/35*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_binary_trees)].length/35*100)}% solved</h6>
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
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_bst)].length/22*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_bst)].length/22*100)}% solved</h6>
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
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_greedy)].length/35*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_greedy)].length/35*100)}% solved</h6>
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
                  <h3>Backtracking</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_backtracking)].length/19*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_backtracking)].length/19*100)}% solved</h6>
                  <Link to='/backtracking'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>10</h2>
                  <h3>Stacks | Queues</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_stacks_and_queues)].length/38*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_stacks_and_queues)].length/38*100)}% solved</h6>
                  <Link to='/stacks-queues'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>11</h2>
                  <h3>Heap</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_heap)].length/18*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_heap)].length/18*100)}% solved</h6>
                  <Link to='/heap'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>12</h2>
                  <h3>Graphs</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_graph)].length/44*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_graph)].length/44*100)}% solved</h6>
                  <Link to='/graph'>Solve Now</Link>
                </div>
              </div>
            </div>
        </div>
        <div className="container 4">
            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>13</h2>
                  <h3>Tries</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_trie)].length/6*100+"%"}}></div>  
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_trie)].length/6*100)}% solved</h6>
                  <Link to='/trie'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>14</h2>
                  <h3>Dynamic Programming</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_dp)].length/60*100+"%"}}></div>
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_dp)].length/60*100)}% solved</h6>
                  <Link to='/dp'>Solve Now</Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="box">
                <div className="content">
                  <h2>15</h2>
                  <h3>Bit Manipulation</h3>
                  <div className="progress">
                  <div className="progress-value" style={{width:[...new Set(state.solved_in_bit_manipulation)].length/10*100+"%"}}></div>
                  </div>
                  <h6>{Math.round([...new Set(state.solved_in_bit_manipulation)].length/10*100)}% solved</h6>
                  <Link to='/bit-manipulation'>Solve Now</Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Home