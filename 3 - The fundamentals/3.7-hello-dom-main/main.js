//1. WHO ARE YOU?
//https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics#supercharging_our_example_website 

let myButton = document.querySelector('button');
let myHeading = document.getElementById("name");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        myHeading.textContent = 'Hello Friend!';
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hello ' + myName + '!';
    }
    }
    
if(!localStorage.getItem('name')) {
myHeading.textContent = 'Hello Friend!';
} else {
let storedName = localStorage.getItem('name');
myHeading.textContent = 'Hello ' + storedName + '!';
}

myButton.onclick = function() {
    setUserName();
  }

//CSS for "Who are you" button 
const introBtn = document.querySelector(".introBtn")

introBtn.style.backgroundColor = "#54c7b1";
introBtn.style.cursor = "pointer";
introBtn.style.fontSize = "15px";
introBtn.style.color = "white";
introBtn.style.border = "0";
introBtn.style.padding = "0.8rem";

//CSS for "Hello Friend" 
const hello = document.querySelector(".hello")
hello.style.color = "#54c7b1";
hello.style.fontWeight = "700";

//2. TIME OUT
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// https://www.youtube.com/watch?v=_a4XCarxwr8

let timeSecond = 60;
const timeH = document.getElementById("countDown");

displayTime(timeSecond);

//I added "onclick" to start the timer by clicking
function startCountDown() {
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  setTimeout(function(){ alert("TIME OUT!!!"); }, 60000); //added an alert box
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "TIME OUT";
}

//CSS for "countdown" button 
const countDownBtn = document.querySelector(".countDownBtn")
countDownBtn.style.cursor = "pointer";

//3. MAKE A LIST
//https://youtu.be/wiozYyXQEVk
const usterList = document.querySelector(".name-list li");
const ListInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
  //Create an li 
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(ListInput.value);
  //Add input value inside the new li
  newLi.appendChild(liContent);
  //Attaching li to the user list 
  usterList.appendChild(newLi);

});

//CSS for "Add Item" 
const nameList = document.querySelector(".name-list")
nameList.style.listStyleType = "none";
nameList.style.textAlign = "center";
nameList.style.padding = "0";
addListBtn.style.cursor = "pointer";

//4. REMOVE FROM A LIST
//https://www.w3schools.com/jsref/met_element_remove.asp

function removeFromList() {
  const myobj = document.getElementById("demo");
  myobj.remove();
}

//CSS for "Remove Item"
const nameList2 = document.querySelector(".name-list-2")

nameList2.style.listStyleType = "none";
nameList2.style.listStyleType = "none";
nameList2.style.textAlign = "center";
nameList2.style.padding = "0";

const removeBtn1 = document.querySelector(".removeBtn1")
const removeBtn2 = document.querySelector(".removeBtn2")
const removeBtn3 = document.querySelector(".removeBtn3")
const removeBtn4 = document.querySelector(".removeBtn4")
const removeBtn5 = document.querySelector(".removeBtn5")

removeBtn1.style.marginLeft = "1rem";
removeBtn2.style.marginLeft = "1rem";
removeBtn3.style.marginLeft = "1rem";
removeBtn4.style.marginLeft = "1rem";
removeBtn5.style.marginLeft = "1rem";

//5. Preloader
//https://css-tricks.com/lets-make-a-fancy-but-uncomplicated-page-loader/

const preloader = document.querySelector('.preloader');

const fadeEffect = setInterval(() => {
    // if we don't set opacity 1 in CSS, then
    // it will be equaled to "" -- that's why
    // we check it, and if so, set opacity to 1
    if (!preloader.style.opacity) {
      preloader.style.opacity = 1;
    }
    if (preloader.style.opacity > 0) {
      preloader.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 100);

  window.addEventListener('load', fadeEffect);


//6. DARK MODE
//https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
function toggleDarkLightMode() {
  const element = document.querySelector(".light-mode");
  element.classList.toggle("dark-mode");
}