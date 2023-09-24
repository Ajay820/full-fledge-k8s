import { CreateTodo, AddTask,AllTodos} from "../pages";

import {Routes,Route} from "react-router-dom"


import React from 'react'

export const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<CreateTodo />}></Route>
        <Route path="/getalltodos" element={<AllTodos />}></Route>
        <Route path="/createTask/:id" element={<AddTask />}></Route>
    </Routes>
  )
}
