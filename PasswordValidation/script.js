const passwordInput = document.getElementById("password-input");
const generatePassword = document.getElementById("gen-password");
const listItems = document.querySelectorAll("li");

const eye = document.querySelector(".eye");

const uppercaseLetters = "ABCDEFGHJKLOMNRPSTQVWXYZ";
const lowercaseLetters = "abcdefghjklomnprstqvqxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*";

// const charOptions = uppercaseLetters + lowercaseLetters + numbers + symbols;

function createPassword() {
  let password = "";
  while (password.length < 12) {
    let charRandomize =
      uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)] +
      lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)] +
      numbers[Math.floor(Math.random() * numbers.length)] +
      symbols[Math.floor(Math.random() * symbols.length)];
    password += charRandomize;
  }
  passwordInput.value = password;
}
generatePassword.addEventListener("click", () => createPassword());

const requirements = [
  { regex: /.{8,}/, index: 0 },
  { regex: /[0-9]/, index: 1 },
  { regex: /[a-z]/, index: 2 },
  { regex: /[^A-Za-z0-9]/, index: 3 },
  { regex: /[A-Z]/, index: 4 },
];
function checkPassword() {
  requirements.forEach((i) => {
    let isValid = i.regex.test(passwordInput.value);
    const item = listItems[i.index];
    if (isValid === true) {
      item.firstElementChild.className = "fa-solid fa-check";
      item.classList.add("valid");
    } else {
      item.firstElementChild.className = "fa-solid fa-circle";
      item.classList.add("remove");
    }
  });
}
passwordInput.addEventListener("keyup", (event) => checkPassword(event));

eye.addEventListener("click", () => {
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
  eye.className = `fa-solid fa-eye${
    passwordInput.type === "password" ? "" : "-slash"
  }`;
});
