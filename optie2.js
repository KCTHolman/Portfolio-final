function objectInViewport1 () {
  var slideItem = document.querySelector(".container1");

  var bounding = slideItem.getBoundingClientRect();

  if (bounding.top >= 100){
      addClassComeIn1();
  }
  console.log(slideItem)
  
  function addClassComeIn1() {
    var element = document.querySelector("hardskill-html-bar");
    element.classList.add("animation");
  };

};

//window.onload = function () {
window.addEventListener('click', buttonChanger);
window.addEventListener('MSPointerDown', buttonChanger)

var containers = document.getElementsByClassName("containers");//dit zijn de secties
var counter = 0;// startpunt voor de teller
var SectionPosition = [];//lege array die we nodig hebben voor het startpunt van iedere sectie

//var addClass = document.querySelector('.button-active');



function buttonChanger() {


  for (var i = 0; i < containers.length; i++) {
    console.log(containers[i].getBoundingClientRect());
    var htmlElement = containers[i].getBoundingClientRect();
    SectionPosition[i] = htmlElement.top;
    console.log(SectionPosition[i]);

    console.log(i);
    //buttons[i].classList.add('button-active');

  };
};

document.addEventListener("click", sectionScroller);


function sectionScroller() {
  var buttons = document.querySelector('.menu-item');//dit zijn de knoppen die gaan veranderen bij iedere sectie
  counter++;
  if (counter >= containers.length) {
    counter = 0;

  }
  console.log(counter);
  console.log(containers[counter]);

  window.scrollTo({
    top: SectionPosition[counter],
    left: 0,
    behavior: 'smooth'

  });

};



var grid1 = document.getElementById('content1')
var gridAll =document.getElementsByClassName('content-grid')

grid1.addEventListener('click', toNone);

function toNone(){
  grid1.classList.add('content1on');
  gridAll.classList.add('content-all')

};
//wip
/* var arrow= document.getElementById('fa-arrow-right')
var button = document.getElementsByName('button')

console.log(arrowdown);
button.addEventListener('onmouseover', arrowdown());

function arrowdown(){
  console.log("arrow down functie"+arrowdown);
  // arrow.classList.remove('fa-arrow-right');
  // arrow.classList.add('fa-arrow-down');

};
 */