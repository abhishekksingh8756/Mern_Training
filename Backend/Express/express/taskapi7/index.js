import express from "express"
const app = express();
const port= 3002;
app.get("/get-product",(req,res)=>{
    const data =[
       { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})
app.post("/post-product",(req,res)=>{
    const data =[
       { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})
app.put("/put-product",(req,res)=>{
    const data =[
       { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})
app.delete("/delete-product",(req,res)=>{
    const data =[
       { id: 1, name: "Laptop", price: 45000 },
{ id: 2, name: "Mouse", price: 500 }
    ]
    res.send(data);
})
app.listen(port,()=>{
    console.log(`server is running ${port}`);
})