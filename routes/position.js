const express = require("express");
const router = express.Router();
const positionController = require("../controllers/position");

// Định nghĩa các routes cho model "Position"
router.post("/positions", positionController.addPosition); // Thêm vị trí làm việc mới
router.put("/positions/:id", positionController.updatePosition); // Cập nhật thông tin vị trí làm việc
router.delete("/positions/:id", positionController.deletePosition); // Xóa vị trí làm việc
// Lấy thông tin tất cả các vị trí làm việc
router.get("/positions", positionController.getAllPositions);

module.exports = router;
