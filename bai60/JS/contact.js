window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var name = document.querySelector('input[type="text"]').value;
      var email = document.querySelector('input[type="email"]').value;

      if (name === "" || email === "") {
        alert("Vui lòng điền đầy đủ thông tin.");
        return false;
      }

      var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        alert("Email không hợp lệ.");
        return false;
      }

      alert("Thông tin đã được gửi thành công.");
      return true;
    });

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".section-header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
      header.style.backgroundColor = "#ff1a8c";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });

  window.addEventListener("resize", function () {
    var width = window.innerWidth;

    if (width < 992) {
      document.querySelector(".contact-form").style.width = "100%";
    } else {
      document.querySelector(".contact-form").style.width = "45%";
    }
  });
};
