//api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://issa:issayoussef@cluster0.p9ekjvo.mongodb.net/meetup?retryWrites=true&w=majority"
    );
    const db = client.db();
    const Createmeetup = db.collection("mymeetup");
    const result = await Createmeetup.insertOne(data);
    console.log(data);
    client.close();
    res.status(201).json({ message: "the meetup successfuly!" });
  }
}
export default handler;
