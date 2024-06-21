document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll("li[data-target]");
  const forms = document.querySelectorAll(".form");
  window.handleItemClick = function (targetId) {
    forms.forEach((form) => {
      form.classList.add("hidden");
    });
    document.getElementById(targetId).classList.remove("hidden");
    steps.forEach((step) => {
      step.classList.remove("bg-blue-500", "text-white");
      step.classList.add("text-black");
    });
    document
      .querySelector(`li[data-target='${targetId}']`)
      .classList.add("bg-blue-500", "text-white");
  };
  document.getElementById("personal-info").classList.remove("hidden");
  steps[0].classList.add("bg-blue-500", "text-white");
});
