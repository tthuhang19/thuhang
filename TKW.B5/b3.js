var soNgauNhien = Math.floor(Math.random() * 10) + 1; // Tạo số ngẫu nhiên từ 1 đến 10

function doanSo() {
  var soDoan = parseInt(prompt("Hay doan mot so tu 1 den 10:"));
  while (soDoan !== soNgauNhien) {
    soDoan = parseInt(prompt("So ban doan khong dung. Hay thu lai:"));
  }
  alert("Chuc mung! Ban da doan dung so.");
}

doanSo();
