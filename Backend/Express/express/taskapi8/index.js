import express from 'express'
const app = express();
const port =3001;
app.get('/',(req,res)=>{
    const result=[
        { id: 1, name: "Rahul", course: "BCA" },
{ id: 2, name: "Priya", course: "MCA" }
    ]
    res.send(result)
})
app.post('/result',(req,res)=>{
    const result=[
        { id: 1, name: "Rahul", course: "BCA" },
{ id: 2, name: "Priya", course: "MCA" }
    ]
    res.send(result)
})
app.put('/update',(req,res)=>{
    const result=[
        { id: 1, name: "Rahul", course: "BCA" },
{ id: 2, name: "Priya", course: "MCA" }
    ]
    res.send(result)
})
app.delete('/delete',(req,res)=>{
    const result=[
        { id: 1, name: "Rahul", course: "BCA" },
{ id: 2, name: "Priya", course: "MCA" }
    ]
    res.send(result)
})
app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})