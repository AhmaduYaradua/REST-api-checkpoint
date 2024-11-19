import userCollection from "../Models/User.js";

async function deleteUser(req, res) {
  try {
    const { _id } = req.query;
    const deletedUser = await userCollection.deleteOne({ _id: _id });
    console.log(deletedUser);
  } catch (error) {
    res.status(400).json({ message: "Sorry an error occured" });
    console.log(error);
  }
}

export default deleteUser;
