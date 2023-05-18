function DeleteForm() {
  document.getElementById("my-form").reset();
}

var dropdown = document.getElementById("center");
function drop() {
  dropdown.style.display = "none";
}
function myDrop() {
  dropdown.style.display = "block";
}

// var dropdown = document.getElementsByClassName("center");
// var i;

// for (i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }
var finput = document.getElementById("finput");
var linput = document.getElementById("linput");
var einput = document.getElementById("einput");
var ainput = document.getElementById("ainput");
var cninput = document.getElementById("cninput");
function IsEmpty() {
  if (document.forms["frm"].input.value === "") {
    finput.style.border = "1px solid red";
    alert("Vui lòng nhập first name");
    return false;
  } else if (document.forms["frm"].linput.value === "") {
    linput.style.border = "1px solid red";
    alert("Vui lòng nhập last name");
    return false;
  } else if (document.forms["frm"].einput.value === "") {
    einput.style.border = "1px solid red";
    alert("Vui lòng nhập email");
    return false;
  } else if (document.forms["frm"].ainput.value === "") {
    ainput.style.border = "1px solid red";
    alert("Vui lòng nhập address");
    return false;
  } else if (document.forms["frm"].cninput.value === "") {
    cninput.style.border = "1px solid red";
    alert("Vui lòng nhập contact");
    return false;
  }
  return true;
}

// function validateEmail(emailId) {
//   var mailformat =
//     /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   if (emailId.value.match(mailformat)) {
//     document.einput.text1.focus();
//     return true;
//   } else {
//     alert("Invalid email address.");
//     document.form1.text1.focus();
//     return false;
//   }
// }

    
var emailField = document.getElementById("einput");
function validateEmail(){
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailField.style.border = "1px solid red";
        $('#imageurl').val("xred.png");
        return false;
    }
    emailField.style.border = "1px solid green";
    return true;
}
