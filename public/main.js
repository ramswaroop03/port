const users = [
    {
      year: "1",
      regNumber: "RA2411030040013",
      password: "ram$03",
      redirectPage: "RA2411030040013.html"
    },
    {
      year: "1",
      regNumber: "r",
      password: "r",
      redirectPage: "RA2411030040013.html"
    },
    {
      year: "1",
      regNumber: "RA2411030040015",
      password: "mark$99",
      redirectPage: "RA2411030040015.html"
    }
    // Add more users as needed
  ];
  
  function submitForm() {
      const year = document.getElementById("year").value;
      const regNumber = document.getElementById("regNumber").value;
      const password = document.getElementById("password").value;
  
      const matchedUser = users.find(
          (user) => user.year === year && user.regNumber === regNumber && user.password === password
      );
  
      if (matchedUser) {
          alert(`Year: ${year}\nRegistration Number: ${regNumber}\nPassword: ${password}`);
          window.location.href = `../public/${matchedUser.redirectPage}`; // Updated redirection to pages folder
      } else {
          alert("Incorrect details. Please ensure that the registration number, password, and year are correct.");
      }
  }
  
  // Function to reset the password
  function resetPassword(regNumber, newPassword) {
      const user = users.find(user => user.regNumber === regNumber);
      if (user) {
          user.password = newPassword; // Update the user's password
          return true; // Indicate success
      }
      return false; // Indicate failure
  }
