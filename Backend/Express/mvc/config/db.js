import mongoose from 'mongoose';
const dbconnect = async()=>{
          const conn = await mongoose.connect('mongodb://localhost:27017/mvc')
          if(conn)
          {
                    console.log('db connected...');      
          }
          
}
export default dbconnect;