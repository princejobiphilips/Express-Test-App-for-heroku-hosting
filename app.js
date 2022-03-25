var express=require('express')

var bodyParser=require('body-parser')

var app=express()

app.use(bodyParser.urlencoded({ extended:false}))

app.use(bodyParser.json())


app.get('/', (req,res)=>{
    res.send('Welcome')
})

app.post('/read', (req,res)=>{
    var getName=req.body.name;
    var getRoll=req.body.rollno;

    res.json({'name':getName,"roll no":getRoll})
    //res.send(getName+" "+getRoll)
})

app.post('/add',(req,res)=>{
    var getNum1=parseFloat(req.body.num1)
    var getNum2=parseFloat(req.body.num2)
    var result=getNum1+getNum2
    
    res.json({'Result':result})
})

app.get('/home', (req,res)=>{
    res.send('Welcome to Home Page')
})


app.listen(3000, ()=>{
    console.log("Server started at http://localhost:3000/");
})
