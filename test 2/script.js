let timeDate = document.querySelector(".time-date");
let timeTime = document.querySelector(".time-time");

function date() {
  let date = new Date();
  let timeYear = date.getFullYear();
  date.setMonth(date.getMonth() + 1);
  let timeMonth =
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
  let timeDate1 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  timeDate.innerHTML = `${timeDate1} . ${timeMonth} . ${timeYear}`;
}
date();

function time() {
  let date = new Date();
  let timeHours =
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let timeMinutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let timeSeconds =
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

  timeTime.innerHTML = `${timeHours} : ${timeMinutes} : ${timeSeconds}`;
}

setInterval(time, 1000);

//////////////////////////////////////////////////////////

const watch = document.querySelector(".stopwatch-timer-display");
let milliseconds = 0;
let timer;

const startWatch = () => {
  watch.classList.remove("paused");
  clearInterval(timer);
  timer = setInterval(() => {
    milliseconds += 10;
    let dataTimer = new Date(milliseconds);
    watch.innerHTML =
      ("0" + dataTimer.getUTCHours()).slice(-2) +
      ":" +
      ("0" + dataTimer.getUTCMinutes()).slice(-2) +
      ":" +
      ("0" + dataTimer.getUTCSeconds()).slice(-2) +
      ":" +
      ("0" + dataTimer.getUTCMilliseconds()).slice(-3, -1);
  }, 10);
};

const pausedWatch = () => {
  watch.classList.add("paused");
  clearInterval(timer);
};

const resetWatch = () => {
  watch.classList.remove("paused");
  clearInterval(timer);
  milliseconds = 0;
  watch.innerHTML = "00:00:00:00";
};

document.addEventListener("click", (e) => {
  const element = e.target;
  if (element.id === "start") {
    startWatch();
    document.getElementById("start").classList.add("show");
    document.getElementById("loop").classList.remove("show");
    document.getElementById("stop").classList.remove("show");
  }
  if (element.id === "stop") {
    pausedWatch();
    document.getElementById("stop").classList.add("show");
    document.getElementById("loop").classList.remove("show");
    document.getElementById("start").classList.remove("show");
  }
  if (element.id === "reset") resetWatch();
});

document.querySelector("#loop").addEventListener("click", function () {
  let screen = document.querySelector(".stopwatch-screen");
  let p = document.createElement("p");
  p.textContent = watch.innerHTML;
  screen.append(p);

  if (screen.childElementCount >= 4) {
    console.log("stop");
    p.textContent = "";
    return;
  }
  document.getElementById("loop").classList.add("show");
  document.getElementById("stop").classList.remove("show");
  document.getElementById("start").classList.remove("show");
});

document.querySelector("#reset").addEventListener("click", function () {
  document.querySelector(".stopwatch-screen").innerHTML = "";
  document.getElementById("reset").classList.add("show");
  document.getElementById("start").classList.remove("show");
  document.getElementById("loop").classList.remove("show");
  document.getElementById("stop").classList.remove("show");

  setTimeout(() => {
    document.getElementById("reset").classList.remove("show");
  }, 200);
});

/////////////////////////////////////////////////////////////////////

let plus = document.querySelector(".timer-watch-text");
// console.log(plus)
let count = 1;
document.getElementById("plus").addEventListener("click", function () {
  if (count >= 1) {
    plus.textContent = count++ ;
    console.log(plus)

    document.getElementById("plus").classList.add("show");
    document.getElementById("minus").classList.remove("show");

    if (count == 26) {
      document.querySelector("#plus").setAttribute("disabled", "disabled");
      document.getElementById("plus").classList.remove("show");
    }    
  }
});

document.getElementById("minus").addEventListener("click", function () {
  if (count >= 1) {
    plus.textContent = count-- - 2;
    console.log(plus.textContent)

    document.getElementById("minus").classList.add("show");
    document.getElementById("plus").classList.remove("show");

    if (count == 0) {
      plus.textContent = count++;
      document.getElementById("minus").classList.remove("show");
    }
  }
  document.querySelector("#plus").removeAttribute("disabled", "disabled");
});

// це ще код таймера


console.log(document.querySelector('.timer-display').children)

const watchT = document.querySelector(".timer-display-text");

let timeTimer = 1500;

let timerID;

const startWatchT = () => {

  clearInterval(timerID);

  function updateCountDown() {
    const minutes = Math.floor(timeTimer / 60);
    let seconds = timeTimer % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    watchT.innerHTML = `${minutes} : ${seconds}`;
    timeTimer--;
  }

  timerID = setInterval(updateCountDown, 1000);

  document.getElementById("timer-start").classList.add("show");
  document.getElementById("timer-stop").classList.remove("show");
  document.getElementById("plus").classList.remove("show");
  document.getElementById("minus").classList.remove("show");
};

const pausedWatchT = () => {
  clearInterval(timerID);
  document.getElementById("timer-stop").classList.add("show");
  document.getElementById("timer-start").classList.remove("show");
};

const resetWatchT = () => {
  clearInterval(timerID);
  timeTimer = 600
  watchT.innerHTML = "00:00";
  document.getElementById("timer-reset").classList.add("show");
  document.getElementById("timer-start").classList.remove("show");
  document.getElementById("timer-stop").classList.remove("show");

  setTimeout(() => {
    document.getElementById("timer-reset").classList.remove("show");
  }, 200);
};

document.addEventListener("click", (e) => {
  const element = e.target;
  if (element.id === "timer-start") {
    startWatchT();
  }
  if (element.id === "timer-stop") {
    pausedWatchT();
  }
  if (element.id === "timer-reset") resetWatchT();
});
