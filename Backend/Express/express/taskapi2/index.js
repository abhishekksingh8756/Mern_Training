import express from "express"
const app = express();
const port =3008;
app.get("/get-car",(req,res)=>{
    const data =[
        { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }
    ]
    res.send(data)
})
app.post("/post-car",(req,res)=>{
    const data =[
        { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }
    ]
    res.send(data)
})
app.put("/put-car",(req,res)=>{
    const data =[
        { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }
    ]
    res.send(data)
})
app.delete("/delete-car",(req,res)=>{
    const data =[
        { id: 1, brand: "Honda", model: "City" },
{ id: 2, brand: "Maruti", model: "Swift" }
    ]
    res.send(data)
})
app.listen(port,()=>{
    console.log(`server is running${port}`);
    
})