import mongoos from "mongoose";

 const connectMongoDB  = async () =>{
    try{
        await mongoos.connect(process.env.MONGODB_URI);
        console.log("libs เชื่อมต่อได้แล้ว");
    }
    catch(error) {
        console.log(error+"Mongoos DB Err.");
    }
};
export default connectMongoDB;