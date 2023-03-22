const { Machine, interpret } = XState;

const toggleMachine = Machine({
  id: "toggle",
  initial: "on",
  states: {
    on: {
      on: { TOGGLE: "off" },
    },
    off: {
      on: { TOGGLE: "on" },
    },
  },
});

const toggleElementId = "toggle-button";

function addActiveClass() {
  document.getElementById(toggleElementId).classList.add("on");
}

function removeActiveClass() {
  document.getElementById(toggleElementId).classList.remove("on");
}

function addInactiveClass() {
  document.getElementById(toggleElementId).classList.add("off");
}

function removeInactiveClass() {
  document.getElementById(toggleElementId).classList.remove("off");
}

const toggleService = interpret(toggleMachine)
  .onTransition((state) => {
    const button = document.getElementById("toggle-button");
    if (state.matches("on")) {
      button.classList.add("on");
      button.classList.remove("off");
      button.classList.add("animate-on");
      button.classList.remove("animate-off");
    } else {
      button.classList.add("animate-off");
      setTimeout(() => {
        button.classList.remove("on");
        button.classList.add("off");
        button.classList.remove("animate-on");
      }, 500);
    }
  })
  .start();

document.getElementById(toggleElementId).addEventListener("click", () => {
  toggleService.send("TOGGLE");
});
