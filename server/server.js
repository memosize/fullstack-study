const express = require('express')
const app = express()
const mongoose = require('mongoose')
// 链接mongo
const DB_URL = 'mongodb://localhost:27017/immoc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success ')
})
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// User.create({
//     user:'react',
//     age:20
// },function(err,doc){
//     if (!err){
//         console.log(doc)
//     }else{
//         console.log(err)
//     }
// })
// User.remove({age:18},function(err,doc){
//     console.log(doc)
// })
User.update({'user':'react'},{age:26,user:'React'},function(err,doc){
    console.log(doc)
})
app.get('/',function(req,res){
    res.send('<h1>hello world</h1>')
})
app.get('/data',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})
app.listen(9093,function(){
    console.log('node app start at port 9093')
})