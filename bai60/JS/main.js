window.onload = function () {
  // Validate form
  function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  // Validate image
  function validateImage() {
    var fileInput = document.getElementById("fileInput");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert("Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
      fileInput.value = "";
      return false;
    }
  }
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("navbar").style.fontSize = "30px";
    } else {
      document.getElementById("navbar").style.fontSize = "90px";
    }
  }
};
