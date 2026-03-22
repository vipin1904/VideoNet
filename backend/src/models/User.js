import mongoose from 'mongoose'

const userScheema = new mongoose.Schema(

{
name: {
  type:String,
  required:true,
},
email:{
  type:String,
  required:true,
  unique:true,
},
profileImage:{
  type:String,
  default: "",
},
clerkId:{
  type:String,
  required:true,
  unique:true,
}
}, {timestamps: true} // createdAt and updatedAT buided
);


const User = mongoose.model("User",userScheema);

export default User;