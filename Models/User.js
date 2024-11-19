import mongoose from "mongoose";

// Schema decleration
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minLength: 3,
    },
    age: {
      type: Number,
      required: true,
      min: 18,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    stateOfOrigin: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const userCollection = mongoose.model("userCollection", userSchema);
export default userCollection;
