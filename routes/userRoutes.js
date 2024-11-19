import express from "express";
const router = express.Router();

// function imports from their respective destinattions
import createUser from "../controllers/create-user.js";
import editUser from "../controllers/edit-user.js";
import getUsers from "../controllers/find-users.js";
import deleteUser from "../controllers/delete-user.js";

// routes
router.post("/add-user", createUser);
router.patch("/edit-user/:userId", editUser);
router.get("/get-users", getUsers);
router.delete("/delete-user", deleteUser);
export default router;
