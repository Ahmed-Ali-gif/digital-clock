const timeConatiner = document.querySelector(".timeConatiner");
let time = new Date();
timeConatiner.append(time.toLocaleTimeString());
const list = document.querySelectorAll("li");
switch (time.getDay()) {
  case 0:
    list[0].innerText = "Sunday";
    break;
  case 1:
    list[0].innerText = "Monday";
  case 2:
    list[0].innerText = "Tuesday";
    break;
  case 3:
    list[0].innerText = "Wednesday";
    break;
  case 4:
    list[0].innerText = "Thursday";
    break;
  case 5:
    list[0].innerText = "Friday";
    break;
  case 6:
    list[0].innerText = "Saturday";
    break;
  default:
    list[0].innerText = "Inavlid value";
    break;
}
list[1].innerText = time.toLocaleDateString();
console.log(Math.abs(time.getTimezoneOffset() / 60));

//light mode
const btn = document.querySelector(".btn");
const changeColor = () => {
  const body = document.body;
  let changingBtnText = body.classList.toggle("light-mode");
  changingBtnText
    ? (btn.innerText = "dark-mode")
    : (btn.innerText = "light-mode");
};
btn.addEventListener("click", () => {
  changeColor();
});
// time zone slection
const slct = document.querySelector("#select");
const timeZoneValue = document.querySelector(".time-zone-value");
const getSelectValue = () => {
  console.dir(slct.value);
  let timeZone = Math.abs(slct.value / 60);
  timeZoneValue.innerText = "+" + timeZone;
};
slct.addEventListener("click", () => {
  getSelectValue();
});
const removeSelectValue = () => {
  timeZoneValue.removeChild(slct.value);
};
slct.addEventListener("dbclick", () => {
  removeSelectValue();
});

//  stopwatch logic
const stopBtn = document.querySelector(".stop-btn");
const stopwatchContent = document.querySelector(".stopwatch-content");
const stopWatch = document.querySelector(".stop-watch");
let btnOne = document.createElement("button");
btnOne.textContent = "Stop";
let btnTwo = document.createElement("button");
btnTwo.textContent = "Restart";

let stopTimer;
const startStopWatch = () => {
  let count = 0;
  stopTimer = setInterval(() => {
    stopwatchContent.innerText = count;
    count++;
  }, 10);
  console.log(count);

  btnOne.classList.add("stop-btn");
  btnTwo.classList.add("stop-btn");

  stopWatch.append(btnOne);
  stopWatch.append(btnTwo);
};
stopBtn.addEventListener("click", () => {
  startStopWatch();
});
btnOne.addEventListener("click", () => {
  clearInterval(stopTimer);
});
btnTwo.addEventListener("click", () => {
  stopwatchContent.innerText = 0;
});
