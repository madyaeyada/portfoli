
  document.getElementById("top").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
// document.getElementById("dark").onfocus = function () {
//     body.style.backgroundColor = "#bab8b8";
//   }
//   for( i=0 ; i>arrow1.length; i++)
//    {
//   arrow1.onclick=function(){
//     card1.style.transform="translateX(-100px)";
//     card2.style.transform="translateX(-200px)";
//     card3.style.transform = "translateX(-250px)";

//   }


//    arrow2.onclick = function () {
//      card1.style.transform = "translateX(100px)";
//      card2.style.transform = "translateX(200px)";
//      card3.style.transform = "translateX(250px)";
//    }
// }
let myimg = document.getElementById("sliderimg");
let imges = [
  "img/slider/1.jpg",
  "img/slider/2.gif",
  "img/slider/3.gif",
  "img/slider/4.jpg",
  "img/slider/5.gif",
];
let i = 0;
function slide() {
  myimg.setAttribute("src", imges[i]);
  if (i == imges.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(function () {
    slide();
  }, 2000);
}
slide();
// service
// const services = document.getElementById("services");
// const scrole = (e) => {
//   services.scrollLeft=e.pageX;
// }
// services.addEventListener("mousemove", scrole);

// skills
var tablists = document.getElementsByClassName("tab-list");
var tabcontants = document.getElementsByClassName("tab-contant");
function openlist(tabname){
  for (tablist of tablists) {
    tablist.classList.remove("active");
  }
  for(tabcontant of tabcontants){
    tabcontant.classList.remove("tab-active");
  }
  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("tab-active");

}

let cardes = document.querySelectorAll(".all-card .card-containt ");
let index =0;
function next(){
  cardes[index].classList.remove('active');
  index = (index + 1) % cardes.length ;
  cardes[index].classList.add("active");
}
function prev(){
  cardes[index].classList.remove('active');
  index = (index - 1 + cardes.length) % cardes.length;
  cardes[index].classList.add('active');
}


// let slides = document.querySelectorAll('.home .slider-container .slider');
// let index=0;
// function next(){
//   slides[index].classList.remove('active');
//   index = (index + 1) % slides.length;
//   slides[index].classList.add("active");
// }
// function prev(){
//   slides[index].classList.remove("active")
//   index = (index - 1 + slides.length) % slides.length;
//   slides[index].classList.add("active");

// }