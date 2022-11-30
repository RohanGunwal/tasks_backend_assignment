const router = require("express").Router();
const taskController = require("../controller/taskController");

router.get("/", taskController.getAllTasks);
router.get("/:id", taskController.getTaskById);
router.post("/", taskController.createTask);
router.delete("/:id", taskController.deleteTask);
router.put("/:id", taskController.editTask);
router.delete("/", taskController.deleteBulk);

module.exports = router;
