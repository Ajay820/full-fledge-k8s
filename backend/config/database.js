const mongoose = require("mongoose")

const connectToDb =()=>{
    mongoose.connect(process.env.MONGO_URL).then((conn)=>{console.log(`connected DB: ${conn.connection.host}`)})
    .catch((err)=>{
        console.log(err.msg);
        process.exit(1)
    })
}


module.exports = connectToDb