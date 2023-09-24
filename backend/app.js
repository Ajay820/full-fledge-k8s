require("dotenv").config()
const express = require("express")

const connectToDb = require("./config/database")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToDb()

const userroute = require("./routes/routes")


app.use("/",userroute)

module.exports = app


