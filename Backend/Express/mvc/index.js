import express from 'express';
import dbconnect from './config/db.js'
import router from './route/router.js'
const app = express();
app.use(express.json());
dbconnect();
app.use(router)
const PORT = 9002;
app.listen(PORT, () =>{
    console.log(`Server working jhama jhama at port ${PORT}`);
    
});