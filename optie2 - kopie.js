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

/*  function Animation(){
var beginAnimation = document.getElementById('container1')

var placeStartAnimation =beginAnimaion.getBoundingClientRect()
console.log(placeStartAnimation)

if (bounding.top >= 100){
  placeStartAnimation.classList
};
};
var progressBar = document.querySelector('.progressbar');
console.log(progressBar);
  function addAnimation()
 */