import React from 'react'

import axios from "axios"

import {useState,useEffect} from "react"

import { useParams,useNavigate } from 'react-router-dom'



export const AddTask = () => {

  const [todo,setTodo] = useState([])

  const [ans,setAns] = useState("")

  const navigate = useNavigate()

  const params = useParams()

  const id  = params.id

  const [title ,setTitle] = useState('')

   const getTodo = async ()=>{
    const resp = await axios.get(`/getTodo/${id}`)


    setTodo(resp.data.user.tasks)

    setTitle(resp.data.user.title)

   }

   
  useEffect(()=>{
    getTodo()
  },[todo])


  const addTask = async (e) =>{

    e.preventDefault()
    if(ans.length > 0){
      const body ={
        tasks:ans
      } 

  
      const resp = await axios.post(`/createTask/${id}`, body)
      setAns("")
    }
    else{
      alert("Enter something to Add Task")
    }

  }



  const value = async (index)=>{

    const edit = prompt("enter the updated value")

    if(edit.length >0){
      
    const body ={ 
      index:index,
      tasks:edit
    } 
    
      const resp = await axios.put(`/updatetask/${id}`,body)
      console.log(resp)
    

    }

    else{
      alert("you can't give empty update value")
    }

  }

  const deletef= async (value) =>{

    console.log(value)
    const body = {
      tasks:value
    }

    const resp = await axios.delete(`/deletetask/${id}`,{data:{body:body}})
    console.log(resp)

  }

  const home = () =>{
    navigate("/")
  }

  const previous =() =>{
    navigate("/getAllTodos")

  }
  

  return (
    <div className="w-3/4 m-5 mx-auto">
      <div>
        <form onSubmit={addTask} className="w-2/5 mx-auto">
          <h1 className="text-5xl mb-5 text-white text-center">{title}</h1>
          <input type="text" value ={ans} className="text-3xl rounded-xl p-1" onChange={(e)=>{setAns(e.target.value)}} />
          <button className="text-xl ml-2 bg-green-400 p-1 rounded-xl">Add Task</button>
        </form>
    
        <div className="mx-auto w-2/5 m-2">

          {todo && todo.map((task,index)=>(
            <div key={index} className="m-5">
              <input value={task} className="text-2xl rounded-xl p-2"/>
              <button onClick={()=>{value(index)}} className="ml-2 text-xl bg-green-400 p-2 rounded-xl">Edit</button>
              <button onClick={()=>{deletef(task)}} className="ml-2 text-xl bg-red-600 p-2 rounded-xl">Delete</button>
            </div>
          ))}
              <button className="ml-10 p-2 bg-green-500 rounded-xl text-white" onClick={previous}>Previous Page</button>
              <button className="ml-2 p-2 bg-red-600 rounded-xl text-white" onClick={home}>Back To Home</button>
        </div>
      </div>
    </div>
  )
}
