const express = require("express")

const router = express.Router()

const {createTodo ,home,createTask, deleteTodo, updateTasks, getAllTodos, deleteTasks, getTodo} = require("../controllers/controller.js")


router.post("/createTodo",createTodo)

router.get("/",home)

router.post("/createtask/:id",createTask)

router.delete("/deletetask/:id",deleteTasks)

router.get("/getAllTodos",getAllTodos)

router.put("/updatetask/:id",updateTasks)

router.delete("/deletetodo/:id",deleteTodo)

router.get("/getTodo/:id",getTodo)

module.exports = router
