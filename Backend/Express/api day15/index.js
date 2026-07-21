import express from 'express';
const app=express();
const PORT=9000;
app.get('/data',(req,res)=>{
          const result ={name:"abhishek",class:"6"}
   res.send(result)
})
app.post('/insert',(req,res)=>{
          const result ={name:"banana",class:"fruits"}
   res.send(result)
})
app.delete('/double',(req,res)=>{
          const result ={name:"katam",class:"end"}
   res.send(result)
})
app.listen(PORT,()=>{
          console.log(`server is working fine at ${PORT}`);
          
});
//http://localhost:9000