import express from "express"
const app = express()
const port =3009;
 app.get("/get-user",(req,res)=>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
    ]
})
app.post("/post-user",(req,res)=>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
    ]
})
app.put("/ put-user",(req,res)=>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
    ]
})
app.delete("/ delete-user",(req,res)=>{
    const data = [
        { id: 1, name: "Ravi", email: "ravi@gmail.com" },
{ id: 2, name: "Sneha", email: "sneha@gmail.com" }
    ]
})
app.listen(port,()=>{
    console.log(`server is running ${port}`);
    
})
