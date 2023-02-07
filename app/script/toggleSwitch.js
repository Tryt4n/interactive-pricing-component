import { handleStates } from "./script.js";

const inputCircle = document.querySelector("[data-input-circle]");
const toggleSwitcherContainer = document.querySelector("[data-toggle-switcher]");

export default function handleToggleSwitch() {
  let toggle = false;
  toggleSwitcherContainer.addEventListener("click", () => {
    toggle = !toggle;
    if (toggle) {
      inputCircle.style.translate = "calc(2.5rem - 0.9375rem + 0.25rem)";
      toggleSwitcherContainer.classList.add("active");
    } else {
      inputCircle.style.translate = "0.25rem";
      toggleSwitcherContainer.classList.remove("active");
    }
    handleStates();
  });
}
