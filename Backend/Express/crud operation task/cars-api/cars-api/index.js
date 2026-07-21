import express from "express";
import mongoose, { model } from "mongoose";

const app = express();
const PORT = 3008;

app.use(express.json())


const dbConnection = async () =>
{
  const conn = await mongoose.connect('mongodb://localhost:27017/carsDB');
  if (conn)
  {
      console.log(`Database Connected......`);
      
  }
}
   
dbConnection();

const carsSchema = mongoose.Schema(
  {
    brand: String,
    model: String,
    price: String,
    color: String,
    
    }
)
  
const carsModel = mongoose.model('cars', carsSchema);


app.post('/add-car', async (req, res) =>
{
  const { brand, model, price, color } = req.body;
  
  const data = new carsModel({ brand, model, price, color });
  const result = await data.save();
  res.send(result);
})
app.listen(PORT, () =>
{
   console.log(`Sever Running at port ${PORT}`);
   
})