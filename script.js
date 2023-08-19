const button = document.querySelector(".btn");
button.addEventListener("click", callBack);

const length = 12;
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase = "qwertyuiopasdfghjklzxcvbnm";
const numb = "1234567890";
const symbol = '!@#$%&*{}:"<>?()_+';

const passcode = upperCase + lowerCase + numb + symbol;

function callBack() {
  let password = "";
  //   password += upperCase[Math.floor(Math.random() * upperCase.length)];
  //   password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  //   password += numb[Math.floor(Math.random() * numb.length)];
  //   password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += passcode[Math.floor(Math.random() * passcode.length)];
  }
  const get_input = document.querySelector(".input");
  get_input.value = password;
}
