import { userModel } from "../model/model.js";


export const addcontroller =async(req,res)=>{
const {name,email,password}=req.body;
const data = new userModel({name,email,password})
const result = await data.save()
res.send(result)
}
export const readcontroller = async(req,res)=>{
          const result = await userModel.find()
          res.send(result)
}

export const delcontroller =async(req,res) =>{
          const {_id} = req.params;
          const result = await userModel.deleteOne({_id})
          res.send(result)
}
export const editcontroller = async(req,res) =>{
          const{_id}=req.params;
          const{name,email,password}= req.body
          const result = await userModel.updateone({_id} ,{$set:{name, email,password}});
          res.send(result)
}