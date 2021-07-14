const number = document.getElementById("guess");
const check = document.getElementById("button");
const write_num = document.querySelector("#write_number");
let count = 0;
let result = "";

function randomnumber() {
  return Math.floor(Math.random() * 100 + 1);
}
const guess = randomnumber();

number.addEventListener("keyup", function (event) {
  if (event.keyboard.keyCode === 13) {
    event.preventDefault();
    check.click();
  }
});

function find_number() {
  if (Number(number.value) < 1 || Number(number.value) > 100) {
    alert("Please Enter 1 to 100");
  } else {
    if (Number(number.value) < Number(guess)) {
      result = "Try a higher number";

      write_num.innerText = result;
      count++;
      document.getElementById("counter_number").innerHTML = `${count}`;
    } else if (Number(number.value) > Number(guess)) {
      result = "Try a lower number";

      write_num.innerText = result;
      count++;
      document.getElementById("counter_number").innerHTML = `${count}`;
    } else if (Number(number.value) === Number(guess)) {
      result = "Congratulations...";
      write_num.innerText = result;
      count++;
      document.getElementById("counter_number").innerHTML = `${count}`;
      document.querySelector("#counter_number").textContent = "0"; //counter sifirlaniyor...
    }
  }
}
check.addEventListener("click", () => {
  number.value !== "" ? find_number() : alert("Enter a number");
});
