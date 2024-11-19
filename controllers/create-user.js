import userCollection from "../Models/User.js";

async function createUser(req, res) {
  try {
    const { fullName, age, email, stateOfOrigin } = req.body;
    const createdUser = await userCollection.create({
      fullName: fullName,
      age: age,
      email: email,
      stateOfOrigin: stateOfOrigin,
    });
    console.log(createdUser);
  } catch (error) {
    res.status(400).json({ message: "An error occured" });
    console.log(error);
  }
}

export default createUser;
