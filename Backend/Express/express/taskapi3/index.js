import express  from "express"
const app = express()
const port =3005;
app.get("/get-docter",(req,res)=>{
    const data =[
       { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" } 
    ]
    res.send(data)
})
app.delete("/delete-docter",(req,res)=>{
    const data =[
       { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" } 
    ]
    res.send(data)
})
app.post("/post-docter",(req,res)=>{
    const data =[
       { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" } 
    ]
    res.send(data)
})
app.put("/put-docter",(req,res)=>{
    const data =[
       { id: 1, name: "Dr. Sharma", specialist: "Heart" },
{ id: 2, name: "Dr. Mehta", specialist: "Skin" } 
    ]
    res.send(data)
})
app.listen(port ,()=>{
    console.log(`server is running ${port}`);
    
})