var form = document.querySelector("form");
var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phonePattern =
  /^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,4}\)?[-.\s]?)*\d{3,4}[-.\s]?\d{3,4}$/;
var passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//-----------------------------------------------------------------
var firstName = document.querySelector("#firstNameInput");
var lastName = document.querySelector("#lastNameInput");
var email = document.querySelector("#emailInput");
var phone = document.querySelector("#phoneInput");
var password = document.querySelector("#passwordInput");
var confirmPassword = document.querySelector("#confirmPasswordInput");
var birthdate = document.querySelector("#birthdateInput");
var genderMale = document.querySelector("#maleInput");
var genderFemale = document.querySelector("#femaleInput");
//------------------------------------------------------------------
var firstNameLabel = document.querySelector("#firstNameLabel");
var lastNameLabel = document.querySelector("#lastNameLabel");
var emailLabel = document.querySelector("#emailLabel");
var phoneLabel = document.querySelector("#phoneLabel");
var passwordLabel = document.querySelector("#passwordLabel");
var confirmLabel = document.querySelector("#confirmLabel");
var birthdateLabel = document.querySelector("#birthdateLabel");
var genderLabel = document.querySelector("#genderLabel");
//-------------------------------------------------------------------
function valid(label, text) {
  label.innerHTML = text;
  label.classList.remove("text-danger");
}
function invalid(label, text) {
  label.innerHTML = text;
  label.classList.add("text-danger");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstName.value === "" ||
    firstName.value.charCodeAt(0) < 65 ||
    firstName.value.charCodeAt(0) > 90
  ) {
    invalid(firstNameLabel, "Please Enter Valid FirstName ⛔️");
  } else if (
    lastName.value === "" ||
    lastName.value.charCodeAt(0) < 65 ||
    lastName.value.charCodeAt(0) > 90
  ) {
    valid(firstNameLabel, "First Name :");
    invalid(lastNameLabel, "Please Enter Valid LastName ⛔️");
  } else if (!emailPattern.test(email.value)) {
    valid(lastNameLabel, "Last Name :");
    invalid(emailLabel, "Please Enter Valid Email ⛔️");
  } else if (!phonePattern.test(phone.value)) {
    valid(emailLabel, "Email :");
    invalid(phoneLabel, "Please Enter Valid PhoneNumber ⛔️");
  } else if (!passwordPattern.test(password.value)) {
    valid(phoneLabel, "Phone Number :");
    invalid(passwordLabel, "Please Enter Valid Password ⛔️");
  } else if (confirmPassword.value != password.value) {
    valid(passwordLabel, "Password :");
    invalid(confirmLabel, "Password Not Matched ⛔️");
  } else if (!genderMale.checked && !genderFemale.checked) {
    valid(confirmLabel, "Confirm Password :");
    invalid(genderLabel, "Gender Must Be Selected ⛔️");
  } else if (!birthdate.value) {
    valid(genderLabel, "Gender :");
    invalid(birthdateLabel, "Birthdate Must Be Selected ⛔️");
  } else {
    valid(birthdateLabel, "Birthdate :");
  }
});
/*function valid(label, text) {
  label.innerHTML = text;
  label.classList.remove("text-danger");
}
function invalid(label, text) {
  label.innerHTML = text;
  label.classList.add("text-danger");
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstName.value === "" ||
    firstName.value.charCodeAt(0) < 65 ||
    firstName.value.charCodeAt(0) > 90
  ) {
    invalid(firstNameLabel, "Please Enter Valid FirstName ⛔️");
  } else if (
    lastName.value === "" ||
    lastName.value.charCodeAt(0) < 65 ||
    lastName.value.charCodeAt(0) > 90
  ) {
    invalid(lastNameLabel, "Please Enter Valid LastName ⛔️");
    valid(firstNameLabel, "First Name :");
  } else if (!emailPattern.test(email.value)) {
    lastNameLabel.innerHTML = "Last Name:";
    lastNameLabel.classList.remove("text-danger");
    emailLabel.innerHTML = "Please Enter Valid Email ⛔️";
    emailLabel.classList.add("text-danger");
  } else if (!phonePattern.test(phone.value)) {
    emailLabel.innerHTML = "Email:";
    emailLabel.classList.remove("text-danger");
    phoneLabel.innerHTML = "Please Enter Valid PhoneNumber ⛔️";
    phoneLabel.classList.add("text-danger");
  } else if (!passwordPattern.test(password.value)) {
    phoneLabel.innerHTML = "Phone Number:";
    phoneLabel.classList.remove("text-danger");
    passwordLabel.innerHTML = "Please Enter Valid Password ⛔️";
    passwordLabel.classList.add("text-danger");
  } else if (confirmPassword.value != password.value) {
    passwordLabel.innerHTML = "Password: ";
    passwordLabel.classList.remove("text-danger");
    confirmLabel.innerHTML = "Password Not Matched ⛔️";
    confirmLabel.classList.add("text-danger");
  } else if (!genderMale.checked && !genderFemale.checked) {
    confirmLabel.innerHTML = "Confirm Password:";
    confirmLabel.classList.remove("text-danger");
    genderLabel.innerHTML = "Gender Must Be Selected ⛔️";
    genderLabel.classList.add("text-danger");
  } else if (!birthdate.value) {
    genderLabel.innerHTML = "Gender :";
    genderLabel.classList.remove("text-danger");
    birthdateLabel.innerHTML = "Birthdate Must Be Selected ⛔️";
    birthdateLabel.classList.add("text-danger");
  } else {
    birthdateLabel.innerHTML = "Birthdate :";
    birthdateLabel.classList.remove("text-danger");
  }
});
*/
