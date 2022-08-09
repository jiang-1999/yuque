function showTime() {
  document.querySelector(".clock").innerText = new Date()
    .toString()
    .match(/\d{2}:\d{2}:\d{2}/)[0];
}
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
let timer = null;
btnStart.onclick = function () {
  timer = setInterval(() => showTime(), 1000);
};
btnStop.onclick = function () {
  clearInterval(timer);
};
