const express = require("express");
const { createOrg } = require("../controllers/orgController");
const { authenticate } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authenticate, createOrg);

module.exports = router;
