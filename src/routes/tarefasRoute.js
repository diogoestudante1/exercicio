const express = require("express");
const router = express.Router();
const controller = require("../controller/tarefasController");

router.get("/", controller.getAll);
router.post("/", controller.postTarefa);
router.get("/:id", controller.getById);

module.exports = router;