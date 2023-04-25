const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee");

// Định nghĩa các routes cho model "Employee"
router.post("/employees", employeeController.addEmployee); // Thêm nhân viên mới
router.put("/employees/:id", employeeController.updateEmployee); // Cập nhật thông tin nhân viên
router.delete("/employees/:id", employeeController.deleteEmployee); // Xóa nhân viên
// Lấy thông tin tất cả các nhân viên
router.get("/employees", employeeController.getAllEmployees);

module.exports = router;
