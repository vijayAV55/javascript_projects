var users = [
  {
    fname: "John",
    lname: "Doe",
    email: "john.doe@example.com",
  },
  {
    fname: "Jane",
    lname: "Smith",
    email: "jane.smith@example.com",
  },
  {
    fname: "Michael",
    lname: "Johnson",
    email: "michael.johnson@example.com",
  },
  {
    fname: "Emily",
    lname: "Brown",
    email: "emily.brown@example.com",
  },
  {
    fname: "David",
    lname: "Williams",
    email: "david.williams@example.com",
  },
  {
    fname: "Sarah",
    lname: "Jones",
    email: "sarah.jones@example.com",
  },
  {
    fname: "Matthew",
    lname: "Martinez",
    email: "matthew.martinez@example.com",
  },
  {
    fname: "Jessica",
    lname: "Garcia",
    email: "jessica.garcia@example.com",
  },
  {
    fname: "Daniel",
    lname: "Miller",
    email: "daniel.miller@example.com",
  },
  {
    fname: "Jennifer",
    lname: "Davis",
    email: "jennifer.davis@example.com",
  },
];

function addUser() {
  var person = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
  };
  console.log(person);
  users.push(person);
  displayUsers();
  clearUser();
}

function clearUser() {
  document.getElementById("fname").value = "";
  document.getElementById("lname").value = "";
  document.getElementById("email").value = "";
}
function displayUsers() {
  document.querySelector("tbody").innerHTML = "";
  users.map((userObj, i) => {
    var myTr = document.createElement("tr");
    for (a in userObj) {
      var myTd = document.createElement("td");
      myTd.innerHTML = userObj[a];
      myTr.appendChild(myTd);
    }
    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editbtn = document.createElement("button");
    editbtn.setAttribute("onclick", "edituser(" + i + ")");
    var deleteBtn = document.createElement("button");
    editTd.appendChild(editbtn);
    deleteTd.appendChild(deleteBtn);
    editbtn.innerHTML = "Edit User";
    deleteBtn.innerHTML = "Delete User";
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);
    document.querySelector("tbody").appendChild(myTr);
  });
}
displayUsers();
function deleteUser(i) {
  users.splice(i, 1);
  displayUsers();
}
var gIndex = null;
function edituser(i) {
  gIndex = i;
  var userToEdit = users[i];
  for (a in userToEdit) {
    document.getElementById(a).value = userToEdit[a];
  }
  document.getElementById("addUserBtn").style.display = "none";
  document.getElementById("updateUserBtn").style.display = "block";
}

function updateUser() {
  var person = {
    fname: document.getElementById("fname").value,
    lname: document.getElementById("lname").value,
    email: document.getElementById("email").value,
  };
  users[gIndex] = person;
  displayUsers();
  clearUser();
  document.getElementById("updateUserBtn").style.display = "none";
  document.getElementById("addUserBtn").style.display = "block";
}
