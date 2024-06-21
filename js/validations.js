document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration_form");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const mobileNumber = document.getElementById("mobileNumber");
  const email = document.getElementById("email");
  const firstNameError = document.getElementById("firstNameError");
  const lastNameError = document.getElementById("lastNameError");
  const mobileNumberError = document.getElementById("mobileNumberError");
  const emailError = document.getElementById("emailError");
  const firstNameCount = document.getElementById("firstNameCount");
  const lastNameCount = document.getElementById("lastNameCount");
  const emailCount = document.getElementById("emailCount");
  firstName.addEventListener("input", updateCount);
  lastName.addEventListener("input", updateCount);
  email.addEventListener("input", updateCount);
  function updateCount(event) {
    const field = event.target;
    const countElement = document.getElementById(`${field.id}Count`);
    countElement.textContent = `${field.value.length}/50`;
  }
  form.addEventListener("submit", function (event) {
    let valid = true;
    const checkForRepetitiveWords = (input, errorElement) => {
      const value = input.value.trim().toLowerCase();
      const regex = /(\w)\1{2,}/g;
      if (regex.test(value)) {
        errorElement.textContent =
          "Please don't use repeating characters more than 3";
        input.classList.add("error");
        valid = false;
      } else {
        errorElement.textContent = "";
        input.classList.remove("error");
      }
    };
    if (firstName.value.trim() === "") {
      firstNameError.textContent = "First name is required.";
      valid = false;
    } else if (!checkForRepetitiveWords(firstName, firstNameError)) {
      valid = false;
    } else {
      firstNameError.textContent = "";
    }
    if (lastName.value.trim() === "") {
      lastNameError.textContent = "Last name is required.";
      valid = false;
    } else if (!checkForRepetitiveWords(lastName, lastNameError)) {
      valid = false;
    } else {
      lastNameError.textContent = "";
    }
    if (mobileNumber.value.trim() === "") {
      mobileNumberError.textContent = "Mobile number is required.";
      valid = false;
    } else {
      mobileNumberError.textContent = "";
    }
    if (email.value.trim() === "") {
      emailError.textContent = "Email address is required.";
      valid = false;
    } else if (!validateEmail(email.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    } else {
      emailError.textContent = "";
    }
    if (!valid) {
      event.preventDefault();
    }
  });
  function validateEmail(email) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.[^<>()[\]\.,;:\s@"]{2,}))$/i;
    return re.test(String(email).toLowerCase());
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const countryCodeSelect = document.getElementById("countryCode");
  const mobileNumberInput = document.getElementById("mobileNumber");
  const defaultOption = document.createElement("option");
  defaultOption.value = "91";
  defaultOption.textContent = "🇮🇳 +91";
  countryCodeSelect.appendChild(defaultOption);
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.sort((a, b) => a.name.common.localeCompare(b.name.common));
      data.forEach((country) => {
        const option = document.createElement("option");
        option.value =
          country.idd.root +
          (country.idd.suffixes ? country.idd.suffixes[0] : "");
        option.textContent = `${country.flag} ${country.name.common} (${option.value})`;
        countryCodeSelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching country codes:", error);
    });
  countryCodeSelect.addEventListener("change", function () {
    const selectedIndex = this.selectedIndex;
    const selectedOption = this.options[selectedIndex];
    const countryCode = selectedOption.textContent.match(/\+(\d+)/)[1];
    mobileNumberInput.placeholder = `Mobile Number (${countryCode})`;
    mobileNumberInput.maxLength = countryCode.length + 10;
  });
});
document
  .getElementById("login_form")
  .addEventListener("submit", function (event) {
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;
    emailError.textContent = "";
    passwordError.textContent = "";

    // use this for password and email validations later

    if (!emailField.checkValidity()) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    }
    if (passwordField.value.length < 8) {
      passwordError.textContent = "Password must be at least 8 characters.";
      isValid = false;
    }
    if (!isValid) {
      event.preventDefault();
    }
  });
function validateForgetPasswordForm() {
  var emailField = document.getElementById("forget_email");
  var emailError = document.getElementById("forgetEmailError");
  var isValid = true;

  // Clear previous error message
  emailError.textContent = "";

  // Email validation
  if (!emailField.checkValidity()) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  }

  if (isValid) {
    document.getElementById("forget_password_form").submit();
  }
}

function updateFileName(input) {
  const label = input.nextElementSibling;
  const labelText =
    input.files.length > 0 ? input.files[0].name : "Photo | 5MB"; // Adjust label text accordingly
  label.textContent = labelText;
}

function redirectToStepsForm() {
  window.location.href = "stepsform.html";
}

function toggleMailingForm() {
  var yesMailing = document.getElementById("yesMailing").checked;
  var mailingForm = document.getElementById("mailingForm");
  if (yesMailing) {
    mailingForm.classList.add("hidden");
  } else {
    mailingForm.classList.remove("hidden");
  }
}

function updateLabel(input) {
  const label = input.nextElementSibling; // Get the label element
  const files = input.files; // Get the selected files

  if (files.length > 0) {
    label.textContent = files[0].name; // Display the selected file name
  } else {
    label.textContent = "Resume | 10MB Pdf"; // Reset label text if no file selected
  }
}
// Function to handle click on list item
function handleItemClick(sectionId) {
  // Hide all form sections
  hideAllSections();

  // Show the selected form section
  let section = document.getElementById(`section${sectionId}`);
  if (section) {
    section.classList.remove("hidden");
  }
}

// Function to hide all form sections except the specified one
function hideAllSections() {
  let formSections = document.querySelectorAll(".form-section");
  formSections.forEach((section) => {
    section.classList.add("hidden");
  });
}

// Initially hide all form sections
hideAllSections();

// Function to add a new entry
function addEntry() {
  // Clone the template entry
  let entryTemplate = document.querySelector(".form-entry");
  let newEntry = entryTemplate.cloneNode(true);

  // Clear input values of the new entry
  clearInputValues(newEntry);

  // Append the new entry to the container
  let entryContainer = document.getElementById("entryContainer");
  entryContainer.appendChild(newEntry);
}

// Function to remove an entry
function removeEntry(entry) {
  // Get the parent container and remove the entry
  let entryContainer = entry.closest(".form-entry");
  entryContainer.remove();
}

// Function to clear input values of a cloned entry
function clearInputValues(entry) {
  let inputs = entry.querySelectorAll("input, select");
  inputs.forEach((input) => {
    if (input.type === "file") {
      input.value = null; // Clear file input value (for security reasons, you cannot set it programmatically)
    } else {
      input.value = ""; // Clear text and select inputs
    }
  });
}

// Function to update the label text when a file is selected
function updateLabel(input) {
  let label = input.nextElementSibling;
  if (input.files.length > 0) {
    label.innerText = input.files[0].name;
  } else {
    label.innerText = "Upload Document";
  }
}
