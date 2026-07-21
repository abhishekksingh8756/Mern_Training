import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
const dbconnect =async()=>{
 const conn = await mongoose.connect('mongodb://localhost:27017/practice');
 if(conn){
          console.log("db connect ho gya hai");
  }
 }
 dbconnect();
 const userSchema=new mongoose.Schema({        
          name:String,
          email:String,
          password:String
});
const userModel = mongoose.model("users",userSchema);
app.post('/add', async(req,res) =>
{
  const { name, email, password } = req.body;
  const data = new userModel({ name, email ,password });
   const result = await data.save();
   res.send(result);
})
app.get('/read', async(req,res) =>{
  const result = await userModel.find();
  res.send(result)
})
// app.delete('/del',async(req,res) =>{
//   const { email } = req.query; 
//   const result = await userModel.deleteOne({ email })
//   res.send(result);
// })
app.delete("/del/:_id",async(req,res)=>{
          const {_id} = req.params;
          const result  = await userModel.deleteOne({_id});
          res.send(result);
});
app.put("/edit/:_id",async(req,res)=>{
          const {_id} = req.params;
          const { name, email,password }= req.body;
          const result = await userModel.updateOne({ _id}, { $set: { name,email,password } });
          res.send(result);
});




const PORT = 9001;
app.listen(PORT, () =>{
    console.log(`Server working jhama jhama at port ${PORT}`);
    
});
