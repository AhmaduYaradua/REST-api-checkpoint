import userCollection from "../Models/User.js";

async function getUsers(req, res) {
  try {
    const allUsers = await userCollection.find();
    console.log(allUsers);
  } catch (error) {
    res.status(400).json({ message: "An error occured" });
    console.log(error);
  }
}

export default getUsers;
