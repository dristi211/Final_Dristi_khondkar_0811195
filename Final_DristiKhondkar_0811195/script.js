$(document).ready(function () {
    $("#myForm").validate({
        rules: {
            name: "required",
            DOB: {
                required: true,
                DOB: true
            },
            password: {
                required: true,
                minlength: 6
            },
            phone: {
                required: true,
                pattern: /^\d{3}-\d{3}-\d{4}$/
            }
        },
        messages: {
            name: "Please enter your name",
            DOB: {
                required: "Please enter your zipcode",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter your DOB",
                minlength: "Password must be at least 6 characters long"
            },
            phone: {
                required: "Please enter a phone number",
                pattern: "Please enter a valid Canadian phone number (e.g., 123-456-7890)"
            }
        }
    });
});