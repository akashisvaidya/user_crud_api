import express from "express";
import {
  deleteUserByID,
  getUser,
  insertUser,
  updateUser,
} from "../models/user/UserModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    // get all data form db and return to the client

    const users = await getUser();
    res.json({
      status: "Success",
      message: "Here are the users",
      users,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: error.message,
    });
  }
});
router.put("/", async (req, res) => {
  try {
    console.log(req.body);

    const { _id, ...rest } = req.body;

    const filter = { _id };
    const result = await updateUser(filter, rest);
    result?._id
      ? res.json({
          status: "Success",
          message: "Information updated succesfully",
          // get all data form db and return to the client
        })
      : res.json({
          status: "errorr",
          message: "Unable to update",
          // get all data form db and return to the client
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: "email already exists",
    });
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertUser(req.body);
    result?._id
      ? res.json({
          status: "Success",
          message: "User Created SuccesFully",
          // get all data form db and return to the client
        })
      : res.json({
          status: "errorr",
          message: "Unable to create User",
          // get all data form db and return to the client
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: "email already exists",
    });
  }
});
router.delete("/:_id", async (req, res) => {
  try {
    console.log(req.params);
    const { _id } = req.params;
    const result = await deleteUserByID(_id);
    result?._id
      ? res.json({
          status: "Success",
          message: "User deleted",
          // get all data form db and return to the client
        })
      : res.json({
          status: "errorr",
          message: "Unable to delete User",
          // get all data form db and return to the client
        });
  } catch (error) {
    console.log(error);
    res.json({
      status: "success",
      message: "email already exists",
    });
  }
});

export default router;
