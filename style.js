// Get previous users from localStorage
var users = JSON.parse(localStorage.getItem("users")) || [];

// Collect user information using prompt()
var fullName = prompt("Enter your Full Name:");
var age = prompt("Enter your Age:");
var city = prompt("Enter your City:");
var profession = prompt("Enter your Profession:");
var email = prompt("Enter your Email:");
var phone = prompt("Enter your Phone Number:");

// Create object
var user = {
    fullName: fullName,
    age: age,
    city: city,
    profession: profession,
    email: email,
    phone: phone
};

// Store object inside array
users.push(user);

// Save array into localStorage
localStorage.setItem("users", JSON.stringify(users));

// Get div from HTML
var userData = document.getElementById("userData");

// Display all users using forEach()
users.forEach(function(item) {

    userData.innerHTML += `
    <div class="card">
        <h2>${item.fullName}</h2>
        <p><strong>Age:</strong> ${item.age}</p>
        <p><strong>City:</strong> ${item.city}</p>
        <p><strong>Profession:</strong> ${item.profession}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Phone:</strong> ${item.phone}</p>
    </div>
    `;

});