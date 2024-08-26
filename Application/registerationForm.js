document.getElementById('registerationForm').addEventListener('submit', function (event) {
  event.preventDefault();

  if (emailCheck() && contactCheck()) {
    alert("Registeration done sucessfull");
    location.replace("home.html");
  } else {
    alert("Registeration not sucessfull");

  }
});

function passwordShow() {
  const password = document.getElementById("Password");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function emailCheck() {
  const errorMessage = document.getElementById("emailMessage");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const email = document.getElementById('Email').value;

  if (emailPattern.test(email)) {
    errorMessage.textContent = "";
    return true;
  } else {
    errorMessage.textContent = "Please enter a valid email address.";
    return false;
  }
}

function contactCheck() {
  const errorMessage = document.getElementById("contactMessage");
  const contact = document.getElementById('Contact').value;

  if (contact.length === 10) {
    errorMessage.textContent = "";
    return true;
  }
  else {
    errorMessage.textContent = "Please enter a valid phone number.";
    return false;
  }
}