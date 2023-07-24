/**
 * Bài 1
 *
 * input:
 *          - điểm chuẩn
 *          - khu vực: A: +2, B: +1, C: +0.5, X: +0
 *          - đối tượng: 1: +2.5, 2: +1.5, 3: +1
 *          - điểm môn 1:
 *          - điểm môn 2:
 *          - điểm môn 3:
 * process:
 *          - Điểm = Tổng điểm 3 môn + Điểm khu vực ưu tiên + Điểm đối tượng ưu tiên
 *          - Rớt:  Điểm < Điểm chuẩn hoặc 1 trong 3 môn = 0
 * output:
 *          - Bạn đã (rớt/đậu). Tổng điểm: (điểm)
 *          - Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0
 */
function tinhBai1() {
  const diemChuan = document.getElementById("b1-diem-chuan").value * 1;
  const diemMon1 = document.getElementById("b1-diem-mon-1").value * 1;
  const diemMon2 = document.getElementById("b1-diem-mon-2").value * 1;
  const diemMon3 = document.getElementById("b1-diem-mon-3").value * 1;
  const khuVuc = document.getElementById("b1-khu-vuc").value;
  var diemKhuVuc = 0;
  switch (khuVuc) {
    case "a":
      diemKhuVuc = 2;
      break;
    case "b":
      diemKhuVuc = 1;
      break;
    case "c":
      diemKhuVuc = 0.5;
      break;
    default:
      diemKhuVuc = 0;
      break;
  }
  const doiTuong = document.getElementById("b1-doi-tuong").value * 1;
  var diemDoiTuong = 0;
  switch (doiTuong) {
    case 1:
      diemDoiTuong = 2.5;
      break;
    case 2:
      diemDoiTuong = 1.5;
      break;
    case 3:
      diemDoiTuong = 1;
      break;
    default:
      diemDoiTuong = 0;
      break;
  }
  const diem = diemMon1 + diemMon2 + diemMon3 + diemKhuVuc + diemDoiTuong;
  var dauRot = "đậu";
  if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
    document.getElementById(
      "b1-result"
    ).innerText = `Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0`;
    return;
  }
  if (diem < diemChuan) {
    dauRot = "rớt";
  }
  document.getElementById(
    "b1-result"
  ).innerText = `Bạn đã ${dauRot}. Tổng điểm: ${diem}`;
}

/**
 * Bài 2: Tính tiền điện
 *
 * input: số kW điện đã tiêu thụ
 * process: tính tiền điện lũy kế
 *          + 50kW đầu: 500d/kW
 *          + 50kW tiếp: 650d/kW
 *          + 100 tiếp: 850
 *          + 150 tiếp: 1100
 *          + Còn lại: 1300
 * output: tổng tiền điện
 */
function tinhBai2() {
  const soKw = document.getElementById("b2-so-kw").value * 1;
  const ten = document.getElementById("b2-ten").value;
  var tienDien = 0;

  if (soKw <= 50) {
    tienDien = soKw * 500;
  } else if (soKw <= 100) {
    tienDien = 50 * 500 + (soKw - 50) * 650;
  } else if (soKw <= 200) {
    tienDien = 50 * 500 + 50 * 650 + (soKw - 100) * 850;
  } else if (soKw <= 350) {
    tienDien = 50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100;
  } else {
    tienDien =
      50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
  }

  document.getElementById(
    "b2-result"
  ).innerText = `${ten} đã tiêu thụ ${soKw.toLocaleString()}kW; Tổng tiền điện: ${tienDien.toLocaleString()}đ`;
}
// tinhBai2();

/**
 * Bài 3: Tính thuế thu nhập cá nhân
 *
 * input:
 *          - Họ tên
 *          - Tổng thu nhập / năm
 *          - Số người phụ thuộc
 * process:
 *          - Thuế = Tổng thu nhập - 4tr - Số người phụ thuộc * 1.6tr
 * output: thuế thu nhập
 */
