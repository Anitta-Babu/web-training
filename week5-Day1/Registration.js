//-------Home Part-------------------------------------------------------------------------------------------
document.getElementById("home").addEventListener("click", function (event) {
  window.location.replace("table.html");
});
//------Registration Part-------------------------------------------------------------------------------------
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  const customerNameElement = document.getElementById("name").value;
  const customerEmailElement = document.getElementById("email").value;
  const customerPhoneElement = document.getElementById("phone").value;
  const customerUserNameElement = document.getElementById("username").value;
  if (
    isValidEmail(customerEmailElement) &&
    isValidContactNumber(customerPhoneElement)
  ) {
    const newUser = {
      name: customerNameElement,
      username: customerUserNameElement,
      email: customerEmailElement,
      phone: customerPhoneElement,
    };

    fetch("http://localhost:3000/employee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          alert("Registration done successfully");
        } else {
          alert("Registration not successful");
        }
      })
      .catch((error) => {
        alert(error);
      });
  }
});

//-----------Email and contact Varification -------------------------------------------------------------------
function isValidEmail(emailElement) {
  const errorMessageElement = document.getElementById("emailErrorMessage");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(emailElement)) {
    errorMessageElement.textContent = "";
    return true;
  } else {
    errorMessageElement.textContent = "Please enter a valid email address.";
    return false;
  }
}

function isValidContactNumber(customerPhoneElement) {
  const contactNumberErrorMessageElement = document.getElementById(
    "contactNumberErrorMessage"
  );

  if (customerPhoneElement.length === 10) {
    contactNumberErrorMessageElement.textContent = "";
    return true;
  } else {
    contactNumberErrorMessageElement.textContent =
      "Please enter a valid phone number.";
    return false;
  }
}
