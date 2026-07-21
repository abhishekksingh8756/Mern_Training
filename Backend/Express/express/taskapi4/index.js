import express from "express";
const app = express()
const port = 3003;
app.get("/get-emp",(req,res)=>{
    const data =[
       { id: 1, name: "Amit", department: "IT" },
{ id: 2, name: "Neha", department: "HR" } 
    ]
    res.send(data)
})

app.post("/post-emp",(req,res)=>{
    const data =[
       { id: 1, name: "Amit", department: "IT" },
{ id: 2, name: "Neha", department: "HR" } 
    ]
    res.send(data)
})
app.put("/put-emp",(req,res)=>{
    const data =[
       { id: 1, name: "Amit", department: "IT" },
{ id: 2, name: "Neha", department: "HR" } 
    ]
    res.send(data)
})
app.delete("/delete-emp",(req,res)=>{
    const data =[
       { id: 1, name: "Amit", department: "IT" },
{ id: 2, name: "Neha", department: "HR" } 
    ]
    res.send(data)
})
app.listen(port,()=>{
    console.log(`server is running in${port}`);
    
})