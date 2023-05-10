const express = require('express')
const app = express()
const mongoose = require('mongoose')
const StudentRoutes = require('./routes/student')
const cors = require('cors')



app.use(cors())
app.use(express.json())
app.use('/api/student',StudentRoutes)






mongoose.connect('mongodb://127.0.0.1:27017/react').then(()=>console.log("Connected!"))

app.listen(4600,()=>{
    console.log("Server is Running...")
})