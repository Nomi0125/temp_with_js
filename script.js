// Navgation appearence
var background = document.querySelector('.navigation_background');
var nav = document.querySelector('.navigation_nav');
var navIcon = document.querySelector('.navigation_button');
var hamburger = true;

navIcon.addEventListener('click', function(){
    console.log('chal raha hai');
    background.classList.toggle('navigation_background_show');
    nav.classList.toggle('navigation_nav_show');

    // to change icon
    var iconCls = navIcon.childNodes[1].classList;
    console.log(iconCls)
    if( hamburger){
        iconCls.remove('fa-bars');
        iconCls.add('fa-times');
        hamburger  = false;
    } else {
        iconCls.add('fa-bars');
        iconCls.remove('fa-times');
        hamburger = true;
    }})
    // Nagegation appearence End

    // ---------------------manual------------
var slideIndex = 1;
showSlides(slideIndex)
function plusSlides(n) {
  showSlides(slideIndex += n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

setInterval(function plusSlides() {
  showSlides(slideIndex += 1);
}, 5000)

// ========popup show
var item = document.querySelectorAll('.item')
// item.addEventListener('click', function(){
// });
function show_popup(){
  var item = document.querySelectorAll('.item');
  var popup = document.querySelector('.popup');
  popup.classList.toggle('popup_show')
  console.log(popup);
  
}
var popupClose = document.querySelector('.popup_close');