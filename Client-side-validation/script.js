// Defining necessary variables
const form = document.querySelector("form");
const email = document.querySelector("mail");
const emailError = document.querySelector("#mail + span.eror");

// Email field validation
email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError();
  }
});

// Form submit validation
form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

// Function for showing errors
function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minlength} characters; you entered ${email.value.length}`;
  }
  emailError.className = "error active";
}
