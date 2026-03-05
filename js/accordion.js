// select all accordion items
const faqItems = document.querySelectorAll(".group");

faqItems.forEach((item) => {
  const question = item.querySelector(".flex"); // clickable row
  const answer = item.querySelector(".max-h-0"); // answer container

  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    // close all
    faqItems.forEach((i) => {
      i.classList.remove("active");
      i.querySelector("div:last-child").style.maxHeight = null;
    });

    // open clicked one
    if (!isOpen) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
