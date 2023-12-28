/**
 * structure of employee
 employee={
    name
    role
    salaray
    phoneNumber
    email
    company name
 }

 */
// //lets create dummy employee list//
// const employees = [
//     {
//         name: "salman",
//         role: "SDE",
//         salary: "989848357",
//         phoneNumber: "546532121564",
//         email: "salman@gmail.com",
//         companyName: "Amazon",
//     },
//     {
//         name: "Harshal",
//         role: "QA",
//         salaray: "9264545457",
//         phoneNumber: "54154874",
//         email: "Harshal@gmail.com",
//         companyName: "facebook",
//     },
// ];
const tbody = document.getElementById("tbody");
let employeId = 1;
/* lets create the new td data and lets create td by function*/
function addEmployee(empObj) {
    const tr = document.createElement("tr"); //this will be the row for below trs
    //tr got created <tr></tr>
    const employeeidcell = document.createElement("td");
    employeeidcell.innerText = employeId++;
    //<td>1</td> got created with value 1 intially//
    tr.appendChild(employeeidcell);
    //now append above td into tr <tr><td>1</td></tr>//
    for (let key in empObj) {
        const cell = document.createElement("td");
        cell.innerText = empObj[key];
        tr.appendChild(cell);
    }
    /**************adding edit and delete button ******************* */
    const actionCell = document.createElement("td"); //first create td then add buttons
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete";
    const editButton = document.createElement("button")
    editButton.innerText = "Edit";
    actionCell.append(deleteButton, editButton);

    deleteButton.addEventListener("click", deleteRecord);
    editButton.addEventListener("click", editRecord)
    tr.appendChild(actionCell);

    tbody.appendChild(tr);
}
// employees.forEach((emp) => {
//     addEmployee(emp)

// });
/* lets handle popup */
const popup = document.querySelector(".popup");
function togglePopup() {
    if (popup.style.display === "none") {
        popup.style.display = "flex";
    }
    else {
        popup.style.display = "none";
    }
}
//now handle form submission//

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.button.innerText === "Submit Data") {
    // Check if the button text is "Submit Data"
    
        const employee = {
            name: form.name.value,
            role: form.role.value,
            salary: form.salary.value,
            phoneNumber: form.phoneNumber.value,
            email: form.email.value,
            companyName: form.companyName.value
        };
       
        addEmployee(employee);

        form.reset();
    } else {
        // If the button text is not "Submit Data," update the existing row
        cells[1].innerText = form.name.value;
        cells[2].innerText = form.role.value;
        cells[3].innerText = form.salary.value;
        cells[4].innerText = form.phoneNumber.value;
        cells[5].innerText = form.email.value;
        cells[6].innerText = form.companyName.value;
    }

    togglePopup();
});



function deleteRecord(e) {
    e.target.parentNode.parentNode.remove();
}
let cells;
function editRecord(e) {
    let row = e.target.parentNode.parentNode;
     cells = row.querySelectorAll("td");
     form.button.innerText = "Edit Details";
    /***********lets get existing data of the row */
    form.name.value = cells[1].innerText;
    form.role.value = cells[2].innerText;
    form.salary.value = cells[3].innerText;
    form.phoneNumber.value = cells[4].innerText;
    form.email.value = cells[5].innerText;
    form.companyName.value = cells[6].innerText;
    togglePopup();
}
// e.target in submit  button will give us target as form
