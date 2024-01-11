function kiemTraSo() {
  var num = document.getElementById("num").value;
  var result = document.getElementById("result");

  if (num % 2 == 0) {
    result.textContent = num + " la so chan.";
  } else {
    result.textContent = num + " la so le.";
  }
}
