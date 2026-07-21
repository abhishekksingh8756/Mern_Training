import express from "express"
const app = express();
const port =3007;
app.get("/get-movie",(req,res)=>{
    const data =[
     { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
    ]
    res.send(data)
})
app.post("/post-movie",(req,res)=>{
    const data =[
     { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
    ]
    res.send(data)
})
app.put("/put-movie",(req,res)=>{
    const data =[
     { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
    ]
    res.send(data)
})
app.delete("/delete-movie",(req,res)=>{
    const data =[
     { id: 1, name: "Inception", year: 2010 },
{ id: 2, name: "Avatar", year: 2009 }
    ]
    res.send(data)
})
app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})