const mongoose = require("mongoose")


const Todo = require("../model/todo.js")

exports.createTodo = async (req,res)=>{
    try{
        const {title,tasks} = req.body
    
        if(!title){
            res.status(401).send("please provide title and that is mandatory")
        }
        else{
            const user = await Todo.create({
                title:title
            })
    
            res.status(200).json({user})
    
        }
    }
    catch(error){
        res.staus(401).json({
            success:false,
            message:"unable to create a todo"
        })
    }
}

exports.createTask = async (req,res)=>{
    try{

        const {id} = req.params

        const {tasks} = req.body
    
        const user = await Todo.findById(id)
    
        user.tasks.push(tasks)
    
        user.save()
    
        res.status(200).json({
            success:true,
            user
        })
    }
    catch(error){
        res.status(401),json({
            success:false,
            message:"unable to add tasks"
        })
    }
}

exports.getAllTodos=async (req,res)=>{
    try{
        const user = await Todo.find()

        res.status(200).json({
        user
        })
    }

    catch(error){
        res.status(401).json({
            success:true,
            message:"No todo Exists"
        })

}
}

exports.deleteTasks = async (req,res)=>{

    try{

        const {id} = req.params
        const {tasks} = req.body.body


        const user = await Todo.findById(id)

        const ans = user.tasks.indexOf(tasks)

        if(ans != -1){
            await user.tasks.splice(ans,1)
            user.save()
            res.status(200).json({
                success:true,
                user
            })
        }

        else{
            res.status(200).json({
                success:false,
                message:"unable to find todo"
            })
        }
    }
    catch(error){
        res.status(401).json({
            success:false,
            message:"unable to find the task"
        })
    }
}

exports.updateTasks=async (req,res)=>{
    const {id} = req.params
    
    const {tasks,index} = req.body

    const user = await Todo.findById(id)

    user.tasks[index] = tasks

    user.save()
 }

exports.deleteTodo =async (req,res)=>{

    try{
        const {id} = req.params

        const user = await Todo.findByIdAndDelete(id)
    
        res.status(200).json({
            success:true,
            message:"todo delete successfully"
        })
    }

    catch(error){
        res.status(401).json({
            success:false,
            message:"unable to find the todo"
        })
    }
}

exports.getTodo = async (req,res)=>{
    const {id} = req.params
    const user = await Todo.findById(id)
    res.status(200).json({
        user
    })
}


exports.home=(req,res)=>{
    res.send("running successfully")
}


// this command is important for patching
// kubectl patch svc argocd-server -n argocd -p '{\"spec\": {\"type\": \"LoadBalancer\"}}'