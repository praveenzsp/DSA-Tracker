const express = require('express')
const app = express()
const mongoose  = require('mongoose')
var cors = require('cors')
const PORT = process.env.PORT || 5000
const {MONGOURI} = require('./keys')


app.use(cors())


mongoose.connect(MONGOURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true

})
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeah")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})

require('./models/user')
require('./models/questions')

app.use(express.json())
app.use('/',require('./routes/auth'))




app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})
