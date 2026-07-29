// ================================
// Account System
// ================================

let account = JSON.parse(localStorage.getItem("account"));
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

let students = JSON.parse(localStorage.getItem("students")) || [];

let editIndex = -1;

if(currentUser){

    document.getElementById("welcomePage").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("loginPage").style.display="none";
    document.getElementById("dashboard").style.display="block";

    document.getElementById("welcomeUser").innerHTML =
    "Welcome, " + currentUser.name + " 👋";

    displayStudents();

}
else{

    document.getElementById("welcomePage").style.display="block";

}// ================================
// Show Signup
// ================================

function showSignup(){

    document.getElementById("welcomePage").style.display="none";
    document.getElementById("signupPage").style.display="block";
    document.getElementById("loginPage").style.display="none";

}

// ================================
// Show Login
// ================================

function showLogin(){

    document.getElementById("welcomePage").style.display="none";
    document.getElementById("signupPage").style.display="none";
    document.getElementById("loginPage").style.display="block";

}

// ================================
// Create Account
// ================================

function createAccount(){

    let name=document.getElementById("signupName").value.trim();

    let password=document.getElementById("signupPassword").value;

    let confirm=document.getElementById("confirmPassword").value;

    if(name=="" || password=="" || confirm==""){

        alert("Please fill all fields.");
        return;

    }

    if(password!==confirm){

        alert("Passwords do not match.");
        return;

    }

    let user={

        name:name,
        password:password

    };

    localStorage.setItem("account",JSON.stringify(user));

    alert("Account Created Successfully!");

    showLogin();

}// ================================
// Login
// ================================

function login(){

    let name=document.getElementById("loginName").value.trim();

    let password=document.getElementById("loginPassword").value;

    let account=JSON.parse(localStorage.getItem("account"));

    if(account==null){

        alert("Please create an account first.");

        return;

    }

    if(name===account.name && password===account.password){

        localStorage.setItem("currentUser",JSON.stringify(account));

        document.getElementById("loginPage").style.display="none";

        document.getElementById("dashboard").style.display="block";

        document.getElementById("welcomeUser").innerHTML=
        "Welcome, "+account.name+" 👋";

        displayStudents();

    }

    else{

        alert("Invalid Name or Password.");

    }

}

// ================================
// Logout
// ================================

function logout(){

    localStorage.removeItem("currentUser");

    location.reload();

}// ================================
// Add Student
// ================================

function addStudent(){

    let name = document.getElementById("name").value.trim();

    let age = document.getElementById("age").value;

    let course = document.getElementById("course").value;

    if(name=="" || age=="" || course==""){

        alert("Please fill all fields.");

        return;

    }

    let student={

        name:name,
        age:age,
        course:course

    };

    if(editIndex==-1){

        students.push(student);

    }

    else{

        students[editIndex]=student;

        editIndex=-1;

        document.getElementById("addBtn").innerHTML="➕ Add Student";

    }

    localStorage.setItem("students",JSON.stringify(students));

    displayStudents();

    clearFields();

    alert("Student Saved Successfully!");

}// ================================
// Display Students
// ================================

function displayStudents(){

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    if(document.getElementById("totalStudents")){
        document.getElementById("totalStudents").innerHTML = students.length;
    }

    students.forEach(function(student,index){

        table.innerHTML += `

        <tr>

            <td>${student.name}</td>

            <td>${student.age}</td>

            <td>${student.course}</td>

            <td>

                <button
                class="editBtn"
                onclick="editStudent(${index})">

                ✏ Edit

                </button>

                <button
                class="deleteBtn"
                onclick="deleteStudent(${index})">

                🗑 Delete

                </button>

            </td>

        </tr>

        `;

    });

}// ================================
// Edit Student
// ================================

function editStudent(index){

    document.getElementById("name").value = students[index].name;

    document.getElementById("age").value = students[index].age;

    document.getElementById("course").value = students[index].course;

    editIndex = index;

    document.getElementById("addBtn").innerHTML = "✅ Update Student";

    document.getElementById("name").focus();

}// ================================
// Delete Student
// ================================

function deleteStudent(index){

    let check = confirm("Are you sure you want to delete this student?");

    if(check){

        students.splice(index,1);

        localStorage.setItem("students", JSON.stringify(students));

        displayStudents();

        alert("Student Deleted Successfully!");

    }

}// ================================
// Edit Student
// ================================

function editStudent(index){

    document.getElementById("name").value = students[index].name;

    document.getElementById("age").value = students[index].age;

    document.getElementById("course").value = students[index].course;

    editIndex = index;

    document.getElementById("addBtn").innerHTML = "✅ Update Student";

    document.getElementById("name").focus();

}// ================================
// Search Student
// ================================

function searchStudent(){

    let search = document.getElementById("search").value.toLowerCase();

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach(function(student,index){

        if(
            student.name.toLowerCase().includes(search) ||
            student.course.toLowerCase().includes(search)
        ){

            table.innerHTML += `
            <tr>

                <td>${student.name}</td>

                <td>${student.age}</td>

                <td>${student.course}</td>

                <td>

                    <button
                    class="editBtn"
                    onclick="editStudent(${index})">

                    ✏️ Edit

                    </button>

                    <button
                    class="deleteBtn"
                    onclick="deleteStudent(${index})">

                    🗑 Delete

                    </button>

                </td>

            </tr>
            `;

        }

    });

    if(table.innerHTML==""){

        table.innerHTML=`
        <tr>
            <td colspan="4">No Student Found</td>
        </tr>
        `;

    }

}



// ================================
// Delete All Students
// ================================

function deleteAllStudents(){

    if(students.length===0){

        alert("No students to delete.");

        return;

    }

    let check = confirm("Are you sure you want to delete all students?");

    if(check){

        students=[];

        localStorage.setItem("students",JSON.stringify(students));

        displayStudents();

        alert("All Students Deleted Successfully!");

    }

}