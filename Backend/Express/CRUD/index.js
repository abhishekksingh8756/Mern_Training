import express from 'express';
import mongoose from 'mongoose';
const app =express();
app.use(express.json())//data.json allow
const PORT= 8000;
const dbconnect =async()=>{
          const con = await mongoose.connect("mongodb://localhost:27017/CRUD");
          if(con){
                    console.log("database connected sucessfully....");        
          }
};
dbconnect();

const userSchema = new mongoose.Schema({
          name:String,
          email:String,
          mobile:String,
});
const userModel = mongoose.model("users",userSchema)

app.post('/add',async(req,res)=>{
  const{name,email,mobile} = req.body;   
  const data = new userModel({name,email,mobile});
  const result = await data.save();
  res.send(result);

//    res.send('ok')
});
app.get('/read',async(req,res)=>{
          const result = await userModel.find();
          res.send(result);
});
app.delete("/del",async(req,res)=>{
          const {email} =req.query;
          const result = await userModel.deleteOne({email});
          res.send(result);
});
app.put("/update",async(req,res)=>{
          const {name,email,mobile}= req.body;
          const result= await userModel.updateOne({email},{$set :{name ,email,mobile}},);
          res.send(result);
});

app.listen(PORT,()=>{
          console.log(`SERVER IS FINE WORKING AT ${PORT}`);
          
});