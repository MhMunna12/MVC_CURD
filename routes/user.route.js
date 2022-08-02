const express = require("express");
const {
  getAllUser,
  createUser,
  getOneUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");
const router = express.Router();

router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);

module.exports = router;
