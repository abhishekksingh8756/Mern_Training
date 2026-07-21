import express from "express"
const app = express();
 const port =3006;
 app.get("/get-order",(req,res)=>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
    ]
    res.send(data)
 })
 app.post("/post-order",(req,res)=>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
    ]
    res.send(data)
 })
 app.put("/put-order",(req,res)=>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
    ]
    res.send(data)
 })
 app.delete("/delete-order",(req,res)=>{
    const data = [
        { id: 1, item: "Pizza", amount: 299 },
{ id: 2, item: "Burger", amount: 149 }
    ]
    res.send(data)
 })
 app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
 })