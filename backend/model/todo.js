const mongoose = require("mongoose")

const Todo = mongoose.Schema({
    title:String,
    tasks:[String]
})


module.exports = mongoose.model("todo",Todo)