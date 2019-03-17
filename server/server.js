const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.1:27017/immoc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success ')
})
// 新建数据库
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,required:true},
    age:{type:Number,required:true}
}))
//新增数据
// User.create({
//     user:'xiaohua',
//     age:12
// },function(err,doc){
//     if (!err){
//         console.log('doc', doc)
//     }else{
//         console.log('err', err)
//     }
// })
//删除数据
User.remove({user:'xiaohua'},function(err,doc){
    console.log(doc)
})
// 更新数据
// User.update({user:'xiaoming'},{age:25},function(err,doc){
//     if (!err){
//         console.log('doc', doc)
//     }else{
//         console.log('err', err)
//     }
// })

const app = express()
app.get('/',function(req,res){
    res.send('<h1>hello world </h1>')
})
app.get('/data',function(req,res){
    User.findOne({},function(err,doc){
        res.json(doc)
    })
})
app.listen(9093,function(req,res){
console.log('node.js start port 9093')
})