const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const typeController = require("../controllers/type.js");

router.route("/Buy").get(wrapAsync(typeController.Buy));
router.route("/Rent").get(wrapAsync(typeController.Rent));

module.exports = router;
