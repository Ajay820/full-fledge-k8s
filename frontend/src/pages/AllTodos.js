import { useEffect, useState } from "react"

import axios from "axios"

import {useNavigate} from "react-router-dom"

export const AllTodos =  () => {

  const [user,setUser] = useState([])

  const navigate = useNavigate()

  const getAllTodos = async ()=>{
    const resp = await axios.get("/getAllTodos")


    if(resp.data.user.length >0 ){
      setUser(resp.data.user)
    }
    console.log(user)
  }

  useEffect(()=>{
    getAllTodos()
  },[user])



  function addTask(id){
    navigate(`/createTask/${id}`)
  }

  const deletetodo = async (id) => {
    const resp = await axios.delete(`/deleteTodo/${id}`)
    console.log(resp)
  }

  function home(){
    navigate("/")
  }

  return (
    <div className="w-2/4 mx-auto m-10">
      {user && user.map((user)=>(
          <div key={user._id} className="m-3">
            <input type="text" className="text-2xl rounded-xl p-1 mt-2" value={user.title}/>
            <button onClick={()=>{addTask(user._id)}} className="ml-3 text-xl rounded-xl bg-green-600 p-1">Add Task</button>
            <button onClick={()=>{deletetodo(user._id)}} className="ml-3 text-xl rounded-xl bg-red-600 p-1">Delete Todo</button>
          </div>
      ))}
      <button onClick={home} className="ml-40 mt-5 bg-red-600 rounded-xl p-2 text-xl">Home</button>
    </div>
  )
}
