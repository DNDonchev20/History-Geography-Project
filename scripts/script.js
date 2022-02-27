var slideIndex = 0;
var pauseAuto = 0;
showSlidesAuto();

function showSlidesAuto() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  if(pauseAuto == 0){
  setTimeout(showSlidesAuto, 2000); // Change image every 2 seconds
  }
  else{
      pauseAuto = 0;
      setTimeout(showSlidesAuto, 30000); //Wait 30 seconds before continuing on auto
  }
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n, pause) {
    showSlides(slideIndex = n);
    pauseAuto = pause;
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}