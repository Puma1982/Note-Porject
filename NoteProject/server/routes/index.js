const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

/* App Router */

router.get("/", mainController.homepage);
router.get("/cal", mainController.cal);
router.get("/paint", mainController.paint);

module.exports = router;