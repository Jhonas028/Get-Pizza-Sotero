const tabButtons = document.querySelectorAll(".menuTab");
const tabContents = document.querySelectorAll(".menuItem");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    clearActiveTabs();
    clearActiveContents();
    button.classList.add("active");

    const correspondingContent = document.querySelector(`#${button.id}-detail`);
    if (correspondingContent) {
      correspondingContent.classList.add("active");
    }
  });
});

function clearActiveTabs() {
  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

function clearActiveContents() {
  tabContents.forEach((content) => {
    content.classList.remove("active");
  });
}
