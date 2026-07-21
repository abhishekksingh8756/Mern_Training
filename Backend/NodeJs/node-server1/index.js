import http from 'http';
const server=http.createServer((req,res)=>{
res.writeHead(200,{"content-Type":"text/plain"});
res.end("Server has send your message");
});
server.listen(8000,()=>{
          console.log('Server is running on 8000 port');
          
})