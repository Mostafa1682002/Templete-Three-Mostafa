let menu=document.querySelector('.other');
let nav=document.querySelector('nav');
let overlay=document.querySelector('.ovearlay');

menu.onclick=function(){
  nav.classList.toggle('active');
  menu.classList.toggle('active');
  allLinks.forEach((e)=>e.classList.remove('active'))
  overlay.classList.toggle('active');
}
overlay.onclick=function(){
  overlay.classList.remove('active');
  nav.classList.remove('active');
  menu.classList.remove('active');
}

let allLinks=document.querySelectorAll('.links li:not(:last-child)');
allLinks.forEach((e)=>{
  e.addEventListener('click',()=>{
    allLinks.forEach((e)=>e.classList.remove('active'))
    e.classList.add('active');
    nav.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active')
  })
})






// Animate Width On Scrolling
let skillsSection=document.querySelector('.skills');
let allprogress=document.querySelectorAll('.prog');
window.onscroll=function(){
  if(window.scrollY>=skillsSection.offsetTop-200){
    allprogress.forEach((e)=>{
      e.style.width=`${e.getAttribute('data-prog')}%`;
    })
  }
}

// /*
//  ** Countdown Timer
//  ** Video URL: https://www.youtube.com/watch?v=eFsiOTJrrE8
//  */

// // The End Of The Year Date
// // 1000 milliseconds = 1 Second

// let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// // console.log(countDownDate);

// let counter = setInterval(() => {
//   // Get Date Now
//   let dateNow = new Date().getTime();

//   // Find The Date Difference Between Now And Countdown Date
//   let dateDiff = countDownDate - dateNow;

//   // Get Time Units
//   // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
//   let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

//   document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
//   document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
//   document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
//   document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//   if (dateDiff < 0) {
//     clearInterval(counter);
//   }
// }, 1000);

// /*
//  ** Animate Width On Scrolling
//  ** Video URL: https://youtu.be/sbIoIKI9FOc
//  */

// /*
//  ** Increase Numbers On Scrolling
//  ** Video URL: https://youtu.be/PLsUdgLnzgQ
//  */

// let progressSpans = document.querySelectorAll(".the-progress span");
// let section = document.querySelector(".our-skills");

// let nums = document.querySelectorAll(".stats .number");
// let statsSection = document.querySelector(".stats");
// let started = false; // Function Started ? No

// window.onscroll = function () {
//   // Skills Animate Width
//   if (window.scrollY >= section.offsetTop - 250) {
//     progressSpans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
//   // Stats Increase Number
//   if (window.scrollY >= statsSection.offsetTop) {
//     if (!started) {
//       nums.forEach((num) => startCount(num));
//     }
//     started = true;
//   }
// };

// function startCount(el) {
//   let goal = el.dataset.goal;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 2000 / goal);
// }
