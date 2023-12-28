import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id } = res.params;
    const { A: new_infoA, B: new_infoB } = await request.json();
    await connectMongoDB();
    await Dors.findByIdAndUpdate(id, { A, B });
    // return NextResponse.json({ message: "User updated" }, { status: 200 });
    return res.status(200).json({ message: "Dorm updated" });
  }

  if (req.method === "GET") {
    const { id } = res.params;
    await connectMongoDB();
    const dormitory = await Dors.findOne({ _id: id });
    return res.status(200).json({ dormitory });
  }
}
