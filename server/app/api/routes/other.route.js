const express = require("express");
const router = express.Router();

const { createOther, getAllOthers } = require("../controllers/other.controller")

router.post("/create", createOther);
router.get("/", getAllOthers);

module.exports = router;