const Employee = require("../models/employee");
// Phương thức thêm nhân viên
exports.addEmployee = async (req, res) => {
  try {
    const { fullname, email, position, salary } = req.body;
    const employee = new Employee({
      fullname,
      email,
      position,
      salary,
    });
    const result = await employee.save();
    res.json({
      success: true,
      message: "Thêm nhân viên thành công",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Thêm nhân viên không thành công",
      error,
    });
  }
};

// Phương thức sửa thông tin nhân viên
exports.updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullname, email, position, salary } = req.body;
    const result = await Employee.findByIdAndUpdate(
      id,
      { fullname, email, position, salary },
      { new: true }
    );
    res.json({
      success: true,
      message: "Cập nhật thông tin nhân viên thành công",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Cập nhật thông tin nhân viên không thành công",
      error,
    });
  }
};

// Phương thức xóa nhân viên
exports.deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Employee.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Xóa nhân viên thành công",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Xóa nhân viên không thành công",
      error,
    });
  }
};

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find().populate("position");
    res.json({
      success: true,
      message: "Lấy thông tin tất cả nhân viên thành công",
      data: employees,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Lấy thông tin tất cả nhân viên không thành công",
      error,
    });
  }
};
