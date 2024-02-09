window.onload = function () {
  // Kiểm tra ảnh
  var img = document.querySelector(".imageSection img");
  if (img.src == "") {
    alert("Ảnh không tồn tại. Vui lòng thêm ảnh.");
  }

  // Kiểm tra form
  var personalInfo = document.querySelectorAll(".personalInfo div");
  personalInfo.forEach(function (info) {
    var text = info.textContent.split(":")[1].trim();
    if (text == "") {
      alert("Vui lòng điền đầy đủ thông tin cá nhân.");
    }
  });
  var scrollPosition = window.pageYOffset;
  var body = document.body;

  if (scrollPosition > 100) {
    body.style.backgroundColor = "blue";
  } else {
    body.style.backgroundColor = "#2b2a2f";
  }
};
