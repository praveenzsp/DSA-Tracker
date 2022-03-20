import React,{createContext,useReducer,useContext,useEffect} from 'react'
import './App.css'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Welcome from './components/Welcome';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import Arrays from './components/Arrays';
import String from './components/String';
import LinkedList from './components/LinkedList';
import BinaryTree from './components/BinaryTree';
import Bst from './components/Bst';
import Greedy from './components/Greedy';
import StacksandQueues from './components/StacksandQueues';
import Graph from './components/Graph';
import Trie from './components/Trie';
import Dp from './components/Dp';
import {reducer,initialState} from './reducers/UserReducer'
import Editor from './components/Editor';
import BinarySearch from './components/BinarySearch';
import Recursion from './components/Recursion';
import Navbar from './components/Navbar';
export const UserContext=createContext()

const Routing=()=>{
  const history = useHistory()
  const [state,dispatch] = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      // history.push('/home')  //tfjygkhk
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('user',JSON.stringify({...state}))
    // console.log('state changed')
  },[state])

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Welcome/>
        </Route>
        <Route  path='/signin'>
          <Signin />
        </Route>
        <Route  path='/signup'>
          <Signup />
        </Route>
        <Route  path='/home'>
          <Home />
        </Route>
        <Route  path='/arrays'>
          <Arrays />
        </Route>

        <Route  path='/string'>
          <String/>
        </Route>

        <Route  path='/linked-list'>
          <LinkedList/>
        </Route>
        <Route  path='/binary-trees'>
          <BinaryTree/>
        </Route>
        <Route  path='/bst'>
          <Bst/>
        </Route>
        <Route  path='/greedy'>
          <Greedy/>
        </Route>

        <Route  path='/stacks-queues'>
          <StacksandQueues/>
        </Route>

        <Route  path='/graph'>
          <Graph/>
        </Route>
        <Route  path='/trie'>
          <Trie/>
        </Route>
        <Route  path='/dp'>
          <Dp/>
        </Route>

        <Route  path='/recursion'>
          <Recursion/>
        </Route>
        <Route  path='/binary-search'>
          <BinarySearch/>
        </Route>
        <Route  path='/editor'>
          <Editor/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}


const App=()=>{
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={[state,dispatch]}>
      <Routing/>
    </UserContext.Provider>
  )
}

export default App;
