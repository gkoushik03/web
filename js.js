function validateLogin() {
    var username = document.getElementById("username").value;
    if (username.length > 10 && username.includes("@") && (username.endsWith(".com") || username.endsWith(".in"))) {
    window.location.href = 'index.html';
    } else {
    alert("Invalid username format. Please make sure your username is at least 10 characters long, contains '@', and ends with '.com' or '.in'.");
    }
    }
