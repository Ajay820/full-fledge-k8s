const {PORT} = process.env || 4000
const app = require("./app")
app.listen(4000,()=>{
    console.log("server is running at port 4000")
})