let second = document.getElementById('sec');
let minute = document.getElementById('min');
let hour = document.getElementById('hrs');

function clock() {
    const now = new Date();
    let sec = now.getSeconds().toString().padStart(2, '0');
    let min = now.getMinutes().toString().padStart(2, '0');
    let hrs = now.getHours().toString().padStart(2, '0');
    hour.textContent= hrs;
    minute.textContent= min;
    second.textContent= sec;
}

setInterval(clock, 1000);

// function second_count() {
//     setTimeout(() => {
//         sec = sec + 1;
//         if (sec === 60) {
//             sec = 0;
//             min = min + 1;
//             if (min === 60) {
//                 min = 0;
//                 hrs = hrs + 1;
//                 if (hrs === 24) {
//                     hrs = 0;
//                 }
//                 hour.textContent = hrs.toString().len === 2 ? hrs.toString() : hrs.toString().padStart(2, '0');
//             }
//             minute.textContent = min.toString().len === 2 ? min.toString() : min.toString().padStart(2, '0');
//         }
//         second.textContent = sec.toString().len === 2 ? sec.toString() : sec.toString().padStart(2, '0');
//         second_count();
//     }, 1000);
// }
// second_count();
