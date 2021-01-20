


  function passwordChecker() {
    let input = document.getElementById("password").value;
    input = input.trim();

    if (input.length == 0) {
      document.getElementById("passwordMeter").innerHTML = "Password strength: No Password";
    } else if (input.length < 8) {
      // console.log("Minimum length of this field must be equal or greater than 8 symbols.Leading and trailing spaces will be ignored.");
      document.getElementById("passwordMeter").innerHTML = "Password strength: Weak";
      document.getElementById("passwordWarning").innerHTML = "Minimum length of this field must be equal or greater than 8 symbols.Leading and trailing spaces will be ignored.";
    } else if (input.match(/[a-z]/g) && input.match(/[A-Z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g) && input.length >= 11) {
      // console.log("Password strength: Very Strong");
      document.getElementById("passwordMeter").innerHTML = "Password strength: Very Strong";
      document.getElementById("passwordWarning").style.visibility = "hidden";
    } else if ((input.length >= 11) && ((input.match(/[a-z]/g) && input.match(/[A-Z]/g) && input.match(/[0-9]/g)) || (input.match(/[a-z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g)) || (input.match(/[A-Z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g)))) {
      // console.log("Password strength: Strong");
      document.getElementById("passwordMeter").innerHTML = "Password strength: Strong";
      document.getElementById("passwordWarning").style.visibility = "hidden";
    } else if (input.match(/[a-z]/g) && input.match(/[A-Z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g) && input.length >= 9) {
      // console.log("Password strength: Strong");
      document.getElementById("passwordMeter").innerHTML = "Password strength: Strong";
      document.getElementById("passwordWarning").style.visibility = "hidden";
    } else if (input.match(/[a-z]/g) && input.match(/[A-Z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g) && input.length >= 8) {
      // console.log("Password strength: Medium");
      document.getElementById("passwordMeter").innerHTML = "Password strength: Medium";
      document.getElementById("passwordWarning").style.visibility = "hidden";
    } else if ((input.length >= 8) && ((input.match(/[a-z]/g) && input.match(/[A-Z]/g) && input.match(/[0-9]/g)) || (input.match(/[a-z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g)) || (input.match(/[A-Z]/g) && input.match(/[0-9]/g) && input.match(/[^a-zA-Z\d]/g)))) {
      // console.log("Password strength: Weak");
      document.getElementById("passwordMeter").innerHTML = "Password strength: Weak";
      document.getElementById("passwordWarning").style.visibility = "hidden";
    } else {
      document.getElementById("passwordWarning").innerHTML = "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.";
    }
  }
  
  // NOT WORKING YET CHECK REQUIRED FIELDS ON SUBMIT
  // function isRequired(){
  //   let input = document.getElementsByClassName("required").value;

  //   if (input.length == 0) {
  //     document.getElementsByClassName("requiredWarning").innerHTML = "This is a required field.";
  //   }
  // }
// const input = document.getElementsByClassName("required");
// const inputError = document.getElementsByClassName("requiredWarning")

// function isRequired(){
//   // document.getElementsById('submit').addEventListener('submit', function (event){
//     if(!input.validity.valid) {
//       showError();
//       event.preventDefault();
//     }
//   }
// //   });
// // }

// function showError() {
//   if(input.validity.valueMissing){
//     inputError.textContent = "This is a required field.";
//   }
// }
