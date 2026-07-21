import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
const PORT = 9006;
const db  = async () =>{
    const conn = await mongoose.connect('mongodb://localhost:27017/projecttry')
    if (conn){
        console.log('db connected');
        
    }
};
db();
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});
const userModel = mongoose.model('user',userSchema);
app.post("/register",async (req ,res) =>{
 const {name,email,password}=req.body;
 const isExist= await userModel.findOne({email});
 if(isExist){
     res.json({
                    code:400,
                    success:false,
                    message:'user already registered',
                    data:isExist,
                    error:true,
 });
}else{
    const data = new userModel({name,email,password});
    const result = await data.save();
     res.json({
                    code:200,
                    success:true,
                    message:'User registered successfully',
                    data:result,
                    error:false,
     });
}
});
app.post("/login",async (req ,res) =>{
 const {email,password}=req.body;
 const isMatch= await userModel.findOne({email,password});
 if(isMatch){
     res.json({
                    code:200,
                    success:true,
                    message:'user login  sucessfully',
                    data:isMatch,
                    error:false,
 });
}else{
    res.json({
                code:400,
                    success:false,
                    message:'user login  failed',
                    data:isMatch,
                    error:true, 
      });              
}
});

// app.get('/get',(req,res)=>{
//           try{    
//           res.json({
//                     code:200,
//                     success:true,
//                     message:'okk',
//                     data:[],
//                     error:false,
//           })
//           }
//           catch(err){
//            console.log(err);
//            res.json({
//                     code:500,
//                     success:false,
//                     message:'Internal Server Error',
//                     data:[],
//                     error:false,
//            });    
//           }
// });
app.listen(PORT, () =>{
    console.log(`Server working  at port ${PORT}`);

});