const rangeInput = document.querySelector("input[type='range']");
const track = document.querySelector(".track");

export default function handleRangeInput() {
  rangeInput.addEventListener("input", function () {
    const value = rangeInput.value;
    track.style.background = `linear-gradient(to right, #a5f3eb ${value}%, #eaeefb ${value}%)`;
  });
}
