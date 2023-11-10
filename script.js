let msgElement = document.querySelector(".result");

function palindrome() {
  let dataElement = document.querySelector(".input").value;
  let len = dataElement.length;
  let msg = "It is not a palindrome";
  let start = dataElement.slice(0, Math.floor(len / 2));
  let end = dataElement.slice(len - Math.floor(len / 2));
  let flip = end.split("").reverse().join("");
  // for (let i = 0; i < len / 2; i++) {
  if (start === flip) {
    msg = "It is a palindrome";
  }
  // }
  msgElement.textContent = msg;
}
document.querySelector("#btn").addEventListener("click", palindrome);
