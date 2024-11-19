import userCollection from "../Models/User.js";

async function editUser(req, res) {
  try {
    const { userId } = req.params;
    const { fullName, email, age, stateOfOrigin } = req.body;
    const updatedUser = await userCollection.findByIdAndUpdate(
      userId,
      { stateOfOrigin: stateOfOrigin },
      { new: true }
    );
    console.log(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Sorry an error occured" });
    console.log(error);
  }
}
export default editUser;
