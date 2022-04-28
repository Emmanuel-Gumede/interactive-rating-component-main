const userSubmit = document.getElementById("submit-btn");
const rates = document.getElementById("rates");
let userRate = document.getElementById("user-rate");
let selectedRate;

rates.addEventListener("click", (e) => {
  selectedRate = e.target.innerText;
});

userSubmit.addEventListener("click", () => {
  document.getElementById("rate-us").style.display = "none";
  document.getElementById("thank-you").style.display = "block";
  userRate.textContent = selectedRate;
});

userRate.textContent = "";
