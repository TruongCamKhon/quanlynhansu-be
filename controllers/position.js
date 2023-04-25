const Position = require("../models/position");

// Phương thức thêm vị trí làm việc
exports.addPosition = async (req, res) => {
  try {
    const { title, department } = req.body;
    const position = new Position({
      title,
      department,
    });
    const result = await position.save();
    res.json({ success: true, message: "Thêm vị trí làm việc thành công", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Thêm vị trí làm việc không thành công", error });
  }
};

// Phương thức sửa thông tin vị trí làm việc
exports.updatePosition = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, department } = req.body;
    const result = await Position.findByIdAndUpdate(
      id,
      { title, department },
      { new: true }
    );
    res.json({ success: true, message: "Cập nhật thông tin vị trí làm việc thành công", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Cập nhật thông tin vị trí làm việc không thành công", error });
  }
};

// Phương thức xóa vị trí làm việc
exports.deletePosition = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Position.findByIdAndDelete(id);
    res.json({ success: true, message: "Xóa vị trí làm việc thành công", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Xóa vị trí làm việc không thành công", error });
  }
};

exports.getAllPositions = async (req, res) => {
  try {
    const positions = await Position.find();
    res.json({ success: true, message: "Lấy thông tin tất cả vị trí làm việc thành công", data: positions });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Lấy thông tin tất cả vị trí làm việc không thành công", error });
  }
};