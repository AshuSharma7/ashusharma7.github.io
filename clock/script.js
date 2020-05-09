const deg = 6;
const hr = document.querySelector("#hr");
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;




})

let day = new Date();
let ss = day.getSeconds() * deg;
var i = ss;
setInterval(() => {
    sec.style.transform = `rotateZ(${i}deg)`;
    i = i + 0.75;
}, 125)
