import React from 'react'

import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import axios from "axios"

export const CreateTodo = () => {
    const [title,setTitle] =useState("")

    const navigate = useNavigate()


    const handleSubmit = async (e) =>{
        e.preventDefault()
        const body ={
          title:title
        }
        const resp = await axios.post("/createTodo",body)
        console.log(resp)
        navigate("/getalltodos")
        setTitle("")
    }

    function seetodos(){
      navigate("/getalltodos")
    }


  return (
    <div className='w-1/4 mx-auto m-20'>
        <form onSubmit={handleSubmit}>
            <input className="p-1 rounded-xl text-2xl hover:bg-green:400 mt-10 border-2 border-black border-solid" type="text" placeholder='enter the todo' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <button className="bg-red-600 ml-2 p-2 rounded-xl mb-2 text-xl">Add Todo</button>
        </form>
        <button className="bg-cyan-100 rounded-xl p-2 ml-20 mt-5" onClick={seetodos}>See all Todos</button>
    </div>
  )
}
