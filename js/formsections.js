document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll("li[data-target]");
  const forms = document.querySelectorAll(".form");

  window.handleItemClick = function (targetId) {
    // Hide all forms
    forms.forEach((form) => {
      form.classList.add("hidden");
    });

    // Show the target form
    document.getElementById(targetId).classList.remove("hidden");

    // Update the active step item style
    steps.forEach((step) => {
      step.classList.remove("bg-blue-500", "text-white");
      step.classList.add("bg-gray-300", "text-black");
    });
    document
      .querySelector(`li[data-target='${targetId}']`)
      .classList.add("bg-blue-500", "text-white");
  };

  // Show the first form by default
  document.getElementById("personal-info").classList.remove("hidden");
  steps[0].classList.add("bg-blue-500", "text-white");
});

document.getElementById("work_yes").addEventListener("click", function () {
  document.getElementById("employmentDetails").classList.remove("hidden");
});

document.getElementById("work_no").addEventListener("click", function () {
  document.getElementById("employmentDetails").classList.add("hidden");
});

function addAwardEntry() {
  const container = document.getElementById("awardentryContainer");
  const newEntry = container.firstElementChild.cloneNode(true);

  newEntry.querySelectorAll("input").forEach((input) => (input.value = ""));
  container.appendChild(newEntry);
}

function removeAwardEntry(element) {
  const container = document.getElementById("awardentryContainer");
  if (container.children.length > 1) {
    container.removeChild(element.parentElement);
  }
}

function updateCharCount(textarea) {
  const maxLength = 50;
  const currentLength = textarea.value.length;
  const charCountSpan = textarea.nextElementSibling;
  charCountSpan.innerText = `${currentLength}/${maxLength}`;
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", function () {
      updateCharCount(this);
    });
  });
});
