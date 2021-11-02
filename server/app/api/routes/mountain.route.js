const express = require("express");
const router = express.Router();

const { createMountain, getAllMountain, getMountainById } = require("../controllers/mountain.controller");

router.post("/create", createMountain);
router.get("/", getAllMountain);
router.get("/:mountainId", getMountainById);

module.exports = router;