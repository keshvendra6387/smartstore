import mongoose from "mongoose";
const Connection=async(username,password)=>{
  const URL=`mongodb+srv://userweb:userweb@ecommerce-web.xtyid1t.mongodb.net/?retryWrites=true&w=majority`
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true})
       console.log("connected successfully")
    }
    catch(error){
        console.log('error while creating',error.message)
    }
}
export default Connection;