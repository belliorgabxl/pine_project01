import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";


export default async function handler(req,res){
  if (req.method === "GET") {
    const { id } = res.params;
    await connectMongoDB();
    const users = await User.findOne({ _id: id });
    return res.status(200).json({ users });
  }
}











