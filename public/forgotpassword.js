function requestPasswordReset() {
    const regNumber = document.getElementById("regNumber").value; // Get the registration number
    const newPassword = prompt("Please enter your new password:"); // Prompt for new password
    const messageDiv = document.getElementById("message");

    // Check if the registration number exists
    const user = users.find(user => user.regNumber === regNumber); // Assuming 'users' is accessible

    if (user) {
        // Call the resetPassword function from main.js
        const success = resetPassword(regNumber, newPassword);
        if (success) {
            messageDiv.innerText = "Your password has been reset successfully."; // Notify the user
        } else {
            messageDiv.innerText = "Failed to reset password. Please try again."; // Notify if failed
        }
    } else {
        messageDiv.innerText = "Registration number not found. Please check and try again."; // Notify if registration number is not found
    }
}
