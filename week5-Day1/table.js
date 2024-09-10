fetch("http://localhost:3000/employee")
  .then((result) => {
    if (!result.ok) {
      console.log("Problem");
      return;
    }
    return result.json();
  })
  .then(function (data) {
    let tableBodyElement = document.querySelector("#tableBody");
    let tableHeadElement = document.querySelector("#tableHead");

    let tableHeadData = `<tr>
            <th>Customer Name</th>
            <th>Customer Username</th>
            <th>Customer Email</th>
            <th>Customer Phone No.</th>
            <th></th>
            <th></th>
          </tr>`;
    tableHeadElement.innerHTML = tableHeadData;
    let tableData = "";
    for (let i in data) {
      tableData += `
      <tr>
      <td>${data[i].name}</td>
      <td>${data[i].email}</td>
      <td> ${data[i].username}</td>
      <td>${data[i].phone}</td>
      <td><button id="updateCustomer${i}">Update</button></td>
      <td><button id="deleteCustomer${i}">Delete</button></td>`;
    }
    tableBodyElement.innerHTML = tableData;

    data.forEach((item, index) => {
      document
        .getElementById(`updateCustomer${index}`)
        .addEventListener("click", function (event) {
          window.location.replace(`Update.html?id=${data[index].id}`);
        });
      document
        .getElementById(`deleteCustomer${index}`)
        .addEventListener("click", function (event) {
          console.log(data[index].id);
          customerDelete(data[index].id);
        });
    });
  })
  .catch((error) => console.log(error));
//-------------------------------------------------------------------------------------------------------------------------

//------------------------------Delete customer-----------------------------------------------------------------------------

function customerDelete(customerId) {
  console.log(customerId);
  alert("Are you sure ");
  fetch(`http://localhost:3000/employee/${customerId}`, {
    method: "DELETE",
  })
    .then((response) => {
      console.log(response.status);
      window.location.replace("table.html");
    })
    .catch((error) => {
      console.log(error);
    });
}
//--------------------------------------------------------------------------------------------------------------------------

//----------------------Create New Customer--------------------------------------------------------------------------------
document
  .getElementById("addButton")
  .addEventListener("click", function (event) {
    window.location.replace("Registration.html");
  });
