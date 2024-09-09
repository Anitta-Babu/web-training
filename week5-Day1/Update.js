//----------------------------------------------------------Part For Display Data-------------------------------------------------------
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

let customerId = getQueryParam("id");

fetch("http://localhost:3000/employee")
  .then((result) => {
    if (!result.ok) {
      console.log("Problem");
      return;
    }
    return result.json();
  })
  .then((customerArray) => {
    for (let i in customerArray) {
      if (customerArray[i].id === customerId) {
        document.getElementById("name").value = customerArray[i].name;
        document.getElementById("email").value = customerArray[i].email;
        document.getElementById("username").value = customerArray[i].username;
        document.getElementById("phone").value = customerArray[i].phone;
      }
    }
  })
  .catch((error) => console.log(error));
//---------------------------------------------------------------------------------------------------------------------------------

//-------------------------------------------Part for Validation-------------------------------------------------------------------

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
//---------------------------------------------------------------------------------------------------------------------------------

//--------------------------------------------------------Part for Update-----------------------------------------------------------
document.getElementById("submit").addEventListener("click", (event) => {
  event.preventDefault();
  const customerNameElement = document.getElementById("name").value;
  const customerEmailElement = document.getElementById("email").value;
  const customerPhoneElement = document.getElementById("phone").value;
  const customerUserNameElement = document.getElementById("username").value;
  console.log(
    customerNameElement,
    customerEmailElement,
    customerPhoneElement,
    customerUserNameElement
  );

  if (
    isValidEmail(customerEmailElement) &&
    isValidContactNumber(customerPhoneElement)
  ) {
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
      console.log(customerId);

      fetch(`http://localhost:3000/employee/${customerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
    }
  }
});

//---------------------------------------------------------------------------------------------------------------------------------
