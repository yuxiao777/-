const Mock=require('mockjs')



module.exports=function (app){
    app.use('/api/userinfo',(req,res)=>{
        var data=Mock.mock({
            username:'@cname()',
            classname:'@cname()',
        })
        res.json(data)
    })
}