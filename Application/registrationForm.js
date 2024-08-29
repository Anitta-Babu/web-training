document
  .getElementById("registrationFormDiv")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Hai");

    if (isValidEmail() && isValidContactNumber()) {
      alert("Registration done successfully");
      location.replace("home.html");
    } else {
      alert("Registration not successful");
    }
  });

function showPassword() {
  const passwordElement = document.getElementById("Password");

  if (passwordElement.type === "password") {
    passwordElement.type = "text";
  } else {
    passwordElement.type = "password";
  }
}

function isValidEmail() {
  const errorMessageElement = document.getElementById("emailErrorMessage");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const emailElement = document.getElementById("Email").value;

  if (emailPattern.test(emailElement)) {
    errorMessageElement.textContent = "";
    return true;
  } else {
    errorMessageElement.textContent = "Please enter a valid email address.";
    return false;
  }
}

function isValidContactNumber() {
  const contactNumberErrorMessageElement = document.getElementById(
    "contactNumberErrorMessage"
  );
  const contactNumberElement = document.getElementById("ContactNumber").value;

  if (contactNumberElement.length === 10) {
    contactNumberErrorMessageElement.textContent = "";
    return true;
  } else {
    contactNumberErrorMessageElement.textContent =
      "Please enter a valid phone number.";
    return false;
  }
}
