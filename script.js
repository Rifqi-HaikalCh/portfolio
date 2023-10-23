function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function validate() {
  var name = document.querySelector(".msg-name-emp");
  var email = document.querySelector(".msg-email-emp");
  var msg = document.querySelector(".msg-txt-emp");
  var inputName = document.getElementById("name-input");
  var inputEmail = document.getElementById("email-input");
  var inputTxt = document.getElementById("message");

  if (
    inputName.value === "" ||
    inputEmail.value === "" ||
    inputTxt.value === ""
  ) {
    if (inputName.value === "") {
      name.style.display = "block";
      name.style.color = "red";
      setTimeout(() => {
        name.style.display = "none";
      }, 2000);
    }
    if (inputEmail.value === "") {
      email.style.display = "block";
      email.style.color = "red";
      setTimeout(() => {
        email.style.display = "none";
      }, 2000);
    }
    if (inputTxt.value === "") {
      msg.style.display = "block";
      msg.style.color = "red";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
    }
    return false;
  } else {
    return true;
  }
}
