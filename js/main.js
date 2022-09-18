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

let allLinks=document.querySelectorAll('.links >li:not(:last-child)');
allLinks.forEach((e)=>{
  e.addEventListener('click',()=>{
    allLinks.forEach((e)=>e.classList.remove('active'))
    e.classList.add('active');
    nav.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active')
  })
})

//Gallery  Imgs Click
let allBoxGallery=document.querySelectorAll('.box-gallery');
let overlayGallary=document.querySelector('.overlay-gallary');
let currentImgGallary=document.querySelector('.over-img');
let closeOverlay=document.querySelector('.close-overlay');
allBoxGallery.forEach((box)=>{
  box.addEventListener('click',()=>{
    overlayGallary.classList.add('active');
    currentImgGallary.src=box.firstElementChild.firstElementChild.src;
  })
})

closeOverlay.addEventListener('click',()=>{
  overlayGallary.classList.remove('active');
  currentImgGallary.src=''
})





// Animate Width On Scrolling
let skillsSection=document.querySelector('.skills');
let allprogress=document.querySelectorAll('.prog');


//Counter On Scrolling
let statsSection=document.querySelector(".stats");
let allNumberCount=document.querySelectorAll('.box-stats h3');

function startCount(ele){
  let counter=setInterval(()=>{
      if(ele.textContent==ele.getAttribute('data-number')){
        clearInterval(counter);
      }else{
        ele.textContent++;
      }
  },2000/ele.getAttribute('data-number'));
}

window.onscroll=function(){
  if(window.scrollY>=skillsSection.offsetTop-300){
    allprogress.forEach((e)=>{
      e.style.width=`${e.getAttribute('data-prog')}%`;
    })
  }

  if(window.scrollY>=statsSection.offsetTop-200){
    allNumberCount.forEach((e)=>startCount(e))
  }
}



//LATEST EVENTS 
let daysHtml=document.querySelector('.days')
let hoursHtml=document.querySelector('.hours')
let munitseHtml=document.querySelector('.munites')
let secondsHtml=document.querySelector('.seconds')

let countDown=setInterval(()=>{
  let dateEvents=new Date('Dec 31, 2023 23:59:59');
  let dateNow=new Date();
  let dif=dateEvents.getTime()-dateNow.getTime();
  if(dif>0){
    let days=Math.floor(dif/1000/60/60/24);
    let hours=Math.floor((dif%(1000*60*60*24))/(1000*60*60));
    let munites=Math.floor((dif%(1000*60*60))/(1000*60));
    let seconds=Math.floor((dif%(1000*60))/(1000));
    daysHtml.innerHTML=days>9?days:'0'+days;
    hoursHtml.innerHTML=hours>9?hours:'0'+hours;
    munitseHtml.innerHTML=munites>9?munites:'0'+munites;
    secondsHtml.innerHTML=seconds>9?seconds:'0'+seconds;
  }else{
    daysHtml.innerHTML='00';
    hoursHtml.innerHTML='00';
    munitseHtml.innerHTML='00';
    secondsHtml.innerHTML='00';    
      clearInterval(countDown);
  }
},1000);


let copyYear=document.querySelector('.year');
copyYear.innerHTML=new Date().getFullYear();