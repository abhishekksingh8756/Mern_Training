import express from 'express'
const app =express();
const port =3000;
app.get('/',(req,res)=>{
    res.send("hello world")
})
    app.post('/insert',(req,res)=>{
        const result =[{name:"nitesh Gupta",class:"it"}]
      res.send(result) 
});
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});
app.delete('/user', (req, res) => {
    const result= [{name:"nitesh gupta",class:"it",rollno:45}]
  res.send(result);
});
app.listen(port,()=>{
    console.log(`server is running working ${port}`)
}); 