
window.onload = (event) => {
  const searchElementElement = document.querySelector(".search--element");
  searchElementElement.dataset.isloaded = "true";
  searchElementElement.classList.add("slide-in--search");
  searchElementElement.addEventListener("animationend", () => {
    searchElementElement.classList.remove("slide-in--search");
  });
};