function tinhBai3() {
  const ten = document.getElementById("b3-ten").value;
  const thuNhap = document.getElementById("b3-thu-nhap").value * 1;
  const soNguoiPhuThuoc =
    document.getElementById("b3-so-nguoi-phu-thuoc").value * 1;

  const thuNhapChiuThue = thuNhap - 4000000 - soNguoiPhuThuoc * 1600000;
  const rank60 = 60000000;
  const rank120 = 120000000;
  const rank210 = 210000000;
  const rank384 = 384000000;
  const rank624 = 624000000;
  const rank960 = 960000000;
  const max_thue60 = rank60 * 0.05;
  const max_thue120 = rank120 * 0.1;
  const max_thue210 = rank210 * 0.15;
  const max_thue384 = rank384 * 0.2;
  const max_thue624 = rank624 * 0.25;
  const max_thue960 = rank960 * 0.3;

  var thue = 0;
  if (thuNhapChiuThue < rank60) {
    thue = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue < rank120) {
    thue = max_thue60 + (thuNhapChiuThue - rank60) * 0.1;
  } else if (thuNhapChiuThue < rank210) {
    thue = max_thue60 + max_thue120 + (thuNhapChiuThue - rank120) * 0.15;
  } else if (thuNhapChiuThue < rank384) {
    thue =
      max_thue60 +
      max_thue120 +
      max_thue210 +
      (thuNhapChiuThue - rank210) * 0.2;
  } else if (thuNhapChiuThue < rank624) {
    thue =
      max_thue60 +
      max_thue120 +
      max_thue210 +
      max_thue384 +
      (thuNhapChiuThue - rank384) * 0.25;
  } else if (thuNhapChiuThue < rank960) {
    thue =
      max_thue60 +
      max_thue120 +
      max_thue210 +
      max_thue384 +
      max_thue624 +
      (thuNhapChiuThue - rank624) * 0.3;
  } else {
    thue =
      max_thue60 +
      max_thue120 +
      max_thue210 +
      max_thue384 +
      max_thue624 +
      max_thue960 +
      (thuNhapChiuThue - rank960) * 0.35;
  }

  document.getElementById(
    "b3-result"
  ).innerHTML = `Tiền thuế thu nhập cá nhân của ${ten} là: ${thue.toLocaleString()}đ`;
}
// tinhBai3();

/**
 * Bài 4: Tính tiền cáp
 *
 * input:
 *          - Loại khách hàng
 *          - Mã khách hàng
 *          - Số kênh
 *          - Số kết nối (chỉ hiện lên khi chọn Loại khách hàng: Doanh nghiệp)
 * process: tính tổng chi phí
 *          - Phí xử lý hóa đơn: Dân: 4.5, DN: 15
 *          - Phí DV cơ bản: Dân: 20.5, DN: 75 cho 10 kết nối đầu, sau đó +5 / kết nối
 *          - Phí thuê kênh: Dân: 7.5/kênh, DN: 50/kênh
 * output: Tổng chi phí = phí xử lý hóa đơn + phí dv cơ bản + phí thuê kênh
 */
function tinhBai4() {
  const maKhachHang = document.getElementById("b4-ma-khach-hang").value;
  const loaiKhach = document.getElementById("b4-loai-khach").value;
  const soKenh = document.getElementById("b4-so-kenh").value * 1;
  const soKetNoi = document.getElementById("b4-so-ket-noi").value * 1;
  var phiXuLy = 0;
  var phiDv = 0;
  var phiThueKenh = 0;
  if (loaiKhach == "nd") {
    // Dân
    phiXuLy = 4.5;
    phiDv = 20.5;
    phiThueKenh = 7.5 * soKenh;
  } else {
    // Doanh nghiệp
    phiXuLy = 15;
    phiThueKenh = 50 * soKenh;
    if (soKetNoi <= 10) {
      phiDv = 75;
    } else {
      phiDv = 75 + (soKetNoi - 10) * 5;
    }
  }
  const tongChiPhi = phiXuLy + phiDv + phiThueKenh;
  document.getElementById(
    "b4-result"
  ).innerHTML = `Tiền cáp của khách hàng ${maKhachHang} là: $${tongChiPhi}`;
}
function bai4_toggleKetNoi(e) {
  const loaiKhach = e.value;
  document.getElementById("b4-so-ket-noi").style.display =
    loaiKhach == "dn" ? "block" : "none";
}
tinhBai4();
