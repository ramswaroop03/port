//

// Initialize EmailJS
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("OSNjUU6fMm4AEx_dO"); // Replace with your EmailJS Public Key
});

// User flow prompt
alert("This is a free service by PYCHUNK");
let username = prompt("Enter your username");
alert("Hello " + username + ", welcome to PYCHUNK");

let generatedOTP; // Variable to store the generated OTP

// Function to send OTP via EmailJS
function sendOTP() {
    const email = document.getElementById("email").value;
    const fullname = document.getElementById("fullname").value;
    // Generate a 6-digit OTP
    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    console.log("Hello world!");
    console.log=(`Your OTP is ${generatedOTP}`);
    //using api
    var data = {
        service_id: 'pychunk',
        template_id: 'pychunk-auth',
        user_id: 'OSNjUU6fMm4AEx_dO',
        template_params: {
            'username': fullname,
            'generatedOTP': generatedOTP, // Send the generated OTP
            'email_address': email // Send to the email provided by the user
        }
    };
     
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function() {
        alert(`OTP successfully sent !`);
        document.getElementById("otp-section").style.display = "block"; // Show the OTP input section
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
   
}

// Function to verify OTP entered by the user
function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;

    if (enteredOTP == generatedOTP) { // Compare entered OTP with generated OTP
        alert("OTP verified successfully!");
        window.location.href = "/public/main.html"; // Redirect to main.html in the public folder
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
