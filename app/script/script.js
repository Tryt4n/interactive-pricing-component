import handleRangeInput from "./slider.js";
import handleToggleSwitch from "./toggleSwitch.js";

handleRangeInput();
handleToggleSwitch();

const packageSize = document.querySelector("[data-package]");
const price = document.querySelector("[data-price]");
const rangeInput = document.querySelector("[data-range-input]");
const toggleSwitcherContainer = document.querySelector("[data-toggle-switcher]");

rangeInput.addEventListener("input", function () {
  rangeInput.setAttribute("value", rangeInput.value);
  handleStates();
});

export function handleStates() {
  const inputValue = rangeInput.value;
  const percentage = (inputValue / 100).toFixed(2);

  let priceValue;
  let pageviews;

  if (toggleSwitcherContainer.classList.contains("active")) {
    priceValue = (((24 - 8) * percentage + 8) * 12).toFixed(2);
    pageviews = (((150 - 49) * percentage + 49) * 12).toFixed(0);
  } else {
    priceValue = ((24 - 8) * percentage + 8).toFixed(2);
    pageviews = ((150 - 49) * percentage + 49).toFixed(0);
  }

  if (pageviews == 1000) {
    pageviews = "1mln";
  } else if (pageviews >= 1000) {
    pageviews = (pageviews / 1000).toFixed(3) + "mln";
  } else {
    pageviews = pageviews + "k";
  }

  packageSize.textContent = `${pageviews} pageviews`;
  price.textContent = `$${priceValue}`;
}

const discountText = document.querySelector("[data-discount]");
window.addEventListener("resize", showDiscountText);
window.addEventListener("load", showDiscountText);

function showDiscountText() {
  if (window.innerWidth < 768) {
    discountText.textContent = "-25%";
  } else {
    discountText.textContent = "25% discount";
  }
}
