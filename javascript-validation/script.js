function validateForm() {
    // Clear previous errors
    clearErrors();
    
    // Get form values and trim whitespace
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const mobile = document.getElementById("mobile").value.trim();
    
    let isValid = true;

    // Validate Name
    if (name === "") {
        showError("name", "Name is required");
        isValid = false;
    } else if (name.length < 2) {
        showError("name", "Name must be at least 2 characters long");
        isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        showError("name", "Name should only contain letters and spaces");
        isValid = false;
    }

    // Validate Email
    if (email === "") {
        showError("email", "Email is required");
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError("email", "Please enter a valid email address");
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        showError("password", "Password is required");
        isValid = false;
    } else if (password.length < 6) {
        showError("password", "Password must be at least 6 characters long");
        isValid = false;
    } else if (password.length > 20) {
        showError("password", "Password must not exceed 20 characters");
        isValid = false;
    }

    // Validate Mobile Number
    if (mobile === "") {
        showError("mobile", "Mobile number is required");
        isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
        showError("mobile", "Please enter a valid 10-digit mobile number");
        isValid = false;
    } else if (!/^[6-9]/.test(mobile)) {
        showError("mobile", "Mobile number should start with 6, 7, 8, or 9");
        isValid = false;
    }

    // If all validations pass
    if (isValid) {
        showSuccess();
        // Reset form after 2 seconds
        setTimeout(() => {
            document.getElementById("registrationForm").reset();
            hideSuccess();
        }, 2000);
    }

    return false; // Prevent actual form submission for demo purposes
}

// Helper function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message and highlight field
function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.getElementById(fieldId + "Error");
    
    field.classList.add("error");
    errorDiv.textContent = message;
    errorDiv.classList.add("show");
}

// Clear all error messages and highlights
function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    const inputFields = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password'], input[type='tel']");
    
    errorMessages.forEach(error => {
        error.classList.remove("show");
        error.textContent = "";
    });
    
    inputFields.forEach(field => {
        field.classList.remove("error");
    });
}

// Show success message
function showSuccess() {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.add("show");
}

// Hide success message
function hideSuccess() {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("show");
}

// Add real-time validation on blur
document.addEventListener("DOMContentLoaded", function() {
    const fields = ["name", "email", "password", "mobile"];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener("blur", function() {
                validateField(fieldId);
            });
            
            // Clear error on input
            field.addEventListener("input", function() {
                const errorDiv = document.getElementById(fieldId + "Error");
                if (errorDiv.classList.contains("show")) {
                    field.classList.remove("error");
                    errorDiv.classList.remove("show");
                }
            });
        }
    });
});

// Validate individual field
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    
    switch(fieldId) {
        case "name":
            if (value && (value.length < 2 || !/^[a-zA-Z\s]+$/.test(value))) {
                showError(fieldId, value.length < 2 ? "Name must be at least 2 characters" : "Name should only contain letters");
            }
            break;
        case "email":
            if (value && !isValidEmail(value)) {
                showError(fieldId, "Please enter a valid email address");
            }
            break;
        case "password":
            if (value && (value.length < 6 || value.length > 20)) {
                showError(fieldId, value.length < 6 ? "Password must be at least 6 characters" : "Password must not exceed 20 characters");
            }
            break;
        case "mobile":
            if (value && (!/^\d{10}$/.test(value) || !/^[6-9]/.test(value))) {
                showError(fieldId, "Please enter a valid 10-digit mobile number");
            }
            break;
    }
}