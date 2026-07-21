import express from "express";
const app = express();
const port = 3004;
app.get ("/get-book",(req,res)=>{
    const data =[
       { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }]
  res.send(data)
 
    
})
app.post("/post-book",(req,res)=>{
    const data =[
       { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }]
  res.send(data)
 
    
})
app.put("/put-book",(req,res)=>{
    const data =[
       { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }]
  res.send(data)
 
    
})
app.delete("/delete-book",(req,res)=>{
    const data =[
       { id: 1, title: "React Basics", author: "John" },
{ id: 2, title: "Node Guide", author: "Smith" }]
  res.send(data)
 
    
})


app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})