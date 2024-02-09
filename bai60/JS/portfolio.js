// Validate form
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

// Validate image
function validateImage() {
  var filePath = document.getElementById("imageUpload").value;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  if (!allowedExtensions.exec(filePath)) {
    alert("Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
    document.getElementById("imageUpload").value = "";
    return false;
  }
}
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("myHeader").style.fontSize = "30px";
  } else {
    document.getElementById("myHeader").style.fontSize = "90px";
  }
}
