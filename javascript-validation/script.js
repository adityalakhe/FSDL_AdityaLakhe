function validateForm() {
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    
    
    if (name === "") {
        alert("Name must not be empty");
        return false;
    }
    
    
    if (name.trim().length < 2) {
        alert("Name must be at least 2 characters long");
        return false;
    }
    
    
    if (email === "") {
        alert("Email must not be empty");
        return false;
    }
    
    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address (e.g., user@example.com)");
        return false;
    }
    
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }
    
    
    if (isNaN(mobile) || mobile.length !== 10) {
        alert("Enter valid 10-digit mobile number");
        return false;
    }
    
    
    if (mobile.charAt(0) < '6' || mobile.charAt(0) > '9') {
        alert("Mobile number must start with 6, 7, 8, or 9");
        return false;
    }
    
    
    alert("Form submitted successfully!");
    return true;
}