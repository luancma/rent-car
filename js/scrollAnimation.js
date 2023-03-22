const feedbackBox = document.querySelector(".feedback");
const contactBox = document.querySelector(".contact");
const diferencialBox = document.querySelector(".diferencial");

const actionFunction = () => {
  const feedbackBoxPosition = feedbackBox.getBoundingClientRect().top + window.pageYOffset;
  const contactBoxPosition = contactBox.getBoundingClientRect().top + window.pageYOffset;
  const diferencialBoxPosition = diferencialBox.getBoundingClientRect().top + window.pageYOffset;
  
  const scrollPosition = window.pageYOffset + window.innerHeight;

  if (scrollPosition > feedbackBoxPosition + 10) {
     feedbackBox.dataset.ishidden = "false";
  }

  if (scrollPosition > contactBoxPosition + 10) {
     contactBox.dataset.ishidden = "false";
  }

  if (scrollPosition > diferencialBoxPosition + 10) {
     diferencialBox.dataset.ishidden = "false";
  }
};

window.addEventListener("scroll", actionFunction);
window.addEventListener("touchmove", () => {
  actionFunction();
});

